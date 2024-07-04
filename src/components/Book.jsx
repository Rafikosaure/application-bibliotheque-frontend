import React from 'react'
import '../styles/Book.css'
import { Link } from 'react-router-dom'

export default function Book({ livre }) {


  return (
    <>
      
        <div className='div-livre'>
            <h2>{livre.titre}</h2>
            <h3>{livre.auteur}</h3>
            <Link className='modify-button' to={`/modify/${livre.id}`}>Modifier</Link>
        </div>
      
    </> 
  )
}
