import React from 'react';
import {Form, Button} from 'react-bootstrap';

const ReviewForm = ({handleSubmit,revText, labelText, defaultValue}) => {
  return (
    <Form>
        <Form.Group className='mb-3' controlId='exmapleForm.ControlTextarea1'>
            <Form.Lable></Form.Lable>
            <Form.Control as="textarea" rows={3} defaultValue={defaultValue}/>
        </Form.Group>
        <Button variant="outlined-info" onClick={handleSubmit}>Submit</Button>
    </Form>
  )
}

export default ReviewForm