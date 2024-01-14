import React, { useState, useEffect } from "react";
import Department from "./Department";
import "./List.css";

function List(props) {
  const endpoint = 'http://127.0.0.1:8000/data';
  const [departments, setDepartments] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const getData = async () => {
        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            setDepartments(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error appropriately
        }
    };
    getData();
  }, []);

  return (
    <div className="list-component">
      {(departments && departments.length !== 0) && departments.map(department => <Department key={department.id} name={department.name} items={department.items}/>)}
    </div>
  );
}

export default List;
