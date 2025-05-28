<script lang="ts">
	import { SiteDesc } from "@/lib/constant";


</script>

<div class="px-5 md:px-0 mt-5">
  <div class="w-full bg-uniqhbaunderground text-white rounded-2xl h-[400px] relative overflow-hidden">
    <div class="absolute w-full h-full my-auto z-20 bg-uniqhbaunderground/95
      flex flex-col items-center justify-center gap-5">
      <div class="w-40 h-auto">
        <img
          src="/icons/main-logo-light.png"
          alt=""
          class="w-full h-auto"
        />
      </div>
      <div class="w-full md:w-[600px] text-center">
        <h1 class="text-lg">{SiteDesc}</h1>
      </div>
    </div>
    <img
      src="/img/gallery/img-001.jpg"
      alt=""
      class="w-full h-full object-cover"
    />
  </div>
</div>