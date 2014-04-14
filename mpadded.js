/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
/*jslint browser: true*/

"use strict";

(function () {
    window.addEventListener("load", function () {
        var box, div, script, namespaceURI;
        // First check whether the page contains any <math> element.
        namespaceURI = "http://www.w3.org/1998/Math/MathML";
        if (document.body.getElementsByTagNameNS(namespaceURI, "math")) {
            // Create a div to store the test, using Kuma's "offscreen" CSS
            div = document.createElement("div");
            div.style.border = "0";
            div.style.clip = "rect(0 0 0 0)"
            div.style.height = "1px";
            div.style.margin = "-1px";
            div.style.overflow = "hidden";
            div.style.padding = "0";
            div.style.position = "absolute";
            div.style.width = "1px";
            // Verify the support for the <mpadded> element.
            div.innerHTML = "<math xmlns='" + namespaceURI + "'><mpadded height='23px' width='77px'/></math>";
            document.body.appendChild(div);
            box = div.firstChild.firstChild.getBoundingClientRect();
            document.body.removeChild(div);
            if (Math.abs(box.height - 23) > 1  || Math.abs(box.width - 77) > 1) {
                // Insert the MathJax.js script.
                script = document.createElement("script");
                script.src = "http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=MML_HTMLorMML";
                document.head.appendChild(script);
            }
        }
    });
}());
