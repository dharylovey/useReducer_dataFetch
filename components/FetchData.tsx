'use client'

import axios from "axios";
import { useEffect, useReducer } from "react"

const initValue = {
    loading: true,
    error: '',
    post: {},
    id: 1,
    buttonClick: 1
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, post: action.payload, error: '' }
        case 'FETCH_ERROR':
            return { ...state, loading: false, post: {}, error: action.payload }
        case 'SET_ID':
            return { ...state, id: action.payload }
        case 'SET_BUTTON_CLICK':
            return { ...state, buttonClick: action.payload }
        default:
            return state;
    }
}





const FetchDataUseReducertwo = () => {
    const [state, dispatch] = useReducer(reducer, initValue)
    const { loading, error, post, id, buttonClick } = state;

    useEffect(() => {
        (async () => {
            try {
                dispatch({ type: 'FETCH_START' });
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClick}`)
                const data = response.data
                dispatch({ type: 'FETCH_SUCCESS', payload: data })
            } catch (error) {
                dispatch({ type: 'FETCH_ERROR', payload: 'Something went Wrong!!!' })
            }
        })();
    }, [buttonClick])

    const handleClick = () => {
        dispatch({ type: 'SET_BUTTON_CLICK', payload: id })
    }
    return (
        <div className="flex flex-col gap-4">
            <input
                type="text"
                value={id}
                onChange={e => dispatch({ type: 'SET_ID', payload: e.target.value })}
                className="w-full"
            />
            <button
                onClick={handleClick}
                className="border "
            >
                FETCH DATA FROM SERVER
            </button>
            <p>
                {loading ? 'Loading...' : post.title}
                {error && error}
            </p>
        </div>
    )
}

export default FetchDataUseReducertwo
