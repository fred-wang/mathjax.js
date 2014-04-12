mathjax.js
==========

This repository contains some scripts to load MathJax condionally in order to
use it as a MathML polyfill. This is done by performing MathML feature
detections. You just need to insert one line in your document header:

    <html>
      <head>
        ...
        <script src="http://fred-wang.github.io/mathjax.js/mpadded.js"></script>
        ...
      </head>
      ...
    </html>

This will load MathJax for browsers that do not implement the `<mpadded>`
element (at the moment all but Gecko browsers). Replace `mpadded.js` with
`mspace.js` if you wish to verify support for the `<mspace>` element instead
(which is also supported in recent versions of WebKit).

Note however that MathJax is a heavy Javascript library, so in some situations
you might prefer a small [mathml.css](https://github.com/fred-wang/mathml.css)
stylesheet with only limited constructions for basic mathematics.
