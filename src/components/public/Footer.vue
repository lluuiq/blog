<template>
  <v-footer
      dark
      padless
  >
    <v-card
        class="flex"
        flat
        tile
    >
      <v-card-text class="py-0 grey--text text-center">
        <strong>本站已苟活</strong> - {{ new Date() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
