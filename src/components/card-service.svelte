<script lang="ts">
  export let title: string;
  export let description: string;
  export let image_url: string;
  export let class_img: string;
  export let is_coming_soon: boolean;
</script>

<div class="group w-full h-auto flex flex-col justify-between gap-3 rounded-xl py-6 px-5 border border-neutral-200">
  <div class={class_img}>
    <img
      src={image_url}
      alt=""
      class="w-full h-full select-none"
    />
  </div>
  <div class="flex flex-col gap-1">
    <div class="flex flex-row flex-wrap gap-1.5 items-center">
      <span class="font-bold text-lg">{title}</span>
      {#if is_coming_soon}
        <span class="text-xs border
          border-uniqhbaunderground-2/80 bg-uniqhbaunderground-2/10 text-uniqhbaunderground-2
          py-0.5 px-1.5 rounded-full">Coming soon</span>
      {/if}
    </div>
    <p class="text-sm line-clamp-3 text-neutral-600">{description}</p>
    <div class="flex flex-row justify-end mt-3">
      <a href="#top" class="w-fit text-center cursor-pointer text-sm font-semibold hover:underline text-uniqhbaunderground-2 hover:text-uniqhbaunderground">
        Lihat Detail...
      </a>
    </div>
  </div>
</div>