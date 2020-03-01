'use strict';

const path = require('path');

const dev_config = require('./configs/webpack.config.dev.js');

module.exports = {
  type: 'toolkit', // 项目类型，请勿变动 (project type, please don't modify)
  
  dev: {
    webpack: dev_config, // 开发服务端webpack配置文件路径 (dev-server webpack config path)
    proxy:  [
      // { 
      //   route: '/api',
      //   config: {
      //     target: 'http://www.api.com/api',
      //     changeOrigin: true
      //   }
      // }
    ], // 开发服务代理配置 (dev-server proxy config)
    port: 6200 // 开发服务端口号 (dev-server port)
  },

  build: {
    auto_release: false, // 构建完成后是否自动发布 (auto release project after build success)
    // 输入路径 (the build source directory)
    // 务必使用绝对路径 (must be a absolute path)
    src_dir: path.resolve('src/toolkit'),
    // 输出路径 (the directory for compiled project)
    // 务必使用绝对路径 (must be a absolute path)
    out_dir: path.resolve('lib'),
    // es6 module输出路径 (es6 module compiled directory)
    // 务必使用绝对路径 (must be a absolute path)
    esm_dir: path.resolve('es'),
    // (构建阶段的自定义配置回调) The callback will be call in the build-process
    // (返回自定义的配置) You can return your custom build configuration
    configuration: config => config,
    tool: 'rollup', // 打包工具，支持 tsc、rollup、webpack (build tool, support tsc, rollup and webpack)
    reserve: {
      style: false, // 构建结果是否保留样式文件 (whether or not reserve the stylesheet files)
      assets: [] // 构建结果保留其他资源的路径 (reserve other asset paths)
    },
    preflight: {
      typescript: true, // 是否处理ts或tsx文件 (whether or not process the ts or tsx files)
      test: false, // 是否进行单元测试 (whether or not process unit-test)
      eslint: true, // 是否进行eslint检测 (whether or not process eslint fix and check)
      stylelint: false, // 是否进行stylelint检测 (whether or not process style lint check)
    }
  },

  release: {
    git: 'git@gitlab.hupu.com:foundation-frontend/hupu-tool.git', // 发布的git仓库地址 (project git repo url)
    npm: 'http://hnpm.hupu.io', // 发布的npm仓库地址 (npm depository url)
    preflight: {
      test: false, // 发布前是否进行单元测试 (whether or not process unit-test)
      eslint: true, // 发布前是否进行eslint检测 (whether or not process eslint fix and check)
      stylelint: false, // 发布前是否进行stylelint检测 (whether or not process style lint check)
      commitlint: false, // 发布前是否进行单元测试commitlint检测 (whether or not process commit lint check)
      branch: 'master' // 发布前进行分支检测，设置为空字符串则不会检测 (only can release in this branch, set empty string to ignore this check)
    }
  },

  template: {
    // 生成模板的根路径 (the root directory for generate template)
    // 务必使用绝对路径 (must be a absolute path)
    root: path.resolve('src/toolkit'),
    typescript: true, // 是否创建ts文件 (whether or not apply typescript)
    test: '', // 创建单元测试文件类型 (the unit test frame)
    stylesheet: '', // 样式文件类型 (stylesheet type)
    readme: [true, 'md'] // [是否生成ReadMe文件, 创建md 或 mdx文件] ([whether or not README.md, generate mdx or md file])
  },

  plugins: []
};