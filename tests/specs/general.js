MyApp.tests.addSpec(function() {
    describe("Basic Assumptions", function() {
	    it("ExtJS framework is loaded and ready", function() {
	        expect(Ext).toBeDefined();
	        expect(Ext.getVersion()).toBeTruthy();
	        expect(Ext.getVersion().major).toEqual(6);
	    });
	});
});