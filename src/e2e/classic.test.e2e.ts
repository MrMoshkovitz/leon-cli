import { test1CreateBirth } from './tests/1-create-birth.js'
import { test2Update } from './tests/2-update.js'
import { test3Start } from './tests/3-start.js'
import { test4Check } from './tests/4-check.js'
import { test5Run } from './tests/5-run.js'

await test1CreateBirth()
await test2Update()
await test3Start()
await test4Check()
await test5Run()
