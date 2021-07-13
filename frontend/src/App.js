import BlocklyInject from "./screens/blocklyinject/BlocklyInject";

export default function App() {

    return (

        <div style={{padding: "10px", "text-align": "center"}}>
            <div id={"blockly"} style={{height: "50vh", width: "100vw"}} />
            <br />
            <textarea id={"code"} style={{"height": "25vh", "width": "80vw", margin: "auto"}} value={""} readOnly={true}/>
            <br />
            <div id={"generated-xml"} />
        </div>

  )

}