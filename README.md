To verify the tests normally pass (without NYC):

```cmd
> node test.js
all tests passed
```

The bug is, the test will fail when run by NYC, because of its code-rewriting breaking the inferred name of the default parameter function value -- `name` property should be `"fn"`, but comes out as an `""` from an anonymous function:

```cmd
> npm run coverage

AssertionError [ERR_ASSERTION]: default inferred name
    at Object.<anonymous> (/home/getify/github-projects/nyc-bug-demo/test.js:9:9)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module.replacementCompile (/home/getify/github-projects/nyc-bug-demo/node_modules/append-transform/index.js:60:13)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at Object.<anonymous> (/home/getify/github-projects/nyc-bug-demo/node_modules/append-transform/index.js:64:4)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47 {
  generatedMessage: false,
  code: 'ERR_ASSERTION',
  actual: '',
  expected: 'fn',
  operator: 'strictEqual'
}
```
