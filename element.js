var app=angular.module("app",[]);

app.directive("enter",function(){
     return function(scope,element,attrs){
     	element.bind("mouseenter",function(){
     	element.addClass('button alert');
     });
     }
})

app.directive("leave",function(){
     return function(scope,element,attrs){
     	element.bind("mouseleave",function(){
     	element.removeClass('button alert');
     });
     }
})


app.directive("txt",function(){
	return{
		restrict:"E",
		template:'<div><input type="text" ng-model="txt"/>{{txt}}</div>',
		link:function(scope,element){
                                    scope.$watch('txt',function(newVal){
                                    	if(newVal=='error'){
                                    		element.addClass('button alert');
                                    	}
                                    });
		}
	}
})