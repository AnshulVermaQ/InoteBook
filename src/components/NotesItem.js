import React from 'react';

const NotesItem = ({ note, updateNote }) => {
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <p className="card-text"><small className="text-muted">{note.tag}</small></p>
                    <i className="fas fa-edit mx-2" onClick={() => updateNote(note)}></i>
                    <i className="fas fa-trash-alt mx-2"></i>
                </div>
            </div>
        </div>
    );
}

export default NotesItem;
