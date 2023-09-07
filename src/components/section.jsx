import { useContext } from 'react'
import { ConfigContext } from '../config-provider'
import patternDividerDesktop from '../assets/images/pattern-divider-desktop.svg'
import patternDividerMobile from '../assets/images/pattern-divider-mobile.svg'

function Section() {

  const { advice } = useContext(ConfigContext)

  return (
    <section className="section">
      <p className="sectionParagraph">"{advice}"</p>
      <div className="wrapperPatternDivider">
        <img src={patternDividerMobile} alt="Pattern divider" className="patternDividerMobile" />
        {/* desktop image */}
        <img src={patternDividerDesktop} alt="Pattern divider" className="patternDividerDesktop" />
      </div>
    </section>
  )
}
export default Section