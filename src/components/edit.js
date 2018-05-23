import React from 'react';
import Aux from '../hoc/aux';

const edit = (props) => {

    return (
        <Aux>
            <form>
                <input type="text" placeholder={props.oldText} onChange={props.handleInput}/>
                <button className="btn btn-primary" type="submit" onClick={() => props.save(props.input, props.index)}>
                    Save
                </button>
            </form>
        </Aux>
    );
};

export default edit;