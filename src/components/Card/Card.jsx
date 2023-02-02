import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPexelsImage } from 'redux/location/locOperations';
import { useState } from 'react';

export default function CardUI() {
  const city = useSelector(state => state.location.city);
  const images = useSelector(state => state.location.image);

  const [image, setImage] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    if (city) {
      dispatch(fetchPexelsImage());
    }
  }, [city, dispatch]);

  useEffect(() => {
    if (images) {
      const random = Math.floor(Math.random() * images.length);
      setImage(images[random].landscape);
    }
  }, [images]);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      {/* <Card.Img variant="top" src={src} /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
