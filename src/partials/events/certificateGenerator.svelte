<script lang="ts">
	import * as Select from '$lib/components/ui/select/index.js';
	import type { OurEvent, ParticipantCertificate } from '@/data/events/type';
	import { onMount } from 'svelte';
	import { LoaderCircle } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import AlertCircleIcon from '@lucide/svelte/icons/alert-circle';
	import {
	CeritificateCompletion,
	CertificateAchievement,
	CertificateParticipation,
  FieldCyberSecurity,
  type LabelAchievement,
  LabelAchievements,
  LabelCompletion,
  LabelParticipation,
  type EventField
	} from '@/data/events/constant';
	import * as htmlToImage from 'html-to-image';

	let {
		participants,
		ourEvent
	}: {
		participants: ParticipantCertificate[];
		ourEvent: OurEvent;
	} = $props();

	let participant: string = $state('');

	let participantsToSelect: string[] = $state([]);

	onMount(() => {
		participantsToSelect = (participants || ([] as ParticipantCertificate[])).map(
			(p: { name: any }) => p.name
		);
	});

	function formatTanggalIndo(tanggal: string): string {
		const bulanIndo = [
			'Januari',
			'Februari',
			'Maret',
			'April',
			'Mei',
			'Juni',
			'Juli',
			'Agustus',
			'September',
			'Oktober',
			'November',
			'Desember'
		];

		const [year, month, day] = tanggal.split('-');
		return `${parseInt(day)} ${bulanIndo[parseInt(month) - 1]} ${year}`;
	}

	let isGenerating: boolean = $state(false);

	let namaLengkap: string = $state('');
  let subAchievement: string = $state('');
	let achievement: string = $state('');

	let labelAchievement: LabelAchievement = $state(LabelParticipation);
	let field: EventField = $state(FieldCyberSecurity);
	let certificateType: string = $state('');
	let certificateId: string = $state('');
	let tanggal: string = $state('');

	let certificateEl: HTMLDivElement;

  function capitalizeWords(str: string): string {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

	async function generateCertificate() {
    isGenerating = true;
		tanggal = formatTanggalIndo(ourEvent.date);
		field = ourEvent.field;

    namaLengkap = capitalizeWords(participant);
    achievement = ourEvent.name;
    
    for (const pr of participants) {
      if (pr.name === participant) {
        certificateId = pr.certificateId;
      }
    }

    switch (ourEvent.category) {
      case 'meetup':
        certificateType = CertificateParticipation;
        labelAchievement = LabelParticipation;
        subAchievement = 'Meet Up';
        break;
      case 'mini_class':
        certificateType = CeritificateCompletion;
        labelAchievement = LabelCompletion;
        subAchievement = 'Mini Class';
        break;
      case 'workshop':
        certificateType = CeritificateCompletion;
        labelAchievement = LabelCompletion;
        subAchievement = 'Workshop';
        break;
      case 'webinar':
        certificateType = CertificateParticipation;
        labelAchievement = LabelParticipation;
        subAchievement = 'Webinar';
        break;
      default:
        certificateType = CertificateAchievement;
        labelAchievement = LabelAchievements;
    }

		htmlToImage
			.toPng(certificateEl, {
				quality: 1
			})
			.then(function (dataUrl) {
				const link = document.createElement('a');
				link.download = 'certificate-'+certificateId+'.png';
				link.href = dataUrl;
				link.click();

				isGenerating = false;
			});
	}
</script>

<div class="bg-neutral-100 border border-neutral-200 rounded-lg p-4 flex flex-col gap-5 h-fit w-full md:w-8/12 relative">
	<div class="flex flex-col gap-3">
		<div class="flex flex-col gap-2">
			<h3 class="text-2xl font-bold">Buat Sertifikat</h3>
			<Alert.Root
				variant="default"
				class="h-fit bg-yellow-400/20 text-yellow-600 border-yellow-500"
			>
				<AlertCircleIcon />
				<Alert.Title class="font-bold">Pastikan anda telah mengikuti acara sampai selesai</Alert.Title>
        <Alert.Description>
          <p class="text-sm text-yellow-600">Jika anda hadir dan nama anda tidak ada dalam daftar peserta, silahkan hubungi kami via email: uniqhbaunderground@gmail.com</p>
        </Alert.Description>
			</Alert.Root>
		</div>
		<div class="flex flex-col gap-3">
			<div class="flex flex-col gap-1.5 w-full">
				<Select.Root type="single" name="participant" bind:value={participant}>
					<Select.Trigger id="participant" class="w-full bg-white py-2">
						{participant ? participant : 'Pilih Nama Anda'}
					</Select.Trigger>
					<Select.Content class="bg-white">
						<Select.Group class="max-h-[300px]">
							<Select.Label>Peserta</Select.Label>
							{#each participantsToSelect as p}
								<Select.Item value={p} label={p}>
									{p}
								</Select.Item>
							{/each}
						</Select.Group>
					</Select.Content>
				</Select.Root>
			</div>
			<div class="flex w-full">
				<button
					disabled={isGenerating}
					onclick={generateCertificate}
					class="flex flex-row items-center justify-center gap-2 w-full py-2 px-auto bg-uniqhbaunderground disabled:bg-neutral-200 hover:bg-uniqhbaunderground/90 text-white disabled:text-neutral-700 font-semibold rounded-md cursor-pointer disabled:cursor-not-allowed"
				>
					{#if isGenerating}
						<LoaderCircle class="h-4 w-4 animate-spin" />
						Generating...
					{/if}
					{#if !isGenerating}
						Generate E-Certificate
					{/if}
				</button>
			</div>
		</div>
	</div>
</div>

<div class="w-0 h-0 overflow-hidden relative">
	<div bind:this={certificateEl} id="certificate" class="certificate">
		<img
			src="/img/certificate/template.png"
			alt="template"
			class="w-full h-full"
			crossorigin="anonymous"
		/>

		<!-- Label Nama -->
		<span class="label-nama">Diberikan kepada</span>
		<!-- Nama Lengkap -->
		<span class="nama-lengkap">{namaLengkap}</span>

		<!-- Label Pencapaian -->
		<span class="label-achievement">{labelAchievement}</span>
		<!-- Pencapaian -->
		<div class="achievement">
			<p>{subAchievement ? subAchievement+': ' : ''} {achievement}</p>
		</div>

		<!-- Tanggal Sertifikat -->
		<span class="date">{tanggal}</span>

		<div class="ttd">
			<!-- DEKAN -->
			<div class="item">
				<div class="img-container">
					<img src="/img/certificate/ttd-dekan.png" alt="" />
				</div>
				<div class="name-container">
					<span class="nama">Muhammad Yamin S.T, M.T</span>
					<span class="jabatan">Dekan Fakultas Sains dan Teknologi UNIQHBA</span>
				</div>
			</div>

			<!-- KETUA KOMUNITAS -->
			<div class="item">
				<div class="img-container">
					<img src="/img/certificate/ttd-ketua-komunitas.png" alt="" />
				</div>
				<div class="name-container">
					<span class="nama">Ahmad Rizky Nusantara Habibi</span>
					<span class="jabatan">Ketua komunitas UNIQHBA Underground</span>
				</div>
			</div>

			<!-- KETUA PANITIA -->
			<div class="item">
				<div class="img-container">
					<img src="/img/certificate/ttd-ketua-panitia.png" alt="" />
				</div>
				<div class="name-container">
					<span class="nama">Sabardi Bahari</span>
					<span class="jabatan">Ketua panitia penyelenggara</span>
				</div>
			</div>
		</div>

		<div class="kredensial">
			<div class="certificate-type">
				<span class="field">{field}</span>
				<span class="type">{certificateType}</span>
			</div>
			<!-- ID Sertifikat -->
			<span class="certificate-id">ID: {certificateId}</span>
		</div>
	</div>
</div>

<style>
	:root {
		--color-uniqhbaunderground: #075f46;
		--color-uniqhbaunderground-2: #178e3b;
		--color-dark-cert: #111827;
		--color-gold: #816208;
	}

	/* CONTAINER */
	.certificate {
		position: relative;
		width: 2000px;
		height: 1211px;
		border: 1px solid var(--color-dark-cert);
	}

	/* NAMA LENGKAP */
	.certificate .label-nama {
		position: absolute;
		top: 280px;
		left: 138px;
		font-size: 35px;
		color: var(--color-dark-cert);
	}
	.certificate .nama-lengkap {
		position: absolute;
		top: 325px;
		left: 138px;
		font-size: 50px;
		color: var(--color-uniqhbaunderground);
		font-weight: 700;
		text-transform: capitalize !important;
	}

	/* PENCAPAIAN */
	.certificate .label-achievement {
		position: absolute;
		top: 430px;
		left: 138px;
		font-size: 35px;
		color: var(--color-dark-cert);
	}
	.certificate .achievement {
		position: absolute;
		top: 480px;
		left: 138px;
		font-size: 50px;
		color: var(--color-uniqhbaunderground);
		font-weight: 700;
		width: 50%;
		text-transform: capitalize;
	}
	.certificate .achievement p {
		line-height: 120%;
	}

	/* TANGGAL */
	.certificate .date {
		position: absolute;
		top: 690px;
		left: 138px;
		font-size: 35px;
		font-weight: 700;
		color: var(--color-dark-cert);
	}

	/* DEKAN */
	.certificate .ttd {
		height: fit-content;
		position: absolute;
		bottom: 120px;
		left: 142px;
		display: flex;
		flex-direction: row;
		gap: 80px;
	}
	.certificate .ttd .item {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.certificate .ttd .item .img-container {
		width: 214px;
		height: auto;
	}

	.certificate .ttd .item .img-container img {
		width: 100%;
		height: 100%;
	}
	.certificate .ttd .item .name-container {
		display: flex;
		flex-direction: column;
		gap: 0;
		color: var(--color-dark-cert);
	}
	.certificate .ttd .item .name-container .nama {
		font-size: 30px;
		font-weight: 600;
	}
	.certificate .ttd .item .name-container .jabatan {
		font-size: 20px;
	}

	/* KREDENSIAL */
	.certificate .kredensial {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		width: 574px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.certificate .kredensial .certificate-type {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0;
		justify-content: center;
		color: var(--color-gold);
		margin-top: 125px;
	}

	.certificate .kredensial .certificate-type .field {
		font-weight: 700;
		font-size: 30px;
		text-transform: uppercase;
	}
	.certificate .kredensial .certificate-type .type {
		font-weight: 500;
		font-size: 20px;
	}

	.certificate .kredensial .certificate-id {
		font-weight: 700;
		font-size: 25px;
		color: var(--color-dark-cert);
		margin-top: 340px;
		position: absolute;
	}
</style>
