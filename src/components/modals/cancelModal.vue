<template>
    <q-dialog v-model="open" persistent size="md">
      <q-card class="delete-modal">
        <q-card-section class="row items-center q-mt-md justify-center">
          <q-icon name="error" color="warning" text-color="white" size="100px"/>
        </q-card-section>
        <q-card-section class="text-center">
          <div class="q-ml-sm lato text-h6 justify-center">All changes will be lost. Are you sure you want to continue?</div>
        </q-card-section>

        <q-card-actions align="center" class="q-my-md">
          <q-btn outline label="Cancel" color="primary" @click="close" class="q-mr-lg q-px-md"/>
          <q-btn unelevated label="Yes" color="primary" @click="goBack" class="q-px-md"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>
<script>
export default {
    props: {
        open: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        close() {
            this.$emit('close')
        },
        goBack() {
            this.$emit('back')
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>