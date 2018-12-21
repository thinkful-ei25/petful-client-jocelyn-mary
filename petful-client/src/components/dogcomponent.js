import React from 'react'; 
import {connect} from 'react-redux'; 
import {fetchDogRequest} from '../actions/dogAction'; 

export class DogComponent extends React.Component{
  componentDidMount(){
   return this.props.dispatch(fetchDogRequest()); 
  }

render(){
  if(!this.props.dog){
    return <p>loading...</p>
  }
  const dogName = this.props.dog.name;
  return(
  
  <span>{dogName}</span>

  )
}

}
const mapStateToProps = state =>{
  return{
    dog: state.dog
  };
};

export default connect(mapStateToProps)(DogComponent);