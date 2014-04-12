/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
/*jslint browser: true*/

"use strict";

(function () {
    window.addEventListener("load", function () {
        // Insert MathJax.js if the <mspace> element is not supported.
        var box, div, script;
        div = document.createElement("div");
        div.innerHTML = "<math><mspace height='23px' width='77px'/></math>";
        document.body.appendChild(div);
        box = div.firstChild.firstChild.getBoundingClientRect();
        document.body.removeChild(div);
        if (Math.abs(box.height - 23) > 1  || Math.abs(box.width - 77) > 1) {
            script = document.createElement("script");
            script.src = "http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=MML_HTMLorMML";
            document.head.appendChild(script);
            window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
        }
    });
}());
