'use strict';

// let tips;

module.exports = function($alert, translate){
	return {
		success: function(title){
			$alert({
				title: translate(title),
				duration: 3,
				type: 'success',
				placement: 'top-right'
			})
		},
		danger: function(title){
			$alert({
				title: translate(title),
				duration: 3,
				type: 'danger',
				placement: 'top-right'
			})
		}
	}
}