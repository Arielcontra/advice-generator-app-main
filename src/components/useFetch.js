import { useState, useEffect } from "react"

export function useFetch() {
    const [advice, setAdvice] = useState(null)
    const [adviceId, setAdviceId] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        (async () => {
            await fetchAdvice()
        })()
    }, [])

    const fetchAdvice = async () => {
        setLoading(true)
        fetch('https://api.adviceslip.com/advice')
            .then((response) => response.json())
            .then((data) => {
                setAdvice(data.slip.advice)
                setAdviceId(data.slip.id)
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }

    const handleClick = async () => {
        await fetchAdvice()
    }

    return { advice, adviceId, loading, error, handleClick }
}





// import { useState, useEffect } from "react"

// export function useFetch() {
//     const [advice, setAdvice] = useState(null)
//     const [adviceId, setAdviceId] = useState(null)
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         (async () => {
//             await fetchAdvice()
//         })()
//     }, [])

//     const fetchAdvice = async () => {
//         const abortControler = new AbortController()
//         setLoading(true)
//         fetch('https://api.adviceslip.com/advice', { signal: abortControler.signal })
//             .then((response) => response.json())
//             .then((data) => {
//                 setAdvice(data.slip.advice)
//                 setAdviceId(data.slip.id)
//             })
//             .catch((error) => setError(error))
//             .finally(() => setLoading(false))

//         return () => abortControler.abort()

//     }

//     const handleClick = async () => {
//         await fetchAdvice()
//     }

//     return { advice, adviceId, loading, error, handleClick }
// }

