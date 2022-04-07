import React from 'react'
import "./css/filterlist.css"
export default function Filterlist( props ) {
  const {list, handleClear} = props
  return (
    <div id="filter-list">
      {list}
      <button 
      onClick={() => handleClear()}
      type="button">
        X Clear
        </button>
    </div>
  )
}
