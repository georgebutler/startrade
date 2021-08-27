<template>
  <div>
    <Navbar />
    <div>
      <div class="text-lg">
        Current Loans
      </div>
      <div v-for="loan in currentLoans" :key="loan.id" class="bg-gray-200">
        <span>{{ loan.type }}</span>
        <span>{{ loan.repaymentAmount }}</span>
        <span>{{ $moment(loan.due).fromNow() }}</span>
      </div>
      <div class="text-lg">
        Available Loans
      </div>
      <div v-for="loan in availableLoans" :key="loan.type">
        <span>{{ loan.type }}</span>
        <span>{{ loan.amount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.state.auth.user
    },
    availableLoans () {
      return this.$store.state.loans.availableLoans
    },
    currentLoans () {
      return this.$store.state.loans.currentLoans
    }
  },
  mounted () {
    this.fetchAvailable()
    this.fetchCurrent()
  },
  methods: {
    fetchAvailable () {
      this.loading = true
      this.$store.dispatch('loans/fetchAvailable', {
        token: this.token
      }).catch((e) => {
        alert(e)
      }).finally(() => {
        this.loading = false
      })
    },
    fetchCurrent () {
      this.loading = true
      this.$store.dispatch('loans/fetchCurrent', {
        token: this.token
      }).catch((e) => {
        alert(e)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
