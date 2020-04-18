import notes from './notes'

export const getNotesRequest = () => {
  if (localStorage.notes) {
    return JSON.parse(localStorage.notes)
  }
  saveNotesRequest(notes)
  return notes
}

export const saveNotesRequest = (notes) => {
  localStorage.notes = JSON.stringify(notes)
}

export const removeNoteRequest = (id) => {
  let notes = getNotesRequest()
  notes = notes.filter(note => note.id != id)
  saveNotesRequest(notes)
}

export const getNoteRequest = (id) => {
  const notes = getNotesRequest()
  const note = notes.find(note => note.id == id)
  return note
}

export const saveNoteRequest = (changedNote) => {
  const notes = getNotesRequest()
  let noteIndex = notes.findIndex(note => note.id == changedNote.id)
  if (noteIndex !== -1) {
    notes[noteIndex] = changedNote
    saveNotesRequest(notes)
    return
  }
  notes.push(changedNote)
  saveNotesRequest(notes)
}
