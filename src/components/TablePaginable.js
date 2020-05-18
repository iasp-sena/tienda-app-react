import React, {Component} from 'react';
import {Table, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import Paginator from './Paginator';

class TablePaginable extends Component {

    constructor(props){
        super(props);
        this.state = {
            urlData: props.urlData,
            headers: props.headers,
            propsObject: props.propsObject,
            infoPage: {
                data: []
            }
        };
    }

    componentDidMount(){
        this.callPage(this.state.urlData);
    }

    callPage(urlData) {
        if(urlData){
            axios.get(urlData)
            .then((response) => {
                this.setState((state) => {
                    return {
                        infoPage: response.data,
                        data: response.data.data
                    };
                });
                console.log(this.state.infoPage);
            })
            .catch((error) => {
                console.error(error);
            });
            this.callPage = this.callPage.bind(this);
        }
    }

    render () {
        return (
            <Row>
                <Col>
                    <Table striped hover>
                        <thead>
                            <tr>
                                {
                                    this.state.headers.map((header, index) => {
                                        return <th key={index+header}>{header}</th>;
                                    })
                                }
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.infoPage.data.map((object, index) => {
                                    return (
                                        <tr key={index}>
                                            {
                                                this.state.propsObject.map((propObject, index) => {
                                                    return <td key={index}>{object[propObject]}</td>
                                                })
                                            }
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                    <div className="d-flex justify-content-end">
                        <Paginator lastPage={this.state.infoPage.last_page} currentPage={this.state.infoPage.current_page}
                            prevPageUrl={this.state.infoPage.prev_page_url} nextPageUrl={this.state.infoPage.next_page_url}
                            urlData={this.state.urlData} callPage={this.callPage}
                        />
                    </div>
                </Col>
            </Row>
        );
    }


}

export default TablePaginable;