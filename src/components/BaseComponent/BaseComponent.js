import React, { useState } from "react";
import "./BaseComponent.css";

function BaseComponent(props) {
  
  const [empName, selectedEmpName] = useState(props.employeeName);
  const clickTaskExecutor = (event) => {
    selectedEmpName(props.employeeName + " has been selected ");
  };

  return (
    <div>
      <div className="employee">
        <p>{props.employeeCode} </p>
        <p>{empName} </p>
        <p>{props.employeeDepartment}</p>
        <p>{props.employeeDate}</p>
        <button className="viewButton" onClick={clickTaskExecutor}>
          view Details
        </button>
      </div>
    </div>
  );
  
}

export default BaseComponent;