import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import './index.scss'

const Home = () => {
  const [letterClass] = useState('text-animate')
  const nameArray = [
    'E',
    'l',
    'i',
    's',
    'a',
    'b',
    'e',
    't',
    'h',
    ' ',
    'E',
    'r',
    'k',
    'e',
    'k',
    'o',
    'g',
    'l',
    'o',
    'u',
  ]
  const jobArray = [
    'F',
    'r',
    'o',
    'n',
    't',
    'e',
    'n',
    'd',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'p',
    'e',
    'r',
  ]

  /* Bounce and hover --> 
  -useEffect-(() => {

    setTimeout();
  }, [])

  const setTimeout = () => {
    return(
    -setLetterClass-('text-animate-hover')
  , 4000)
  }
  */

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            👋<span className={`${letterClass} _13`}>I'</span>
            <span className={`${letterClass} _14`}>m</span> <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / Photographer / Catmom</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <br></br>
          <br></br>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
