import React from 'react';
import {Pagination} from 'react-bootstrap';

function Paginator(props) {

    function getPages(props) {
        let pages = [];

        for (let i = 1; i<=props.lastPage; i++){
            pages.push(
                <Pagination.Item key={i} 
                    active={i === props.currentPage} 
                    onClick={() => props.callPage(props.urlData + "?page=" + i)}>{i}
                </Pagination.Item>
            );
        }
        return pages;
    }

    function hasPrev(props) {
        return props.prevPageUrl ? true : false;
    }

    function hasNext(props) {
        return props.nextPageUrl ? true : false;
    }

    return (
        <Pagination size="sm">
            <Pagination.First onClick={() => props.callPage(props.urlData)}/>
            <Pagination.Prev  disabled={!hasPrev(props)} onClick={() => props.callPage(props.prevPageUrl)} />
            { getPages(props) }
            <Pagination.Next  disabled={!hasNext(props)} onClick={() => props.callPage(props.nextPageUrl)} />
            <Pagination.Last onClick={() => props.callPage(props.urlData+"?page="+props.lastPage)}/>
        </Pagination>
    );
}

export default Paginator;