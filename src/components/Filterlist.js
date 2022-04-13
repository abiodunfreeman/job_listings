import React from 'react'
import "./css/filterlist.css"
export default function Filterlist( props ) {
  const {list, handleClear} = props
  const listJSX = list.map(option => <li className="option-item">{option}</li>)
  return (
    <div id="filter-list">
      <ul id="list">
        {listJSX}
      </ul>
      <h3 
      onClick={() => handleClear()}
>
        Clear
        </h3>
    </div>
  )
}
