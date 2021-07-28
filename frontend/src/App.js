import BlocklyInject from "./screens/blocklyinject/BlocklyInject";
import {useEffect, useState} from "react";

export default function App() {

    const [pyCode, setPyCode] = useState("")
    const [output, setOutput] = useState("")


    function postCode() {

        console.log(JSON.stringify({ "pycode": document.getElementById("code").value }))

        fetch("/backend", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "pycode": document.getElementById("code").value
            })
        }).then((response) => {
            console.log(response)
            return response.json()
        }).then((data) => {
            console.log(data)
            console.log(data['flask_response'])
        }).catch(err => console.log(err))
    }

    // function handleTextChange(e) {
    //     console.log(e.target.value)
    //     setPyCode(e.target.value)
    // }

    return (

        <div style={{padding: "10px", "text-align": "center"}}>
            <div id={"blockly"} style={{height: "50vh", width: "100vw"}} />
            <br />
            <textarea id={"code"} style={{"height": "25vh", "width": "80vw", margin: "auto"}} value={""} readOnly={true} onChange={(e) => {
            }}/>
            <br />
            {/*<div id={"generated-xml"} />*/}

            <button onClick={postCode}> Run! </button>

            <p> {output} </p>

        </div>

  )

}
