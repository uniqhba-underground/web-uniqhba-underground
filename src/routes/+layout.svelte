<script lang="ts">
  import "@/app.css";
  import 'nprogress/nprogress.css';
	import NProgress from 'nprogress';
	import { navigating } from "$app/state";
	import { PathEvents, PathName } from "@/state/page";
	import { onMount } from "svelte";
	import { browser } from "$app/environment";

  NProgress.configure({
		minimum: 0.16,
		speed: 500,
		showSpinner: false,
		easing: 'ease'
	});

  $effect(() => {
    if (navigating.to) {
      NProgress.start();
      $PathName = navigating.to.url.pathname;

      if (navigating.to.url.pathname.includes('event')) {
        $PathName = PathEvents;
      }
    } else {
      NProgress.done();
    }
  });

  onMount(() => {
    if (browser) {
      $PathName = window.location.pathname;
    }
  });

  let { children } = $props();
</script>

{@render children()}