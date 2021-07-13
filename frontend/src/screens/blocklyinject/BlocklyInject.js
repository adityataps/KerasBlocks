import { BlocklyWorkspace } from 'react-blockly';
import Blockly from "blockly";
// import "blockly/python_compressed"
// import "../../assets/custom_keras"
import './BlocklyInject.css'
import ConfigFiles from "../../assets/kerasblocks";
import React, {useState} from "react";
import * as ReactDOM from "react-dom";

function BlocklyInject() {
    const MY_TOOLBOX = ConfigFiles.INITIAL_TOOLBOX_JSON
    const [xml, setXml] = useState();

    const onWorkspaceChange = React.useCallback((workspace) => {
        workspace.registerButtonCallback("myFirstButtonPressed", () => {
            alert("button is pressed");
        });
        const newXml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
        document.getElementById("generated-xml").innerText = newXml;

        const code = Blockly.Python.workspaceToCode(workspace);
        document.getElementById("code").value = code;
    }, []);

    const onXmlChange = React.useCallback((newXml) => {
        document.getElementById("generated-xml").innerText = newXml;
    }, []);

    return (
        <BlocklyWorkspace
            toolboxConfiguration={MY_TOOLBOX}
            workspaceConfiguration={{
                grid: {
                    spacing: 20,
                    length: 3,
                    colour: "#ccc",
                    snap: true,
                },
            }}
            initialXml={ConfigFiles.INITIAL_XML}
            className={"fill-height"}
            onWorkspaceChange={onWorkspaceChange}
            onXmlChange={onXmlChange}
        />
    )
}

window.addEventListener("load", () => {
    const editor = React.createElement(BlocklyInject);
    ReactDOM.render(editor, document.getElementById("blockly"));
});
