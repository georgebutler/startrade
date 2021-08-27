<template>
  <div>
    <Navbar />
  </div>
</template>

<script>
export default {
  data () {
    return {
      loans: []
    }
  },
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  },
  mounted () {
    console.log('yea')
  }
}
</script>
