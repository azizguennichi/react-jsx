import React from "react";
import { Button } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.css';
import propTypes  from "prop-types";

export const Home = ({title,Des,image,fun,array,children}) => {
  //let {title,image,Des,fun} = props
  //console.log(props)
  return (
    <div>
      <div className="card" style={{ width: "18rem", margin: "0 auto" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{Des}</p>
          {array.map((el,i)=> <li key={i}>{el}</li>)}
          <Button className="btn btn-primary" onClick={()=>fun()}>Click me</Button>
        </div>
        {children}
      </div>
    </div>
  );
};

Home.defaultProps = {
  title :'movie'
}

Home.propTypes={
  title:propTypes.string,
  Des : propTypes.string.isRequired,
  fun : propTypes.func,
  array : propTypes.array,

}
