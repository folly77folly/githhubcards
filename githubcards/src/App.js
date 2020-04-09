import React from 'react';
import './App.css';
import Index from './components/index';
import CardList from './components/cardlist';
import Form from './components/form';

// const testData = [
//   {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
// {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
// {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
// ];

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      profile : [],
      gitusername:"",
    }
  }

  handleOnSubmit = (procfile)=>{
    console.log(procfile)
    this.setState(prevState=>({
      profile:[...prevState.profile, procfile]
    }))
  }
 
  render(){
    return (
      <div className="App">
        <header className="">
        <Index title = "The Github Cards App"/>
        <Form onSubmit={this.handleOnSubmit} />
        <CardList profile={this.state.profile}/>
        </header>
      </div>
    );
  }

}

export default App;
