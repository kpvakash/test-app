//import './App.css';
import BaseComponent from "./components/BaseComponent/BaseComponent";
import AddComponent from "./components/AddComponent/AddComponent";
import FilterDepartment from "./components/FilterDepartment/FilterDepartment";
import ApiComponent from "./components/ApiComponent/ApiComponent";
import React from "react";
import { useState } from "react/cjs/react.development";


const DUMMY_DATA = [
  {
    empCode: "301",
    empName: "Mohan",
    empDepartment: "Java",
    empJoiningDate: new Date(2021, 7, 27).toISOString(),
  },
  {
    empCode: "307",
    empName: "Rafiq",
    empDepartment: "Java",
    empJoiningDate: new Date(2021, 7, 27).toISOString(),
  },
  {
    empCode: "367",
    empName: "Sharma",
    empDepartment: "Java",
    empJoiningDate: new Date(2021, 7, 27).toISOString(),
  },
  {
    empCode: "302",
    empName: "Ravi",
    empDepartment: "Spring",
    empJoiningDate: new Date(2021, 7, 27).toISOString(),
  },
  {
    empCode: "303",
    empName: "Madhan",
    empDepartment: "NodeJS",
    empJoiningDate: new Date(2021, 7, 27).toISOString(),
  },
  {
    empCode: "327",
    empName: "sachin",
    empDepartment: "NodeJS",
    empJoiningDate: new Date(2021, 7, 27).toISOString(),
  },
  {
    empCode: "551",
    empName: "Kabir",
    empDepartment: "DotNet",
    empJoiningDate: new Date(2021, 7, 27).toISOString(),
  }
];

function App(props) {

  const [employeeData, setNewEmployeeData] = useState(DUMMY_DATA);
  const [responceData, setResponceData] = useState([])
  const [filteredDept, setFilteredDept] = useState("Java");

  const SaveSubmitData = (newEmployeeData) => {
    setNewEmployeeData((previousEmployeeData) => {
      return [newEmployeeData, ...previousEmployeeData];
    });
  };

  const handleResponceData = (apiResponceData) =>{
    setResponceData(apiResponceData)
   // console.log(responceData)
  }

  const filterChangeHandler = (selectedDep) => {
    setFilteredDept(selectedDep);
  };

  const filteredEmployees = employeeData.filter((employees) => {
    return employees.empDepartment === filteredDept;
  });

  let employeesContent = <p>No Employees found.</p>;

  if (filteredEmployees.length > 0) {
    employeesContent = filteredEmployees.map((employees) => (
      <BaseComponent
        key={employees.empCode}
        employeeCode={employees.empCode}
        employeeName={employees.empName}
        employeeDepartment={employees.empDepartment}
        employeeDate={employees.empJoiningDate}
      />
    ));
  }

  let dispApiData = <p></p>
 
  dispApiData = responceData.map((tempApiData) =>(
    <div key = {tempApiData.id}>
      <p>{ tempApiData.id + ": "+ tempApiData.name}</p>
     </div>
  ))
  

  return (
    <div className="App">
      <AddComponent onSubmitData={SaveSubmitData} />
      <ApiComponent onApiCall = {handleResponceData}/>
      {dispApiData}
      <p>{responceData.name}</p>
      <h3>Employee List</h3>
      <div>
        <FilterDepartment
          selected={filteredDept}
          onChangeFilter={filterChangeHandler}
        />
        {employeesContent}
      </div>
    </div>
  );
}

export default App;
