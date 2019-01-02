<template>
    <div>
    <alert :message='alerta.message' :success='alerta.success' :alert='alerta.open' @closeAlert="alterarAlert({ success: false, message: '', open: false })"/>
    <v-card>
        <v-card-title>
            <v-layout align-center justify-space-between row wrap>
                <v-flex sm2>
                    <h2 class="text-xs-left">Pessoas</h2>
                </v-flex>
                <v-flex xs6>
                    <v-text-field
                            v-model="search"
                            append-icon="search"
                            label="Search"
                            single-line
                            hide-details
                    ></v-text-field>
                </v-flex>
                <v-flex sm2>
                    <v-btn style="float: right;" color="green" dark class="mb-2" @click="goTo({ name: 'pessoaNew' })">
                        New People
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-card-title>
        <v-data-table
                :headers="headers"
                :items="pessoas"
                :search="search"
        >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-left">{{ props.item.age }}</td>
                <td class="text-xs-left">{{ props.item.birthday }}</td>
                <td class="text-xs-left actions">
                    <!--<v-icon-->
                            <!--small-->
                            <!--class="mr-2"-->
                            <!--@click="editarPessoa(props.item)"-->
                    <!--&gt;-->
                        <!--edit-->
                    <!--</v-icon>-->
                    <!--<v-icon-->
                            <!--small-->
                            <!--@click="abrirModal(props.item)"-->
                    <!--&gt;-->
                        <!--delete-->
                    <!--</v-icon>-->
                    <actions @edit="editarPessoa(props.item)" @delete="abrirModal(props.item)"></actions>
                </td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
            </v-alert>
        </v-data-table>
    </v-card>
    <confirm-dialog :openned="open" :title="'Attention'" @cancel="fecharModal" @confirm="deletarPessoa"/>
    </div>
</template>

<script>

import ConfirmDialog from './ConfirmDialog'
import { mapActions, mapGetters } from 'vuex'
import Alert from './Alert'
import Actions from './Actions'
export default {
  name: 'TablePessoas',
  components: {
    'actions': Actions,
    'alert': Alert,
    'confirm-dialog': ConfirmDialog
  },
  data () {
    return {
      search: '',
      open: false,
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Age', value: 'age' },
        { text: 'Birthday', value: 'birthday' },
        { text: 'Action', value: 'actions' }
      ]
    }
  },
  methods: {
    ...mapActions({
      delete: 'deletePessoa',
      getPessoas: 'getPessoas',
      setCurrentPessoa: 'setCurrentPessoa',
      alterarAlert: 'alterarAlert'
    }),
    deletarPessoa () {
      this.delete(this.currentPessoa._id)
        .then(res => {
          if (res.data._id === this.currentPessoa._id) {
            this.setCurrentPessoa({})
            this.open = false
            this.getPessoas()
            this.alterarAlert({ success: true, message: 'Pessoa excluida com sucesso', open: true })
          }
        })
    },
    abrirModal (pessoa) {
      this.setCurrentPessoa(pessoa)
      this.open = true
    },
    fecharModal () {
      this.setCurrentPessoa({})
      this.open = false
    },
    editarPessoa (pessoa) {
      this.setCurrentPessoa(pessoa)
      this.goTo({ name: 'pessoaEdit', params: { pessoa: this.currentPessoa } })
    },
    goTo (params) {
      this.$router.push(params)
    }
  },
  computed: {
    ...mapGetters({
      pessoas: 'pessoas',
      currentPessoa: 'currentPessoa',
      alerta: 'alerta'
    })
  },
  mounted () {
    this.getPessoas()
  },
  created () {
    if (this.currentPessoa) {
      this.setCurrentPessoa({})
    }
  }
}
</script>
