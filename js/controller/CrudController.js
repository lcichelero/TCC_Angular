//A Variavel myApp foi criada no arquivo myApp.js
myApp.controller('CrudController', function($scope) {
	
	$scope.pessoa = {}; //Instancia o objeto newPessoa
	$scope.operacao = "I";  // I-Inclusão/E-Edição/C-Cancelado

	$scope.dados = [{
		id : 1,
		nome : 'Djeison Hart',
		telefone : '(46) 1234-5678',
		email : 'djeison.har@ciss.com.br'
	}];

	//Salvar dados
	$scope.enviaDados = function( pessoa ){
		if ($scope.operacao != 'C') {
			if ($scope.operacao == 'I'){ //Se for inclusão
				var newPessoa = angular.copy(pessoa);

				newPessoa.id = $scope.dados[ $scope.dados.length -1].id +1 //= Object.keys( $scope.dados ).length + 1; 

				$scope.dados.push(newPessoa);

			}else{ //se for alteração
				var newPessoa = angular.copy(pessoa);
				$scope.dados[ $scope.idx ] = newPessoa;
				$scope.operacao = 'I';			
			}
		}
		delete $scope.pessoa;  //Limpa formulário;
		$scope.operacao = 'I'; //Seta operacao para Inclusão;
		
	}

	//Excluir dados
	$scope.excluirDados = function(item){

		$scope.dados.splice(item,1);
		delete $scope.pessoa;
		$scope.operacao = 'I';
	}

	//Editar dados
	$scope.editarDados = function( item ){
		$scope.idx = item ;
		$scope.operacao = 'E';
		$scope.pessoa = angular.copy( $scope.dados[ item ] );
		
	}

	//Cancelar operacao
	$scope.cancelar = function(){
		$scope.operacao = 'I';
		delete $scope.pessoa;
	}

  
})
