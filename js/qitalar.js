import { arrayAfrika, dataAfrika } from "./afrika.js";
import { arrayYevropa, dataYevropa } from "./yevropa.js";
import { dataOsiyo, arrayOsiyo } from "./osiyo.js";
import { dataJamerica, arrayJamerica } from "./jAmerika.js";
import { dataShamerica, arrayShamerica } from "./shAmerika.js";
import { dataOkeaniya, arrayOkeaniya } from "./okeaniya.js";

const qitalar = [
    { title: "Osiyo", data: dataOsiyo, states: arrayOsiyo },
    { title: "Yevropa", data: dataYevropa, states: arrayYevropa },
    { title: "Afrika", data: dataAfrika, states: arrayAfrika },
    { title: "Shimoliy Amerika", data: dataShamerica, states: arrayShamerica },
    { title: "Janubiy Amerika", data: dataJamerica, states: arrayJamerica },
    { title: "Okeaniya", data: dataOkeaniya, states: arrayOkeaniya },
]

export { qitalar }