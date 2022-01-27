import React, { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp =  ( )  => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    /* const handleAdd = () => {
        const nombreSerie = 'Naruto';
        setCategories([...categories, nombreSerie]);
        //setCategories( cats => [...cats, 'HunterXhunter'])
    } */

    return ( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory  setCategories={ setCategories}/>
            <hr />


            <ol>
                {
                    categories.map((category) => {
                        return <GifGrid 
                            key= {category}
                            category={ category }/>
                    })
                }
            </ol>
        </>  
    );
}



export default GifExpertApp;