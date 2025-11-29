function customRender(reactElement, conainer) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    if (reactElement.props.length > 0) {
        for (const prop in reactElement.props) {
            if (prop === "children")
                continue;
            domElement.setAttribute(prop, reactElement.props[prop])
        }
    }
    conainer.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Click me to visit google'
}

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer);