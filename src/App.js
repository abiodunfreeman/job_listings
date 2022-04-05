
import './components/css/App.css';
import Header from './components/Header';
import data from "./components/data"
import Card from './components/Card';
import { useEffect, useState } from 'react';

function App() {
 
  
  const cardsJSXArray = data.map(listing => {
    const filterList = [listing.role, listing.level, ...listing.tools, ...listing.languages] // //takes all filter options from data and puts into one array 

    return (
      <Card
      key={listing.id}
      data={listing}
      filterList={filterList}
      handleFilter={handleFilter}
      />
    )
  })
  const [cardsList , setCardsList] = useState(cardsJSXArray)
  const [filterOptions, setFilterOptions] = useState([])
  function handleFilter(ele){
    
    if (filterOptions.includes(ele) === false){ // pretty sure i can remove the if statement
      setFilterOptions(prevOptions => new Set([...prevOptions, ele])) // gets rids of duplicates, adds clicked element
    }
  
  
   }
  useEffect(() => {
    console.log(filterOptions)
  }, [filterOptions])
  return (
    <div className="App">
      <Header/>
      <section className="card-list-container">
       {cardsList[0]}
      </section>
      
    </div>
  );
}

export default App;
