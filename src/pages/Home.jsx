import React, { useEffect, useState } from 'react'
import Book from '../components/Book'
import '../index.css'
import '../styles/Home.css'

export default function Home() {

    const [livres, setLivres] = useState()

    useEffect(()=> {
      if (!livres) {
        fetch('http://localhost:8000/api/livres')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setLivres(data)
        })
        .catch(error => console.log(error))
      }
    }, [livres])


  return (
    <div className='App'>
      <h1>Voici les livres</h1>
      <div className='div-livres'>
        {livres && (
            livres.map((livre, index) => (
                <Book key={index} livre={livre} index={index} />
            ))
        )}
      </div>
    </div>
  )
}
