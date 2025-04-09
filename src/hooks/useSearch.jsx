import React, { useState, useEffect } from 'react'
import { YouTube_SEARCH_API } from '../utils/config';

const useSearch = (query) => {

    const [suggestions, setShowSuggestions] = useState([]);

    useEffect(() => {
        const getSearchSuggestions = async () => {
            try {
                const data = await fetch(YouTube_SEARCH_API + query);
                const json = await data.json();
                setShowSuggestions(json[1]);
            } catch (error) {
                console.error("Error fetching videos:", error);
                setShowSuggestions([]);
            }
        }

        const timer = setTimeout(() => {
            getSearchSuggestions()
        }, 500);

        return () => {
            clearTimeout(timer);
        }
    }, [query]);

    return suggestions;
}

export default useSearch