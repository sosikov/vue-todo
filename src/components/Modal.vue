<template>
  <modal
    name="modal"
    @before-open="beforeOpen"
    :adaptive="true"
  >
    <div class="modal">
      <h2 class="modal__title">
        {{title}}
      </h2>
      <div>
        <Button
          :label="'no'"
          @tap="cancel"
        />
        <Button
          :label="'yes'"
          :danger="true"
          @tap="success"
        />
      </div>
    </div>
  </modal>
</template>

<script>
import Button from '@/components/Button'

export default {
  components: {
    Button
  },
  data() {
    return {
      title: '',
      callback: null
    }
  },
  methods: {
    beforeOpen(data) {
      this.title = data.params.title
      this.callback = data.params.callback
    },
    hideModal() {
      this.$modal.hide('modal')
    },
    success() {
      this.callback()
      this.hideModal()
    },
    cancel() {
      this.hideModal()
    }
  }
}
</script>

<style scoped>
.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.modal__title {
  text-align: center;
  margin-top: 0;
}
</style>
