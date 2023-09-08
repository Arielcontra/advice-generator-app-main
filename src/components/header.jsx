import { useFetch } from "./useFetch"

function Header() {

    const { adviceId } = useFetch()
    
    return (
        <header className="header">
            <h2 className="headerTitle" >ADVICE #{adviceId}</h2>
        </header>
    )
}

export default Header