<template>
<q-layout>
  <q-page-container>
    <q-page class="bbwrap text-center">
      <!-- Logo -->
      <div class="bbwrap__content flex flex-center q-mb-xl">
        <img src="~assets/logo.svg" alt="Brain Box logo" />
      </div>
      <p>Привет человек! <br> Давай сыграем в игру.</p>
      <!-- Register button -->
      <q-btn class="q-mb-xl btn-bold"
             color="primary"
             label="играть"
             to="/start" />
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
export default {
  name: 'IndexPage',
  beforeRouteEnter: function (to, from, next) {
    if (localStorage.getItem('user')) next('/game')
    else if (localStorage.getItem('timer')) next('/timer')
    else if (localStorage.getItem('start') && !localStorage.getItem('end')) next('/level')
    else if (localStorage.getItem('end')) next('/finish')
    else next()
  }
}
</script>
