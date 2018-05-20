import React,{Component} from 'react'
import { Sparklines,SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data){
    return _.round(_.sum(data)/data.length)
}

export default function(props){
    return (<div><div>
    <Sparklines data={props.data} width={180} height={120}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg"/>
    </Sparklines>
    </div>
    <div style={{textAlign:'center'}}>{average(props.data)}{props.units}</div>
    </div>
    )
}