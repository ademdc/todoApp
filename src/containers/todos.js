import React, {Component} from 'react';
import Todo from '../components/todo';
import Aux from '../hoc/aux';

class Todos extends Component {
    state = {
        tasks: [

        ],
        input: '',
        noOfTodos: 0,
        editing: false
    };

    addTask = (text) => {
        let task = [...this.state.tasks];
        task.push({task:text,done:false});
        this.setState(prevState => ({
            tasks: task,
            input: '',
            noOfTodos: prevState.noOfTodos + 1
        }));
    };

    deleteTask = (index) => {
        const task = [...this.state.tasks];
        task.splice(index, 1);
        this.setState(prevState => ({
            tasks: task,
            noOfTodos: prevState.noOfTodos - 1
        }));
    };

    editTask = (newText, i) => {
        this.setState({editing: true});
    };

    saveTask = (newText, i) => {
        let task = [...this.state.tasks];
        task[i].task = newText;
        this.toggleDone(i);
        this.setState({tasks: task, editing: false});
    };

    handleInput = (e) => {
        this.setState({input: e.target.value});
    };

    toggleDone = (i) => {
        let task = [...this.state.tasks];
        task[i].done=!task[i].done;
        this.setState({tasks: task});
    };

    render() {
        return (
            <Aux>
                <h1>Todo[{this.state.noOfTodos}]</h1>
                <input className="form-control" type="text" onChange={this.handleInput}/>
                <button className="btn btn-success" onClick={() => this.addTask(this.state.input)}>Add task</button>
                <Todo
                    tasks={this.state.tasks}
                    editing={this.state.editing}
                    input={this.state.input}
                    delete={this.deleteTask}
                    edit={this.editTask}
                    save={this.saveTask}
                    done={this.toggleDone}
                    handleInput={this.handleInput}/>
            </Aux>
        );
    }
}

export default Todos;