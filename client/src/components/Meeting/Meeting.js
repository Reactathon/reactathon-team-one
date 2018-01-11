import React from 'react'

export const Meeting = (props) => {
    const data = props.data
    return (
        <li>{data.from} - {data.to} / {data.attendees} / {data.organiser} / {data.room}</li>
    )
}