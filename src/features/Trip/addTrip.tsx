import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { boolean } from 'yup';


export default observer(function AddTripComponent(){
const [tripFrom,setTripFrom]=useState("");

const [tripTo,setTripTo]=useState("");
const [tripStartDate,setTripStartDate]=useState("");
const [tripStartTime,setTripStartTime]=useState("");
const [tripArrivalDate,setTripArrivalDate]=useState("");
const [tripArrivalTime,setTripArrivalTime]=useState("");
const [takeOverLocation,setTakeOverLocation]=useState("");
const [canTakeFoodStuff,setCanTakeFoodStuff]=useState(false);
const [handOverLocation,setHandOverLocation]=useState("");
const [canBeHidden,setCanBeHidden]=useState(false);
const [selectedWeight,setSelectedWeight]=useState("");
const getSelectedWeight=():string=>{
    return selectedWeight;
}
const getValidationStyle=(userInput:string,userInputType:string):any=>{

    if(userInput===''){
        return {color:'red',display:'block'};

    }
    else {
       return {display:'none'}; 
    }
}
const validateRequiredInfo=():boolean=>{
    if(tripStartDate==='' || tripStartTime==='' ){
        alert('tripStartDate or tripStartTime is empty');
        return false;  
        
    }
    if (tripTo===''||tripFrom===''){
        alert('tripTo or tripFrom is empty');
        return false;
    }
    if (tripArrivalDate==='' || tripArrivalTime ){
        alert('tripArrivalDate or tripArrivalTime is empty ');
        return false;
    }
    if (takeOverLocation===''||handOverLocation===''){
        alert('handOverLocation or takeOverLocation is empty');
        return false;
    }
    if (tripArrivalDate==='' || tripArrivalTime ==='' ){
        alert('tripArrivalDate or tripArrivalTime is empty ');
        return false;
    }
    if (
        canTakeFoodStuff===null || canTakeFoodStuff===undefined ){
            alert('canTakeFoodStuff is empty');
        return false;
    }
    if(canBeHidden===null || canBeHidden===null || selectedWeight===null ){
        alert('canBeHidden or selectedWeight is empty ');
        return false;
    }
    return true;
}



const sameLineStyle = {display:'inline-block'};
const weightRange= ["light","medium","heavy"];
const getCanTakeFoodStuff=():boolean=>{
    return canTakeFoodStuff;
        
    }


const foodSet=():string=>{
if (getCanTakeFoodStuff()) { 
    return "not";
}
else return "";
}

const packVisiblty=():string=>{
    if (canBeHidden) {
        return "not";
    }
    else return "";
}

function onSave(e:any){
    if(validateRequiredInfo()===false){
        
        return;
    }
    const allInputs=`the trip will start from ' ${tripFrom} '  on ${tripStartDate}   at ${tripStartTime}.
    you can hand over at ${takeOverLocation}  on ${tripStartDate} at ${tripStartTime} .
    I will arrive to ' ${tripTo} ' on ${tripArrivalDate}  at ${tripArrivalTime} time. 
    you can take over at ${handOverLocation} ' on ${tripArrivalDate}   at ${tripArrivalTime} time. 
    . The packet must ${packVisiblty()} be visible and food stuff can ${foodSet()} be acceptable 
    The maximum weight can be ${getSelectedWeight()}`;
alert(allInputs);
}
return(
<>
<div  style={{backgroundColor:'yellow'}}> Add  Trip Information:</div>
<br/>
<div>
<div style={sameLineStyle}>Trip From : <input type="text" onChange={e=>setTripFrom(e.target.value)} value={tripFrom} /> </div>
<div style={sameLineStyle} ><label style={getValidationStyle(tripFrom,"string")}>*</label></div>
<div style={sameLineStyle}>Trip To : <input type="text" onChange={e=>setTripTo(e.target.value)} value={tripTo} /> </div>
<div style={sameLineStyle} ><label style={getValidationStyle(tripTo,"string")}>*</label></div>
<div style={sameLineStyle}>TakeOverLocation : <input type="text" onChange={e=>setTakeOverLocation(e.target.value)} value={takeOverLocation} /> </div>
</div>
<br></br>
<div>
<div style={sameLineStyle}>Trip Start Date  : <input type="text" onChange={e=>setTripStartDate(e.target.value)} value={tripStartDate} /> </div>
&nbsp;&nbsp;&nbsp;
<div style={sameLineStyle}>Trip Start time  : <input type="text" onChange={e=>setTripStartTime(e.target.value)} value={tripStartTime} /> </div>
</div>
<br></br>
<div>
<div style={sameLineStyle}>Trip Arrival Date  : <input type="text" onChange={e=>setTripArrivalDate(e.target.value)} value={tripArrivalDate} /> </div>
&nbsp;&nbsp;&nbsp;
<div style={sameLineStyle}>Trip Arrival time  : <input type="text" onChange={e=>setTripArrivalTime(e.target.value)} value={tripArrivalTime} /> </div>
&nbsp;&nbsp;&nbsp;
<div style={sameLineStyle}>Hand over location  : <input type="text" onChange={e=>setHandOverLocation(e.target.value)} value={handOverLocation} /> </div>
</div>
<br></br>
<div>
<div style={sameLineStyle}>can take food stuff? : <input type="checkbox" checked={canTakeFoodStuff} onChange={e=>setCanTakeFoodStuff(e.target.checked)} /> </div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div style={sameLineStyle}> can be package hidden? <input type="checkbox" checked={canBeHidden} onChange={e=>setCanBeHidden(e.target.checked)}/></div>
</div>
<br></br>
<div> The maximum weight than can be delivered is: 
&nbsp;&nbsp;&nbsp;
<input type="radio" value="5" name="acceptableWeight"  onChange={e=>setSelectedWeight(e.target.value)}/> beatween 0 to 5 kilo
&nbsp;&nbsp;&nbsp;
<input type="radio" value="10" name="acceptableWeight"  onChange={e=>setSelectedWeight(e.target.value)}/> beatween 5 to 10 kilo
&nbsp;&nbsp;&nbsp;
<input type="radio" value="15" name="acceptableWeight" onChange={e=>setSelectedWeight(e.target.value)}/> more than 10 kilo
</div> 
<br/>


<button onClick={onSave} > Save Trip </button>
</>
)

})