<script lang="ts">
	import Head from "@/partials/Head.svelte";
	import AboutUs from "@/partials/home/about-us.svelte";
	import Gallery from "@/partials/home/gallery.svelte";
	import Jumbotron from "@/partials/home/jumbotron.svelte";
	import Partners from "@/partials/home/partners.svelte";
	import Services from "@/partials/home/services.svelte";
</script>

<Head />

<div class="container min-h-[900px] mx-auto flex flex-col gap-10">
  <Jumbotron />
  <AboutUs />
  <Gallery />
  <Services />
  <Partners />
</div>