import React, {Component} from 'react';
class Formulario extends Component {

    constructor(){
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        const { value, name} = e.target;
        this.setState({
            [name]: value
        })
        console.log(this.state);
       
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
    }

    render(){
        return(
                <div className="card">
                    <form className="card-body" onSubmit={ this.handleSubmit}>
                          <div className="form-group">
                        <input type="text" className="form-control" name="title" placeholder="Title" onChange={this.handleInput}/>
                        </div>
                        <div className="form-group">
                        <input type="text" className="form-control" name="responsible" placeholder="Responsible" onChange={this.handleInput}/>
                        </div>
                        <div className="form-group">
                        <input type="text" className="form-control" name="description" placeholder="Description" onChange={this.handleInput}/>
                        </div>
                        <div className="form-group">
                        <select name="priority" className="form-control" onChange={this.handleInput}>
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                        </div>
                        <button type="submit" className="btn btn-primary">enviar</button>
                    </form>
                </div>
        )
    }
} 
export default Formulario;