import patternDividerDesktop from '../assets/images/pattern-divider-desktop.svg'
import patternDividerMobile from '../assets/images/pattern-divider-mobile.svg'
import { useFetch } from "./useFetch"
function Section() {

  const { advice, loading, error } = useFetch()
  return (
    <section className="section">
      <p className="sectionParagraph">
        {error && "Failed to get advice"}
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