var app=angular.module("app",[]);
app.directive("zhong",function(){
	return {
		restrict:"E",//表示element
		template:"<div>wo shi hello</div>",
		replace:true

	}
})


app.directive("hello",function(){
	return{
		restrict:"A",//表示属性
		link:function(){
			alert("this is att");
		}
	}
})


app.directive("jike",function(){
	return{

		restrict:"C",//表示class
		link:function(){
			alert("this is c");
		}
	}
})