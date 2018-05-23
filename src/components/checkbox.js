import React from 'react';
import Aux from '../hoc/aux';

const checkbox = (props) => {

    let checked = (<input type="checkbox" checked={props.checked} defaultValue={props.checked} onChange={()=>props.done(props.index)}/>);

    return(
        <Aux>
            {checked}
            <br/>
        </Aux>
    );
};

export default checkbox;