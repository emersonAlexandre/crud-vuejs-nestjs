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
    <date-picker
            @change="changedDate"
            v-model="birthday"
    ></date-picker>
    <v-text-field
            v-validate="'required'"
            v-model="age"
            :error-messages="errors.collect('age')"
            label="Age"
            data-vv-name="age"
            required
            type="number"
    ></v-text-field>
    <v-btn @click="voltar">Voltar</v-btn>
    <v-btn @click="submit">Submit</v-btn>
  </form>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import DatePicker from './DatePicker'
import { mapActions, mapGetters } from 'vuex'

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
    message: '',
    birthday: '',
    dictionary: {
      custom: {
        name: {
          required: () => 'Name can not be empty'
        },
        age: {
          required: () => 'Age can not be empty'
        },
        birthday: {
          required: () => 'Birthday can not be empty'
        }
      }
    }
  }),
  mounted () {
    this.$validator.localize('en', this.dictionary)
  },
  methods: {
    ...mapActions({
      alterarAlert: 'alterarAlert',
      createOrEditPessoa: 'createOrEditPessoa'
    }),
    changedDate (val) {
      this.birthday = val
    },
    submit () {
      this.$validator.validateAll().then((res) => {
        if (res) {
          this.createOrEditPessoa(this.verifyCreateOrEdit())
            .then(result => {
              this.$router.push({ name: 'pessoas' })
              this.alterarAlert({ success: false, message: this.message, open: true })
            }, error => {
              console.error(error)
              this.alterarAlert({ success: false, message: this.message + error, open: true })
            })
        }
      })
    },
    verifyCreateOrEdit () {
      let pessoa = this.currentPessoa
      if (!Object.keys(pessoa).length < 1 && pessoa._id) {
        this.message = 'Pessoa alterada com sucesso'
        return { _id: pessoa._id, name: this.name, age: this.age, birthday: this.birthday }
      } else {
        this.message = 'Pessoa cadastrada com sucesso'
        return { name: this.name, age: this.age, birthday: this.birthday }
      }
    },
    voltar () {
      this.$router.push({ name: 'pessoas' })
    }
  },
  computed: {
    ...mapGetters({
      currentPessoa: 'currentPessoa'
    })
  },
  created () {
    let pessoa = this.currentPessoa
    if (!Object.keys(pessoa).length < 1) {
      this.name = pessoa.name
      this.age = pessoa.age
    }
  }
}
</script>
