import React from "react";
import { BookData } from "../db/book.js";
const DanhSachBook = () => {
  return (
    <>
      <h1>Danh sach book</h1>
      <ul>
        {BookData.map((x) => {
          return <li key={x.id}>Name: {x.book_name}</li>;
        })}
      </ul>
    </>
  );
};

export default DanhSachBook;
