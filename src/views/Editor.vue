<template>
  <div class="editor">
    <h1 class="editor__title">
      Editor page
    </h1>
    <hr class="editor__hr">
    <Note class="editor__note" :note="note" :editable="true"/>
    <div class="editor__controls">
      <Button
        :label="'save note'"
        @tap="saveNote"
      />
      <Button
        :label="'cancel'"
        @tap="showCancelModal"
      />
      <Button
        :label="'remove note'"
        @tap="showRemoveModal"
        :danger="true"
      />
    </div>
  </div>
</template>

<script>
import {
  getNoteRequest,
  removeNoteRequest,
  saveNoteRequest
} from '@/utils/api'
import router from '@/router'
import Button from '@/components/Button'
import Note from '@/components/Note'

export default {
  components: {
    Button,
    Note
  },
  props: ['id'],
  data() {
    return {
      note: {}
    }
  },
  methods: {
    saveNote() {
      if (this.hasChar(this.note.title)) {
        saveNoteRequest(this.note)
      } else {
        removeNoteRequest(this.note.id)
      }
      this.goBack()
    },
    removeNote() {
      removeNoteRequest(this.id)
      this.goBack()
    },
    showCancelModal() {
      this.$modal.show('modal', {
        title: `Get back?`,
        callback: () => {
          if (!this.hasChar(this.note.title)) {
            removeNoteRequest(this.note.id)
          }
          this.goBack()
        }
      })
    },
    showRemoveModal() {
      this.$modal.show('modal', {
        title: `Are you sure want to remove ${this.note.title}?`,
        callback: this.removeNote
      })
    },
    goBack() {
      router.push({path: '/'})
    },
    hasChar(title) {
      return title.trim()
    }
  },
  mounted() {
    this.note = getNoteRequest(this.id)
    if (!this.note) {
      this.goBack()
    }
  }
}
</script>

<style scoped>
.editor__title {
  margin-bottom: 32px;
}
.editor__hr {
  margin-bottom: 24px;
}
.editor__note {
  margin-bottom: 32px;
}
.editor__controls > button {
  margin: 0 4px 8px;
}
</style>
