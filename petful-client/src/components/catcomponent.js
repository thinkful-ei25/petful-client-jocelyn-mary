import React from 'react'; 
import {connect} from 'react-redux'; 
import {fetchCatRequest, adoptCatRequest} from '../actions/catAction'; 

export class CatComponent extends React.Component{
  componentDidMount(){
    return this.props.dispatch(fetchCatRequest()); 
  }
  handleAdopt(event){
    event.preventDefault(); 
    this.props.dispatch(adoptCatRequest())
  }

  render(){
    if(!this.props.cat){
      return <p>loading...</p>
    }
    const catDisplay = this.props.cat
    if(this.props.error){
      return <p>oh no! something went wrong, refresh and try again</p>
    }

    return(
      <div className="catDetails">
      <header>{catDisplay.name}
      <br/>
      <img src={catDisplay.imageURL} alt={catDisplay.imageDescription}/>
      </header>
      <main>
        <dl>
          <dt>sex:</dt>
          <dd>{catDisplay.sex}</dd>
          <dt>age:</dt>
          <dd>{catDisplay.age}</dd>
          <dt>breed:</dt>
          <dd>{catDisplay.breed}</dd>
          <dt>story:</dt>
          <dd>{catDisplay.story}</dd>
        </dl>
       <div><button onClick={(e)=> this.handleAdopt(e)}>Adopt!</button></div>
      </main>
      </div>
    ) 
  }
}

const mapStateToProps = state =>{
  return{
    cat: state.cat, 
    error: state.error
  };
};

export default connect(mapStateToProps)(CatComponent);