import React  from "react";
import  "./ErrorComponent.css";

const ErrorComponent = (props) => {
   
    return (
        <div>
          <div className= "backdrop" />
          <div className="modal">
            <header className="header">
              <h2>{props.title}</h2>
            </header>
            <div className="content">
              <p>{props.message}</p>
            </div>
            <footer className="actions">
              <button className="b1" onClick ={props.onConfirm}>Okay</button>
            </footer>
          </div>
        </div>
      );
};

export default ErrorComponent;
