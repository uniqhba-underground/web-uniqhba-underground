<script lang="ts">
	import { SiteName } from "@/lib/constant";
	import { formatDateID } from "@/lib/formatter";
  import Head from "@/partials/Head.svelte";
	import { Icon, type IconType } from "svelte-icons-pack";
	import { RiBusinessCalendarLine, RiMapMapPinLine, RiSystemTimeLine } from "svelte-icons-pack/ri";
	import { TrOutlineBrandZoom } from "svelte-icons-pack/tr";

  type OurEventCategory = (
    'mini_class' | 'workshop' | 'meetup' | 'webinar' | 'other'
  );

  const OurEventCategoryMap: Record<OurEventCategory, string> = {
    'meetup': 'Meet Up',
    'mini_class': 'Mini Class',
    'workshop': 'Workshop',
    'webinar': 'Webinar',
    'other': 'Lainnya'
  }

  type OurEventLocation = {
    name: string;
    icon: IconType;
  }

  type OurEvent = {
    name: string;
    description: string;
    date: string;
    time: string;
    location: OurEventLocation;
    link: string;
    image_url: string;
    category: OurEventCategory;
  }

  const OurEvents: OurEvent[] = [
    {
      name: 'The Smart Way to Start in Cyber Security',
      description: 'Bagaimana langkah pertama untuk memulai karir di bidang Cyber Security?',
      date: '2025-06-14',
      time: '08:00 WITA - selesai',
      location: {
        name: 'Lt. 5 Gedung Fak. Kesehatan, UNIQHBA',
        icon: RiMapMapPinLine
      },
      link: '/event/cyber-sec-the-smart-way-to-start',
      image_url: '/img/events/cyber-sec-the-smart-way-to-start.jpg',
      category: 'meetup'
    },
    {
      name: 'Membangun Portofolio UI dengan Dribbble',
      description: 'Pernah ngerasa pengen banget punya portofolio UI yang keren di Dribbble, tapi bingung harus mulai dari mana?',
      date: '2025-05-17',
      time: '07:00 WITA - selesai',
      location: {
        name: 'Lt. 5 Gedung Fak. Kesehatan, UNIQHBA',
        icon: RiMapMapPinLine
      },
      link: '/event/ui-ux-with-lpe-bangun-portfolio',
      image_url: '/img/events/ui-ux-with-lpe-bangun-portfolio.jpg',
      category: 'workshop'
    },
    {
      name: 'Hacker kok baik?',
      description: 'Hacker sering dianggap penjahat dunia maya, tapi apa benar semua hacker seperti itu? Yuk, kenalan lebih dekat dengan dunia Cyber Security dan temukan sisi positif dari para profesional di balik layar!',
      date: '2024-12-29',
      time: '20:00 WITA - selesai',
      location: {
        name: 'Google Meet',
        icon: TrOutlineBrandZoom
      },
      link: '/event/cyber-sec-hacker-kok-baik',
      image_url: '/img/events/cyber-sec-hacker-kok-baik.png',
      category: 'webinar'
    },
    {
      name: 'Introduction to JavaScript',
      description: 'Ingin memulai perjalananmu di dunia Web Programming? Ikuti Mini-Class seru ini untuk mengenal: Dasar-dasar JavaScript, Lingkungan pengembangannya (Web Browser, Node.js, Deno, Bun), Dan banyak lagi!',
      date: '2024-11-28',
      time: '13:00 WITA - Selesai',
      location: {
        name: 'Lab. Komputer UNIQHBA',
        icon: RiMapMapPinLine
      },
      link: '/event/web-programming-intro-js',
      image_url: '/img/events/web-programming-intro-js.png',
      category: 'mini_class'
    },
    {
      name: 'Loteng Dev Meet Up #3',
      description: 'Meet Up komunitas Loteng Dev (Komunitas developer kab. Lombok Tengah) ke #3, berkolaborasi dengan UNIQHBA',
      date: '2024-01-27',
      time: '23:30 WITA - Selesai',
      location: {
        name: 'Google Meet',
        icon: TrOutlineBrandZoom
      },
      link: '/event/loteng-dev-meet-up-3',
      image_url: '/img/events/lotengdev-meetup-3-with-uniqhba.png',
      category: 'meetup'
    },
  ]

  const pageDesc: string = 'Nantikan event terbaru dari UNIQHBA Underground, mulai dari Workshop, Webinar, Meet Up, dan lain-lain'

  function isDateInFuture(dateStr: string): boolean {
    const inputDate = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);
    return inputDate > today;
  }
</script>

<Head
  title="{SiteName} | Event"
  description={pageDesc}
/>

<div class="container min-h-[900px] mx-auto">
  <div class="w-full flex flex-col gap-5 mt-5 md:mt-8 px-5 md:px-0">
    <h1 class="text-3xl font-bold">Event Kami</h1>
    <p>{pageDesc}</p>
    <div class="flex flex-col md:flex-row flex-wrap gap-5 justify-start w-full items-stretch px-0">
      {#each OurEvents as event}
        <a href={event.link} class="relative w-full md:w-[334px] h-auto cursor-pointer group border border-neutral-200 p-4 flex flex-col justify-between gap-3 rounded-xl">
          <div class="border border-neutral-100 overflow-hidden object-cover h-auto md:h-[300px] rounded-lg group">
            <img
              src={event.image_url}
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex flex-col gap-1 font-semibold text-xs">
            <div class="flex flex-row gap-2 items-center">
              <Icon
                src={RiBusinessCalendarLine}
                size="18"
                className="shrink-0"
              />
              <span class="grow">{formatDateID(event.date)}</span>
            </div>
            <div class="flex flex-row gap-2 items-center">
              <Icon
                src={RiSystemTimeLine}
                size="18"
                className="shrink-0"
              />
              <span class="grow">{event.time}</span>
            </div>
            <div class="flex flex-row gap-2 items-center">
              <Icon
                src={event.location.icon}
                size="18"
                className="shrink-0"
              />
              <span class="grow">{event.location.name}</span>
            </div>
            <div class="flex flex-row gap-2">
              <span class="text-xs border py-0.5 px-2 rounded-full w-fit {event.category}"
              >{OurEventCategoryMap[event.category]}</span>
              {#if isDateInFuture(event.date)}
                <span class="text-xs border py-0.5 px-2 rounded-full w-fit border-red-600 bg-red-600 text-white"
                >OPEN NOW !!</span>
              {/if}
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <h3 class="group-hover:underline font-bold text-lg">{event.name}</h3>
            <p class="text-sm line-clamp-2">{event.description}</p>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>

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