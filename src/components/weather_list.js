import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from './chart';
import GoogleMap from './google_map';

class WeatherList extends Component{
    renderWeatherList(cityData){
        const temps = cityData.list.map((weather) => weather.main.temp);
        const pressures = cityData.list.map((weather) => weather.main.pressure);
        const humidities = cityData.list.map((weather) => weather.main.humidity);
        const name = cityData.city.name;
        const {lat,lon} = cityData.city.coord;
        return (        
            <tr key = {name}>
                <td><GoogleMap lat={lat} lon={lon}/><div style={{textAlign:'center'}}>{name}</div></td>
                <td><Chart data={temps} color={"red"} units=" K"/></td>
                <td><Chart data={pressures} color={"blue"} units=" hPa" /></td>
                <td><Chart data={humidities} color={"green"}  units= " %"/></td>
            </tr>
            )    
    }

    render(){
        return (
            <table className="table table-hover table-bordered">
                <thead className="table-dark" style={{textAlign:"center"}}>
                    <tr>
                    <th >City</th>
                    <th >Temperature(K)</th>
                    <th >Pressure(hPa)</th>
                    <th >Humidity(%)</th>
                    </tr>
                </thead>
                <tbody >
                {this.props.weatherList.map(this.renderWeatherList)}
                </tbody>
                </table>
        )
    }
}

function mapStateToProps(state){
    return {weatherList:state.weatherList}
}

export default connect(mapStateToProps)(WeatherList)
