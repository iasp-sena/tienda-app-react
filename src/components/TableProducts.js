import React, {Component} from 'react';
import TablePaginable from './TablePaginable';

class TableProducts extends Component {
    state = {
    };

    render(){
        return (
            <TablePaginable headers={["ID", "NOMBRE", "DESCRIPCIÓN","PRECIO","SKU"]} 
                propsObject={["id","name","description","price","sku"]} 
                urlData="http://localhost:8000/api/v1/products"/>
        )
    }

}

export default TableProducts;