import React, { useContext, useState } from 'react'
import { Button, Card, Col, Container, Row , Form} from 'react-bootstrap';
import { UserContext } from './UserContext';
import auth from './../config/Firebase'
import ErrorText from '../ErrorText';
import UserUpdate from './UserUpdate';

export default function UserPage() {
    const context = useContext(UserContext);
    const [modify, setModify] = useState<boolean>(false);
    let jsxelement:JSX.Element=<></>
    if(modify){
      jsxelement=<UserUpdate funct={setModify}/>
    }

    function modifyUser(){
     
    }
    
    return (
        <Container>
            <h2 className="text-center">User Page</h2>
            <Row>
                <Col className="d-flex justify-content-center mt-5">
        <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>USER: {context.state?.displayName}</Card.Title>
          <Card.Text>
           <p> email: {context.state?.email}</p>
          <p> UUID:  {context.state?.uid}</p>
          </Card.Text>
          <Button onClick={()=>setModify(true)}>modifica profilo utente</Button>
        </Card.Body>
      </Card>
      </Col>
      </Row>
        {jsxelement}
        </Container>
    )
}
