import React from "react";
import "./navbar.css"
import iconConsoleWhite from "../../img/console_white_100.png"
import iconEnterKeyWhite from "../../img/enter_key_white_100.png"
import iconConfigWhite from "../../img/config_white_100.png"
import Terminal from "../terminal/Terminal"
import Config from "../configComponent/Config"
import Commands from "../commands/Commands";
import StatusMQTT from "../statusMqtt/StatusMQTT"
import { connect } from "react-redux";
import { updateView } from "../../store/actions/views"

const NavBar = props => {

    function changeView(option) {
        const terminal = <Terminal></Terminal>;
        const config = <Config></Config>;
        const commands = <Commands></Commands>;
        switch (option) {
            case "TERMINAL":
                props.updateView(terminal);
                return;
            case "CONFIG":
                props.updateView(config);
                return;
            case "COMMANDS":
                props.updateView(commands);
                return;
            default:
                props.updateView(terminal);
                return;
        }
    }

    function changeButtonDefault(value) {
        let buttonDefault = document.getElementById("buttonActive");
        buttonDefault.id = "buttonNormal";
        value.event.currentTarget.id = "buttonActive";
        changeView(value.option)
    }

    return (
        <div className="navbar">
            <table className="tableNavbar">
                <tbody>
                    <tr>
                        <td> <button id="buttonActive" onClick={e => changeButtonDefault({ event: e, option: "TERMINAL" })}><img src={iconConsoleWhite} className="icon" alt="Console_icon"></img></button></td>
                        <td> <button id="buttonNormal" onClick={e => changeButtonDefault({ event: e, option: "COMMANDS" })}><img src={iconEnterKeyWhite} className="icon" alt="Enter_key_icon"></img></button></td>
                        <td> <button id="buttonNormal" onClick={e => changeButtonDefault({ event: e, option: "CONFIG" })}><img src={iconConfigWhite} className="icon" alt="Config_icon"></img></button></td>
                    </tr>
                </tbody>
            </table>
            <div id="statusMQTT">
                <StatusMQTT></StatusMQTT>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return (
        {
            updateView(view) {
                const action = updateView(view);
                dispatch(action);
            }
        }
    )
}

export default connect(null, mapDispatchToProps)(NavBar);//NOTE caso não mapeio o estado para props, usar null