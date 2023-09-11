import useAdviceStore from './adviceStore'

function Header() {

    const { id } = useAdviceStore()

    return (
        <header className="header">
            <h2 className="headerTitle" >ADVICE #{id}</h2>
        </header>
    )
}

export default Header