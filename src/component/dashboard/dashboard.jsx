import React, { Component } from 'react';
import Card from './Card'
import PieChart from './PatientPieChart'
import TinyPieChart from './tinyPie'
class dashboard extends Component {
    render() {
        return (
          <div>
           <div class="row">
             <div class="float-left col-lg-2 col-sm-12  col-md-6 col-xs-12">
             <div class="nav flex-column nav-pills responsevetab" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">OVERVIEW</a>
  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">RETAILDERS</a>
  <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">BRANDS</a>
  <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">PRODUCTS</a>
</div>
             </div>
             <div class="float-left col-lg-9 col-sm-12  col-md-6 col-xs-12">
             <div class="tab-content" id="v-pills-tabContent">
  <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
  <div>
    <div className="row">
        <div className=" col-lg-9 col-sm-6  col-md-6 col-xs-12 mt-4 mb-4">
        <h5 class="float-left w-50 ">OVERVIEW</h5>
        </div>
        <div className="col-lg-2 col-sm-6  col-md-6 col-xs-12 mt-4 mb-4">
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    NEW ACTION
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div> 
        </div>
    </div>
    
    <div class="row"><h6>Brand</h6></div>
    <div className="row"><Card /></div>
    <div className="row"> <PieChart /></div>
    <div className="row">   <TinyPieChart /></div> 
         
      </div>
  </div>
  <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
  <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
  <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
</div>
             </div>
           </div>
<div>

<div class="row">


</div>
</div>
</div>      
        );
    }
}

export default dashboard;