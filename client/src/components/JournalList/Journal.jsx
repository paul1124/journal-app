import React from 'react';

export default function Journal({ isEdit, isDelete }) {
    return (
        <div className="journal">
            <h2 className='journal-title'>title</h2>
            <p className='journal-description'>description</p>
            <button className="editbtn">Edit</button>
            <button className="deletebtn">Delete</button>
        </div>
    )
}