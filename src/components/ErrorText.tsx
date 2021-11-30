import React from 'react'
import { Alert } from 'react-bootstrap';

export default function ErrorText(props:{text:string}) {

    if (props.text==='') return null;

    return (
        <Alert className="text-center" variant={'danger'}>
    {props.text}
  </Alert>
    )
}