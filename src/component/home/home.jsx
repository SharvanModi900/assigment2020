import React, { Component } from 'react';
import Fred from './fregpage'
import Carousel from './carousel'
import Dashboard from '../dashboard/dashboard'

class home extends Component {
    render() {
        return (
            <div style={{width:'99%'}}>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Admin Dashboard</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
</nav>
<div class="row mb-4 mt-4">
   <div class="col-lg-4 col-sm-12 mb-2 col-md-6 col-xs-12"><p class="float-left w-25 ml-4 mr-4">fred</p></div>
    
    
    <div class="col-lg-4 col-sm-12 mb-2 col-md-6 col-xs-12">
    <ul class="nav nav-pills mb-3 " id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link " id="pills-home-tab" data-toggle="pill" href="#DASHBOARD" role="tab" aria-controls="pills-home" aria-selected="true">
        
        DASHBOARD</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" id="pills-profile-tab" data-toggle="pill" href="#SHOWCASE" role="tab" aria-controls="pills-profile" aria-selected="false">SHOWCASE</a>
  </li>
  
</ul>
</div>
<div class="col-lg-4 col-sm-12 mb-2 col-md-6 col-xs-12">
<button type="button" class="btn btn-light float-left ml-4">90% completed</button>
<button type="button" class="btn btn-light float-left ml-2">PUBLISH PAGE</button>

<div class="dropdown show float-left ml-1">
  <a class="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  
  </a>

  <div class="dropdown-menu menu-sm" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">menu 1</a>
    <a class="dropdown-item" href="#">menu 2</a>
    <a class="dropdown-item" href="#">menu 3</a>
  </div>
</div>
</div>

<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade " id="DASHBOARD" role="tabpanel" aria-labelledby="pills-home-tab">
<Dashboard />

  </div>
  <div class="tab-pane fade show active" id="SHOWCASE" role="tabpanel" aria-labelledby="pills-profile-tab">
      <div>
                 <div className="row">
                    <Carousel />
                </div>
                <div className="row">
                    <Fred />
                </div>
            </div></div>
  
</div>
    
   
</div>

            </div>
           
        );
    }
}

export default home;