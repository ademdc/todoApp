import React from 'react';
import Aux from '../hoc/aux';

const headerInput = (props) => {
    let value = props.input;

    if(props.editing){
        value=''
    }

        return (
        <Aux>
            <h1>Todo[{props.noOfTodos}]</h1>
            <form onSubmit={props.submit}>
                 <input className="form-control" type="text" value={value} onChange={props.handle}/>
                 <button className="btn btn-success" onClick={() => props.add(props.input)}>Add task</button>
            </form>
        </Aux>
    );
};

export default headerInput;