
import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import DogComponent from './dogcomponent'




export default function Dashboard(props) {

    return (
        <React.Fragment>
    
            <div className="dashboard">
           <section className="dogToAdopt">
           Dogs To Adopt
<DogComponent/>
           </section>

           <section className="catToAdopt">
           Cats To Adopt
 
           </section>
            </div>
        </React.Fragment>
    );
}

