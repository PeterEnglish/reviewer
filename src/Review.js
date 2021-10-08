import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];


  const checkNumber = (number) => {
    //check if number is bigger than length of people
    //and go to the first if it is.
    if (number > people.length - 1) {
      return 0;
    }

    //get the last number if the number is negative(if you go
    //backwards at the start, go to the last)
    if (number < 0) {
      return people.length - 1;
    }

    //else just return the number- you are where you're meant to be
    return number;
  };


  const nextPerson = () => {
    //INdex provided by setIndex function
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };


  const prevPerson = () => {
    //index provided by setIndex function
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  //Note the use of two functions to set the index.
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
