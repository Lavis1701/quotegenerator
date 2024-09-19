import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Content() {
    const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Function to fetch a random quote from the API
  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://dummyjson.com/quotes');
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.quotes.length);
      const randomQuote = data.quotes[randomIndex];
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    } catch (error) {
      console.error('Error fetching the quote:', error);
      setQuote('Failed to fetch a new quote. Please try again.');
      setAuthor('');
    }
  };

  // Fetch a quote when the component loads
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <>
      <MDBCard alignment='center  mt-5 p-2 fs-5  text-primary fw-bolder'>
      <MDBCardHeader  className='fs-5 fw-bolder'>QUOTES</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{author}</MDBCardTitle>
        <MDBCardText>{quote}</MDBCardText>
        <MDBBtn className='mt-2' onClick={fetchRandomQuote} >NEXT</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </>
  )
}

export default Content
