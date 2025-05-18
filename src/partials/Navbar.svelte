<script lang="ts">
  import { onMount } from 'svelte';
  import {
    PathName,
    PathHome,
    PathTentang,
    PathKontak,

	PathEvent

  } from '@/state/page';
  import { browser } from '$app/environment';
  import { writable } from 'svelte/store';

  const isShowMenu = writable(false)

  onMount(() => {
    if (browser) {
      $PathName = window.location.pathname;
    }
  });

  $effect(() => {
    window.location.pathname;
    $PathName = window.location.pathname;
  })
</script>

<button
  aria-label="backdrop toggle menu"
  onclick={() => $isShowMenu = !$isShowMenu}
  class="{$isShowMenu ? 'block' : 'hidden'} z-40 inset-0 bg-zinc-700/50 h-screen fixed">
</button>

<div id="top" class="w-full h-fit flex flex-row items-center justify-center py-6">
  <div class="px-5 container flex flex-row items-center justify-between mx-auto">
    <div class="flex flex-row items-center gap-16">
      <a href="/" class="w-fit h-fit">
        <img
          src="/img/logo.png"
          alt="UNIQHBA Underground"
          class="w-40 h-auto"
        />
      </a>
      <nav class="hidden md:flex flex-row gap-5 items-center justify-center w-fit font-semibold text-sm">
        <a
          onclick={() => $PathName = PathHome}
          href={PathHome}
          class="w-fit h-fit hover:text-uniqhbaunderground cursor-pointer flex flex-col gap-1.5 justify-center items-center
          {$PathName === PathHome ? 'text-uniqhbaunderground' : ''}"
        >
          <span>Beranda</span>
          <span class="w-[70px] h-[3px] {$PathName === PathHome ? 'bg-uniqhbaunderground' : 'bg-transparent'}"></span>
        </a>
        <a
          onclick={() => $PathName = PathTentang}
          href={PathTentang}
          class="w-fit h-fit hover:text-uniqhbaunderground cursor-pointer flex flex-col gap-1.5 justify-center items-center
          {$PathName === PathTentang ? 'text-uniqhbaunderground' : ''}"
        >
          <span>Tentang</span>
          <span class="w-[70px] h-[3px] {$PathName === PathTentang ? 'bg-uniqhbaunderground' : 'bg-transparent'}"></span>
        </a>
      </nav>
    </div>
    <a
      onclick={() => $PathName = PathKontak}
      href="/kontak"
      class="md:block hidden w-fit h-fit hover:text-uniqhbaunderground cursor-pointer py-2 px-5 rounded-full
      {$PathName === PathKontak ? 'text-uniqhbaunderground-2 bg-uniqhbaunderground-2/20' : ''}"
    >
      Kontak Kami
    </a>
    <div class="flex md:hidden">
      <button aria-label="toggle menu" type="button" onclick={() => $isShowMenu = !$isShowMenu} class="toggle {$isShowMenu ? 'clicked' : ''}">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
      </button>
    </div>
  </div>
  <aside
    class="{$isShowMenu ? 'left-0' : '-left-[250px]'} duration-150 py-6 px-6 h-screen w-[250px] bg-white rounded-r-xl
    fixed z-50 top-0 bottom-0 flex flex-col gap-6">
    <a class="hover:text-uniqhbaunderground {$PathName === PathHome ? 'text-uniqhbaunderground' : ''} px-2" href="/" onclick={()=> {
      $isShowMenu = false;
      $PathName = PathHome;
    }}>Beranda</a>
    <a class="hover:text-uniqhbaunderground {$PathName === PathTentang ? 'text-uniqhbaunderground' : ''} px-2" href="/tentang" onclick={()=> {
      $isShowMenu = false;
      $PathName = PathTentang;
    }}>Tentang Kami</a>
    <a class="hover:text-uniqhbaunderground {$PathName === PathKontak ? 'text-uniqhbaunderground' : ''} px-2" href="/kontak" onclick={()=> {
      $isShowMenu = false;
      $PathName = PathKontak;
    }}>Kontak</a>
  </aside>
</div>

<style lang="postcss">
  .toggle {
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    transition-duration: .5s;
  }

  .bars {
    width: 100%;
    height: 3px;
    background-color: #111;
    border-radius: 4px;
  }

  #bar2 {
    transition-duration: .8s;
  }

  #bar1, #bar3 {
    width: 70%;
  }

  .toggle.clicked .bars {
    position: absolute;
    transition-duration: .5s;
  }

  .toggle.clicked #bar2 {
    transform: scaleX(0);
    transition-duration: .5s;
  }

  .toggle.clicked #bar1 {
    width: 100%;
    transform: rotate(45deg);
    transition-duration: .5s;
  }

  .toggle.clicked #bar3 {
    width: 100%;
    transform: rotate(-45deg);
    transition-duration: .5s;
  }

  .toggle.clicked {
    transition-duration: .5s;
    transform: rotate(180deg);
  }

  @keyframes showRay1832 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
</style>