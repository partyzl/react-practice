import React from "react";
import { RandomCat } from "../../component";

const Main = () => {
const [cat, setCat] = React.useState(false)

const toggleCat = () => setCat(prevState => !prevState)

    return(
        <>
        <section>
            { cat? <RandomCat noCat={toggleCat}/> : <button className="catBtn" onClick={toggleCat}>Click for a cat</button> }
        </section>
        </>
    )
}

export default Main;