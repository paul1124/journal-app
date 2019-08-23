import React, { useState } from 'react';
import axios from 'axios';
import './form.scss';

export default function Form() {
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="form-title">
                <label className="form-title">Title:</label>
                <input type="text" required onChange={onChangeTitle} />
            </div>
            <div className="form-body">
                <label className="form-body">Body:</label>
                <textarea required onChange={onChangeDescription} />
            </div>
            

            <input type="submit" value="submit" />
        </form>
    )

    function onChangeTitle(e) {
        setTitle(e.target.value);
    }
    function onChangeDescription(e) {
        setDescription(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();

        const journal = {
            title,
            description
        }

        console.log(journal);

        axios.post('http://localhost:5000/journals/add', journal)
            .then(res => console.log(res.data));

        window.location = '/';
    }
}