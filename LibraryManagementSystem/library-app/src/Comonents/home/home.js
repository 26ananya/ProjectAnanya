import React from 'react';
import library from '../../Assets/library.jpg';
import '../../Assets/library.css'

export default class Home extends React.Component{
    render(){
        return(
            <div>
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <a className="navbar-brand" href="#">Online Library</a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
    
     
      </ul>
      <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success mr-sm-2" type="submit">Search</button>
      <div></div>
      <button class="btn btn-outline-success mr-sm-2" type="button">Log In</button>
     
      <button class="btn btn-outline-success" type="button">Sign Up</button>
    </form>
      </div>
               </nav>
                <div className="Container-fluid">
                <img src={library} className="library" alt="library"/>
           
                <div class="centered">
                <div class="row">
                <div class="card col-md-2 " className="cardStyle">
                <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>

                </div>

                 <div class="card col-md-2" className="cardStyle">
                <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
                
                </div>
                </div>

            </div>
                
                </div>

           
        );
    }
}