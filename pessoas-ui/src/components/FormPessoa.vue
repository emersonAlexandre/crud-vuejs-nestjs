<template>
  <v-form>
      <v-layout row wrap class="justify-space-between">
        <v-flex xs12 sm4 md5>
          <v-text-field
                  v-validate="'required'"
                  v-model="name"
                  :error-messages="errors.collect('name')"
                  label="Name"
                  data-vv-name="name"
                  required
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm4 md3>
          <v-text-field
                  v-validate="'required'"
                  v-model="birthday"
                  :error-messages="errors.collect('birthday')"
                  label="Birthday"
                  data-vv-name="birthday"
                  required
                  mask="##/##/####"
                  append-icon="event"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm3 md3>
          <v-text-field
                  v-validate="'required|numeric'"
                  v-model="age"
                  :error-messages="errors.collect('age')"
                  label="Age"
                  data-vv-name="age"
                  required
                  type="number"
          ></v-text-field>
        </v-flex>
      </v-layout>

    <!--<date-picker-->
            <!--@change="changedDate"-->
            <!--v-validate="'required'"-->
            <!--:error-messages="errors.collect('birthday')"-->
            <!--data-vv-name="birthday"-->
            <!--required-->
    <!--&gt;</date-picker>-->

    <v-btn @click="voltar" color="grey darken-2" dark class="without-margin-left">Voltar</v-btn>
    <v-btn @click="submit" color="indigo" dark>Submit</v-btn>
  </v-form>
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
              this.alterarAlert({ success: true, message: this.message, open: true })
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
    let pessoa = this.currentPessoa;
    if (!Object.keys(pessoa).length < 1) {
      this.name = pessoa.name;
      this.age = pessoa.age
    }
  }
}
</script>
