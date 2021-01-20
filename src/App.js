import Address from './Address'
import './App.css';


const letter = {
  to:{ name: 'Austin',
    address: '123, st. Boston MA 02118'
  },
  from: {
    name: 'Shiri',
    address:'234, st. Texas MS 34273'
  }
 
  
}
 

function App() {
  return (
    <Address person={letter} />
   
   
  );
}

export default App;
