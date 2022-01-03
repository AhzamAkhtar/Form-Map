import React,{useEffect,useState} from "react";
const Weatherapi=()=>{
    const [city ,setcity]=useState("null")
    const [queary,setqueary]=useState("")
    const [fullqueary,setfullqueary]=useState("")
    useEffect(()=>{
        const gnewsapi=async()=>{
            const url=`http://api.weatherapi.com/v1/current.json?key=743125eba32b43ce850122915210212&q=${fullqueary}&aqi=no`
            const responce=await fetch(url)
            const resJson=await responce.json()
            console.log(resJson)
            {setcity(resJson)}
        }
        gnewsapi()
    },[fullqueary])
    const onSubmit=(event)=>{
        event.preventDefault()
        setfullqueary(queary)
    }
    const inputEvent=(event)=>{
        setqueary(event.target.value)
    }
    return(
        <>
        {! city ? (
            <div>
                <h1>no data</h1>
            </div>
        ):(
            <div>
            <h1>dfjfijjfaj</h1>
            <input type="text" placeholder="Enter"  onChange={inputEvent}/>
            <button onClick={onSubmit}>Submit</button>
            </div>
        )}
        </>
    )
}
export default Weatherapi