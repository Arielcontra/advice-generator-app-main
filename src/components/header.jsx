import { useContext } from 'react'
import { ConfigContext } from '../config-provider'

function Header() {
    const { adviceId } = useContext(ConfigContext)
    return (
        <header className="header">
            <h2 className="headerTitle">ADVICE #{adviceId}</h2>
        </header>
    )
}

export default Header