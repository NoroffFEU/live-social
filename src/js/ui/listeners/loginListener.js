import { login } from "../events/index.js";
import { trySetEvent } from "../utilities/index.js";

export function loginListener() {
    trySetEvent("form.login", "submit", login);
}