
($ => {
	'use strict'
	const preUrl = "./images/modules_cars/";



const treeState =	[

	{
		coverUrl: `${preUrl}sitro/чистый1.jpg`,
		modules:[
			{url:`${preUrl}sitro/минимальный.jpg`,price:"2999грн"},
			{url:`${preUrl}sitro/стандарт.jpg`,price:"9000грн"},
			{url:`${preUrl}sitro/стандарт+.jpg`,price:"12000грн"},
			{url:`${preUrl}sitro/стандарт++.jpg`,price:"18000грн"},
			{url:`${preUrl}sitro/стандарт+++.jpg`,price:"20000грн"},
			{url:`${preUrl}sitro/целиком.jpg`,price:"60000грн"}
		],
		parts:[
			{url:`${preUrl}sitro/оптика.jpg`,price:"3000грн"},
			{url:`${preUrl}sitro/пороги-внутренние.jpg`,price:"5000грн"},
			{url:`${preUrl}sitro/пороги-наружние.jpg`,price:"6000грн"},
			{url:`${preUrl}sitro/двери.jpg`,price:"7000грн"},
			{url:`${preUrl}sitro/задние-крылья.jpg`,price:"5000грн"},
			{url:`${preUrl}sitro/капот.jpg`,price:"6000грн"},
			{url:`${preUrl}sitro/передний-бампер.jpg`,price:"5000грн"},
			{url:`${preUrl}sitro/задний-бампер.jpg`,price:"6000грн"}
		]
	},
	{
		coverUrl: `${preUrl}mazda/чистая.jpg`,
		modules:[
			{url:`${preUrl}mazda/минимальный.jpg`,price:"2999грн"},
			{url:`${preUrl}mazda/стандарт.jpg`,price:"9000грн"},
			{url:`${preUrl}mazda/стандарт+.jpg`,price:"12000грн"},
			{url:`${preUrl}mazda/стандарт++.jpg`,price:"18000грн"},
			{url:`${preUrl}mazda/стандарт+++.jpg`,price:"20000грн"},
			{url:`${preUrl}mazda/целиком.jpg`,price:"60000грн"}
		],
		parts:[
			{url:`${preUrl}mazda/оптика.jpg`,price:"3000грн"},
			{url:`${preUrl}mazda/пороги-внутренние.jpg`,price:"5000грн"},
			{url:`${preUrl}mazda/пороги-наружние.jpg`,price:"6000грн"},
			{url:`${preUrl}mazda/двери.jpg`,price:"7000грн"},
			{url:`${preUrl}mazda/заднее-крыло.jpg`,price:"5000грн"},
			{url:`${preUrl}sitro/капот.jpg`,price:"6000грн"},
			{url:`${preUrl}mazda/передний-бампер.jpg`,price:"5000грн"},
			{url:`${preUrl}mazda/задний-бампер.jpg`,price:"6000грн"}
		]
	},
	{
		coverUrl: `${preUrl}mers/чистый.jpg`,
		modules:[
			{url:`${preUrl}mers/минимальный.jpg`,price:"2999грн"},
			{url:`${preUrl}mers/стандарт.jpg`,price:"9000грн"},
			{url:`${preUrl}mers/стандарт+.jpg`,price:"12000грн"},
			{url:`${preUrl}mers/стандарт++.jpg`,price:"18000грн"},
			{url:`${preUrl}mers/стандарт+++.jpg`,price:"20000грн"},
			{url:`${preUrl}mers/целиком.jpg`,price:"60000грн"}
		],
		parts:[
			{url:`${preUrl}mers/оптика.jpg`,price:"3000грн"},
			{url:`${preUrl}mers/пороги-внутренние.jpg`,price:"5000грн"},
			{url:`${preUrl}mers/пороги-наружние.jpg`,price:"6000грн"},
			{url:`${preUrl}mers/двери.jpg`,price:"7000грн"},
			{url:`${preUrl}mers/задние-крылья.jpg`,price:"5000грн"},
			{url:`${preUrl}sitro/капот.jpg`,price:"6000грн"},			
			{url:`${preUrl}mers/передний-бампер.jpg`,price:"5000грн"},
			{url:`${preUrl}mers/задний-бампер.jpg`,price:"6000грн"}
		]
	}
]


let selectedCar;

	$('.count').click(function(e){
		let obj = e.target
		let itemIndex = $(obj).index('.count');
		$('.count').removeClass('selected_auto')
		$(this).addClass('selected_auto')
		selectedCar = treeState[itemIndex]
		$('#desk').css({"background-image" : `url(${selectedCar.modules[3].url})`});
		$('.select-item:eq(3)').addClass('active-elem')

	});




	// $('#desk').css({"background-image" : "url('./images/mers.jpg')"})

	$('.select-item:not(:last-child)').hover(function(){
		$('.select-item').removeClass("active-elem")
		let ind = $(this).index();
		console.log(ind)
		$('#desk').css({"background-image" : `url(${selectedCar.modules[ind].url})`});
		$('#price-value').html(selectedCar.modules[ind].price);
	})
	

	$('.parts').children().hover(function() {
		
		let ind = $(this).index();
		console.log(ind)
		$('#desk').css({"background-image" : `url(${selectedCar.parts[ind].url})`});
		$('#price-value').html(selectedCar.parts[ind].price);	
	})

	$('.select-item:last-child').click(()=>{
		$('.parts').css("display","block")
	})
	



})(jQuery)