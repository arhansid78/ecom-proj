import React from "react";
import "./Sort.css";
import { useFilterContext } from "../context/FilterContext";
const Sort = () => {
  const { sorting } = useFilterContext();
  return (
    <div className="sort-selection">
      <form action="#">
        <label htmlFor="sort"></label>
        <select
          name="sort"
          id="sort"
          className="sort-selection-style"
          //   onClick={sorting}
          onChange={sorting}
        >
          <option value="lowest">price(lowest)</option>
          <option value="highest">price(highest)</option>
          <option value="a-z">price(a-z)</option>
          <option value="z-a">price(z-a)</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
