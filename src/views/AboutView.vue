<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style lang="scss">
.about {
  h1 {
    color: aqua;
  }
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
