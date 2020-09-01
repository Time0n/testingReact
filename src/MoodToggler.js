import React, { useState } from "react";

function MoodToggler(){
    const [isHappy, setIsHappy] = useState(true);
    const toggleIsHappy = () => setIsHappy(!isHappy);
    return (
        <div>
            <h3 onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</h3>
        </div>
    )
}
export default MoodToggler;