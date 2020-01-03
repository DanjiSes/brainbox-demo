<template>
  <q-layout view="hhh lpR fFf">
    <!-- Header -->
    <q-header class="bg-header-gradient shadow-up-2">
      <q-toolbar>
        <!-- Title -->
        <q-toolbar-title>
          <b>{{ game.name }}</b>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <!-- Container -->
    <q-page-container class="page-game" style="padding-top: 0;">
      <!-- Game Preview -->
      <q-img :src="require('../assets/preview.jpg')" :ratio="16/9" />
      <!-- Game Info -->
      <q-list borderless>
        <q-item>
          <q-item-section side>
            <i class="bb-info"></i>
          </q-item-section>
          <q-item-section>
            <b>Информация об игре:</b>
          </q-item-section>
        </q-item>
      </q-list>
      <q-list class="game-info">
        <q-item>
          <q-item-section>Дата игры:</q-item-section>
          <q-item-section side>
            <b>{{ game.start }}</b>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>Тип:</q-item-section>
          <q-item-section side>{{ game.type }}</q-item-section>
        </q-item>
        <q-item>
          <q-item-section>Автор игры:</q-item-section>
          <q-item-section side>
            <a :href="game.author.link" target="_blank">{{ game.author.name }}</a>
          </q-item-section>
        </q-item>
      </q-list>
      <!-- Game Needs -->
      <q-list borderless>
        <q-item>
          <q-item-section side>
            <i class="bb-question"></i>
          </q-item-section>
          <q-item-section>
            <b>Для игры понадобится:</b>
          </q-item-section>
        </q-item>
      </q-list>
      <q-list>
          <q-item v-for="(need, i) in game.needs" :key="i" dense>
            - {{ need }};
          </q-item>
      </q-list>
      <!-- Game Rules -->
      <q-list borderless>
        <q-item>
          <q-item-section side>
            <i class="bb-info"></i>
          </q-item-section>
          <q-item-section>
            <b>Правила игры:</b>
          </q-item-section>
        </q-item>
      </q-list>
      <q-list>
        <q-item v-for="(rule, i) in game.rules" :key="i" dense>
          {{ i + 1}}. {{ rule }}
        </q-item>
      </q-list>
      <!-- Send Game Request Button -->
      <div class="q-pa-md">
        <q-btn @click="startGameTimer"
               :loading="loading"
               label="Начать игру"
               color="primary" class="full-width" />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'GamePage',
  data () {
    return {
      loading: false
    }
  },
  computed: {
    game () {
      return this.$store.state.game.game
    }
  },
  methods: {
    startGameTimer () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$store.commit('game/startTimer', setInterval(() => {
          this.$store.commit('game/tick')
        }, 1000))
        this.$router.push('/timer')
      }, 700)
    }
  },
  beforeRouteEnter: function (to, from, next) {
    if (!localStorage.getItem('user')) next('/')
    else if (localStorage.getItem('timer')) next('/timer')
    else if (localStorage.getItem('start') && !localStorage.getItem('end')) next('/level')
    else if (localStorage.getItem('end')) next('/finish')
    else next()
  }
}
</script>
