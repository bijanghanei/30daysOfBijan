import React from 'react'
import ReactDOM from 'react-dom'
import bijanPhoto from "./images/photo1.jpg"


// JSX element header

const welcome = `Welcome to 30 Days Of React`
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstname: `Bijan`,
  lastName: `Ghanei`
}
const date = `Sep 23, 2023`
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Author: {author.firstname} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne+numTwo}
  </p>
)


const yearBorn = 1997
const currentYear = new Date().getFullYear()
const age = currentYear- yearBorn
const personAge = (
  <p>
    {` `}
    {author.firstname} {author.lastName} is {age} years old.
  </p>
)

const techs = [`HTML`,`CSS`,`JavaScript`,`Java`]
const techFormated = techs.map((tech) => <li>{tech}</li>)

const user = (
  <div>
    <img className="photo" src={bijanPhoto} alt='bijan ghanei'/>
  </div>
)



// JSX element main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
        </p>
      <ul>
        {techFormated}
      </ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
)


// JSX element footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2023</p>
    </div>
    
  </footer>
)

// JSX element parent
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)
const rootElement = document.getElementById(`root`)

ReactDOM.render(app, rootElement)