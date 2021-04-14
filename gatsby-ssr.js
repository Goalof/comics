
const React = require("react");
const QAPI = require("./qapi").default;
const { RawHtml } = require("@quarkly/components");
export const onRenderBody = (
    {
        setHeadComponents,
        setPostBodyComponents,
    }
) => {
  const components = RawHtml.getComponents();
  setHeadComponents([
    <style>{`
        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }
    `}</style>,
    ...components.headItems,
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas%20Neue:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Luckiest%20Guy:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Carter%20One:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fredericka%20the%20Great:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bungee%20Inline:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Frijole:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bungee%20Shade:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Finger%20Paint:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Creepster:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Saira%20Stencil%20One:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ribeye%20Marrow:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:ital,wght@0,400;0,500;0,600;0,700&display=swap" />,
  ]);

  setPostBodyComponents([
    ...components.bodyItems,
    <script
        key="QAPI"
        dangerouslySetInnerHTML={{
            __html: `window.QAPI = ${JSON.stringify(QAPI || {})}`
        }}
    />,
  ]);
}