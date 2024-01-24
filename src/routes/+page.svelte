<script>
  let isFlip = false;
</script>

<svelte:head>
  <title>Home page</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div on:click={() => (isFlip = !isFlip)} class:isFlip />

<style lang="scss">
  div {
    width: 100%;
    height: 500px;
    background-image: url("/src/lib/images/svelte-welcome.png");
    background-repeat: no-repeat;
    background-size: 100%;
    margin-top: 200px;
    transition: all 0.5s linear;

    &.isFlip {
      transform: rotateY(180deg);
    }
  }
</style>
