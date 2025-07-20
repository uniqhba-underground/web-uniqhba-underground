<script lang="ts">
	import { OurEventCategoryMap, type OurEvent, type ParticipantCertificate } from "@/data/events/type";
	import type { PageData } from "./$types";
	import CertificateGenerator from "@/partials/events/certificateGenerator.svelte";
	import { Icon } from "svelte-icons-pack";
	import {
    RiBusinessCalendarLine, RiSystemTimeLine, RiUserFacesGroup2Line,
    RiDesignEditBoxLine, RiLogosFacebookFill, RiLogosTwitterXFill,
    RiLogosLinkedinBoxFill, RiLogosWhatsappLine,
	RiBusinessLinksLine,
  } from "svelte-icons-pack/ri";
	import { formatDateID } from "@/lib/formatter";
	import { PathEvents, PathHome, PathName } from "@/state/page";
	import { TrOutlineBrandTelegram, TrOutlineChevronRight } from "svelte-icons-pack/tr";
	import Head from "@/partials/Head.svelte";
	import { LuTicket } from "svelte-icons-pack/lu";
	import { SiteBaseUrl } from "@/lib/constant";
	import toast, { Toaster } from "svelte-french-toast";

  export let data: PageData | any;

  const isExist: boolean = data.isExist || false;
  const ourEvent: OurEvent = data.ourEvent || {};
  const ourEventParticipants: ParticipantCertificate[] = data.ourEventParticipants || [];

  function isDateInFuture(dateStr: string): boolean {
    const inputDate = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);
    return inputDate > today;
  }

  function copyLink() {
    navigator.clipboard.writeText(SiteBaseUrl + '/events/' + ourEvent.slug);
    toast.success('Link berhasil disalin');
  }
</script>

<Toaster />

<Head
  title="{OurEventCategoryMap[ourEvent.category]} {ourEvent.field}: {ourEvent.name}"
  description={ourEvent.description}
  imageUrl="{SiteBaseUrl}{ourEvent.image_url}"
/>

{#if isExist}
  <div class="container h-fit mx-auto">
    <div class="w-full flex flex-col gap-5 mt-2 md:mt-8 px-5 md:px-0">
      <div class="flex flex-row flex-wrap md:text-base text-sm gap-1 items-center not-prose text-uniqhbaunderground font-semibold">
        <a
          onclick={() => PathName.set(PathHome)}
          href={PathHome}
          class="hover:underline rounded-full"
        >Beranda</a>
        <Icon src={TrOutlineChevronRight} size={15} className="stroke-neutral-800 stroke-2" />
        <a
          onclick={() => PathName.set(PathEvents)}
          href={PathEvents}
          class="hover:underline rounded-full"
        >Events</a>
        <Icon src={TrOutlineChevronRight} size={15} className="stroke-neutral-800 stroke-2" />
        <a
          href="/event/{ourEvent.slug}"
          class="hover:underline rounded-full"
        >{ourEvent.name}</a>
      </div>
      <div class="flex flex-col md:grid grid-cols-7 gap-6">
        <div class="col-span-3 flex flex-col gap-3">
          <div class="border border-neutral-100 overflow-hidden object-cover h-auto w-full rounded-lg group">
            <img
              src={ourEvent.image_url}
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div class="col-span-4 flex flex-col gap-4">
          <div class="flex flex-col gap-4">
            <div class="flex flex-row flex-wrap gap-2">
              <span class="text-sm border py-1 px-3 rounded-full w-fit {ourEvent.category}"
              >{OurEventCategoryMap[ourEvent.category]}</span>
              <span class="text-sm border py-1 px-3 rounded-full w-fit other"
              >{ourEvent.field}</span>
            </div>
            <div class="flex flex-row flex-wrap gap-2 items-center">
              <a
                title="Share to Facebook"
                target="_blank"
                href="https://www.facebook.com/sharer.php?u={SiteBaseUrl}/events/{OurEventCategoryMap[ourEvent.category]} {ourEvent.field}: {ourEvent.field} {ourEvent.name}"
                class="bg-uniqhbaunderground hover:bg-uniqhbaunderground/80 text-white p-1.5 rounded-full cursor-pointer"
              >
                <Icon
                  src={RiLogosFacebookFill}
                  size="16"
                />
              </a>
              <a
                title="Share to X (Twitter)"
                target="_blank"
                href="https://twitter.com/share?url={SiteBaseUrl}/events/{ourEvent.slug}&text={OurEventCategoryMap[ourEvent.category]} {ourEvent.field}: {ourEvent.field} {ourEvent.name}"
                class="bg-uniqhbaunderground hover:bg-uniqhbaunderground/80 text-white p-1.5 rounded-full cursor-pointer"
              >
                <Icon
                  src={RiLogosTwitterXFill}
                  size="16"
                />
              </a>
              <a
                title="Share to LinkedIn"
                target="_blank"
                href="https://www.linkedin.com/shareArticle?url={SiteBaseUrl}/events/{ourEvent.slug}&title={OurEventCategoryMap[ourEvent.category]} {ourEvent.field}: {ourEvent.field} {ourEvent.name}"
                class="bg-uniqhbaunderground hover:bg-uniqhbaunderground/80 text-white p-1.5 rounded-full cursor-pointer"
              >
                <Icon
                  src={RiLogosLinkedinBoxFill}
                  size="16"
                />
              </a>
              <a
                title="Share to WhatsApp"
                target="_blank"
                href="https://wa.me/?text={OurEventCategoryMap[ourEvent.category]} {ourEvent.field}: {ourEvent.field} {ourEvent.name} {SiteBaseUrl}/events/{ourEvent.slug}"
                class="bg-uniqhbaunderground hover:bg-uniqhbaunderground/80 text-white p-1.5 rounded-full cursor-pointer"
              >
                <Icon
                  src={RiLogosWhatsappLine}
                  size="16"
                />
              </a>
              <a
                title="Share to Telegram"
                target="_blank"
                href="https://t.me/share/url?url={SiteBaseUrl}/events/{ourEvent.slug}&title={OurEventCategoryMap[ourEvent.category]} {ourEvent.field}: {ourEvent.field} {ourEvent.name}"
                class="bg-uniqhbaunderground hover:bg-uniqhbaunderground/80 text-white p-1.5 rounded-full cursor-pointer"
              >
                <Icon
                  src={TrOutlineBrandTelegram}
                  size="16"
                />
              </a>
              <button
                title="Copy link"
                onclick={copyLink}
                class="bg-transparent hover:bg-neutral-100 border border-neutral-200 p-1.5 rounded-full cursor-pointer">
                <Icon
                  src={RiBusinessLinksLine}
                  size="16"
                />
              </button>
            </div>
            <div class="flex flex-col gap-2">
              <h1 class="group-hover:underline font-bold text-2xl md:text-4xl">{ourEvent.name}</h1>
              <p>{ourEvent.description}</p>
            </div>
            <div class="flex flex-col gap-2 text-lg">
              <div class="flex flex-row gap-2 items-center">
                <Icon
                  src={RiBusinessCalendarLine}
                  size="25"
                  className="shrink-0"
                />
                <span class="grow">{formatDateID(ourEvent.date)}</span>
              </div>
              <div class="flex flex-row gap-2 items-center">
                <Icon
                  src={RiSystemTimeLine}
                  size="25"
                  className="shrink-0"
                />
                <span class="grow">{ourEvent.time}</span>
              </div>
              <div class="flex flex-row gap-2 items-center">
                <Icon
                  src={ourEvent.location.icon}
                  size="25"
                  className="shrink-0"
                />
                <span class="grow">{ourEvent.location.name}</span>
              </div>
              <div class="flex flex-row gap-2 items-center">
                <Icon
                  src={LuTicket}
                  size="25"
                  className="shrink-0"
                />
                <span class="grow">{ourEvent.fee ? ourEvent.fee : 'Gratis'}</span>
              </div>
              <div class="flex flex-row gap-2 items-center">
                <Icon
                  src={RiUserFacesGroup2Line}
                  size="25"
                  className="shrink-0"
                />
                <span class="grow">{ourEvent.isPublic ? 'Terbuka untuk umum' : 'Khusus Mahasiswa UNIQHBA'}</span>
              </div>
              {#if ourEvent.partners && ourEvent.partners.length > 0}
                <div class="flex flex-col gap-1">
                  <span class="font-bold text-uniqhbaunderground-2">Partners:</span>
                  <ul class="text-sm ml-2 list-disc list-inside marker:text-uniqhbaunderground-2">
                    {#each ourEvent.partners as partner }
                      <li>{partner}</li>
                    {/each}
                  </ul>
                </div>
              {/if}
            </div>
          </div>
          {#if isDateInFuture(ourEvent.date)}
            <a
              href="{ourEvent.registration_link}"
              target="_blank"
              class="flex flex-row gap-2 justify-center items-center w-full md:w-fit py-2 px-auto md:px-4
              bg-uniqhbaunderground hover:bg-uniqhbaunderground/90 text-white font-semibold rounded-md cursor-pointer"
            >
              <Icon
                src={RiDesignEditBoxLine}
                size="16"
              />
              <span>Daftar Sekarang</span>
            </a>
          {:else}
            <CertificateGenerator
              ourEvent={ourEvent}
              participants={ourEventParticipants}
            />
          {/if}
        </div>
      </div>
    </div>
  </div>
{:else}
  <div class="container min-h-[900px] mx-auto">
    <h1 class="text-3xl font-bold">Event Tidak Ditemukan</h1>
  </div>
{/if}

<style lang="postcss">
  @reference "tailwindcss";

  .mini_class {
    @apply border-emerald-600 bg-emerald-400/20 text-emerald-600;
  }

  .workshop {
    @apply border-rose-600 bg-rose-400/20 text-rose-600;
  }

  .meetup {
    @apply border-amber-600 bg-amber-400/20 text-amber-600;
  }

  .webinar {
    @apply border-sky-600 bg-sky-400/20 text-sky-600;
  }

  .other {
    @apply border-neutral-600 bg-neutral-400/20 text-neutral-600;
  }
</style>