import React,{useState} from "react";
import './Skills.css'
import Chart from 'react-apexcharts'
const Skills = () => {
    const[state,setstate]=useState({
             options:{
                 colors:["#ff0000"],
                 chart:{
                     id:"basic-bar",
                 },
                 xaxis:
                 {
                    tickPlacement:'on',
                   categories:['HTML','CSS','JS','C','C++','JAVA'],
                    title:{
                         text:'Skills',
                        style:
                        {
                             color:'#0f0'
                     }
                 }
                },
                yaxis:
                {
                title:{
                    text:'Percentage',
                    style:{
                      color:'#0f0'
                    }
                }
                },
             theme:{
                     mode:'dark'
                 },
             },
            
             series:[
                 {
                 name:"Percent",
                data:[90,80,75,70,85,60]

                 },
             ],
         } );
    return (
        
            <><div className="abc"><div class="s1"> My Skills</div><p class="s2">------What I know------</p><div class="main">
            {/* <p class="d1">My creative skills and experiences.</p> */}
            <br />
            <p class="d2"> I am web developer.  I have knowledge about various programming languages like=HTML,CSS,JSS,C,C++,JAVA.</p>
                </div>
        
        <div className="chart">
            <Chart 
           options={state.options}
           series={state.series}
            // series={[
            //     {
            //     name:'Percent',
            //     data:[90,80,75,70,85,60]
            //     // color:'#0d25d6'
            //     }
            // ]}
            
            // options={{
                
            //     theme: {
            //         mode:'dark'
            //     },
            //     tooltip:{
            //         followCursor:true
            //     },
            //     chart:{
            //        stacked:true
            //     },
                
            //     dataLabels:{
            //      formatter:(val)=>
            //      {
            //         return (val)
            //      }
            //     },
            //     xaxis:
            //     {
            //         tickPlacement:'on',
            //         categories:['HTML','CSS','JS','C','C++','JAVA'],
            //         title:{
            //             text:'Skills',
            //             style:
            //             {
            //                 color:'#0f0'
            //             }
            //         }
            //     },
            //     yaxis:{
            //         labels:{
            //             formatter:(val)=>{
            //                return (val)
            //             }
            //         },
            //         title:{
            //             text:'Percent',
            //             style:
            //             {
            //                 color:'#0f0'
            //             }
            //         }
            //     }
                
                
            // }}
            type="area"
            width="500"
            height="310"
            

            />
            </div>
            </div>
       </>
        
    )
}
export default Skills