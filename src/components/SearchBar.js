import React from "react";
export class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchValue:""
        };
        
    };

    saveSearch = (event) =>{
        this.setState(
            {
                searchValue: event.target.value 
            }
        )
    }

    searchClick = (event) =>{
        event.preventDefault();
        this.props.onsearchBar(this.state.searchValue)
    }


    render(){
        return(
            <>
            <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search Films" aria-label="Search" onChange={this.saveSearch} value={this.state.searchValue}/> 
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.searchClick} >Search</button>
            </form>
            </>
        )
    }
};

