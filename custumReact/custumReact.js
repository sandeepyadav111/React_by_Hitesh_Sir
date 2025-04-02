function custumRender(reactElement,container){
    const domElement = document.createElement(reactElement.type);
    /*domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.propes.href)
    domElement.setAttribute('target',reactElement.propes.target)

    container.appendChild(domElement)*/
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.propes){
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.propes[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type:'a',
    propes: {
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}

const mainContainer = document.querySelector('#root')
custumRender(reactElement,mainContainer)
