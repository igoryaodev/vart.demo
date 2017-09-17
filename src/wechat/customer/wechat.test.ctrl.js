"use strict";

module.exports = function($scope){
	Object.assign($scope, {
		pagename: 'test',
		test() {
			this.name = 'test-this-name'
		}
	})
	$scope.test();
}