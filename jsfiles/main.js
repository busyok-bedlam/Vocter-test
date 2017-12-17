
// для избежания конфликтов помещаем ф-цию jquery в анонимную ф-цию
($ => {
	// 'use strict'
	// переменная отвечающая за выбраную машину
	let selectedCar;

	const preUrl = "./images/modules_cars/";  //url приставка
	let activeFlag = null;
	const iconPre = "./images/";
	// состояние с иконками
	const icons = [
		[`${iconPre}porog-vn.png`,`${iconPre}door.png`,`${iconPre}fara.png`,`${iconPre}hand.png`,`${iconPre}mirror.png`,`${iconPre}bottom-bumper.png`],
		[`${iconPre}capot-part.png`,`${iconPre}wing1.png`,`${iconPre}front.png`,`${iconPre}mirror.png`,`${iconPre}fara.png`,`${iconPre}hand.png`,`${iconPre}det1.png`],	
		[`${iconPre}capot.png`,`${iconPre}wing1.png`,`${iconPre}front.png`,`${iconPre}mirror.png`,`${iconPre}fara.png`,`${iconPre}hand.png`,`${iconPre}det1.png`],	
		[`${iconPre}capot.png`,`${iconPre}wing2.png`,`${iconPre}front.png`,`${iconPre}mirror.png`,`${iconPre}fara.png`,`${iconPre}hand.png`,`${iconPre}det1.png`],
		[`${iconPre}capot.png`,`${iconPre}wing1.png`,`${iconPre}front.png`,`${iconPre}mirror.png`,`${iconPre}fara.png`,`${iconPre}hand.png`,`${iconPre}det1.png`,`${iconPre}hand.png`,`${iconPre}bottom-bumper.png`]	


	]
	//создаем ОБЪЕКТ СОСТОЯНИЯ  BEGIN
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

	//создаем ОБЪЕКТ СОСТОЯНИЯ  BEGIN END



		$('.count').click(function(e){
			let obj = e.target
			let itemIndex = $(obj).index('.count');
			$('.count').removeClass('selected_auto')
			$(this).addClass('selected_auto')
			selectedCar = treeState[itemIndex]
			$('#desk').css({"background-image" : `url(${selectedCar.modules[3].url})`});
			$('.select-item:eq(3)').addClass('active-elem')
		});


		$('.select-item:not(:last-child)').hover(function(){
				$('.item-el').remove();
			$('.select-item').removeClass("active-elem")
			let ind = $(this).index();
			if(selectedCar){
				$('#desk').css({"background-image" : `url(${selectedCar.modules[ind].url})`});
				$('#price-value').html(selectedCar.modules[ind].price);
				

				if(activeFlag){
					icons[ind].forEach((item)=>{
					$('<div class="item-el" />').css({
						"width": "12%",
						"display": "inline-block",
						"height": "100%",
						"background-image": `url(${item})`,
						"background-size": "contain",
						"background-repeat": "no-repeat",
						"vertical-align": "middle"
						
					}).appendTo('.details')
					})	

				}

			}		




		})
		

		$('.parts').children().hover(function() {
			activeFlag = 1;
			let ind = $(this).index();
			console.log(ind)
			$('#desk').css({"background-image" : `url(${selectedCar.parts[ind].url})`});
			$('#price-value').html(selectedCar.parts[ind].price);	
		})
//обработчик события при клике на пункт с деталями
		$('.select-item:last-child').click(()=>{
			if(selectedCar){
				$('.parts').css("display","block")			
			}

		})
		

		$('.select-item:not(:last-child)').click(function(e){
			$('.item-el').remove();
			let obj = e.target;
			let ind = $(obj).index('.select-item');
			if(selectedCar&&activeFlag){
				icons[ind].forEach((item)=>{
				$('<div class="item-el" />').css({
					"width": "12%",
					"display": "inline-block",
					"height": "100%",
					"background-image": `url(${item})`,
					"background-size": "contain",
					"background-repeat": "no-repeat",
					"vertical-align": "middle"
					
				}).appendTo('.details')
			})		
			}

		})



})(jQuery)