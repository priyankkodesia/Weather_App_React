import React ,{Component} from 'react';

export default class extends Component{
    componentDidMount(props){
        new google.maps.Map(this.refs.map,{
            zoom:12,
            center:
            {
                lat:this.props.lat,
                lng:this.props.lon
            }
        })
    }
    render(){
        return <div ref="map" style={{height:155, width:180,margin:'auto'}}/>
    }
}
