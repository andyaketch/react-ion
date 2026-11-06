import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id='mainPage'>
        <header>
          <nav id='navbar'>
            <ul>
              <li>Home</li>
              <li>Contacts</li>
              <li>About</li>
            </ul>
          </nav>
        </header>
      </section>
      <section id='cards'>
        <article>
         <h3>Avatar:Seven Havens</h3>
         <p>A new story about twin avatars</p>
        </article>
      </section>
    </>
  )
}

export default App
