var app=angular.module("app",[]);
app.value("name","xiaxia");//值可以改变
app.constant("http","www.baidu.com");//值不可改变
app.factory("nihao",function(){
	return{
                       attr:"wocha",
                       method:function(){
                       	this.attr="nimei";
                       }

	}
});

app.service("enhen",function(){
	this.firstName="xiao";
	this.lastName="ming";
	this.method=function(){
		return this.firstName+","+this.lastName;
	}
});
app.controller("myCtrl",function($scope,name,http,nihao,enhen){
 $scope.name=name;
 $scope.http=http;
 $scope.nihao=nihao;
 $scope.enhen=enhen;
});