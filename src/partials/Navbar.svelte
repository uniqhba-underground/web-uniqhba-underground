<script lang="ts">
  import {
    PathName,
    PathHome,
    PathAbout,
    PathContact,
    PathEvents,
    PathServices,
  } from '@/state/page';
  import { writable, type Writable } from 'svelte/store';
	import { Icon } from 'svelte-icons-pack';
	import { BsList } from 'svelte-icons-pack/bs';

  const isShowMenu: Writable<Boolean> = writable(false);

  const navMenuMobile: {
    name: string;
    link: string;
  }[] = [
    { name: 'Beranda', link: PathHome },
    { name: 'Tentang', link: PathAbout },
    { name: 'Layanan', link: PathServices },
    { name: 'Event', link: PathEvents },
    { name: 'Kontak', link: PathContact },
  ];
</script>

<button
  aria-label="backdrop toggle menu"
  onclick={() => $isShowMenu = !$isShowMenu}
  class="{$isShowMenu ? 'block' : 'hidden'} z-40 inset-0 bg-zinc-700/50 h-screen fixed">
</button>

<div id="top" class="w-full h-fit flex flex-row items-center justify-center py-6">
  <div class="px-5 md:px-0 container flex flex-row items-center justify-between mx-auto">
    <div class="flex flex-row items-center gap-16">
      <div class="flex flex-row gap-3 items-center">
        <div class="flex md:hidden">
          <button
            type="button"
            onclick={() => $isShowMenu = !$isShowMenu}
            class="">
            <Icon
              src={BsList}
              size="30"
            />
          </button>
        </div>
        <a href="/" class="w-fit h-fit">
          <img
            src="/icons/icon-text.svg"
            alt="UNIQHBA Underground"
            class="w-40 h-auto"
          />
        </a>
      </div>
      <nav class="hidden md:flex flex-row gap-5 items-center justify-center w-fit font-semibold text-sm">
        <a
          href={PathHome}
          class="w-fit h-fit hover:text-uniqhbaunderground cursor-pointer flex flex-col gap-1.5 justify-center items-center
          {$PathName === PathHome ? 'text-uniqhbaunderground' : ''}"
        >
          <span>Beranda</span>
          <span class="w-[70px] h-[3px] {$PathName === PathHome ? 'bg-uniqhbaunderground' : 'bg-transparent'}"></span>
        </a>
        <a
          href={PathAbout}
          class="w-fit h-fit hover:text-uniqhbaunderground cursor-pointer flex flex-col gap-1.5 justify-center items-center
          {$PathName === PathAbout ? 'text-uniqhbaunderground' : ''}"
        >
          <span>Tentang</span>
          <span class="w-[70px] h-[3px] {$PathName === PathAbout ? 'bg-uniqhbaunderground' : 'bg-transparent'}"></span>
        </a>
        <a
          href={PathServices}
          class="w-fit h-fit hover:text-uniqhbaunderground cursor-pointer flex flex-col gap-1.5 justify-center items-center
          {$PathName === PathServices ? 'text-uniqhbaunderground' : ''}"
        >
          <span>Layanan</span>
          <span class="w-[70px] h-[3px] {$PathName === PathServices ? 'bg-uniqhbaunderground' : 'bg-transparent'}"></span>
        </a>
        <a
          href={PathEvents}
          class="w-fit h-fit hover:text-uniqhbaunderground cursor-pointer flex flex-col gap-1.5 justify-center items-center
          {$PathName === PathEvents ? 'text-uniqhbaunderground' : ''}"
        >
          <span>Event</span>
          <span class="w-[70px] h-[3px] {$PathName === PathEvents ? 'bg-uniqhbaunderground' : 'bg-transparent'}"></span>
        </a>
      </nav>
    </div>
    <a
      href={PathContact}
      class="md:block hidden w-fit h-fit cursor-pointer py-2 px-5 rounded-full text-white bg-uniqhbaunderground hover:bg-uniqhbaunderground/90 text-sm"
    >
      Kontak Kami
    </a>
  </div>
  <aside
    class="{$isShowMenu ? 'left-0' : '-left-[250px]'} duration-150 py-6 px-6 h-[100dvh] w-[250px] bg-white rounded-r-xl
    fixed z-50 top-0 bottom-0 flex flex-col gap-5">
    {#each navMenuMobile as nav}
      <a
        class="hover:text-uniqhbaunderground {$PathName === nav.link ? 'text-uniqhbaunderground-2 bg-emerald-400/20 font-semibold' : ''} px-4 py-1 rounded-full w-fit"
        href={nav.link}
        onclick={()=> $isShowMenu = false}
      >
        {nav.name}
      </a>
    {/each}
  </aside>
</div>