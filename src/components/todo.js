import React from 'react';
import Aux from '../hoc/aux';
import Checkbox from './checkbox';


const edit = (oldText,index, props) =>{
    return(
    <div>
        <input type="text" placeholder={oldText} onChange={props.handleInput}/>
        <button className="btn btn-primary" onClick={() => props.save(props.input, index)}>
            Save
        </button>
    </div>
    );
};

const todo = (props) => {


    let tasks = null;
    let editing = null;

    if (props.tasks) {
        tasks = props.tasks.map((val, index) => {
            return (
                    <div key={index} className="todo">
                        <h3> {val.task} </h3>
                        <Checkbox
                            checked={val.done}
                            index={index}
                            done={props.done}/>

                        {!props.editing ?
                            <button className="btn btn-primary" onClick={props.edit}>Edit</button> :
                            <div>
                                {edit(val.task, index,props)}
                                <input type="text" placeholder={val.task} onChange={props.handleInput}/>
                                <button className="btn btn-primary" onClick={() => props.save(props.input, index)}>
                                    Save
                                </button>
                            </div>}


                        <button className="btn btn-danger" onClick={() => props.delete(index)}>Remove</button>
                    </div>
                 );
        });
    }


    return (
        <Aux>
            {tasks}
        </Aux>
    );
};

export default todo;