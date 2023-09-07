// import { useEffect, useContext } from 'react'
// import { ConfigContext } from '../config-provider'


// const { setAdvice, setAdviceId } = useContext(ConfigContext)

// useEffect(() => {
//     fetchAdvice()
// }, [])

// const fetchAdvice = () => {
//     fetch('https://api.adviceslip.com/advice')
//         .then((response) => response.json())
//         .then((data) => {
//             setAdvice(data.slip.advice)
//             setAdviceId(data.slip.id)
//         })
//         .catch((error) => console.error('Error al obtener el consejo:', error));
// }
