sap.ui.define([
	"sap/ui/core/mvc/Controller"
	], function (Controller) {
		"use strict";
		return Controller.extend("sap.ui.demo.wt.controller.App", {
			onShowHello : function () {
				// show a native JS alert
				alert("Hi Universe");
			}
		});
	});