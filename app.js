angular.module("yvc", []);

function YourVoteCountsCtrl($scope) {
    $scope.candidates = ['A', 'B', 'C', 'D'];
    $scope.preference = 1;
    $scope.ballots = [
        [[1,1,1,1], [2,2,2], [3,3], [0,0,0,0,0,0]],
        [[1,1,1,1], [3,3,2,2,2], [], [0,0,0,0,0,0]],
        [[], [1,1,1,3,3,2,2,2], [], [1,0,0,0,0,0,0]],
        [[], [1,0,0,0,0,0,0,1,1,1,3,3,2,2,2], [], []]
    ];
    $scope.getColor = function(cand) {
        return "cand-" + cand;
    }
    $scope.incrementPref = function() {
        $scope.preference = Math.min($scope.preference+1, $scope.ballots.length-1);
    }
}
