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
              <li><a href="#home"></a>Home</li>
              <li><a href="contacts"></a>Contacts</li>
              <li><a href="about"></a>About</li>
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
