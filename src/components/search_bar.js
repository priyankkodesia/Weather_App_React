import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import searchedItem from '../reducers/reducer_searched_item';
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
        return (<div>
            <form className="form-inline" method="POST" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group mx-sm-6 mb-2">
                <input type="text" className="form-control" ref="search_bar" id="search_bar" placeholder="Search" style={{marginRight:3}}/>
            </div>
            <button type="submit" ref="search_button" id="search_button" className="btn btn-primary mb-2">Search</button>
            </form>

            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({locationSearched:locationSearched},dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar)
