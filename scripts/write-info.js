#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

if (process.version.match(/v(\d+)\./)[1] < 12) {
  console.error('Node v12 or greater is required.')
} else {
  // run program
  main().catch((error) => {
    console.log(error)
    process.exit(1)
  })
}

// program
async function main() {
  const cwd = process.cwd()
  const pkgRaw = await fs.promises.readFile(path.resolve(cwd, 'package.json'))
  const { name, version } = JSON.parse(pkgRaw)

  const file = `/////////////////////////////////////////////////////////////////////////////////
///                                                                           ///
/// WARNING: This file is overwritten on build time! No point in changing it. ///
///                                                                           ///
/////////////////////////////////////////////////////////////////////////////////

export const name = '${name}'
export const version = '${version}'
`

  await fs.promises.writeFile(path.resolve('lib', 'constants', 'info.ts'), file)
}
