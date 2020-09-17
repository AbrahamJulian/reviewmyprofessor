import React, { useState, useEffect } from "react";
import "./App.css";
import Particles from "react-particles-js";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";
import { initialReviews } from "./util/dummy";
import Navigation from "./components/Navigation/Navigation";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Tachyons from "tachyons";

const particlesOptions = {
  particles: {
    color: {
      value: "#000000",
    },
    line_linked: {
      color: {
        value: "#000000",
      },
    },
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

const LOCAL_STORAGE_KEY = "nilaidosenku";

function App() {
  const [reviews, setReviews] = useState(initialReviews);
  const [edit, setEdit] = useState(false);
  const [currentReview, setCurrentReview] = useState({
    id: "",
    name: "",
    university: "",
    comments: [],
    ratings: [],
  });

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storage) {
      setReviews(storage);
    }
  }, []);

  const addReview = (review) => {
    const arr = [review.comments];
    review.comments = arr;
    setReviews([review, ...reviews]);
  };

  const deleteReview = (id) => {
    setReviews(reviews.filter((review) => review.id != id));
  };

  const editReview = (review) => {
    const { id, comments, ratings } = review;

    setEdit(true);
    setCurrentReview({
      id: id,
      comments: "",
      ratings: 0,
    });
  };

  const updateReview = (id, updatedReview) => {
    setEdit(false);
    setReviews(
      reviews.map((review) =>
        review.id === id
          ? (review.ratings.push(parseInt(updatedReview.ratings)),
            review.comments.push(updatedReview.comments),
            console.log(review.ratings),
            console.log(review.id),
            review)
          : review
      )
    );
  };

  return (
    <div className="App">
      <header>
        <p> Nilai Dosenku </p>
      </header>
      <main>
        {edit ? (
          <Modal currentReview={currentReview} updateReview={updateReview} />
        ) : null}
        <Particles className="particles" params={particlesOptions} />
        <Form addReview={addReview} />
        <List
          reviews={reviews}
          deleteReview={deleteReview}
          editReview={editReview}
        />
      </main>
    </div>
  );
}

export default App;
