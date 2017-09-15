requirejs.config({
    paths: {
        'math': 'math'
    },
    shim: {
        // 下面两个不规范文件不依赖别的文件,
        dateUtil: {
            deps: [],
            exports: 'DateUtils'
        },
        stringUtil: {
            deps: [],
            exports: 'StringUtils'
        },
        // 下面两个文件依赖于别的文件
        aplugin: {
            deps: ["util"],
            exports: 'a'
        },
        bplugin: {
            deps: ["util"],
            exports: 'b'
        }
    }
});
require(["math", "dateUtil", "stringUtil", "aplugin", "bplugin"], function( /*math, dateUtil, stringUtil, aplugin, bplugin*/ string, date) {
    // 规范文件
    console.log('规范文件');
    // math.add(2, 3);
    // 不规范文件
    console.log('不规范文件');
    // stringUtil.toUpperCase();
    // dateUtil.toString();
    // 不规范文件依赖
    var aPl = require("aplugin");
    var bPl = require("bplugin");
    aPl.toString();
    bPl.toString();
});