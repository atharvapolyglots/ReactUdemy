import React from 'react'

export default function RefDemoList(props) {
    return (
        <div>
            {props.lists.map((list) => (<li key={list.id}>{list.text}</li>))}
            {props.listRefs.map((list) => (<li key={list.id}>{list.inputVal}</li>))}
        </div>
    )
}
