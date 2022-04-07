
import './components/css/App.css';
import Header from './components/Header';
import data from "./components/data"
import Card from './components/Card';
import Filterlist from './components/Filterlist';
import { useEffect, useState } from 'react';

function App() {
 
  const [filterOptions, setFilterOptions] = useState([])

  const cardsJSXArray = data.map(listing => { // creates <Card/> elements, passing down info from each data obj
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
 
  function handleFilter(ele, props){ //function that's passed down to <Cards/>
    console.log(props)

      setFilterOptions(prevOptions => [...new Set([...prevOptions, ele])]) // gets rids of duplicates, adds clicked element
    
   }
   useEffect(() => { // runs everytime filterOptions is updated && on first render
    if (filterOptions.length === 0){ // checks if filterOptions is empty (mainly for first render)
      setCardsList(cardsJSXArray)
      return;
    } else if (filterOptions.length > 0){
      setCardsList(prevCardList => {
        const newCardList = prevCardList.filter(card => {
          if (filterOptions.every(option => card.props.filterList.includes(option))) {
            // if the Card.props.filterList includes every option in filterOptions, returns the card
            return card;
          }
        })
        return newCardList; // sets cardList as newCardList
      });
    }

    console.log(filterOptions)
  }, [filterOptions])

  function handleClear(){
    setFilterOptions([])
  }
  return (
    <div className="App">
      <Header/>
      {filterOptions.length > 0 && <Filterlist handleClear={handleClear} list ={filterOptions}/>}
      <section className="card-list-container">
       {cardsList}
     
      </section>
      
    </div>
  );
}

export default App;
