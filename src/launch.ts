import cleancss from "./index.ts";

const css = `
  a {  color: purple;}
  div { border: none; }
  .pippo { color: purple;}
  .mickey { color: purple;}
  .goofy { background: red; }
  .don { color: purple; background: red; }
  .goofy { color: purple; }
`

console.log("css ", css);

console.log("result", cleancss(css));
