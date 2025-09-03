import { larnaka } from "./larnaka.js";
import { limassol } from "./limassol.js";
import { nicosia } from "./nicosia.js";
import { paphos } from "./paphos.js";

document.addEventListener("click", event => {
	if (event.target.closest(".larnaka")) {
		document.querySelector(".cyprus-map .left").innerHTML = larnaka;
	} else if (event.target.closest(".limassol")) {
		document.querySelector(".cyprus-map .left").innerHTML = limassol;
	} else if (event.target.closest(".nicosia")) {
		document.querySelector(".cyprus-map .left").innerHTML = nicosia;
	} else if (event.target.closest(".paphos")) {
		document.querySelector(".cyprus-map .left").innerHTML = paphos;
	}
});
