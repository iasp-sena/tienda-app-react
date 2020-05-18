import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import Navigator from '../components/Navigator';
import TableProducts from '../components/TableProducts';
import ProductForm from '../components/ProductForm';
import AlertMessage from '../components/AlertMessage';
import New from '../components/New';
import axios from 'axios';
import qs from 'querystring';

const ProductsContainer = () => {

  let [message, setMessage] = useState("");

  const saveProduct = () => {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    const product = {
      "name": document.querySelector("#productFrom input[name='name']").value,
      "description": document.querySelector("#productFrom textarea[name='description']").value,
      "price": document.querySelector("#productFrom input[name='price']").value,
      "sku": document.querySelector("#productFrom input[name='sku']").value,
      "categoryId": document.querySelector("#productFrom input[name='category_id']").value
    }
    axios.post("http://localhost:8000/api/v1/product", qs.stringify(product), config)
      .then((response) => {
        setMessage(<AlertMessage header="Proceso satisfactorio" message={response.data.message} />);
      })
      .catch((error) => {
        const response = JSON.parse(error.request.response);
        setMessage(<AlertMessage variant="danger" header="Proceso fallido" message={response.message} />);
      });
  }

  return (
    <div>
      <Navigator />
      <Container fluid>
        <h2>Productos</h2>
        {message}
        <div className="d-flex justify-content-end" style={{ marginBottom: '5px' }}>
          <New modalTitle="Nuevo producto" content={<ProductForm />} action={saveProduct} />
        </div>
        <TableProducts />
      </Container>
    </div>
  );
}

export default ProductsContainer;
