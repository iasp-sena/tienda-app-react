import React from 'react';
import { Form } from 'react-bootstrap';

const ProductForm = (props) => {

    return (
        <Form id="productFrom">
            <Form.Group controlId="product.Name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control name="name" type="text" placeholder="Zapatos" />
            </Form.Group>
            <Form.Group controlId="product.Description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control name="description" as="textarea" placeholder="Esta es la descripción ..." row="4" />
            </Form.Group>
            <Form.Group controlId="product.Precio">
                <Form.Label>Precio</Form.Label>
                <Form.Control name="price" type="numeric" placeholder="32000" />
            </Form.Group>
            <Form.Group controlId="product.SKU">
                <Form.Label>SKU</Form.Label>
                <Form.Control name="sku" type="text" placeholder="COD-0001" />
            </Form.Group>
            <Form.Group controlId="product.Category">
                <Form.Label>Cateogría</Form.Label>
                <Form.Control name="category_id" type="numeric" placeholder="1" />
            </Form.Group>
        </Form>
    );
}

export default ProductForm;
