<script lang="ts">
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<svelte:head>
  <title>{"Custom title <3"}</title>
</svelte:head>

<h1>Demo</h1>
<button on:click={handleClick}>
  Clicked {count}
  {count === 1 ? "time" : "times"}
</button>

<style lang="postcss">
  h1 {
    @apply text-5xl font-semibold;
  }
</style>
