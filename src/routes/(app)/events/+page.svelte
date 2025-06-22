<script lang="ts">
	import { OurEvents } from "@/data/events/events";
	import { OurEventCategoryMap } from "@/data/events/type";
	import { SiteName } from "@/lib/constant";
	import { formatDateID } from "@/lib/formatter";
  import Head from "@/partials/Head.svelte";
	import { Icon } from "svelte-icons-pack";
	import { RiBusinessCalendarLine, RiSystemTimeLine } from "svelte-icons-pack/ri";

  const pageDesc: string = 'Nantikan event terbaru dari UNIQHBA Underground, mulai dari Workshop, Webinar, Meet Up, dan lain-lain'
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
        <a href="/event/{event.slug}#top" class="hover:shadow-md relative w-full md:w-[334px] h-auto cursor-pointer group border border-neutral-200 p-4 flex flex-col justify-start gap-3 rounded-xl">
          <div class="flex flex-col gap-3">
            <div class="border border-neutral-100 overflow-hidden object-cover h-auto md:h-[300px] rounded-lg group">
              <img
                src={event.image_url}
                alt=""
                class="w-full h-full object-cover group-hover:scale-110 duration-300"
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
              <div class="flex flex-row flex-wrap gap-2">
                <span class="text-xs border py-0.5 px-2 rounded-full w-fit {event.category}"
                >{OurEventCategoryMap[event.category]}</span>
                <span class="text-xs border py-0.5 px-2 rounded-full w-fit other"
                >{event.field}</span>
              </div>
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