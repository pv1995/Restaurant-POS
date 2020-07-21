<template>
  <div id="q-app">
    <router-view />
    <link href="https://fonts.googleapis.com/css?family=Comfortaa&display=swap" rel="stylesheet">
  </div>
</template>

<script>
import { colors } from 'quasar'
colors.setBrand('icon_grey', '#949393')
export default {
  name: 'App'
}
</script>
