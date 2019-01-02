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
                label="Birthday"
                hint="DD/MM/YYYY format"
                persistent-hint
                prepend-icon="event"
                @blur="date = parseDate(birthday)"
                @input="$emit('input', $event.target.value)"
                :name="name"
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
import Vue from 'vue'
import { mapGetters } from 'vuex'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

export default {
  name: 'date-picker',
  $_veeValidate: {
    value () {
      return this.$el.value
    },
    name () {
      return this.name
    }
  },
  props: {
    name: String,
    value: {
      type: null,
      default: null
    }
  },
  data: () => ({
    date: null,
    menu: false,
    birthday: null,
    dictionary: {
      custom: {
        birthday: {
          required: () => 'Birthday can not be empty'
        }
      }
    }
  }),
  mounted () {
    this.$el.value = this.value
  },
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
  },
  created () {
    let pessoa = this.currentPessoa
    if (!Object.keys(pessoa).length < 1) {
      console.log('entrou')
      this.date = new Date(pessoa.birthday).toISOString().substr(0, 10)
      this.birthday = this.formatDate(this.date)
    }
  },
  computed: {
    ...mapGetters({
      currentPessoa: 'currentPessoa'
    })
  }
}
</script>
