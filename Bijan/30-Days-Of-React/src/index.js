import React from 'react'
import ReactDOM from 'react-dom'
import bijanPhoto from "./images/photo1.jpg"



const currentDate = new Date();

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
const timeHandler = () => {
  alert(showDate(new Date()))
}
const greetingFunction = () => {
  alert('Welcome to 30 Days Of React Challenge, 2020')
}

const Header = ({welcome,title,subtitle, firstName,lastName,date}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          Author: {firstName} {lastName}
        </p>
        <small>Date: {showDate(date)}</small>
      </div>
    </header>
  )
}



// const yearBorn = 1997
// const currentYear = new Date().getFullYear()
// const age = currentYear- yearBorn
// const personAge = (
//   <p>
//     {` `}
//     {author.firstname} {author.lastName} is {age} years old.
//   </p>
// )

const techs = [`HTML`,`CSS`,`JavaScript`,`Java`]
const TechList = ({items}) => {
  return (
    items.map((tech) => <li>{tech}</li>)
  )
}

const UserCard = ({firstName,lastName,imageSrc}) => {
  return(
    <div className="user-card">
      <img className="photo" src={imageSrc} alt={`${firstName} ${lastName}`}/>
      <h2>
        {firstName} {lastName}
      </h2>
    </div>
  )
}

const Button = ({text,onClick,style}) => {
  return(
    <button style={style} onClick={onClick}>{text}</button>
  )
} 

const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSixe: 18,
  color: "white",
}

const Main = ({items,fName,lName,greetPeople,handleTime}) => (
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
        <TechList items={items}/>
      </ul>
      <UserCard firstName={fName} lastName={lName} imageSrc={bijanPhoto}/>
      <Button text="Greet People" onClick={greetPeople} style={buttonStyles} />
      <Button text="Show Time" onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
)



const Footer = ({text,date}) => (
  <footer>
    <div className='footer-wrapper'>
      <p>{text} {date.getFullYear()}</p>
    </div>
    
  </footer>
)


const App = () => (
  <div className='app'>
    <Header 
      welcome='Welcome to 30 Days Of React'
      title='Getting Started React'
      subtitle='JavaScript Library'
      firstName="Bijan"
      lastName="Ghanei"
      date= {currentDate}
    />
    <Main items={techs} fName="Bijan" lName="Ghanei" handleTime={timeHandler} greetPeople={greetingFunction}/>
    <Footer text="Copyright" date={currentDate} />
  </div>
)
const rootElement = document.getElementById(`root`)

ReactDOM.render(<App />, rootElement)