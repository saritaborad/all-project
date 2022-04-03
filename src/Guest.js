import React, { Component } from 'react'
import { MyContext } from './App'

export default class Guest extends Component {
    render() {
        return (
            <div>
                <h3>Guest Component</h3>
                <MyContext.Consumer>
                    
                    {
                    ({data, handleClickContext})=>
                    <div>
                    <h4>
                        Name: {data.name} Surname:  {data.surname}
                    </h4>
                    <button onClick={handleClickContext}>
                        Change Value
                    </button>
                    </div>
    }
                </MyContext.Consumer>
            </div>
        )
    }
}
