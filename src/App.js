import React from 'react';
import './App.css';

class App extends React.Component{
  
  constructor(props){ 
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }
  addItem(todovalue){
    if(todovalue!==""){
      const newItem={
        id:Date.now(),
        value:todovalue,
        isDone:false
      }
      const list=[...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem:""
      });
    }
  }
  deleteItem(id){
    const list=[...this.state.list];
    const updatedlist=list.filter(item => item.id !== id);
    this.setState({
      list:updatedlist,
    });
  }

  update(input){
    this.setState({
      newItem:input
    })
  }

  render(){
    return(
      <div>
        <h1 className="app-title"> ToDo App</h1>
        <div className="container">
          <br/>

          <div>
            <input 
            type="text"  
            className="input-text" 
            placeholder="write to do" required
            value={this.state.newItem}
            onChange={e => this.update(e.target.value)}
            />
            <button  
            className="add-btn"
            onClick={()=>this.addItem(this.state.newItem)}
            ><strong><h2>add</h2> </strong> </button>
          </div>
           <div className="list">
            <ul >
              {
                this.state.list.map(item=>{
                  return(
                    <li key={item.id}>
                       {item.value}
                       <button className="btn"
                       onClick={()=>this.deleteItem(item.id)}>
                         delete</button>
                    </li>
                  );
                })
              }
            </ul>
           </div>
        </div>
      </div>
    );
  }

}


export default App;