import React, { useEffect, useState } from "react";

const RandomCat = (noCat) => {
    const [randomCat, setRandomCat] = useState;
    useEffect(()=> {
        async function getRandomCat(){
            try {
                let {data} = await axios.get('https://api.thecatapi.com/v1/images/search')
                setRandomCat(data)
            } catch (error) {
                console.warn(error);
                
            }
        }
        getRandomCat();
        const stream = setInterval(getRandomCat, 5000)
        return () => clearInterval(stream)
    }, [])
    return(
        <>
            <span onClick={noCat} style={{cursor: "pointer"}}>x</span>
            {randomCat ?
            <>
            <img className="cat" src="{randomCat[0].url}" alt="" />
            </>
            : <h2>Don't worry we are trying to get the cats to you</h2> }
        </>
    )
}

export default RandomCat;