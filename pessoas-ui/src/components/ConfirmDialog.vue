<template>
    <v-layout row justify-center>

        <v-dialog
                v-model=openned
                max-width="290"
                persistent
        >

            <v-card>
                <v-card-title class="headline">{{title}}</v-card-title>

                <v-card-text>{{message}}</v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                            color="green darken-1"
                            flat="flat"
                            @click="$emit('cancel')"
                    >
                        Disagree
                    </v-btn>

                    <v-btn
                            color="green darken-1"
                            flat="flat"
                            @click="$emit('confirm')"
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
    openned: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Information'
    },
    message: {
      type: String,
      default: 'Are you sure you want to remove this item?'
    }
  }
}
</script>
