import React from "react";
import { useParams } from "react-router-dom";
import bookData from "../BookData/Data";
const BookRender = () => {
  const { id } = useParams();
  const filteredBook = bookData.filter((each) => each.name === id);
  return (
    <div>
      {filteredBook.map((each) => (
        <div key={each.id} className="w-full flex flex-col items-center">
          <div className="w-9/12">
            <div className="font-bold p-1">{each.name}</div>
            <div className="text-xs">{each.details}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookRender;
