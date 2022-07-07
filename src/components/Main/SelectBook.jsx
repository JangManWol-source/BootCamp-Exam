import React from "react";
import bookData from "../BookData/Data";
import { Link } from "react-router-dom";
const SelectBook = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div className="font-bold p-2">Select Book</div>
      {bookData.map((each) => (
        <Link to={`/book/${each.name}`}>
          <div className="rounded m-1 hover:bg-gray-300 shadow-sm p-2">
            {each.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SelectBook;
