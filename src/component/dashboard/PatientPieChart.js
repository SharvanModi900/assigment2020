import React, { Component } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

class PatientPieChart extends Component {
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
        const {loading,covid19} = this.state;
       
        return (
            <div className="mb-3 mt-4">
                {loading || !covid19 ?<div>loading... </div>:<div className="row">
                    <div className="row mb-4">
                        <h6>Patient Result</h6>
                    </div>
                    <div className="card shadow-sm bg-white border-0">
                        <div className="card-body">
<div className="col-3 mt-4 ml-4 float-left">
<PieChart
  data={[
    { title: 'New Infected', value:covid19.regionData[20].newInfected, color: 'red' },
    { title: 'New Recovered', value: covid19.regionData[20].newRecovered, color: 'green' },
    { title: 'Deceased', value:covid19.regionData[20].deceased, color: 'orange' },
    { title: 'total Infected', value:covid19.regionData[20].totalInfected, color: 'pink' },
    { title: 'recovered', value:covid19.regionData[20].recovered, color: 'yellow' },
  ]}
/>
</div>

<div className="col-8 mt-4 ml-4 float-left">
<h6 className="text-center">List of patient</h6>

<table class="table ml-4">
<tbody>
<tr>
      <td><span style={{height:5,width:5,marginTop:10,borderRadius:50,background:'yellow',float:'left'}}></span></td>
      <td>Recovered</td>
      <td>{covid19.regionData[20].recovered}</td>
<td>%</td>

    </tr>

    <tr>
     
    <td><span style={{height:5,width:5,marginTop:10,borderRadius:50,background:'green',float:'left'}}></span></td>
    <td>New Recovered</td>
<td>{covid19.regionData[20].newRecovered}</td>
<td>%</td>
    </tr>
    <tr>
     <td><span style={{height:5,width:5,marginTop:10,borderRadius:50,background:'pink',float:'left'}}></span></td>
     <td>Total Infected</td>
<td>{covid19.regionData[20].totalInfected}</td>
<td>%</td>
    </tr>
    <tr>
    <td><span style={{height:5,width:5,marginTop:10,borderRadius:50,background:'orange',float:'left'}}></span></td>
    <td>Deceased</td>
<td>{covid19.regionData[20].deceased}</td>
      <td>%</td>
    </tr>
  </tbody>
</table>
                    </div>
                

                        </div>
                   
                    </div>
                   
                    </div>}
            </div>
        );
    }
}

export default PatientPieChart;