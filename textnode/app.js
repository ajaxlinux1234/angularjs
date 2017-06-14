angular.module("app",[]).
controller("myCtrl",function($scope){
$scope.save=function(){
	alert("保存成功");
}
$scope.clear=function(){
	this.message="";

}
$scope.left=function(){

	if(this.message.length<100){
		return 100-this.message.length;
	}else{
		return 0;
	}	

	
}
})