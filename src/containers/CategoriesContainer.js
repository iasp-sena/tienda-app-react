import React, {useState} from 'react';
import { Container } from 'react-bootstrap'
import Navigator from '../components/Navigator';
import CategoryForm from '../components/CategoryForm';
import TableCategories from '../components/TableCategories';
import New from '../components/New';
import axios from 'axios';
import qs from 'querystring';
import AlertMessage from '../components/AlertMessage';

const CategoriesContainer = () => {
    let [message, setMessage] = useState("");

    const saveCategory = () => {
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        const category = {
            "name": document.querySelector("#categoryFrom input[name='name']").value,
            "description": document.querySelector("#categoryFrom textarea[name='description']").value
        }
        axios.post("http://localhost:8000/api/v1/category", qs.stringify(category), config)
            .then((response) => {
                setMessage(<AlertMessage header="Proceso satisfactorio" message={response.data.message}/>);
            })
            .catch((error) => {
                alert(error);
            });
    }

    return (
        <div>
            <Navigator />
            <Container fluid>
                <h2>Categorías</h2>
                { message }
                <div className="d-flex justify-content-end" style={{ marginBottom: '5px' }}>
                    <New modalTitle="Nueva categoría" content={<CategoryForm />} action={saveCategory} />
                </div>
                <TableCategories headers={['ID', 'NOMBRE', 'APELLIDO']} />
            </Container>
        </div>
    );
}

export default CategoriesContainer;
