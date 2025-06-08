<script lang="ts">
	import { SiteDesc } from "@/lib/constant";
	import { PathAbout, PathContact, PathEvents, PathHome, PathServices } from "@/state/page";
	import { Icon } from "svelte-icons-pack";
	import { RiBusinessMailLine, RiLogosFacebookFill, RiLogosInstagramLine, RiLogosYoutubeFill } from "svelte-icons-pack/ri";

  const year: string = new Date().getFullYear().toString();

  type service = {
    name: string;
    link: string;
    coming_soon: boolean;
  }

  const services: service[] = [
    {
      name: 'UI/UX Design',
      link: '#',
      coming_soon: false
    },
    {
      name: 'Web Development',
      link: '#',
      coming_soon: false
    },
    {
      name: 'Instalasi OS (Windows/Linux)',
      link: '#',
      coming_soon: false
    },
    {
      name: 'Desain Grafis',
      link: '#',
      coming_soon: false
    },
    {
      name: 'Editing Video',
      link: '#',
      coming_soon: true
    },
    {
      name: 'Reparasi Hardware',
      link: '#',
      coming_soon: false
    },
    {
      name: 'Android Development',
      link: '#',
      coming_soon: true
    }
  ]

  const navmenus: { name: string; link: string }[] = [
    {
      name: 'Beranda',
      link: PathHome
    },
    {
      name: 'Tentang',
      link: PathAbout
    },
    {
      name: 'Layanan',
      link: PathServices
    },
    {
      name: 'Workshop',
      link: PathEvents
    },
    {
      name: 'Webinar',
      link: PathContact
    },
    {
      name: 'Kontak Kami',
      link: PathContact
    }
  ]

  const navmenusMobile: { name: string; link: string }[] = [
    {
      name: 'Workshop',
      link: PathEvents
    },
    {
      name: 'Webinar',
      link: PathContact
    },
    {
      name: 'Mini-Class',
      link: PathContact
    },
    {
      name: 'Kontak Kami',
      link: PathContact
    }
  ]
</script>

<footer class="bg-uniqhbaunderground flex flex-col text-slate-100 w-full relative mt-5">
  <div class="w-[450px] h-auto absolute z-0 md:top-10 md:right-3 top-3/7 -right-7 translate-x-1/6">
    <img
      src="/icons/main-logo-darker.png"
      alt=""
      class="w-full h-auto"
    />
  </div>
  <div class="container mx-auto flex flex-col gap-5 px-5 md:px-0 relative">
    <div class="w-fit h-fit mt-8">
      <img
        src="/icons/logo-text-white.png"
        alt=""
        class="w-48 h-auto"
      />
    </div>
    <div class="flex flex-col gap-4 md:grid md:grid-cols-4 lg:grid-cols-4 justify-between items-start">
      <div class="flex flex-col gap-6 md:col-span-2">
        <p class="text-base">{SiteDesc}</p>
        <div class="flex flex-row gap-3 items-center">
          <a target="_blank" href="https://www.instagram.com/uniqhba_underground" class="hover:bg-white/10 p-2 rounded-full border border-slate-200">
            <Icon
              src={RiLogosInstagramLine}
              size="16"
            />
          </a>
          <a target="_blank" href="mailto:uniqhbaunderground@gmail.com" class="hover:bg-white/10 p-2 rounded-full border border-slate-200">
            <Icon
              src={RiLogosFacebookFill}
              size="16"
            />
          </a>
          <a target="_blank" href="mailto:uniqhbaunderground@gmail.com" class="hover:bg-white/10 p-2 rounded-full border border-slate-200">
            <Icon
              src={RiLogosYoutubeFill}
              size="16"
            />
          </a>
          <a target="_blank" href="mailto:uniqhbaunderground@gmail.com" class="hover:bg-white/10 p-2 rounded-full border border-slate-200">
            <Icon
              src={RiBusinessMailLine}
              size="16"
            />
          </a>
        </div>
      </div>
      <div class="hidden md:flex flex-col gap-3 md:justify-end md:items-end">
        {#each navmenus as mn}
          <a class="group flex flex-col gap-0.5 relative" href={mn.link}>
            <span>{mn.name}</span>
            <span class="w-auto h-[2px] group-hover:bg-slate-100 bg-transparent"></span>
          </a>
        {/each}
      </div>
      <div class="flex md:hidden flex-col gap-3 md:justify-end md:items-end">
        {#each navmenusMobile as mn}
          <a class="group flex flex-col gap-0.5 relative" href={mn.link}>
            <span>{mn.name}</span>
            <span class="w-auto h-[2px] group-hover:bg-slate-100 bg-transparent"></span>
          </a>
        {/each}
      </div>
      <div class="flex flex-col gap-3 md:justify-end md:items-end">
        {#each services as srv}
          <a class="group flex flex-col gap-0.5 relative" href={srv.link}>
            <div class="flex flex-row gap-1 items-center">
              <span>{srv.name}</span>
              {#if srv.coming_soon}
                <span class="text-xs py-0.5 px-1.5 rounded-full border border-white/20 bg-white/10 text-white/70">Coming Soon</span>
              {/if}
            </div>
            <span class="w-auto h-[2px] group-hover:bg-slate-100 bg-transparent"></span>
          </a>
        {/each}
      </div>
    </div>
    <div class="border-t border-px border-slate-200 text-center py-5 text-sm">
      <p>Copyright &copy; {year} UNIQHBA Underground</p>
    </div>
  </div>
</footer>