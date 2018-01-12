app.controller('TopIPS' ,function($scope) {
	

	$scope.mejoresIPS = function() {
		$scope.dataset = [
		  	{ 
		    	"id":1,
		   		"name":"Clinica 1"
		  	},
		  	{
		  		"id":2,
		    	"name":"Clinica 2"
		  	},
		  	{
		    	"id":3,
		    	"name":"Clinica 3"
		  	}
		];
		$scope.table(dataset,[dataset.id, dataset.name], "#IPStop");

	};
	$scope.peoresIPS = function() {
		$scope.dataset = [
		  	{ 
		    	"id":1,
		   		"name":"Clinica 3"
		  	},
		  	{
		  		"id":2,
		    	"name":"Clinica 4"
		  	},
		  	{
		    	"id":3,
		    	"name":"Clinica 5"
		  	}
		];
		$scope.table(dataset,[dataset.id, dataset.name], "#IPStop");

	};
});

app.controller('Mejoraron' ,function($scope) {
	dataset = {
		apples:[3,10]
	};
	donut(dataset, "#IPSmejoraron");
});

app.controller('Empeoraron' ,function($scope) {
	dataset = {
		apples:[3,10]
	};
	donut(dataset, "#IPSempeoraron");
});

