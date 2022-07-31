import React from 'react'
import { Features, Hero, Newsletter, Testimonials } from './components'
import { Header, Main, Footer } from './layouts'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Features className='section' />
        <Testimonials className='section' />
        <Newsletter className='section text-light' />
      </Main>
      <Footer />
    </>
  )
}

export default App
