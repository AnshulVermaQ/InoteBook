import React, { useState } from 'react';
import noteContext from './notecontext';

const NoteState = (props) => {
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    // Get all notes
    const getNotes = async () => {
        const response = await fetch('/api/notes/fetchallnotes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setNotes(json);
    };

    // Add a note
    const addNote = async (title, description, tag) => {
        const response = await fetch('/api/notes/addnote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = await response.json();
        setNotes(notes.concat(note));
    };

    // Edit a note
    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        const newNotes = notes.map(note => note._id === id ? json : note);
        setNotes(newNotes);
    };

    return (
        <noteContext.Provider value={{ notes, getNotes, addNote, editNote }}>
            {props.children}
        </noteContext.Provider>
    );
}

export default NoteState;
