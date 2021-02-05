const path = require('path')
const fs = require('fs')

function getStat(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        resolve(false)
      } else {
        resolve(stats)
      }
    })
  })
}

function mkdir(dir) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dir, err => {
      if (err) {
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
}

async function doCopy() {
  let isExists = await getStat(path.join(__dirname, '../dist_electron'))
  if (isExists === false || isExists.isDirectory() === false) {
    await mkdir(path.join(__dirname, '../dist_electron'))
  }
  fs.copyFileSync(path.join(__dirname, '../preload/preload.js'), path.join(__dirname, '../dist_electron/preload.js'))
}

doCopy()
