var MyApp = MyApp || {};
(function() {
    var specs = [],
        tests = {
            addSpec : function(spec) {
                specs.push(spec);
            },
            hasSpecs : function() {
                return specs.length > 0;
            },
            getSpecs : function() {
                return specs;
            }
        };
    MyApp.tests = tests;
})();