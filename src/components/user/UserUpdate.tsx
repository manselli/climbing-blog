import React, { useContext, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { UserContext } from './UserContext';

export default function UserUpdate(props:{funct:React.Dispatch<React.SetStateAction<boolean>>}) {
    const context = useContext(UserContext);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [error, setError] = useState<string>('')

    function deleteFields(){
        //set fields empty
      props.funct(false)
    }

    function changeUserInfo(){
        if(password==passwordConfirm){
          /* if(email!=='' && context.state){context.state.updateProfile({
            email:email
          };}
           if(password!=='' && context.state){context.state.updateProfile({
            password:password
          };}*/
           if(username!=='' && context.state){context.state.updateProfile({
            displayName:username
          });}

        }
        
    }
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center mt-5 mb-5">
                    <Card style={{ width: '30rem' }}>
                        <Card.Body>
                            <h3 className="text-center">Modifica</h3>
                            <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Label column sm={3}>
                                        Email
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="email" placeholder="Example@email.com" onChange={event => setEmail(event.target.value)} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Label column sm={3}>
                                        Username
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="email" placeholder="Example" onChange={event => setUsername(event.target.value)} />
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
                                        <Form.Control type="password" placeholder="Confirm Password" onChange={event => setPasswordConfirm(event.target.value)} />
                                    </Col>
                                </Form.Group>
                            </Form>
                            <div className="d-flex justify-content-evenly">
                                <Button type="submit" onClick={()=> changeUserInfo()}>Apporta modifiche</Button>
                                <Button type="submit" onClick={()=> deleteFields()}>Annulla</Button>
                            </div>
                            <div className="d-flex justify-content-center mt-2">
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
