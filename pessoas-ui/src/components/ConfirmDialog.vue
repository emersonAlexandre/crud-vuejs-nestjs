<template>
    <v-layout row justify-center>

        <v-dialog
                v-model="opened"
                max-width="290"
        >

            <v-card>
                <v-card-title class="headline">{{title}}</v-card-title>

                <v-card-text>
                    {{$parent.$data}}
                    Are you sure you want to remove this item?
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                            color="green darken-1"
                            flat="flat"
                            @click="opened = false"
                    >
                        Disagree
                    </v-btn>

                    <v-btn
                            color="green darken-1"
                            flat="flat"
                            @click="confirm"
                    >
                        Agree
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'OL'
    }
  },
  data () {
    return {
      confirmation: false
    }
  },

  methods: {
    confirm () {
      this.confirmation = true
    }
  }
}
</script>
