import React from 'react';
import Aux from '../hoc/aux';
import Checkbox from './checkbox';
import Edit from './edit';


const todo = (props) => {


    let tasks = (<p>Can not load tasks</p>);

    if (!props.editing) {
        tasks = props.tasks.map((val, index) => {
            return (
                <div key={val.task} className="todo">
                    <p>Task {index+1}</p>
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
    }else {
        tasks = (
            <div className="edit">
                <p>Editing task {props.editingIndex + 1}</p>
                <Edit
                    handleInput={props.handleInput}
                    index={props.editingIndex}
                    input={props.input}
                    oldText={"Task " + (props.editingIndex+1)}
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