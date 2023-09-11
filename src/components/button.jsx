import iconDice from '../assets/images/icon-dice.svg'
import useAdviceStore from './adviceStore'

function Button() {

  const { fetchAdvice } = useAdviceStore()

  const handleClick = async () => {
    console.log(28)
    await fetchAdvice()
  }
  return (
    <button className="button" onClick={async () => await handleClick()}>
      <img src={iconDice} alt="" className="buttonIconDice" />
    </button>
  )
}

export default Button