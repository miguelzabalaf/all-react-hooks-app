import { useEffect, useState, useRef } from 'react';

export const useFetch = (url) => {

  const initialState = {
    data: null,
    loading: true,
    error: null
  }

  const isMounted = useRef(true)

  const [state, setState] = useState(initialState);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

  const fetchData = (url) => {
    setState({
      ...initialState,
      loading: true
    })
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        if (isMounted) {
          setState({
            loading: false,
            error: null,
            data
          })
        }
      })
  }

  useEffect(() => {
    fetchData(url)
  }, [url])



  return state;
}
