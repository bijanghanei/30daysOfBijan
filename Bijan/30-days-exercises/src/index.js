import React, { useCallback, useState } from 'react'
import ReactDOM from 'react-dom'
import bijanPhoto from "./images/photo1.jpg"






// const welcome = `Welcome to 30 Days Of React`
// const title = 'Getting Started React'
// const subtitle = 'JavaScript Library'
const person = {
  firstname: `Bijan`,
  lastName: `Ghanei`,
  jobTitle: `Software Engineering Student`,
  country: `Canada`
}
// const date = `Sep 23, 2023`



const Header = ({welcome,title,subtitle,date}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          person: {person.firstname} {person.lastName}
        </p>
        <small>Date: {date}</small>
      </div>
    </header>
  )
}
const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne+numTwo}
  </p>
)




const techs = [`HTML`,`CSS`,`JavaScript`,`Java`,`Java`,`Java`,`Java`,`Java`,`Java`,`Java`,`Java`,`Java`,`Java`,`Java`,`Java`,`Java`,
`Java`,`Java`,`Java`,`Java`,`Java`,`Java`,`Java`,`Java`,`Java`,`Java`]

const langs = [`Farsi`,`Spanish`,`English`]


const Tag = ({text, color}) => {
  return <div className="tag" style={{backgroundColor: color}}>
    {text}
  </div>
}

const Tags = ({color, items}) => {
  return items.map((item) => <Tag color={color} text={item} />)
}

const UserCard = () => (
  <div className="user-card">
    <img className="profile-pic" src={bijanPhoto} alt='bijan ghanei'/>
    <h2>
      {person.firstname} {person.lastName} ⏸️
    </h2>
    <p>{person.jobTitle}, {person.country}</p>
    <h2>Skills</h2>
    <div className='skills'>
      <Tags color="red" items={techs} />
    </div>
    <h2>Languages</h2>
    <div className='languages'>
      <Tags color="blue" items={langs} />

      <Tag text="Saeed" color="green" />
      <Tag text="Bijan" color="orange" />
    </div>
  </div>
)



const Main = () => (
  <main>
    <div className='main-wrapper'>
      <Header
        welcome='Welcome to 30 Days Of React'
        title='Getting Started React'
        subtitle='JavaScript Library'
        date="Sep 25th, 2023"
      />
      <UserCard />
    </div>
  </main>
)



// const Footer = () => (
//   <footer>
//     <div className='footer-wrapper'>
//       <p>Copyright 2023</p>
//     </div>
    
//   </footer>
// )


const App = () => (
  <div className='app'>
    {/* <Header /> */}
    <Main />
    {/* <Footer /> */}
  </div>
)
const rootElement = document.getElementById(`root`)

ReactDOM.render(<App />, rootElement)