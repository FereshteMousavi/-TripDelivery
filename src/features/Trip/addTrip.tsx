import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { boolean } from 'yup';


export default observer(function AddTripComponent(){
const [tripFrom,setTripFrom]=useState("");

const [tripTo,setTripTo]=useState("");
const [tripStartDate,setTripStartDate]=useState("");
const [tripArrivalDate,setTripArrivalDate]=useState("");
const [takeOverLocation,setTakeOverLocation]=useState("");
const [canTakeFoodStuff,setCanTakeFoodStuff]=useState(false);
const [handOverLocation,setHandOverLocation]=useState("");
const [canBeHidden,setCanBeHidden]=useState(false);
const weightRange= ["light","medium","heavy"];
const getCanTakeFoodStuff=():boolean=>{
    return canTakeFoodStuff;
}
function onSave(e:any){
    const allInputs=`${tripFrom} , ${tripTo} , ${tripStartDate}  is input`
alert(allInputs);
}
return(
<>
<div> Add  Trip Information:</div>
<div>Trip From : <input type="text" onChange={e=>setTripFrom(e.target.value)} value={tripFrom} /> </div>
<br></br>
<div>Trip To : <input type="text" onChange={e=>setTripTo(e.target.value)} value={tripTo} /> </div>
<br></br>
<div>TakeOverLocation : <input type="text" onChange={e=>setTakeOverLocation(e.target.value)} value={takeOverLocation} /> </div>
<br></br>
<div>Trip Start Date  : <input type="text" onChange={e=>setTripStartDate(e.target.value)} value={tripStartDate} /> </div>
<br></br>
<div></div>
<div>Trip Arrival Date  : <input type="text" onChange={e=>setTripArrivalDate(e.target.value)} value={tripArrivalDate} /> </div>
<br></br>
<div>Trip From : <input type="text" onChange={e=>setTripFrom(e.target.value)} value={tripFrom} /> </div>
<br></br>
<div>can take food stuff? : <input type="checkbox" checked={canTakeFoodStuff} onChange={e=>setCanTakeFoodStuff(e.target.checked)} /> </div>
<div> can be package hidden? <input type="checkbox" checked={canBeHidden} onChange={e=>setCanBeHidden(e.target.checked)}/></div>
<br/>


<button onClick={onSave} > Save Trip </button>
</>
)

})