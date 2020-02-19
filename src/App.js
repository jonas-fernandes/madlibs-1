import React, {Component} from 'react';
import Paragraph from './component/Paragraph';
import './App.css';

class App extends Component {
    constructor (props) {
        super (props)
        this.state = {
            name: "",
            adjective: "",
            noun: "",
            favVideoGame: "",
            pastTenseVerb: "",
            bodyPart: "",
            paragraphRender: ""
        }
    }

handleChange = (event) => {
    this.setState ({name: event.target.value})
}

handleChange2 = (event) => {
    this.setState ({adjective: event.target.value})
}
handleChange3 = (event) => {
    this.setState ({noun: event.target.value})
}

handleChange4 = (event) => {
    this.setState ({favVideoGame: event.target.value})
}
handleChange5 = (event) => {
    this.setState ({pastTenseVerb: event.target.value})
}

handleChange6 = (event) => {
    this.setState ({bodyPart: event.target.value})
}

submitChange = (event) => {
    event.preventDefault()
    let {paragraphRender} = this.state
    paragraphRender = ( <Paragraph
        name= {this.state.name}
        adjective= {this.state.adjective}
        noun= {this.state.noun}
        favVideoGame= {this.state.favVideoGame}
        pastTenseVerb= {this.state.pastTenseVerb}
        bodyPart= {this.state.bodyPart}
        />)
        this.setState({ paragraphRender: paragraphRender})
}
        refreshPage = () => {
            window.location.reload()
        }

    render() {
        return (
            <div>
                <h1> Super Alien Madlibs </h1>
                <p> Enter a Name: </p>
                <input
                    value = {this.state.name}
                    onChange = {this.handleChange}
                />
                <p> Enter an Adjective: </p>
                <input
                    value = {this.state.adjective}
                    onChange = {this.handleChange2}
                />
                <p> Enter a Noun: </p>
                <input
                    value = {this.state.noun}
                    onChange = {this.handleChange3}
                />
                <p> Enter your Favorite Video Game: </p>
                <input
                    value = {this.state.favVideoGame}
                    onChange = {this.handleChange4}
                />
                <p> Enter a Past Tense Verb: </p>
                <input
                    value = {this.state.pastTenseVerb}
                    onChange = {this.handleChange5}
                />
                <p> Enter a Body Part: </p>
                <input
                    value = {this.state.bodyPart}
                    onChange = {this.handleChange6}
                />
                <div>
                {this.state.paragraphRender}
                </div>
                <br/>
                <br/>
                <button onClick = {this.submitChange}>Submit</button>
                <br/>
                <br/>
                <button onClick = {this.refreshPage}>Clear</button>
            </div>
        )
    }
}
export default App;
