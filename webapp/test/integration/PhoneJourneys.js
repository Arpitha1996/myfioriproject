/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"my/oft/jul/mygitDemo/test/integration/NavigationJourneyPhone",
		"my/oft/jul/mygitDemo/test/integration/NotFoundJourneyPhone",
		"my/oft/jul/mygitDemo/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});