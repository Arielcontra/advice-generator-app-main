import { useEffect } from 'react'
import useAdviceStore from './components/adviceStore'
import './index.css'
import Header from './components/header'
import Section from './components/section'
import Button from './components/button'
import Footer from './components/footer'

function App() {

  const { fetchAdvice } = useAdviceStore();

  useEffect(() => {
    fetchAdvice()
  }, [])

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
