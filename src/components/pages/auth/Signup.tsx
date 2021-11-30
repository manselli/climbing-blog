import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom';
import ErrorText from '../../ErrorText';

export default function Signup() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [error, setError] = useState<string>('');

    function signupWithEmailAndPsswd(): void {
        //password check
        //auth.createUserWithEmailAndPassword(email,password) ... with .then(..)   .catch(..)
    }
    
    

    return (
        <Container className="mt-3 d-flex justify-content-center">
        <Card style={{ width: '30rem' }}>
            <Card.Body>
                <h3 className="text-center">Sign Up</h3>
                <ErrorText text={error} />
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                      <Form.Label column sm={3}>
                         Email
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control type="email" placeholder="Example@email.com" onChange={event => setEmail(event.target.value)}/>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                      <Form.Label column sm={3}>
                          Password
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                      <Form.Label column sm={3}>
                         Confirm Password
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control type="password" placeholder="Confirm Password" onChange={event => setPasswordConfirm(event.target.value)}/>
                      </Col>
                    </Form.Group>
                </Form>
                <div className="d-flex justify-content-center">
                <Button type="submit" onClick={()=> signupWithEmailAndPsswd()}>Sign Up</Button>
                 </div>
                 <div className="d-flex justify-content-center mt-2">
                 <small>
                     Se sei gia Iscitto, effettua il <Link to="/climbing-blog/login">Login</Link>
                    </small>
                    </div>

            </Card.Body>
        </Card>
        </Container>
    )
}
