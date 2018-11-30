<template>
    <div>
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
                    <v-btn style="float: right;" color="primary" dark class="mb-2" to="/cadastro">New Item</v-btn>
                </v-flex>
            </v-layout>
        </v-card-title>
        <v-data-table
                :headers="headers"
                :items="desserts"
                :search="search"
        >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-left">{{ props.item.age }}</td>
                <td class="text-xs-left">{{ props.item.birthday }}</td>
                <td class="text-xs-left">
                    <v-icon
                            small
                            class="mr-2"
                            @click="false"
                    >
                        edit
                    </v-icon>
                    <v-icon
                            small
                            @click="open = true"
                    >
                        delete
                    </v-icon>
                </td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
            </v-alert>
        </v-data-table>
    </v-card>
    <confirm-dialog :openned="open" :title="'Attention'" @cancel="open = false" @confirm="deletarPessoa"/>
    </div>
</template>

<script>

import ConfirmDialog from './ConfirmDialog'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'TablePessoas',
  components: {
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
      ],
      desserts: []
    }
  },
  methods: {
    ...mapActions({
      delete: 'deletePessoa',
      getPessoas: 'getPessoas'
    }),
    deletarPessoa () {
      this.delete(this.currentPessoa)
      this.open = false
    }
  },
  computed: {
    ...mapGetters({
      pessoas: 'pessoas',
      currentPessoa: 'currentPessoa'
    })
  },
  mounted () {
    this.getPessoas()
  },
  created () {
    console.log(this.pessoas)
    this.desserts = this.pessoas
  }
}
</script>
