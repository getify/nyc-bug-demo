module.exports.foo = foo;

function foo(fn = () => 1) {
	return fn;
}
