/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ProductSet in the list
// * All 3 ProductSet have at least one ToSupplier

sap.ui.require([
	"sap/ui/test/Opa5",
	"my/oft/jul/mygitDemo/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"my/oft/jul/mygitDemo/test/integration/pages/App",
	"my/oft/jul/mygitDemo/test/integration/pages/Browser",
	"my/oft/jul/mygitDemo/test/integration/pages/Master",
	"my/oft/jul/mygitDemo/test/integration/pages/Detail",
	"my/oft/jul/mygitDemo/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "my.oft.jul.mygitDemo.view."
	});

	sap.ui.require([
		"my/oft/jul/mygitDemo/test/integration/MasterJourney",
		"my/oft/jul/mygitDemo/test/integration/NavigationJourney",
		"my/oft/jul/mygitDemo/test/integration/NotFoundJourney",
		"my/oft/jul/mygitDemo/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});