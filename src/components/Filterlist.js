import React from 'react'
import "./css/filterlist.css"
export default function Filterlist( props ) {
  const {list} = props
  return (
    <div id="filter-list">
      {list}
    </div>
  )
}
