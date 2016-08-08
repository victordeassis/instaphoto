(function(){

	var app = angular.module("casapp", []);

	app.controller("PhotosController", function() {

		this.array = photosArray;

	});

	app.controller("NavBarController", function() {

		this.array = navBarArray;

		this.page = 1;

		this.selectPage = function(setPage) {
			this.page = setPage;
		};

		this.isSelected = function(checkPage) {
			return this.page == checkPage;
		};

	});

	app.controller("ListaComprasController", function() {

		this.array = listaComprasArray;

	});

	var photosArray = [
		{source:'wedding-photos/sample1_l.jpg', description:'Teste de description', title:'Título'},
		{source:'wedding-photos/GuestHouseEventsWeddingPlanning.jpeg', description:'Mais teste de description', title:'Mais um título'},
		{source:'wedding-photos/wedding-photostock1.jpg', description:'Outro teste de description', title:'Outro Título'},
	];

	var navBarArray = [
		{number:'1',label:'Fotos'},
		{number:'2',label:'Lista de Presentes'},
		{number:'3',label:'Como Chegar'}
	];

	var listaComprasArray = [

		{category:'Eletrodomésticos', items:[{nome:'Geladeira', url:'http://www.americanas.com.br/produto/124255267/geladeira-refrigerador-frost-free-brastemp-clean-brm39-352-litros-platinum?opn=YSMESP&loja=02&WT.srch=1&epar=bp_pl_00_go_pla_apostas'}, {nome:'Fogão', url:'http://www.magazineluiza.com.br/fogao-4-bocas-brastemp-ative-bf150ar-inox-grill-timer-acendimento-automatico-dupla-chama/p/0888946/ed/foga/google/4660/?utm_source=google&utm_medium=pla&utm_campaign=ed&utm_content=0888946&partner_id=4660&cmptype=pla&profileid=464&campaignid=4573&keyword=&gclid=CjwKEAjwgPe4BRCB66GG8PO69QkSJAC4EhHhg_rT3lckLu3LLDypmU6FWo5gv2b7ES5H6qDeJCl5ohoC7Z_w_wcB'}]},
		{category:'Utensílios', items:[{nome:'Pano de prato'}, {nome:'Jogo de copos'}]}

	];

})();
