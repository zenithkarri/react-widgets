import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [ term, setTerm ] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [ results, setResults ] = useState([]);

    console.log(results);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return() => {
            clearTimeout(timeoutId);
        }
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    format: 'json',
                    list: 'search',
                    origin: '*',
                    srsearch: term
                },
            });
            setResults(data.query.search);
        };
        search();

    }, [debouncedTerm]);

    // Older method where results.length needed to be added to the useEffect function in order to fulfil a react dependency, but it would add to additional callbacks to the API. So code has been rewritten
    // useEffect(() => {
    //     const search = async () => {
    //         const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
    //             params: {
    //                 action: 'query',
    //                 format: 'json',
    //                 list: 'search',
    //                 origin: '*',
    //                 srsearch: term
    //             },
    //         });
    //         setResults(data.query.search);
    //     };

    //     if (term && !results.length){
    //         search();
    //     } else {
    //         const timeoutId = setTimeout(() => {
    //             if (term){
    //                 search();
    //             }
    //         }, 500);
    //         //Cleanup Function
    //         return () => {
    //             clearTimeout(timeoutId);
    //         };
    //     }
    // }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: result.snippet }}></div>
                    
                    
                </div>
            </div>
        );
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" type="text" value={term} onChange={e => setTerm(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
        
    );
}

export default Search;