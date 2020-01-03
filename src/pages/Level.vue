<template>
<q-layout view="hHh lpR fFf">
  <!-- Header -->
  <q-header class="text-black bg-white">
    <q-toolbar>
      <!-- Current Level Number -->
      <q-toolbar-title>
        <b>Уровень {{ level.order }}/{{ levels.length }}</b>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <!-- Page -->
  <q-page-container>
    <!-- Attachments -->
    <p class="q-px-md">{{ level.text }}</p>
    <q-separator dark />
    <!-- Input For Answer -->
    <q-form @submit="answer" class="q-pa-md flex">
      <q-input v-model.trim="code"
               placeholder="Введите код"
               filled class="input--borderless"
               style="flex-grow: 1;" />
      <q-btn color="primary" icon="keyboard_return" class="q-ml-md"
             type="submit"
             :disable="!code"
             :loading="loading" />
    </q-form>
    <!-- Answered List -->
    <q-list v-if="answered.length">
      <q-item-label header>Правильные ответы</q-item-label>
      <q-item v-for="(answer) in answered" :key="answer.order">
        <q-item-section side>{{ answer.order }}</q-item-section>
        <q-item-section>{{ answer.code }}</q-item-section>
      </q-item>
    </q-list>
  </q-page-container>
</q-layout>
</template>

<script>
export default {
  name: 'Level',
  data () {
    return {
      code: '',
      loading: false
    }
  },
  computed: {
    game () {
      return this.$store.state.game.game
    },
    answered () {
      return this.$store.state.game.answered
        .filter((answer) => {
          return answer.level === this.level.order
        })
    },
    levels () {
      return this.$store.state.game.levels
    },
    level () {
      return this.levels.find((level) => level.order === this.$store.state.game.curLevel)
    }
  },
  watch: {
    answered (answers, old) {
      if (answers.length >= this.level.required) {
        if (this.level.order >= this.levels.length) {
          this.$store.commit('game/saveEndDate')
          this.$router.push('/finish')
        } else {
          this.$q.loading.show()
          setTimeout(() => {
            this.$store.commit('game/nextLevel')
            this.$q.loading.hide()
          }, 700)
        }
      }
    }
  },
  methods: {
    answer () {
      const answer = this.level.answers.find((a) => {
        return !!a.code.split('|').find((code) => code === this.code)
      })

      if (!answer) {
        this.$q.notify({ color: 'red-5', message: 'Неверный ответ' })
      } else if (this.answered.find(a => a.order === answer.order)) {
        this.$q.notify({ color: 'green-5', message: 'Ответ уже засчитан' })
      } else {
        this.$store.commit('game/saveAnswer', { ...answer, code: this.code })
      }

      this.code = ''
    }
  },
  beforeRouteEnter: function (to, from, next) {
    if (!localStorage.getItem('user')) next('/')
    else if (localStorage.getItem('end')) next('/finish')
    else next()
  }
}
</script>
