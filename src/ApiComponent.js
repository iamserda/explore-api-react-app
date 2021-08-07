import React from "react";

function ApiComponent(props){
  
  //check props
  console.log(props)
  
  return (
    <div className="api">
      <h4 className="name">
        <a className="link" href={ `${props.apidata.link}` } target="_blank"></a>
      </h4>
      <p className="description">Description</p>
      <p className="auth">Authentication</p>
      <p className="https">HTTPS Support</p>
      <p className="cors">CORS Support</p>
      <p className="counter">counter_id</p>
    </div>
  );
}

export default ApiComponent