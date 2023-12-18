import React from 'react';
import './App.css'
import Header from './components/Header';
import PeopleList from './components/PeopleList';
import CharacterDetails from './components/CharacterDetails';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {
  
  return (

       <>
       <div className='App'>
          
        <Header />
        <PeopleList /><br></br><hr></hr>
        <CharacterDetails/>

        {/* <Router>
      <Switch>
        <Route path="/" component={<PeopleList/>} />
        <Route path="/character" component={<CharacterDetails/>} />
        
      </Switch>
    </Router> */}

       </div>
        
      </>
      

  )
}

export default App

