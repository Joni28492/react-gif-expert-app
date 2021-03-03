import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = ({defaultCategories=[]}) => {

    
    
    // const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState(defaultCategories);
    
    // const handleAdd = () =>{
    // //  setCategories(['HunterxHunter', ...categories]);
    //     setCategories(cats => [...cats, 'HunterxHunter']);
    // }
    
    

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            
            <ol>
                {
                    categories.map(category => 
                        <GifGrid 
                            key={category}
                            category={category} />
                    )
                }
            </ol>
        </>
    )
}

