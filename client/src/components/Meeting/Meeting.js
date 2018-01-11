import React from 'react'

export const Meeting = (props) => {
    const data = props.data
    return (
        <li>{data.start} - {data.end} / {data.attendees} / {data.organiser} / {data.room}</li>
    )
}