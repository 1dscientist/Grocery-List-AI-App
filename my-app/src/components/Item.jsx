import React, { useState } from "react";
import "./Item.css";

function Item(props) {
  const [count, setCount] = useState(Number(props.count));

  const [completed, setCompleted] = useState(false);

  const addCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const subtractCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const markCompleted = () => {
    setCompleted((prevCompleted) => !prevCompleted);
  };

  return (
    <div className="item-container">
      <div className="item-body" onClick={markCompleted}>
        <div className="item-name-description">
          <h2
            className="item-name"
            style={{
              textDecoration: completed ? "line-through" : "none",
            }}
          >
            {props.name}
          </h2>
          {props.description && (
            <p
              className="item-description"
              style={{
                textDecoration: completed ? "line-through" : "none",
              }}
            >
              {props.description}
            </p>
          )}
        </div>
        <p
          className="item-count"
          style={{
            textDecoration: completed ? "line-through" : "none",
          }}
        >
          {count}
        </p>
      </div>
      <div className="item-count-manipulator">
        <button
          type="button"
          className="item-add"
          onClick={addCount}
          disabled={completed}
        >
          +
        </button>
        <button
          type="button"
          className="item-subtract"
          onClick={subtractCount}
          disabled={count === 1 || completed}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Item;
