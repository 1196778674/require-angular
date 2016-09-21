'use strict';

define(['adminApp'],function(adminApp){
	adminApp.directive('datepicker', [function () {
		return {
			restrict: 'A',
			link: function (scope, iElement, iAttrs) {
				// $("." + iAttrs.id).datepicker({
			 //        format: "yyyy-mm-dd",
			 //        autoclose: true,
			 //        todayBtn: true,
			 //        clearBtn: true,
			 //        todayHighlight: true,
			 //        minView: "month",
			 //        // startDate: scope.startTime,
			 //        minuteStep: 10
			 //    })
			}
		};
	}])
});