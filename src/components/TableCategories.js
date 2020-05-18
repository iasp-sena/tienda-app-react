import React, {Component} from 'react';
import TablePaginable from './TablePaginable';

class TableCategories extends Component {
    state = {
    };

    render(){
        return (
            <TablePaginable headers={["ID", "NOMBRE", "DESCRIPCIÓN"]} propsObject={["id","name","description"]} urlData="http://localhost:8000/api/v1/categories"/>
        )
    }

}

export default TableCategories;