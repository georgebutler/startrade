<template>
  <div>
    <NuxtLink to="/" class="font-bold">
      Home
    </NuxtLink>
    <div v-if="isAuthed">
      <div>
        <NuxtLink to="/loans" class="font-bold">
          Loans
        </NuxtLink>
      </div>
    </div>
    <div v-else>
      <div>
        <NuxtLink to="/login" class="font-bold">
          Login
        </NuxtLink>
      </div>
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
