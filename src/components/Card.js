import React from 'react'
import "./css/card.css"
export default function Card( props ) {
    const {data} = props
    const {company, contract, featured, id, languages, level, location, logo, position, postedAt, role, tools} = data
    const languagesList = languages.map(element => <li>{element}</li>) // takes all languages and puts them individually in li elements
    const newLogo = <div className='new--logo'><p>NEW!</p></div>
    const featuredLogo = <div className='featured--logo'><p>FEATURED</p></div>
    return (
    <div className="card--container">
        <div className="card--left">
            <img src={data.logo} alt="company logo"/>
            <div className='card--text'>
                <div className='card--name'>
                    <h4>{company}</h4>
                    {data.new && newLogo}
                    {featured && featuredLogo}
                </div>
                <h3>{position}</h3>
            </div>
        </div>
        <div className='card--right'>
           <ul className="card--languages">
            {languagesList} 
           </ul>
        </div>
    </div>
  )
}
