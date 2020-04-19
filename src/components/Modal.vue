<template>
  <modal
    class="modal"
    name="modal"
    @before-open="beforeOpen"
    :adaptive="true"
  >
    <div class="modal__content">
      <h2 class="modal__title">
        {{title}}
      </h2>
      <div class="modal__controls">
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
.modal__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.modal__title {
  text-align: center;
  margin-bottom: 16px;
}
.modal__controls > button {
  margin: 0 4px;
}
</style>
