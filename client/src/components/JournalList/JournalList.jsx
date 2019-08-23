import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Journal from './Journal';
import { Link } from 'react-router-dom';
import './journal.scss';
import { set } from 'mongoose';

export default function JournalList() {
    const [ journalList, setJournalList ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/journals')
            .then(res => setJournalList(res.data.map(journal => journal)))
            .catch(err => console.log(err))
    }, []);
    const [ isEdit, setIsEdit ] = useState(false);
    const [ isDelete, setIsDelete ] = useState(false);

    // useEffect(() => {

    // })

    return (
        <div className="journallist">
            {journalList.map(journal => (
                <div key={journal._id} className="journal">
                    <div className="journal-title"><h2>{journal.title}</h2></div>
                    <p className="journal-description">{journal.description}</p>
                    <Link to={"/edit/"+journal._id}>Edit</Link>
                    <a href="#" onClick={() => onDelete(journal._id)}>Delete</a>
                </div>
            ))}
        </div>
    )

    function onDelete(id) {
        axios.delete('http://localhost:5000/journals/'+id)
            .then(res => console.log(res));
        setJournalList(journalList.filter(journal => journal._id !== id));
    }
}