import { useState, useEffect } from 'react';
import yelp from '../api/yelp'

export default () => {

    const [results, setResults] = useState([])
    const [errorMessage, setEroorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'new york'
                }
            });
            setResults(response.data.businesses)
        } catch (err) {
            setEroorMessage('something went wrong')
        }
    }

    useEffect(() => {
        searchApi('pasta')
    }, []);

    return [searchApi, results, errorMessage];
}


