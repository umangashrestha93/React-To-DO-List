import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'
function Home() {

  return (
    <>
        <section>
            <header>
              <div className='home'>
                <h1>React CRUD APPLICATION</h1>
                </div>
            </header>
        </section>
        <button className='link-button'>
        <Link to='adduser' >Add User</Link>
        </button>
    </>
  )
}

export default Home