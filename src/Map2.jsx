import React from 'react'
const Map2=()=>{
    const studentdata=[
        {id:1,name:"vinod",degree:"MCS"},
        {id:2,name:"Thapa",degree:"BCS"},
        {id:3,name:"ThapaTechnical",degree:"CS"},
    ];
    const newdata=studentdata.map((cvalue)=>{
        return `My name is ${cvalue.name}.My digree is ${cvalue.degree};`
    })
    console.log(newdata)
    return(
        <></>
    )
}
export default Map2