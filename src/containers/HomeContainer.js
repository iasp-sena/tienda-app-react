import React from 'react';
import {Container} from 'react-bootstrap'
import Navigator from '../components/Navigator';

const HomeContainer = () => {
  return (
    <div className="App">
      <Navigator />
      <Container fluid>
        <h2>Bienvenido a la Tienda App</h2>
      </Container>
    </div>
  );
}

export default HomeContainer;
