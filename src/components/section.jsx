import patternDividerDesktop from '../assets/images/pattern-divider-desktop.svg'
import patternDividerMobile from '../assets/images/pattern-divider-mobile.svg'
import useAdviceStore from './adviceStore'

function Section() {

  const { advice, loading, error } = useAdviceStore()
  return (
    <section className="section">
      <p className="sectionParagraph">
        {error}
        {loading && "Loading..."}
        {advice}
      </p>
      <div className="wrapperPatternDivider">
        <img src={patternDividerMobile} alt="Pattern divider" className="patternDividerMobile" />
        {/* desktop image */}
        <img src={patternDividerDesktop} alt="Pattern divider" className="patternDividerDesktop" />
      </div>
    </section>
  )
}

export default Section