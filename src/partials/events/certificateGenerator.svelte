<script lang="ts">
  import * as Select from "$lib/components/ui/select/index.js";
	import type { ParticipantCertificate } from "@/data/events/type";
	import { onMount } from "svelte";
  import { LoaderCircle } from '@lucide/svelte';
  import * as Alert from "$lib/components/ui/alert/index.js";
  import AlertCircleIcon from "@lucide/svelte/icons/alert-circle";

  let {
    participants
  } = $props();

  let participant: string = $state('');

  let participantsToSelect: string[] = $state([]);

  onMount(() => {
    participantsToSelect = (participants || [] as ParticipantCertificate[]).map((p: { name: any; }) => p.name);
  });

  let isGenerating: boolean = $state(false);
  async function generateCertificate() {}
</script>

<div class="bg-neutral-100 border border-neutral-200 rounded-lg p-4 flex flex-col gap-5 h-fit md:w-7/12 w-full">
  <div class="flex flex-col gap-3 w-full">
    <div class="flex flex-col gap-2">
      <h3 class="text-2xl font-bold">Buat Sertifikat</h3>
      <Alert.Root variant="default" class="h-fit bg-yellow-400/20 text-yellow-600 border-yellow-500">
        <AlertCircleIcon />
        <Alert.Title class="font-bold">Pastikan anda telah mengikuti acara sampai selesai</Alert.Title>
        <Alert.Description class="text-yellow-600">
          Jika anda hadir dan tidak ada di daftar peserta, silahkan hubungi kami via email: uniqhbaunderground@gmail.com
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
                <Select.Item
                  value={p}
                  label={p}
                >
                  {p}
                </Select.Item>
              {/each}
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </div>
      <div class="flex w-full">
        <button onclick={generateCertificate} disabled={isGenerating} class="w-full py-2 px-auto bg-uniqhbaunderground hover:bg-uniqhbaunderground/90 text-white font-semibold rounded-md cursor-pointer">
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