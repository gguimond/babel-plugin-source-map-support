var test = require('tape');
var babel = require('babel-core');
var plugin = require('../src');

test('plugin test', function (t) {
    t.plan(1);
    var expected = 'import sourceMapSupport from "source-map-support";\nsourceMapSupport.install();\nconsole.log("random");';
    var result = babel.transform('console.log("random");', {
        plugins: [
            plugin
        ]
    });
    t.equal(result.code, expected, 'output matched expected');
});