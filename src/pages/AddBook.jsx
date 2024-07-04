import React, { useState } from 'react'
import '../styles/Forms.css'
import '../index.css'


export default function AddBook() {  

    const [title, setTitle] = useState()
    const [author, setAuthor] = useState()


    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            titre: title, 
            auteur: author
        }
        console.log(data)

        fetch('http://localhost:8000/api/livres', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Accept": "application/json", "Content-Type": "application/json"}
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

  return (
    <div className='App'>
      <h1>Enregistrer un livre</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='Titre' required onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder='Auteur' required onChange={(e) => setAuthor(e.target.value)} />
        <button>Enregistrer</button>
      </form>
    </div>
  )
}
