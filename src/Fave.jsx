import { useState } from 'react'

export default function Fave(props) {

    const handleClick = e => {
        e.stopPropagation()
        console.log("handling Fave click!!")
        props.onFaveToggle()
    }

    const action = props.isFave ? "remove_from_queue" : "add_to_queue"

    return (
        <div
            className={`film-row-fave add_to_queue ${action}`}
            onClick={handleClick}
        >
            <p className="material-icons">add_to_queue</p>
        </div>
    )
}