<script lang="ts">
  import Head from "@/partials/Head.svelte";
  import { Icon } from "svelte-icons-pack";
  import { RiArrowsArrowRightLine } from "svelte-icons-pack/ri";
</script>

<Head
  title="404 - Halaman tidak ditemukan"
  description="Halaman tidak ditemukan"
/>

<div class="bg-white text-slate-800 top-0 bottom-0 left-0 right-0 h-screen w-screen overflow-x-hidden">
	<div class="w-full h-full flex flex-col">
		<main class="flex flex-col left-0 right-0 h-full">
      <div class="flex justify-center items-center h-full w-full">
        <div class="flex flex-col gap-5 justify-center items-center h-full">
          <h1 class="text-uniqhbaunderground font-bold text-9xl">404</h1>
          <p class="text-2xl">Halaman tidak ditemukan</p>
          <a href="/" class="py-2 px-5 bg-uniqhbaunderground hover:bg-uniqhbaunderground/80 text-white rounded-full flex flex-row gap-2 items-center justify-center">
            <span>Kembali ke beranda</span>
            <Icon src={RiArrowsArrowRightLine} size="16" />
          </a>
        </div>
      </div>
		</main>
	</div>
</div>