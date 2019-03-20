const path = require('path')

const getComponentName = componentPath => {
  const dir = path.dirname(componentPath)
  const arrDir = dir.split('/')
  const name = arrDir[arrDir.length - 1]
  return name
}

module.exports = {
  getComponentPathLine(componentPath) {
    const name = getComponentName(componentPath)
    if (name === 'src') return ''
    return `import ${name} from '../${name}'`
  },
  ignore: ['src/**/*style.js', 'src/index.js'],
  sections: [
    {
      name: 'UI Components',
      components: 'src/**/*.js'
    }
  ],
  template: {
    head: {
      scripts: [
        {
          // src: 'assets/js/babelHelpers.min.js'
        }
      ],
      links: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900' },
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/solid.css' },
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/regular.css' },
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/fontawesome.css' }
      ]
    }
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.(png|jpg|gif)$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
}
