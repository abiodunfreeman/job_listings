
import './components/css/App.css';
import Header from './components/Header';
import data from "./components/data"
import Card from './components/Card';

function App() {
  console.log(data)
  const cardsJSXArray = data.map(listing => {
    return (
      <Card
      key={listing.id}
      data={listing}
      />
    )
  })
  return (
    <div className="App">
      <Header/>
      <section className="card-list-container">
       {cardsJSXArray}
       {/* {cardsJSXArray[3]} */}
      </section>
      
    </div>
  );
}

export default App;
