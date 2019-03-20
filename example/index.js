import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../src/Button'

const App = () => <h1>Webpack React Setup. <Button>777</Button></h1>
ReactDOM.render(<App />, document.getElementById('root'))
module.hot.accept();