<template>
  <form>
    <v-text-field
      v-validate="'required'"
      v-model="name"
      :error-messages="errors.collect('name')"
      label="Name"
      data-vv-name="name"
      required
    ></v-text-field>
    <date-picker @change="changedDate"/>
    <v-text-field
            v-validate="'required'"
            v-model="age"
            :error-messages="errors.collect('age')"
            label="Age"
            data-vv-name="age"
            required
            type="number"
    ></v-text-field>
    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import DatePicker from './DatePicker'
import axios from 'axios'
Vue.use(VeeValidate)

export default {
  name: 'FormPessoa',
  components: {
    DatePicker
  },
  $_veeValidate: {
    validator: 'new'
  },
  data: () => ({
    name: '',
    age: '',
    birthday: '',
    dictionary: {
      custom: {
        name: {
          required: () => 'Name can not be empty'
        },
        age: {
          required: () => 'Age can not be empty'
        }
      }
    }
  }),
  mounted () {
    this.$validator.localize('en', this.dictionary)
  },
  methods: {
    changedDate (val) {
      this.birthday = val
    },
    submit () {
      this.$validator.validateAll().then((res) => {
        if (res) {
          axios({ method: 'POST', 'url': 'http://127.0.0.1:3000/api/pessoas', 'data': { name: this.name, age: this.age, birthday: this.birthday }, 'headers': { 'content-type': 'application/json' } }).then(result => {
            this.$router.push({ name: 'pessoas', query: { redirect: '/pessoas' } })
          }, error => {
            console.error(error)
          })
        }
      })
    },
    clear () {
      this.name = ''
      this.age = null
      this.$validator.reset()
    }
  }
}
</script>
