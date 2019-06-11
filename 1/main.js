const fs = require('fs')
const path = require('path')
const generateSortFilesStruct = require('./generateSortFilesStruct')
const sortFilesByLetter = require('./sortFilesByLetter')
const getArgs = require('./getArgs')
const readDir = require('./readDir')
const rmDir = require('./rmDir')

const {
  src = path.join(__dirname, 'src'),
  dest = path.join(__dirname, 'dest'),
  remove
} = getArgs()

if (!fs.existsSync(src)) {
  console.log((`Folder does not exist: ${src}`))
} else {
  if (!fs.existsSync(dest)) {
    fs.mkdir(dest, err => err && console.log(err))
  }

  const [files] = readDir(src)

  sortFilesByLetter(dest, generateSortFilesStruct(files))
  remove && rmDir(src)
}
