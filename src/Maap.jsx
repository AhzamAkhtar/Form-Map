import React from 'react'
const Maap = () => {
    const oldarr = ["viod", "bahadur", "thapa"]
    console.log(oldarr[0])
    console.log(oldarr[1])
    console.log(oldarr[2])
    const newarr=oldarr.map(function(cvalue,i,arr){
        //return i + ":" + cvalue
        return i + ":" + cvalue + "thapa"
        //return arr
    })
    console.log(newarr)
    return (
        <>
        </>
    )
}
export default Maap