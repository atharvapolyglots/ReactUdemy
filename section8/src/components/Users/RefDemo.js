import React, { useRef, useState } from 'react'

export default function RefDemo(props) {


    const [text, SetText] = useState('')


    const ChangeHandler = (event) => {
        SetText(event.target.value)
    }

    const SubmitHandler = (event) => {
        event.preventDefault()
        console.log(text)
        props.CtoP(text)

    }


    // useRef not rerender as useState
    const inputRef = useRef('')


    const SubmitHandlerRef = (event) => {
        event.preventDefault();
        const value = inputRef.current.value;
        console.log('Value: ', value);
        props.CtoPRef(value);

    }


    return (
        <div>
            <input type='text' value={text} onChange={ChangeHandler} />
            <button onClick={SubmitHandler}>Submit Using State</button>
            <h3></h3>

            <hr />

            {/* Instead of value and onChange on input we can use useRef, next execution of adding printing list is done with the help of useState */}
            <input type='text' ref={inputRef} />
            <button onClick={SubmitHandlerRef}>Submit Using Ref</button>
            <h3></h3>
        </div>
    )
}
