(function(window, util) {

    var a = {};

    a.toString = function() {
        alert("a=" + util.add(1, 2));
    };

    // 全局变量
    window.a = a;

})(window, util);