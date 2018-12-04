<template>
    <div :hidden="!alert">
        <div :class="['v-alert', success ? 'success, v-alert-success' : 'warning, v-alert-warning']">
            <i aria-hidden="true" :class="['v-icon', 'material-icons', 'theme--light', 'v-alert__icon', success ? 'v-icon-success' : 'v-icon-warning']">{{success ? 'check_circle': 'warning'}}</i>
        <div>
            {{message}}
        </div>
            <a class="v-alert__dismissible" @click="$emit('closeAlert')">
                <i aria-hidden="true" :class="['v-icon', 'v-icon--right', 'material-icons', 'theme--light', success ? 'v-icon-success' : 'v-icon-warning']">cancel</i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String
    },
    alert: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    }
  }
}
</script>
