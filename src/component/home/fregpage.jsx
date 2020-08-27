import React, { Component } from 'react';
import Fakeuser from './fakeouser';
import Loader from '../loader/Loader';
import FadeIn from "react-fade-in";
class fregpage extends Component {
    constructor(props){
        super(props);
        this.state={
            getgallary:[],
            loading:true,
        }

        
    }
componentDidMount(){
    fetch('https://picsum.photos/v2/list?limit=6').then(res =>res.json()).then(json =>{
        this.setState({
            loading:false,
        getgallary:json,
        })
        console.log(json)
    })

}
    render() {
        const  {getgallary,loading} = this.state;
        return (

            <div>
                {loading || !getgallary ? <div>
<Loader />
                </div>:
                <div className="row">
                      <div className="col-lg-4 col-sm-12 mb-2 col-md-6 col-xs-12 mt-4">

                      <Fakeuser />
   
</div>
                      
                <div className="col-lg-7 col-sm-12 mb-2 col-md-6 col-xs-12 mt-4">
                <ul class="nav nav-pills mb-3 border-1" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#GALLARY" role="tab" aria-controls="pills-home" aria-selected="true">GALLARY</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#INSTAGRAM" role="tab" aria-controls="pills-profile" aria-selected="false">INSTAGRAM</a>
  </li>
 
</ul>
<FadeIn>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="GALLARY" role="tabpanel" aria-labelledby="pills-home-tab">
  {getgallary.map(img =>(
                        
                        <img className="media w-100 mb-4 float-left" src={img.download_url} alt="" />
                    ))


                }
  </div>
                <div class="tab-pane fade" id="INSTAGRAM" role="tabpanel" aria-labelledby="pills-profile-tab">
                   
                INSTAGRAM
                </div>
 
</div>
</FadeIn>

                </div>
                    </div>}
              
            </div>
        );
    }
}

export default fregpage;