import React, { Component } from 'react';
import Loader from '../loader/Loader';
import FadeIn from "react-fade-in";
class Card extends Component {
    constructor(props){
        super(props)
        this.state ={
            covid19:null,
            loading:true,
        }
    }
     async componentDidMount(){
      await  fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true')
        .then(res => res.json()).then(json =>{
            this.setState({
                loading:false,
                covid19:json
            })
            
        })
    }
    render() {
        const {loading, covid19} = this.state;
       
        return (
            <div>
          
                
                
                    {loading || !covid19 ? 
                    <div className="card">
                    <div className="card-body">
                <Loader />
                    </div>
                </div> :
                <div>
             
                    
                    
                   <FadeIn>
                   <div className="card  border-0 shadow-sm bg-white float-left ml-0 mt-4 mr-3">
                    <div className="card-body">
                <h6 className="text-center text-success">Active Case</h6>
                <p className="text-center table-success">{covid19.activeCases}</p>
                <p className="text-center">Last Update : {covid19.lastUpdatedAtApify}</p>
                </div>
                    </div>
                   </FadeIn>
                
                  
                   <FadeIn>
                   <div className="card border-0  mt-4 shadow-sm bg-white float-left  mr-3">
                    <div className="card-body">
                <h6 className="text-center text-warning">Recovered</h6>
                <p className="text-center">{covid19.recovered}</p>
                <p className="text-center">Last Update : {covid19.lastUpdatedAtApify}</p>
                </div>
                    </div>
                   </FadeIn>
                   <FadeIn>
                   <div className="card border-0  mt-4 shadow-sm bg-white float-left ">
                    <div className="card-body">
                <h6 className="text-center text-danger">Deaths</h6>
                    <p className="text-center">{covid19.deaths}</p>
                    <p className="text-center">Last Update : {covid19.lastUpdatedAtApify}</p>

                </div>
                   
            </div>
                   </FadeIn>
                  
            </div>
            }

              
                
            </div>
        );
    }
}

export default Card;