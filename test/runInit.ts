import child_process from 'node:child_process'
import path from 'path'
import { fileURLToPath } from 'url'

import { initDevAndTest } from './initDevAndTest.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export async function runInit(
  testSuiteArg: string,
  writeDBAdapter: boolean,
  separateProcess: boolean = false,
): Promise<void> {
  if (!separateProcess) {
    await initDevAndTest(testSuiteArg, String(writeDBAdapter))

    return
  }

  let done = false

  // Now use node & swc-node/register to execute initDevAndTest and wait until it console logs "Done". use child_process
  // 1. execute
  // 2. wait until console.log("Done")
  const child = child_process.spawn(
    'node',
    [
      '--no-deprecation',
      '--import',
      '@swc-node/register/esm-register',
      'test/initDevAndTest.ts',
      testSuiteArg,
      writeDBAdapter ? 'true' : 'false',
    ],
    {
      stdio: 'pipe',
      cwd: path.resolve(dirname, '..'),
    },
  )

  child.stdout.on('data', (data) => {
    console.log('initDevAndTest data', data.toString())
    if (data.toString().includes('Done')) {
      child.kill()
      done = true
    }
  })

  // on error
  child.stderr.on('data', (data) => {
    console.error('initDevAndTest error', data.toString())
  })

  child.on('close', (code) => {
    console.log(`Child process closed with code ${code}`)
  })

  // wait for done to be true
  await new Promise((resolve) => {
    const interval = setInterval(() => {
      if (done) {
        clearInterval(interval)
        resolve(undefined)
      }
    }, 100)
  })
}
