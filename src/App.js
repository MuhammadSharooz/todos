
import React,{Component} from'react';
import './App.css';
import BasicTextFields from './component/Textfield'
import ContainedButtons from './component/Button'
import IconButtons from './component/DeleteBtn'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[
        {Name: "Hassan",
          Status: false
        },
        {Name: "Javeed",
          Status: false
        },
        {Name: "Mannan",
          Status: false
        }
      ],
      value:''
    }
  }
  add_task =()=>{
  console.log('Button clicked, value:', this.state.value);
  if(this.state.value==='') {
    alert("Please Enter Your Task!")
    return false;  //if input is empty, do nothing
  }  



  this.setState({

    todos: [...this.state.todos, {Name: this.state.value, Status: false}],
    value: ''  ,

  })   
  }
  handleStatusChange=(name)=>{
    let todos=[...this.state.todos];
    todos = todos.map(i=>i.Name===name? {...i, Status:!i.Status} : i);
    this.setState({todos})
  }
  DeleteSeleted=()=>{
    let todos= [...this.state.todos];
    todos = todos.filter(i=>i.Status===false);
    this.setState({todos})
  }

  
  render() { 
    return (  
      <div>
        <h1 className='Heading'>Todos App</h1>
        <div className='todosBox'>
          <div className="addInput">
          <BasicTextFields className='inputfeild'
          value={this.state.value}
          inputValue={(e) => this.setState({value : e.target.value  })}
        />
        <ContainedButtons handleClick={this.add_task} />
          </div>
          <div className='todosList'>
            <div></div>
            {this.state.todos.map((i,v)=>{
              return (
                <div key={i.Name} className={`todo ${i.Status? 'completed' : ''}`}  id='listName' >
                  <div className='inputCheck'> 
                         <input type="checkbox" checked={i.Status} onChange={()=>this.handleStatusChange(i.Name)}/>
                   <span className='Name'> {i.Name} </span>
                    
                     </div>
                  <div className='deleteBtn'>
                 <IconButtons  Delete={this.DeleteSeleted}/>
                     
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;