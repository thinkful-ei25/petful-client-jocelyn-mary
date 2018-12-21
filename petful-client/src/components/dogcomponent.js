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
  const dogImage = this.props.dog.imageURL;
  const imageDescription = this.props.dog.imageDescription;
  const dogSex = this.props.dog.sex;
  const dogAge = this.props.dog.age;
  const dogBreed = this.props.dog.breed;
  const dogStory = this.props.dog.story;
  return(
    <span>
  <img src={dogImage} alt={imageDescription}/>
  <p>{dogStory}</p>
  <dl>
  <dt>Name:</dt>
  <dd>{dogName}</dd>
  <dt>Gender:</dt>
  <dd>{dogSex}</dd>
  <dt>Age:</dt>
  <dd>{dogAge}</dd>
  <dt>Breed:</dt>
  <dd>{dogBreed}</dd>
</dl>
  
</span>
  )
}

}
const mapStateToProps = state =>{
  return{
    dog: state.dog
  };
};

export default connect(mapStateToProps)(DogComponent);