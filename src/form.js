
import React from 'react';
import Form from 'react-bootstrap/Form';

class FormList extends React.Component{

    constructor(props){

        super(props);
        this.state={
    

            horns:''
        }  

    }  
    handeltheChange=(event)=>{

       event.preventDefault();
       
       this.setState({
       horns:event.target.value
       });
       this.props.selectHorns(this.state.horns)
      
    }
        
   
    

    render(){




         return( 
         
         <Form.Select aria-label="Default select example"  onChange={this.handeltheChange} >
        <option>Select Horns Number</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>

    

        </Form.Select>
        
     
        
         )
         }
 

}


export default FormList;

