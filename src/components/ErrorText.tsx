import React from 'react'

export default function ErrorText(props:{text:string}) {

    if (props.text==='') return null;

    return (
        <div>
            {props.text}
        </div>
    )
}