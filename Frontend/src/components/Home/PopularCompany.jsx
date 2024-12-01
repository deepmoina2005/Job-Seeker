import React from 'react'
import { FaApple, FaMicrosoft } from 'react-icons/fa'
import { SiTesla } from 'react-icons/si'

const PopularCompany = () => {
  const companies = [
  {
    id: 1,
    title: "Microsoft",
    location: "India",
    openPositions: 5,
    icon: <FaMicrosoft/>
  },
  {
    id: 2,
    title: "Apple",
    location: "USA",
    openPositions: 5,
    icon: <FaApple/>
  },
  {
    id: 3,
    title: "Tesla",
    location: "Street 50 USA",
    openPositions: 5,
    icon: <SiTesla/>
  }
]
  return (
    <div className='companies'>
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {
            companies.map(element => {
              return(
                <div className='card' key={element.id}>
                  <div className="content">
                    <div className="icon">{element.icon}</div>
                    <div className="text">
                      <p>{element.title}</p>
                      <p>{element.location}</p>
                    </div>
                  </div>
                  <button>Open Position {element.openPositions}</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default PopularCompany