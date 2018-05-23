import React from 'react';
import Aux from '../hoc/aux';
import Checkbox from './checkbox';
import Edit from './edit';


const todo = (props) => {


    let tasks = null;
    //let editing = null;

    if (props.tasks) {
        tasks = props.tasks.map((val, index) => {
            return (
                <div key={index} className="todo">
                    <h3> {val.task} </h3>
                    <Checkbox
                        checked={val.done}
                        index={index}
                        done={props.done}/>
                    <button className="btn btn-primary" onClick={() => props.edit(index)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => props.delete(index)}>Remove</button>
                </div>
            );
        });
    }

    if (props.editing) {
        tasks = (
            <div className="edit">
                <p>Editing task {props.editingIndex + 1}</p>
                <Edit
                    handleInput={props.handleInput}
                    index={props.editingIndex}
                    input={props.input}
                    oldText="old text"
                    save={props.save}
                />
            </div>);
    }


    return (
        <Aux>
            {tasks}
        </Aux>
    );
};

export default todo;