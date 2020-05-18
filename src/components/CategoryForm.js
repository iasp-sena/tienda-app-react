import React from 'react';
import { Form } from 'react-bootstrap';

const CategoryForm = (props) => {

    return (
        <Form id="categoryFrom">
            <Form.Group controlId="category.Nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control name="name" type="text" placeholder="Zapatos" />
            </Form.Group>
            <Form.Group controlId="category.Description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control name="description" as="textarea" placeholder="Esta es la descripción ..." row="4" />
            </Form.Group>
        </Form>
    );
}

export default CategoryForm;
