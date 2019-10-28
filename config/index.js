const outputRootStrtegy = {
  h5: 'dist_h5',
  weapp: 'dist_weapp',
  alipay: 'dist_alipay',
  swan: 'dist_swan',
  ['undefined']: 'dist'
}
const env = JSON.parse(process.env.npm_config_argv)['cooked'][1].split(':')[1]
const outputRoot = outputRootStrtegy[env]

const config = {
  projectName: 'login',
  date: '2019-9-19',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: outputRoot,
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        // 'transform-runtime',
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread'
      ]
    },
    typescript: {
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        baseUrl: '.',
        declaration: false,
        experimentalDecorators: true,
        jsx: 'preserve',
        jsxFactory: 'Nerv.createElement',
        module: 'commonjs',
        moduleResolution: 'node',
        noImplicitAny: false,
        noUnusedLocals: true,
        outDir: './dist/',
        preserveConstEnums: true,
        removeComments: false,
        rootDir: '.',
        sourceMap: true,
        strictNullChecks: true,
        target: 'es6'
      },
      include: [
        'src/**/*'
      ],
      exclude: [
        'node_modules'
      ],
      compileOnSave: false
    }
  },
  defineConstants: {
  },
  copy: {
     patterns: [
    ],
    options: {
    }
  },
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        },
        url: {
          enable: true,
          limit: 10240
        }
      }
    }
  },
  alipay:{
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        },
        url: {
          enable: true,
          limit: 10240
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
