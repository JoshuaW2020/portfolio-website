import * as React from 'react'
import { wrapper, foot } from './layout.module.scss'
import Navbar from './navbar'

const Layout = ({ children }) => {

  return (
    <div className={wrapper}>
      <Navbar />
      <main>
        {children}
      </main>
      <footer className={foot}>
        <a href="#home">You reached the bottom! Go back up?</a>
      </footer>
    </div>
  )
}

export default Layout