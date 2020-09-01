import React from 'react';

function Greeter({name, age}){
    const greet = () => {
        alert(`Hello, ${name}`)
    }

    return(
        <>
            <h1>Hello there { name } you are {"/".repeat(age)} years old</h1>
            <button onClick={() => alert("helleo")}>Click here</button>
            <button onClick={greet}>Click here 2</button>
        </>
    )

}

export default Greeter;