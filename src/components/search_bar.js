import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import searchedItem from '../reducers/reducer_weather';
import locationSearched from '../actions/index';

class SearchBar extends Component{
handleSubmit(e){
    e.preventDefault();
    if(e.target.search_bar.value === ''){
        return alert("Please enter the location name")
    }

    this.props.locationSearched(e.target.search_bar.value);
    e.target.search_bar.value = '';
}
    render(){
        return (
            <div className="container">
            <br />
            <div className="row">
            <div className="col-12">
                <form  method="POST" className="form-inline" onSubmit={this.handleSubmit.bind(this)}  >
                <div className="col-10" style={{textAlign:'center'}} >
                    <input type="text" className="form-control  w-100" ref="search_bar" id="search_bar" placeholder="Search" style={{marginRight:3}}/>
                    </div>
                    <div className="col-2" style={{textAlign:'center'}}>
                    <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </form>
            </div>
            </div>
            <br /><br />
            </div>
 
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({locationSearched:locationSearched},dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar)
