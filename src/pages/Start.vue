<template>
<q-layout>
  <q-page-container>
    <q-page class="bbwrap">
      <div class="bbwrap__content q-mb-xl flex items-center">
        <!-- Register Form -->
        <q-form ref="myForm" @submit="iHaveContinue" class="full-width">
          <q-input v-model="name" size="lg" no-error-icon
                   class="q-mb-lg"
                   label="Имя" stack-label
                   :rules="[val => val != '' || 'Введите имя']" />
          <q-btn type="submit" class="full-width" color="primary"
                 label="Далее" />
        </q-form>
      </div>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
export default {
  name: 'RegisterPage',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    iHaveContinue () {
      localStorage.setItem('user', this.name)
      this.$router.push('/game')
    }
  },
  beforeRouteEnter: function (to, from, next) {
    if (localStorage.getItem('user')) next('/game')
    else if (localStorage.getItem('timer')) next('/timer')
    else if (localStorage.getItem('start') && !localStorage.getItem('end')) next('/level')
    else if (localStorage.getItem('end')) next('/finish')
    else next()
  }
}
</script>
