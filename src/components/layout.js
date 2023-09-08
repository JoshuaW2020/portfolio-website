import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ children }) => {

  return (
    <div>
      <header>
        <nav>
          This is a navbar
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>This is my footer</footer>
    </div>
  )
}

export default Layout