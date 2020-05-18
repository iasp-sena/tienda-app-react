import React, { useState } from 'react';
import {Alert} from 'react-bootstrap';

const AlertMessage = (props) => {
  const [show, setShow] = useState(true);

    if(show){
        return (
            <Alert variant={props.variant ?? 'info'} onClose={() => setShow(false)} dismissible>
            <Alert.Heading>{props.header}</Alert.Heading>
            <p>{props.message}</p>
            </Alert>
        );
    }

    return (<></>);
}

export default AlertMessage;