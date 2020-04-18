<template>
  <div>
    <h1>Home page</h1>
    <hr>
    <Note
      v-for="note of notes"
      :key="note.id"
      :note="note"
      @remove-note="removeNote"
    />
    <div class="home__control">
      <Button
        :label="'create note'"
        @tap="createNote"
      />
    </div>
  </div>
</template>

<script>
import {
  getNotesRequest,
  removeNoteRequest,
  saveNotesRequest
} from '@/utils/api'
import router from '@/router'
import Note from '@/components/Note'
import Button from '@/components/Button'

export default {
  components: {
    Note,
    Button
  },
  data() {
    return {
      notes: []
    }
  },
  methods: {
    createNote() {
      const note = {
        id: Date.now(),
        title: '',
        todos: []
      }
      this.notes.push(note)
      saveNotesRequest(this.notes)
      router.push({path: `editor/${note.id}`})
    },
    removeNote(id) {
      removeNoteRequest(id)
      this.notes = this.notes.filter(note => note.id != id)
    }
  },
  mounted() {
    this.notes = getNotesRequest()
  }
}
</script>

<style scoped>
.home__control {
  margin: 20px 0 60px;
}
</style>
