import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)  
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
        fetch("http://192.168.73.128:8000/api/v1/" + url, {  
            headers: {
                'Authorization': JSON.parse(sessionStorage.token).token,
                'Content-Type': 'application/json'
            }}) 
            .then(response => {
              if(!response.ok) {
                throw Error('Could not fetch data.');
              }
              return response.json();
            })
            .then((data) => {
            setData(data);
            setIsLoading(false);
            setError(null)
          })
          .catch(err => {
            setIsLoading(false)
            setError(err.message)
          })
        }, 1000);
      }, [url]);

      return {data, isLoading, error}
    
}

export default useFetch