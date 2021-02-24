<script lang="ts">
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<svelte:head>
  <title>{"Custom title <3"}</title>
</svelte:head>

<button on:click={handleClick}>
  Clicked {count}
  {count === 1 ? "time" : "times"}
</button>
