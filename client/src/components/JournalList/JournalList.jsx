import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Journal from './Journal';
import './journal.scss';

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
                </div>
            ))}
        </div>
    )
}