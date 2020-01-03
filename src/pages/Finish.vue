<template>
<q-layout class="flex flex-center q-h-100 text-center">
  <q-page-container>
    <div>
      <h5 class="q-mb-lg">Поздравляю <b>{{ user }}</b>!</h5>
      <p>Игра <b>&laquo;{{ game.name }}&raquo;</b> <br> пройденна за:</p>
      <div class="text-h2 text-bold">
        {{ minutes > 9 ? minutes : '0' + minutes }}:{{ seconds > 9 ? seconds : '0' + seconds }}
      </div>
    </div>
  </q-page-container>
</q-layout>
</template>

<script>
export default {
  name: 'GameFinish',
  data () {
    return {
    }
  },
  computed: {
    game () {
      return this.$store.state.game.game
    },
    timer () {
      const start = new Date(localStorage.getItem('start'))
      const end = new Date(localStorage.getItem('end'))
      const diff = Math.abs(end - start)
      return Math.ceil(diff / (1000))
    },
    minutes () {
      return Math.floor(this.timer / 60)
    },
    seconds () {
      return this.timer - this.minutes * 60
    },
    user () {
      return localStorage.getItem('user') || ''
    }
  },
  methods: {
  },
  beforeRouteEnter: function (to, from, next) {
    if (localStorage.getItem('end') && localStorage.getItem('start')) next()
    else next(from.path)
  }
}
</script>
