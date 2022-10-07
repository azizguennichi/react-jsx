//import React from 'react'
import Nav from './Components/Navbar'
import {Home} from './Components/Home'
import './App.css'
import Carouselle from './Components/Carouselle'
function App() {
  const HandleClick = ()=>{
    alert('this is a props of type function')
  }

  const tab = ['BMW', 'FERRARI','PORSHE','AUDI','MERCEDEZ']
  
  const imgUrls ={
    url1:'https://img.freepik.com/vecteurs-libre/suivez-moi-conception-themes-sociaux-commerciaux_24877-50426.jpg?size=338&ext=jpg&ga=GA1.2.678311658.1657016926',
    url2:'https://img.freepik.com/vecteurs-libre/illustration-caractere-personnes-detenant-icones-compte-utilisateur_53876-43022.jpg?size=626&ext=jpg&ga=GA1.2.678311658.1657016926',
    url3:'https://img.freepik.com/vecteurs-libre/illustration-du-concept-flux-utilisateur_114360-1658.jpg?size=338&ext=jpg&ga=GA1.2.678311658.1657016926'
  }
  return (
    <div className="App">
      <Nav/>
      <Carouselle img1={imgUrls}/>
      <hr/>
      <Home 
           
            number={6}
            fun={HandleClick}
            array ={tab}
            image = 'data:image/png;base64,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'
      >
        <div>
          <h2>This is a child props</h2>
          <h3>Hello it's a child props also</h3>
        </div>
      </Home>
    </div>
    
  );
}

export default App;
