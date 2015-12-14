myApp.controller('ticTacToeController', function($scope) {
	$scope.gameName = "Tic-Tac-Toe";

	$scope.playCount = 0;

	$scope.winner = '';

	$scope.gameOver = false;

	$scope.whoseTurn = 'X';

	$scope.boxes = {};
	for (var i=1;i<10;i++){
		$scope.boxes['box'+i] = {'clicked':false,'styleClass':'','boxNum':i,'player':''};
	}

	var winningCombos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

	$scope.ticTacToeClass = function(boxNum) {
		return $scope.boxes['box'+boxNum].styleClass;
	};

	$scope.play = function(boxNum) {
		if (!$scope.boxes['box'+boxNum].clicked && !$scope.gameOver){
			if ($scope.playCount % 2 === 0) {
				$scope.boxes['box'+boxNum].styleClass = 'fa fa-times fa-5x';
				$scope.boxes['box'+boxNum].player = 'x';
				$scope.whoseTurn = 'O';
			} else {
				$scope.boxes['box'+boxNum].styleClass = 'fa fa-circle-o fa-5x';
				$scope.boxes['box'+boxNum].player = 'o';
				$scope.whoseTurn = 'X';
			}
			$scope.playCount++;
			$scope.boxes['box'+boxNum].clicked = true;
		}
		checkForWin();
	};
	$scope.isClicked = function(boxNum) {
		return $scope.boxes['box'+boxNum].clicked;
	};
	var checkForWin = function(){

		for (var i=0; i<winningCombos.length; i++){
			var xPlays = 0;
			var oPlays = 0;
			for (var j=0; j<3; j++){
				var boxNum = winningCombos[i][j];
				if ($scope.boxes['box'+boxNum].clicked && $scope.boxes['box'+boxNum].player === 'x'){
					xPlays++;
				}
				if ($scope.boxes['box'+boxNum].clicked && $scope.boxes['box'+boxNum].player === 'o'){
					oPlays++;
				}
			}
			if (xPlays === 3){
				$scope.winner = 'X Wins!';
				$scope.gameOver = true;
				return;
			}
			if (oPlays === 3){
				$scope.winner = 'O Wins!';
				$scope.gameOver = true;
				return;
			}
		}
		if ($scope.playCount === 9){
			$scope.winner = 'No one wins!'
			$scope.gameOver = true;
			return;
		}
	};

	$scope.resetGame = function() {
		$scope.gameOver = false;
		for (var i=1;i<10;i++){
			$scope.boxes['box'+i] = {'clicked':false,'styleClass':'','boxNum':i,'player':''};
		}
		$scope.playCount = 0;
		$scope.whoseTurn = 'X';
	};
});