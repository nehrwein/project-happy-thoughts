import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from 'components/Footer'



export const App = () => {
  return (
    <div className="site-container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
