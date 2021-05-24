import React, { Component } from 'react';

class SearchBox extends Component {
    constructor(props){
        super(props);
        this.state={
            searchText:""
        }
    }
    render() {
        return (
            <div className="col-12 d-flex align-items-start">
                <div className="form-group">
                    <div className="btn-group" role="group" aria-label>
                        <label />
                        <input type="text" name="search" id="search-id" className="form-control" placeholder="search" onChange={(e) =>{this.setState({searchText:e.target.value})}} aria-describedby="helpId" />
                        <button type="button" className="btn btn-primary" onClick={() =>{this.props.searchTextFunc(this.state.searchText)}}>Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBox;