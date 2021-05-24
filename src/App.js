import logo from './logo.svg';
import './App.css';
import SearchBox from './SearchBox';
import Header from './Header';
import TableUser from './TableUser';
import AddUser from './AddUser';
import Data from './Data.json'
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      data : Data,
      searchText:""
    }
  }
  testConnect = (e) =>{
    this.setState({
      searchText:e,
    })
  }
  render() {
    let searchData=[]
    this.state.data.forEach(element => {
      if(element.name.indexOf(this.state.searchText)>-1){
        searchData.push(element)
      }
    });
     return (
      <div className="App">
      <div>
        <Header/>
        <div className="searchform">
          <div className="container">
            <div className="row">
              <SearchBox searchTextFunc={(e) =>{this.testConnect(e)}}/>
              <div className="col-12">
                <hr/>
              </div>
             <TableUser dataUser={this.state.searchText ? searchData :this.state.data}/>
              {/* het col 9 */}
              <AddUser/>
              {/* het col 3 */}
            </div>
          </div>
        </div>
      </div>

    </div>
    );
  }
}

export default App;