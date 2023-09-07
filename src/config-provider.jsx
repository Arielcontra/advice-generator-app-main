import { createContext, useState } from "react"

const ConfigContext = createContext()

//eslint-disable-next-line
const ConfigProvider = ({ children }) => {
    const [advice, setAdvice] = useState('')
    const [adviceId, setAdviceId] = useState('')

    const values = {
        advice, setAdvice,
        adviceId, setAdviceId
    }

    return (
        <ConfigContext.Provider value={values}>
            {children}
        </ConfigContext.Provider>
    )
}

export { ConfigContext, ConfigProvider }