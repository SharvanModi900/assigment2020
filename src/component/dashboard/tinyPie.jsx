import React, { Component } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
class tinyPie extends Component {
    constructor(props){
        super(props);
        this.state ={
            loading:true,
            person:[]
        }
    }
    async componentDidMount(){

        await fetch('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true')
    .then(res =>res.json()).then(json =>{

    
        this.setState({
           loading:false,
            person:json
        })
      console.log(json[0])
        


        
    })

    
       

//     const url ="https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true";
//     const response = await fetch(url);
//     const data = await response.json();
// this.setState({
//     loading:false,
//     person:data
// })
  //  console.log(data)
       
 

    }
    render() {
        const  {person,loading} = this.state;

       const size = 29;
       const items = person.slice(24,size);
        return (
            <div>
               
             
             {loading || !person ?(<div>loading...</div>):(<div className="row">
                 
                 {/* <h1>{person.length}</h1> */}
                

               
                    <div className="card col-lg-11 mt-2 col-sm-12 mb-2 col-md-6 col-xs-12  border-0 shadow-sm bg-white">
                        <div className="card-body">
                            
                            {items.length >0 ? items.map(data =>
                            <div className="col-lg-2 col-sm-12 mb-2 col-md-6 col-xs-12 mr-3 mt-3 mb-3 float-left">
                                <h6 className="text-center"> {data.country}</h6>

                            <CircularProgressbar value={data.recovered} strokeWidth={6} maxValue={data.infected} 
                            label="recoved"
                            strokeWidth={15}
                            text={data.recovered}
                            
                            >
                               
                             
                            </CircularProgressbar>
                               <li className="text-center text-gray">{data.infected}</li> 
                               <li className="text-center text-primary">{data.recovered}</li> 

                            
                            </div>):null}<div className="col-2">
                            
                            </div>
                           

                            

                          
                        </div>
                   
                </div>
           
            
                 
             </div>)}
             
          
            </div>
        );
    }
}

export default tinyPie;