import React from 'react'
import "./css/filterlist.css"
export default function Filterlist( props ) {
  const {list, handleClear} = props
  const listJSX = list.map(option =>  <li className="option-item">
  <h3>{option}</h3>
  <button type='button'>X</button>
</li>)


  return (
    <div id="filter-list">
      <ul id="list">
        {listJSX}
      </ul>
      <h3 
      id='clear-btn'
      onClick={() => handleClear()}
>
        Clear
        </h3>
    </div>
  )
}
