
import ListGroup from "./components/ListGroup";

function App(){
    let items = [
      "Ghana",
      "Nigeria",
      "Kenya",
      "South Africa",
      "Uganda",
      "Tanzania",
      "Zimbabwe",
      "Rwanda",
    ];

    const handleSelectItem = (item: string) => {
      console.log(item);
    }

  return( <div>
   <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
  </div>);
}

export default App;