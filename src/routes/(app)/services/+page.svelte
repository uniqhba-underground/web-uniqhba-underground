<script lang="ts">
	import { SiteName } from "@/lib/constant";
  import Head from "@/partials/Head.svelte";
	import Services from "@/partials/services.svelte";
</script>

<Head
  title="{SiteName} | Layanan"
/>

<div class="container min-h-[900px] mx-auto mt-5 md:mt-8">
  <Services />
</div>