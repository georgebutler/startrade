<template>
  <div>
    <Navbar />
    <div>
      <div>
        <div>Token</div>
        <input v-model="token" type="password" class="bg-gray-200">
      </div>
      <div>
        <button class="bg-gray-200 px-3 py-2" @click="submit">
          Log In
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      token: '',
      loading: false
    }
  },
  methods: {
    submit () {
      this.loading = true
      this.$store.dispatch('auth/verifyAndSetToken', {
        token: this.token
      }).then(() => {
        alert('Token verified and saved!')
      }).catch((e) => {
        alert(e)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
