import gitHub from '../assets/images/github-mark-white.png'
function Footer() {
  return (
    <footer className="footer">
      <p className='link'>
        Challenge by&nbsp;
        <a href='https://www.frontendmentor.io/challenges' target={'_blank'} rel='noreferrer'>
          Frontend Mentor
        </a>.
      </p>
      <p className='link'>
        Coded by&nbsp;
        <a href='https://www.linkedin.com/in/arielcontra/' target={'_blank'} rel='noreferrer'>
          Ariel Contreras.
        </a>
        <a href='https://github.com/Arielcontra/advice-generator-app-main' target={'_blank'} rel='noreferrer'>
          <img src={gitHub} alt='Logo github' className='logoGitHub' />
        </a>
      </p>
    </footer>
  )
}
export default Footer