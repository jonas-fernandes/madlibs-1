import React, {Component} from 'react'

const Paragraph = (props) => {
    return (
        <h2>Hello Earthling. My name is {props.name}. I am from some {props.adjective} planet, called {props.noun}. I crash landed here when my {props.favVideoGame} made strange noises, spun out of control, and {props.pastTenseVerb} out of the sky. I don't know how I am still alive, but my {props.bodyPart} hurts, and I want to go home. Take me to your leader.</h2>
    )
}
export default Paragraph
