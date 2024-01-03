var { strict: assert } = require("node:assert");

var { foo } = require("./bug.js");

var f = foo();
var g = foo(function g(){ return 1; });

try {
	assert.equal(f.name,"fn","default inferred name");
	assert.equal(g.name,"g","named function name");

	console.log("all tests passed");
}
catch (err) {
	console.error(err);
}
