<script lang="ts">
	import type { PageData } from "./$types";

  export let data: PageData | any;

  const isExist: boolean = data.isExist || false;
</script>

{#if isExist}
  <div>
    event exist
  </div>
{:else}
  <div>
    event not exist
  </div>
{/if}