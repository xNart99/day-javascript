import { BookData } from "../db/book.js";

const SachTheoGia = () => {
  return (
    <>
      <h1>Sach Gia lon hon 300</h1>
      <ul>
        {BookData.filter((book) => {
          return book.price > 300;
        }).map((x) => {
          return (
            <li key={x.id}>
              Name: {x.book_name} - Gia: {x.price}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SachTheoGia;
