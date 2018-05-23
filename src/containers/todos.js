import React, {Component} from 'react';
import Todo from '../components/todo';
import Aux from '../hoc/aux';
import HeaderInput from '../components/header-input';

class Todos extends Component {
    state = {
        tasks: [],
        input: '',
        noOfTodos: 0,
        editing: false,
        editingIndex:null
    };

    addTask = (text) => {
        let task = [...this.state.tasks];
        task.push({task:text,done:false});
        this.setState(prevState => ({
            tasks: task,
            input: '',
            noOfTodos: prevState.noOfTodos + 1,
            taskId:prevState.taskId+1
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

    editTask = (index) => {
        this.setState({
            editing: true,
            editingIndex:index,
            });
    };


    saveTask = (newText, i) => {
        let task = [...this.state.tasks];
        task[i].task = newText;
        this.setState({tasks: task, editing: false,input:''});
    };

    handleInput = (e) => {
        this.setState({input: e.target.value});
    };

    submitForm = (e)=>{
        e.preventDefault();
    }

    toggleDone = (i) => {
        let task = [...this.state.tasks];
        task[i].done=!task[i].done;
        this.setState({tasks: task});
    };

    render() {
        return (
            <Aux>
                <HeaderInput
                noOfTodos={this.state.noOfTodos}
                input={this.state.input}
                handle={this.handleInput}
                add={this.addTask}
                submit={this.submitForm}
                editing={this.state.editing}
                />

                <Todo
                    tasks={this.state.tasks}
                    editing={this.state.editing}
                    input={this.state.input}
                    editingIndex={this.state.editingIndex}
                    delete={this.deleteTask}
                    edit={this.editTask}
                    save={this.saveTask}
                    done={this.toggleDone}
                    handleInput={this.handleInput}
                    />
            </Aux>
        );
    }
}

export default Todos;