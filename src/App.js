import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'

const App = () => <h1>Webpack React Setup. <Button>Button</Button></h1>
ReactDOM.render(<App />, document.getElementById('root'))
module.hot.accept();