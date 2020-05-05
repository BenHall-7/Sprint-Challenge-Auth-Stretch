import React, { useEffect, useState } from 'react';
import Joke from './Joke';
import axiosWithAuth from '../axiosWithAuth';

export default props => {
    const [error, setError] = useState(false);
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        axiosWithAuth().get("http://localhost:3300/api/jokes")
            .then(({data}) => {
                setJokes(data);
            })
            .catch(() => setError(true));
    }, []);

    return <div>
        {error && "Error!" || <ul>
            {jokes.map(j => <Joke joke={j.joke} key={j.id}/>)}
        </ul>}
    </div>
}