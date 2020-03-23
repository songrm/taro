const outputRootStrtegy = {
  h5: 'dist_h5',
  weapp: 'dist_weapp',
  alipay: 'dist_alipay',
  swan: 'dist_swan',
  ['undefined']: 'dist'
}
const env = JSON.parse(process.env.npm_config_argv)['cooked'][1].split(':')[1]
const outputRoot = outputRootStrtegy[env]
const path = require('path')
const config = {
  projectName: 'shopping',
  date: '2019-9-19',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: outputRoot,
  alias: {
    '@': path.resolve(__dirname, '..', 'src')
  },
  babel: {
    sourceMap: true,
    presets: [
      ['env', {
        modules: false
      }]
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread',
      ['transform-runtime', {
          helpers: false,
          polyfill: false,
          regenerator: true,
          moduleName: 'babel-runtime'
        }
      ]
    ]
  },
  defineConstants: {
  },
  copy: {
     patterns: [
    ],
    options: {
    }
  },
  mini: {
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: [
            'last 3 versions',
            'Android >= 4.1',
            'ios >= 8'
          ]
        }
      },
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    devServer: {
      host: '0.0.0.0',
      port: 10086,
      // proxy: {
      //     '/api/v1': {
      //         target: 'http://localhost:8000',  // 服务端地址
      //         changeOrigin: true
      //     }
      // }
  },
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
