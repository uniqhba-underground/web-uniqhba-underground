<script lang="ts">
	import { SiteName } from "@/lib/constant";
  import Head from "@/partials/Head.svelte";
	import Services from "@/partials/services.svelte";
</script>

<Head
  title="{SiteName} | Layanan Kami"
  description="Kami menyediakan solusi teknologi yang disesuaikan dengan kebutuhan bisnis Anda. Dengan tim yang berpengalaman dan berorientasi pada hasil, kami siap membantu Anda membangun produk digital yang andal, efisien, dan siap bersaing."
/>

<div class="container min-h-[900px] mx-auto mt-5 md:mt-8">
  <Services />
</div>