<template>
<q-layout class="flex flex-center q-h-100 text-center">
  <q-page-container>
    <div >
      <p>Игра <b>&laquo;{{ game.name }}&raquo;</b> <br> начнется через:</p>
      <div class="text-h2 text-bold">
        {{ minutes > 9 ? minutes : '0' + minutes }}:{{ seconds > 9 ? seconds : '0' + seconds }}
      </div>
    </div>
  </q-page-container>
</q-layout>
</template>

<script>
export default {
  name: 'Timer',
  computed: {
    timer () {
      return this.$store.state.game.timer.value
    },
    game () {
      return this.$store.state.game.game
    },
    minutes () {
      return Math.floor(this.timer / 60)
    },
    seconds () {
      return this.timer - this.minutes * 60
    }
  },
  watch: {
    timer: function (timer) {
      if (timer <= 0) this.next()
    }
  },
  methods: {
    next () {
      this.$store.commit('game/clearTimer')
      this.$store.commit('game/saveStartDate')
      this.$router.push('/level')
    }
  },
  beforeRouteEnter: function (to, from, next) {
    if (!localStorage.getItem('user')) next('/')
    else if (localStorage.getItem('start') && !localStorage.getItem('end')) next('/level')
    else if (localStorage.getItem('end')) next('/finish')
    else next()
  }
}
</script>
