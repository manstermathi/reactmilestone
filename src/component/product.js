import React, { useState } from "react";
import { CSVLink } from "react-csv";
import { useParams } from "react-router-dom";

export function Product() {
  const [fatchvalue, setfatchvalue] = useState([])
  var { id } = useParams()
  useState(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then(Response => Response.json())
      .then(date => setfatchvalue(date));
  }, [])
  const headers = [
    { label: "Id", key: "id" },
    { label: "Title", key: "title" },
    { label: "Description", key: "description" },
    { label: "Price", key: "price" },
    { label: "Category", key: "category" },
    { label: "Rating", key: "rating.rate" },
  ];
  const dataas = [fatchvalue]

  return (
    <>
      <div className="row">

        <div className="card col-lg-6">
          <img src={fatchvalue.image} className="card-img-top" /></div>
        <div className="card col-lg-6">
          <h1 className="card-title">{fatchvalue.title}</h1>
          <p className="card-content">{fatchvalue.description}</p>
          <h2 className="card-Category">{fatchvalue.category}</h2>
          <p className="card-content">{fatchvalue.price}</p>
          <CSVLink data={dataas} headers={headers}><button className="bg-success">DOWNLOAD EXCEL</button></CSVLink>
        </div>
      </div>
    </>
  );
}