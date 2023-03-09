import react, { useState } from "react";


const Greet = (props) => {

    // console.log(props);

    // const { company } = props;
    // console.log(company);
    const [num, setNum] = useState(0);
    return (
        <div>
            <span>{num}</span>
            <button onClick={() => setNum(num + 1 )}>clickme</button>
        </div>
    )
}

export default Greet;