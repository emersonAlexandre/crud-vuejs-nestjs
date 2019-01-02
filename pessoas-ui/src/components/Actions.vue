<template>
            <v-speed-dial
                    v-model="fab"
                    right
                    direction="left"
                    transition="slide-x-reverse-transition"
            >
                <v-btn
                        slot="activator"
                        v-model="fab"
                        color="indigo"
                        dark
                        fab
                >
                    <v-icon>chevron_left</v-icon>
                    <v-icon>chevron_right</v-icon>
                </v-btn>
                <v-btn
                        fab
                        dark
                        small
                        color="grey darken-2"
                        @click="$emit('edit')"
                >
                    <v-icon>edit</v-icon>
                </v-btn>
                <v-btn
                        fab
                        dark
                        small
                        color="red darken-3"
                        @click="$emit('delete')"
                >
                    <v-icon>delete</v-icon>
                </v-btn>
            </v-speed-dial>
</template>

<script>
export default {
  data: () => ({
    fab: false
  })
}
</script>
