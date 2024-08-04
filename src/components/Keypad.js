// Code Keypad Component Here
import React from 'react';

function Keypad (){
    function handleChange(event){
        console.log('Entering password...')
    }
    
    return (
        <div>
            <input type='text' onChange={handleChange} placeholder='fill here' />
        </div>
    )
}

export default Keypad;