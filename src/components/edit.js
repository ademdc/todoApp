import React from 'react';
import Aux from '../hoc/aux';

const edit = (props) => {

    return (
        <Aux>
            <input type="text" placeholder={props.oldText} onChange={props.handleInput}/>
            <button className="btn btn-primary" onClick={() => props.save(props.input, props.index)}>
                Save
            </button>
        </Aux>
    );
};

export default edit;