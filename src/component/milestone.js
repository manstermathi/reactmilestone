import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Milestone() {
  const [fetchValue, setFetchValue] = useState([]);
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => setFetchValue(data));
  }, []);
  const headers = [
    { label: "Id", key: "id" },
    { label: "Title", key: "title" },
    { label: "Description", key: "description" },
    { label: "Price", key: "price" },
    { label: "Category", key: "category" },
    { label: "Rating", key: "rating.rate" },
  ];

  return (
    <div className=" container">

      <h1 className=" fs-5  p-3">PRODUCT DATE TABLE</h1>
      <CSVLink data={fetchValue} headers={headers}><button className="bg-success">DOWNLOAD EXCEL</button></CSVLink>

      <table className="table table-striped table-borderd">
        <thead>
          <tr>
            <th>Image</th>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th className="px-5">Rating</th>
            <th className="px-5"> AddCount</th>
            <th>Viewmore</th>


          </tr>
        </thead>
        <tbody>
          {fetchValue.map((value, index) => (
            <tr key={index}>
              <td><img src={value.image} alt={value.title} className="image" /></td>

              <td>{value.id}</td>
              <td>{value.title}</td>
              <td>{value.description}</td>
              <td>{value.price}</td>
              <td>{value.category}</td>
              <td>
                <StarRatings
                  rating={value.rating.rate}
                  starRatedColor="orange"
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="2px"
                />
              </td>
              <td>
                <button onClick={() => { setCount(count + 1) }} className="bg-success">ADD</button>{count}
                <button onClick={() => { setCount(count - 1) }} className="bg-danger">Sub</button></td>
              <td>
                <Link to={`/product/${value.id}`}><button className="bg-warning">Viewmore</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
