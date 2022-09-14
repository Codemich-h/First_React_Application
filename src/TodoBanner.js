import React, { Component } from 'react';

export class TodoBanner extends Component {
    render = () => 
    <h4 className='bg-blue-500 text-white text-center'>
        { this.props.name }'s To Do List
        ({ this.props.tasks.filter(t => !t.done).length } items to do)
    </h4>
}
