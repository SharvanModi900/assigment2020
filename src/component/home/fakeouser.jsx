import React, { Component } from 'react';
import Loader from '../loader/Loader'
import FadeIn from "react-fade-in";
class fakeouser extends Component {
    constructor(props){
        super(props);
        this.state={
            fakeuser:[],
            loading:true,
        }

        
    }
async componentDidMount(){
    await fetch('https://jsonplaceholder.typicode.com/users/1').then(res =>res.json()).then(json =>{
        this.setState({
            loading:false,
        fakeuser:json,
        })
        console.log(json)
    })


}
    render() {
        const  {fakeuser,loading} = this.state;
        return (
            <div>
                {loading || !fakeuser ?<div><Loader /></div>:<div>
                    <FadeIn>
                    <div className="card">
    <div className="card-body text-center">
      <h6 className="text-center">
      {fakeuser.name}</h6> 
              
                <div class="dropdown-divider"></div>
                <div class="w-100 float-left">
                <h6 class="float-left">location</h6>
                <button type="button" className="btn btn-primary float-right">Edit</button>
                </div>
               
                <div class="dropdown-divider float-left"></div>
                <div>{fakeuser.address.street}</div> 
                <div class="w-100 float-left mt-4 mb-4">
                <button type="button" className="btn btn-light btn-sm float-left ">Mens fashions</button>
                <button type="button" className="btn btn-light btn-sm float-right">Womens fashios</button>
                </div>

                <div class="w-100 mt-4">
                    <div class="w-100 float-left">
                        <span>Brands</span>
                        <button type="button" className="btn btn-light btn-sm float-right">Edit</button>
                        </div>
                    <div class="dropdown-divider "></div>
                </div>
    </div>
    
</div>
                    </FadeIn>

                </div>
    }
            </div>
        );
    }
}

export default fakeouser;