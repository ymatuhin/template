<script lang="ts">
  let count = 0;
  let titleIcon = process.env.NODE_ENV === "development" ? "🚧" : "";

  function handleClick() {
    count += 1;
  }
</script>

<svelte:head>
  <title>{titleIcon} Custom title</title>
</svelte:head>

<h1 class="bg-gray-200">Demo</h1>
<button on:click={handleClick}>
  Clicked {count}
  {count === 1 ? "time" : "times"}
</button>

<style>
  h1 {
    border: 1px solid #000;
  }
</style>
