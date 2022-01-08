import "./AddComponent.css";
import React, { Fragment, useState, useRef } from "react";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

function AddComponent(props) {
  const [isError, setError] = useState("");

  const empCodeInputRef = useRef();
  const empNameInputRef = useRef();
  const empDeptInputRef = useRef();
  const empDateInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    if (empCodeInputRef.current.value.trim().length === 0) {
      setError({
        title: "Invalid Employee Code",
        message: "Enter Employee Code",
      });
      return;
    }

    if (empDeptInputRef.current.value.trim().length === 0) {
      setError({
        title: "Invalid Employee Department",
        message: "Enter Employee Department",
      });
      return;
    }

    const enteredData = {
      empCode: empCodeInputRef.current.value,
      empName: empNameInputRef.current.value,
      empDepartment: empDeptInputRef.current.value,
      empJoiningDate: empDateInputRef.current.value,
    };

    props.onSubmitData(enteredData);
    resetFields();
  };

  const errorHandller = () => {
    setError(undefined);
  };

  const resetFields = () => {
    empCodeInputRef.current.value = "";
    empNameInputRef.current.value = "";
    empDeptInputRef.current.value = "";
    empDateInputRef.current.value = "";
  };

  return (
    <Fragment>
      {isError && (
        <ErrorComponent
          title={isError.title}
          message={isError.message}
          onConfirm={errorHandller}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className="container">
          <div>
            <label>Employee Code</label>
            <input id="enteredCode" type="text" ref={empCodeInputRef}></input>
          </div>
          <div>
            <label>Employee Name</label>
            <input id="empName" type="text" ref={empNameInputRef}></input>
          </div>
          <div>
            <label>Employee Department</label>
            <input id="empDepartment" type="text" ref={empDeptInputRef}></input>
          </div>
          <div className="new-expense__control">
            <label>Joining Date</label>
            <input
              id="empJoiningDate"
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              ref={empDateInputRef}
            />
            <div>
              <button type="submit">Save</button>
              <button type="reset">Reset</button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
}

export default AddComponent;
