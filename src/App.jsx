
import './index.sass'
import Header from './components/header'
import Section from './components/Section'
import Button from './components/button'
import Footer from './components/footer'

function App() {


  return (
    <>
      <main className="wrapperApp">
        <div className="container">
          <Header />
          <Section />
          <Button />
        </div>
        <Footer />
      </main>
    </>
  )
}

export default App
