import React, {useState} from "react";

const Home = ()=>{
    const [string, setString] = useState(false);
    
    const handleBtn = e => {
        e.stopPropagation()
        setString(!string)
    }   
     return(
        <>
            <button onClick={handleBtn} >{string?"Goodbye": "Hello"}</button>
        </>
    )
}

export default Home;