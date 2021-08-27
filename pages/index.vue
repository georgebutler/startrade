<template>
  <div>
    <Navbar />
    <div v-if="isAuthed">
      <div>{{ user.username }}</div>
      <div>Credits: {{ user.credits }}</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthed () {
      return this.$store.state.auth.token.length > 0
    },
    user () {
      return this.$store.state.auth.user
    }
  }
}
</script>
