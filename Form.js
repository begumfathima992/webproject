
import React, { Component } from 'react'
import './Style7.css'

export  class Form extends Component {
    constructor(props){
        super(props);
        this.state ={
             text:"",
             amount:"",
             expenses:[],
             

        }

        
    }
    onInputChange=(event)=>{
        
        this.setState({text:event.target.value})
    }
    onAmountChange=(event)=>{
        
        this.setState({amount:event.target.value})
    }
    handleClick=()=>{
        const{text,amount}=this.state
     //  let arr=this.state.expenses
     //  arr.push({
     //      title:text,
     //      amount:amount
 
     //  })
     let arr=[...this.state.expenses,{title:text,amount:amount}]
      this.setState({expenses:arr});
      this.setState({text:"",amount:""})
     
     }
     
     
    render() {
        console.log(this.state.expenses)
        return (
            <div id="hi">
                <nav class="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white">
            
            <h3 id="h3" align={"center"}>Register</h3>
           </div>
        </nav>
        <div>
        <img className="hello0" src="data:image/png;base64,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"/>
     </div>
        <div id="input" align={"center"}>
           
          <input value={this.state.text} type="text"  className="hello" placeholder="user Name"  onChange={this.onInputChange}/><br/>
           <input value={this.state.amount} type="text" className="hello1" placeholder="Password" align={"center"} onChange={this.onAmountChange}/><br/><br/>
              <button onClick={this.handleClick} className="hello2">login</button> 
             </div>
            </div>
        )
    }
}
export default Form