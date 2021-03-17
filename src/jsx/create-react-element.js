import React from 'react'
import ReactDOM from 'react-dom'

// const element = <h1> Hello, world! </h1>;
// const element = React.createElement("h1", null, "Hello, world!");
// const img = React.createElement('img', { src: 'https://picsum.photos/id/237/200/300', title: 'img title' })
const img = React.createElement(
    'img',
    {
        src: 'https://picsum.photos/id/237/200/300',
        title: 'img title'
    }
)

const paragraph = React.createElement(
    'p',
    null,
    'Hello, React'
)

const rootElement = document.getElementById("root")
ReactDOM.render(paragraph, rootElement)