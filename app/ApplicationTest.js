Ext.define('MyApp.ApplicationTest', {
    extend: 'Ext.app.Application',
    
    launch: function () {
        if(MyApp.tests.hasSpecs()) {
            var specs = MyApp.tests.getSpecs();
            for(i = 0; i < specs.length; i++) {
                specs[i]();
            }
        }
        jasmine.getEnv().execute();
    }
});