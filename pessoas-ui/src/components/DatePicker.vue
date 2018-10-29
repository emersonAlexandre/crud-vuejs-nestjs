<template>
    <v-menu
            ref="menu"
            :close-on-content-click="false"
            v-model="menu"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
    >
        <v-text-field
                slot="activator"
                v-model="birthday"
                label="Bithday"
                hint="DD/MM/YYYY format"
                persistent-hint
                prepend-icon="event"
                @blur="date = parseDate(birthday)"
        ></v-text-field>
        <v-date-picker
                ref="picker"
                v-model="date"
                :max="new Date().toISOString().substr(0, 10)"
                @change="save"
                no-title
                @input="menu = false"
                locale="pt-br"
        ></v-date-picker>
    </v-menu>
</template>

<script>
export default {
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    birthday: vm.formatDate(new Date().toISOString().substr(0, 10))
  }),
  watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
    date (val) {
      this.birthday = this.formatDate(this.date)
    },
    birthday (val) {
      this.$emit('change', val)
    }
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    },
    formatDate (date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    parseDate (date) {
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  }
}
</script>
