<template>
  <table-pessoas/>
</template>

<script>

import TablePessoas from './../components/TablePessoas'

export default {
  data () {
    return {
      dialog: false
    }
  },
  name: 'Pessoas',
  components: {
    TablePessoas
  }
}
</script>
