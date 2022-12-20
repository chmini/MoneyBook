import { useState } from "react";

import { Avatar } from "@components/Avatar";

import type { Book, Review } from "../mocks/types";

interface Props {
  book: Book;
}

const Home = ({ book }: Props) => {
  const [reviews, setReviews] = useState<Review[] | null>(null);

  const handleGetReviews = () => {
    // Client-side request are mocked by `mocks/browser.ts`.
    fetch("/reviews")
      .then((res) => res.json())
      .then(setReviews)
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <Avatar alt="" shape="circle" size={80} src="https://picsum.photos/200" />
      <img alt={book.title} src={book.imageUrl} width="250" />
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <button type="button" onClick={handleGetReviews}>
        Load reviews
      </button>
      {reviews && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.text}</p>
              <p>{review.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  // Server-side requests are mocked by `mocks/server.ts`.
  const res = await fetch("https://my.backend/book");
  const book = (await res.json()) as Book;

  return {
    props: {
      book,
    },
  };
}
