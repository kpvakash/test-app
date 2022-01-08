import React, { useState } from "react";

const ApiComponent = (props) => {

   

    function fetchApiData() {
  
        fetch('https://api.coinbase.com/v2/currencies').then(responce => { 
            return responce.json() }).then(data => { 
                //setResponceData(data.data)
                props.onApiCall(data.data)
            });
    }

    return (
      
        <div >
        <button onClick={fetchApiData}> call API</button> 
        
        <p></p>
        </div>
    );
}

export default ApiComponent