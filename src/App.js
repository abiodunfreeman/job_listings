
import './components/css/App.css';
import Header from './components/Header';
import data from "./components/data"
import Card from './components/Card';
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
   useEffect(() => { // runs everytime filterOptions is updated
    if (filterOptions.length === 0){
      return;
    } else if (filterOptions.length > 0){
      setCardsList(prevCardList => {
        console.log(prevCardList[0].props.filterList)
        const newCardList = prevCardList.filter(card => {
          if (filterOptions.every(option => card.props.filterList.includes(option))) {
            return card;
          }
        })
        console.log(newCardList)
        return newCardList;
      });
    }

    console.log(filterOptions)
  }, [filterOptions])
  return (
    <div className="App">
      <Header/>
      <section className="card-list-container">
       {cardsList}
     
      </section>
      
    </div>
  );
}

export default App;
