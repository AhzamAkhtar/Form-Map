import React, { useState } from 'react'
const Form1 = () => {
    const [name, setname] = useState("")
    const [fullname, Setfullname] = useState("")
    const inputEvent = (event) => {
        setname(event.target.value)

    }
    const onSubmit = (event) => {
        event.preventDefault()
        Setfullname(name)
    }
    return (

        <div class="card">
            <form>
                <div class="card-body">
                    <h2>Hello {fullname}</h2>
                    <input type="text" placeholder="Enter Your Name" value={name} onChange={inputEvent} />
                    <a href="#" onClick={onSubmit} class="btn btn-primary mx-2">Submit</a>
                </div>
            </form>
        </div>

    )
}
export default Form1;