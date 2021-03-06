// const fs = require('fs')
const path = require('path')
const chalk = require('chalk') // 字体加颜色
const symbols = require('log-symbols') // 图标
const { copyDir } = require('./shell/command')

const TEMP_DIR = 'gh_pages'
const cwd = process.cwd()
const SOURCE_DIR = 'home_page/*'

// 清除旧目录
// function cleanOldDir() {
//   const target = path.resolve(cwd, TEMP_DIR, 'index.html')
//   if (fs.existsSync(target)) {
//     rmDir(target)
//     console.log(symbols.success, chalk.green('clean old examples directions successfully!'))
//   }
// }
// 拷贝目标文件夹
function copyTargetDir() {
  const from = path.resolve(SOURCE_DIR)
  const to = path.resolve(cwd, TEMP_DIR)
  copyDir(from, to)
}

function buildHome() {
  copyTargetDir()
  console.log(symbols.success, chalk.green('home page has copyed successfully!'))
}

module.exports.buildHome = buildHome
