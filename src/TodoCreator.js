import React, { Component } from "react";



export class TodoCreator extends Component {
    constructor(props) {
        super(props);
        this.state = { newItemText: ''}
    }
    updateNewTextValue = (event) => {
        this.setState({ newItemText: event.target.value});
    }
    createNewTodo = () => {
        this.props.callback(this.state.newItemText);
        this.setState({ newItemText: ''});
    }

    render = () =>
    <div>
        <input className="form-control" value={ this.state.newItemText } onChange={ this.updateNewTextValue } />
        <button className="btn bg-blue-500 text-white font-bold py-2 px-4 rounded px-5 py-2.5 ml-5 mr-2 mt-4" onClick={ this.createNewTodo }>Add</button>
    </div>
}
