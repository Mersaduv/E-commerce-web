import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
const Rate = () => {
  const [rate, setRate] = useState(0);
  return (
    <Container >
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label key={index}>
            <Radio
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);

                <span> {givenRating}</span>;
                // alert(`Are you sure you want to give  stars ?`);
              }}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
                    ? "rgb(255, 191, 0)"
                    : "rgb(192,192,192)"
                }
                style={{ fontSize: "26px" }}
              />
            </Rating>
          </label>
        );
      })}
    </Container>
  );
};

export default Rate;
