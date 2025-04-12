import React, { useState, useEffect } from 'react'
import { YouTube_SEARCH_API } from '../utils/config';
import { useDispatch, useSelector } from 'react-redux';
import { cacheResults } from '../redux/searchSlice';

const useSearch = (query) => {

    const searchCache = useSelector(store => store.search);
    const dispatch = useDispatch();
    const [suggestions, setShowSuggestions] = useState([]);

    useEffect(() => {
        const getSearchSuggestions = async () => {
            try {
                const data = await fetch(YouTube_SEARCH_API + query);
                const json = await data.json();
                setShowSuggestions(json[1]);
                dispatch(cacheResults({
                    [query]: json[1]
                }));
            } catch (error) {
                console.error("Error fetching videos:", error);
                setShowSuggestions([]);
            }
        }

        const timer = setTimeout(() => {
            if (searchCache[query]) {
                setShowSuggestions(searchCache[query]);
            } else {
                getSearchSuggestions()
            }
        }, 500);

        return () => {
            clearTimeout(timer);
        }
    }, [query, searchCache, dispatch]);

    return suggestions;
}

export default useSearch;