<template>
    <q-dialog v-model="open" persistent size="md">
      <q-card class="delete-modal">
        <q-card-section class="row items-center q-mt-md justify-center">
          <q-icon name="delete_forever" color="negative" text-color="white" size="100px"/>
        </q-card-section>
        <q-card-section class="text-center">
          <div class="q-ml-sm lato text-h6 justify-center">Are you sure you want to delete this item?</div>
        </q-card-section>

        <q-card-actions align="center" class="q-my-md">
          <q-btn outline label="Cancel" color="primary" @click="close" class="q-mr-lg q-px-md"/>
          <q-btn unelevated label="Delete" color="primary" @click="deleteItem" class="q-px-md"/>
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
        deleteItem() {
            this.$emit('delete')
        }
    }
}
</script>
<style lang="stylus" scoped>
.delete-modal
    width: 650px !important
    max-width: 80vw !important
</style>