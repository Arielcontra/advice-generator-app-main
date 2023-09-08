import iconDice from '../assets/images/icon-dice.svg'
import { useFetch } from "./useFetch"

function Button() {

  const { handleClick } = useFetch()

  return (
    <button className="button" onClick={handleClick}>
      <img src={iconDice} alt="" className="buttonIconDice" />
    </button>
  )
}

export default Button