import { useState, useEffect } from "react"

export function useFetch() {
    const [advice, setAdvice] = useState(null)
    const [adviceId, setAdviceId] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchAdvice()
    }, [])


    const fetchAdvice = () => {
        const abortControler = new AbortController()
        setLoading(true)
        fetch('https://api.adviceslip.com/advice', { signal: abortControler.signal })
            .then((response) => response.json())
            .then((data) => {
                setAdvice(data.slip.advice)
                setAdviceId(data.slip.id)
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false))

        return () => abortControler.abort()

    }

    const handleClick = () => {
        fetchAdvice()
    }


    return { advice, adviceId, loading, error, handleClick }
}
