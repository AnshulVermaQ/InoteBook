import React from 'react';

const NotesItem = ({ note, updateNote }) => {
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{DOMPurify.sanitize(note.title)}</h5>
                    <p className="card-text">{DOMPurify.sanitize(note.description)}</p>
                    <p className="card-text"><small className="text-muted">{DOMPurify.sanitize(note.tag)}</small></p>
                    <i className="fas fa-edit mx-2" onClick={() => updateNote(note)}></i>
                    <i className="fas fa-trash-alt mx-2"></i>
                </div>
            </div>
        </div>
    );
}

export default NotesItem;
