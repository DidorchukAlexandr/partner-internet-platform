import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import "@fontsource/dm-sans";
import "@fontsource/public-sans";

export const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
    font-family: 'DM Sans', 'Public Sans'
    sans-serif;
    background: rgb(242, 242, 242);
}
*,
*:before,
*:after {
    box-sizing: border-box;
}

html,
body,
div,
span,
object,
iframe,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
code,
em,
img,
small,
strike,
strong,
sub,
sup,
tt,
b,
u,
i,
ol,
ul,
li,
fieldset,
form,
label,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
main,
canvas,
embed,
footer,
header,
nav,
section,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: none;
}

footer,
header,
nav,
section,
main {
    display: block;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

input {
    
    border-radius: 0;
}`;
