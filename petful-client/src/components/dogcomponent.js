import React from 'react'; 
import {connect} from 'react-redux'; 
import {fetchDogRequest} from '../actions/dogAction'; 

export class DogComponent extends React.Component{
  componentDidMount(){
   return this.props.dispatch(fetchDogRequest()); 
  }

render(){
  const dog = this.props.dog.name;
  return(
  
  <span>{dog}</span>

  )
}

}
const mapStateToProps = state =>{
  return{
    dog: state.petsReducer.dog
  };
};

export default connect(mapStateToProps)(DogComponent);