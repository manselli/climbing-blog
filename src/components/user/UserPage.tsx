import React, { useContext } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { UserContext } from './UserContext';

export default function UserPage() {
    const context = useContext(UserContext);
    return (
        <Container>
            <h2 className="text-center">User Page</h2>
            <Row>
                <Col className="d-flex justify-content-center mt-5">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>USER: {context.state.email}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      </Row>
        </Container>
    )
}
