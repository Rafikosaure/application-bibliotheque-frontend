import React, { useEffect, useState } from 'react'
import '../styles/Forms.css'
import '../index.css'
import { useParams } from 'react-router-dom'


export default function AddBook() {  

    const { bookId } = useParams()
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [currentBook, setCurrentBook] = useState()


    useEffect(() => {
        if (!currentBook) {
            fetch(`http://localhost:8000/api/livres`)
            .then(response => response.json())
            .then(books => {
                setCurrentBook(books.find(book => book.id === parseInt(bookId)))
            })
            .catch((error) => console.log(error))
        }
        
        console.log("Livre à modifier :", currentBook)
    }, [currentBook, bookId])


    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            titre: title, 
            auteur: author
        }
        console.log(data)
        
        if (currentBook) {
            console.log('Identifiant du livre :', currentBook.id)
            fetch(`http://localhost:8000/api/livres/${currentBook.id}`, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {"Accept": "application/json", "Content-Type": "application/json"}
            })
            .then(response => response.json())
            .then(data => {
                console.log('Réponse du serveur :', data)
                setCurrentBook(data)
            })
            .catch(error => console.log(error))
        }
        
    }

  return (
    <div className='App'>
    {currentBook && (
        <h1>Modifier : {currentBook.titre}</h1>
    )}
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" placeholder='Titre' onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder='Auteur' onChange={(e) => setAuthor(e.target.value)} />
            <button>Enregistrer</button>
        </form>
      
    </div>
  )
}
