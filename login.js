var app = angular.module('myApp', [  ]);
app.controller('myCtrl', function($scope) {
    // $scope.firstName= "John";
    // $scope.lastName= "Doe";
    $scope.user={uname:"",upwd:""};
    $scope.msg="";
    $scope.login=function(){
    	if($scope.user.uname=="admin"&&$scope.user.upwd=="123"){
    		alert("登录成功");
    	}else{
             $scope.msg="这是个错误信息";
    	}
    }


});