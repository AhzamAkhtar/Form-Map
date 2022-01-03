import React, { useState } from 'react'
//import HomeIcon from "@mui/icons-material/Home"
//import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
const Form1 = () => {
    const [name, setname] = useState("")
    const [lastname,setlastname]=useState("")
    const [fullname, Setfullname] = useState("")
    const [lastnamenew,setlastnamenew]=useState("")
    const inputEvent = (event) => {
        setname(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        Setfullname(name)
        setlastnamenew(lastname)
    }
    const inputEvent2=(event)=>{
        setlastname(event.target.value)
    }
    return (

        <div className="container">
            <form>
                <div className="container">
                    <h2>Hello {fullname} {lastnamenew}</h2>
                    <input type="text" placeholder="Enter Your Name" value={name} onChange={inputEvent} />
                    
                    <input type="text" placeholder="Enter Your last Name" value={lastname} onChange={inputEvent2} />
                    <a href="#" onClick={onSubmit} class="btn btn-primary mx-2">Submit</a>
                </div>
            </form>
        </div>

    )
}
export default Form1;