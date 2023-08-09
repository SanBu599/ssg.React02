import react, { useState } from 'react';
import secondComp from "./SecondComponent";

function firstComp(props){

    console.log(props.name);

    return(
        <div>
            <h3>firstComp(props.name)</h3>

            <secondComp ={props.name}/>
        </div>
    )
}

export default firstComp;