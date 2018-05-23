import React from 'react';
import Aux from '../hoc/aux';

const checkbox = (props) => {

    let checked = (<input type="checkbox" value={props.index} onChange={()=>props.done(props.index)}/>);

    if(props.checked){
        checked = (<input type="checkbox" value={props.index} onChange={()=>props.done(props.index)} checked/>);
    }
    return(
        <Aux>
            {checked}
            <br/>
        </Aux>
    );
};

export default checkbox;