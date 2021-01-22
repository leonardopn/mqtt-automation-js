import store from "../../index.js"
import { generateDate } from "./DateUtils"

import {updateTextTextarea} from "../../frontend/store/actions/terminal"

function setLog(text) {
    const texto = store.getState().terminal.textTextArea;
    const textToDispacth = texto + "\n\n" + generateDate() + text;
    store.dispatch(updateTextTextarea(textToDispacth));
}

export { setLog }