"use strict";

module.exports = function($scope, $state, $modal, mobile, tips){

	let words = {
			modal: null,
			loadWords: function(){
				mobile.getWordsList($scope.criteria).then(data => {
					$scope.words = data;
				});
			},
			saveWords: function(model){
				mobile.newWords(model).then(() => {
					tips.danger("新增成功");
					words.loadWords();
				})
			},
			editWords: function(model){
				mobile.editWords(model).then(() => {
					tips.danger("编辑成功");
					words.loadWords();
				})
			},
			removeWords: function(id){
				mobile.removeWords(id).then(() => {
					tips.danger("删除成功");
					words.loadWords();
				})
			}

	}

	$scope.criteria = {
		page: $state.params["page"] || 1,
		Keyword: $state.params["Keyword"]
	}

	words.loadWords();
	$scope.wordModel = {
		name: null,
		id: 0
	}
	$scope.search = function(){
		$scope.criteria.page = 1;
		words.loadWords();
	}

	$scope.openBlackWordsModal = function(model){
		if(model){
			$scope.wordModel = model;
		}
        words.modal = $modal({
            template: require("./black.words.modal.html"),
            backdrop: false,
            show: true,
            scope: $scope
        });
	}
	$scope.removeBlackwords = function(id){
		words.removeWords(id);
	}
	$scope.save = function(){
		if($scope.wordModel){
			if($scope.wordModel.id){
				words.editWords($scope.wordModel);
			}else{
				words.saveWords($scope.wordModel);
			}
			words.modal.hide();
			words.loadWords();
		}else{
			tips.danger("不能为空");
		}
		
	}
}