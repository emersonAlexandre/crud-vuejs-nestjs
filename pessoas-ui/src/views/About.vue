<template>
  <div class="about">
      <h2 class="header --mobile">About</h2>
      <h2 class="header">About</h2>
  </div>
</template>

<script>
export default {
  name: 'About'

}
</script>
<style lang="scss" scoped>
  $cor: red;
  .about {
    color: $cor;
    .header {
      font-size: 2rem;
      font-weight: 700;
      &.--mobile {
        font-size: 1rem;
      }
    }
  }
</style>
