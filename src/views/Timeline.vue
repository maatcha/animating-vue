<template>
  <div>
    <img src="../assets/runner.png" alt="runner" class="runner first" />
    <img src="../assets/runner.png" alt="runner" class="runner second" />
    <img src="../assets/runner.png" alt="runner" class="runner third" />
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  mounted() {
    let tl = gsap.timeline({ repeat: 3, repeatDelay: 1 })
    tl.to('.first', { x: 700, duration: 2, ease: 'expo.out' }),
      tl.to('.second', { x: 700, duration: 2, ease: 'expo.out' }, '<.5'),
      tl.to('.third', { x: 700, duration: 2, ease: 'expo.out' }, '-=1')
  }
}
</script>

<style scoped>
.runner {
  display: block;
  height: 10em;
  width: 10em;
  margin-top: 1.5em;
}
</style>
