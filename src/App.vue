<template>
  <div id="q-app" class="dark-theme">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    if (localStorage.getItem('timer')) {
      this.$store.commit('game/startTimer', setInterval(() => {
        this.$store.commit('game/tick')
      }, 1000))
    }
  }
}
</script>

<style>
</style>
