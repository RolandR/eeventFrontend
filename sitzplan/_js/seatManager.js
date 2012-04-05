$(document).ready(function(){
	
	
	var seatLayout = [
		{
			type: 'seatGroup',
			startingId: 0,
			width: 2,
			seatAmount: 24,
			x: 50,
			y: 150
		},
		{
			type: 'seatGroup',
			startingId: 24,
			width: 2,
			seatAmount: 24,
			x: 200,
			y: 150
		},
		{
			type: 'seatGroup',
			startingId: 48,
			width: 2,
			seatAmount: 24,
			x: 350,
			y: 150
		},
		{
			type: 'seatGroup',
			startingId: 72,
			width: 2,
			seatAmount: 24,
			x: 500,
			y: 150
		},
		{
			type: 'seatGroup',
			startingId: 0,
			width: 2,
			seatAmount: 24,
			x: 50,
			y: 550
		},
		{
			type: 'seatGroup',
			startingId: 24,
			width: 2,
			seatAmount: 24,
			x: 200,
			y: 550
		},
		{
			type: 'seatGroup',
			startingId: 48,
			width: 2,
			seatAmount: 24,
			x: 350,
			y: 550
		},
		{
			type: 'seatGroup',
			startingId: 72,
			width: 2,
			seatAmount: 24,
			x: 500,
			y: 550
		},
		{
			type: 'area',
			label: 'B&uuml;hne, Admin Area',
			width: 400,
			height: 100,
			x: 105,
			y: 0
		},
		{
			type: 'area',
			label: '',
			width: 610,
			height: 850,
			x: 0,
			y: 100
		},
		{
			type: 'area',
			label: 'Eingangsbereich',
			width: 610,
			height: 200,
			x: 0,
			y: 950
		},
		{
			type: 'area',
			label: 'Eingang',
			width: 100,
			height: 28,
			x: 25,
			y: 940
		},
		{
			type: 'area',
			label: 'Kassen',
			width: 80,
			height: 180,
			x: 470,
			y: 960
		},
		{
			type: 'area',
			label: 'Chillout',
			width: 350,
			height: 100,
			x: 60,
			y: 1050
		},
		{
			type: 'area',
			label: 'WCs',
			width: 40,
			height: 150,
			x: 0,
			y: 1000
		}
	];
	
	var occupiedSeats = [
		{
			seatId: 4,
			username: 'JanitorMaster',
			clan: 'Eevent Staff'
		},
		{
			seatId: 60,
			username: 'Dude',
			clan: 'DudeClan'
		}
	];
	
	var config = {
		seatSize: 25,
		seatMargin: 1
	};
	
	var seatManager = new SeatManager(
		seatLayout,
		occupiedSeats,
		config,
		$('#room'),
		$('#roomLoading')
	);
	
	function SeatManager(
		seatLayout,
		occupiedSeats,
		config,
		roomElement,
		loadingOverlayElement
	){
		
		initLayout(seatLayout);
		
		function initLayout(seatLayout){
			for(item in seatLayout){
				var currentElement = seatLayout[item];
				if(currentElement.type == 'seatGroup'){
					addSeatGroup(currentElement);
				} else if(currentElement.type == 'area'){
					addArea(currentElement);
				}
			}
			loadingOverlayElement.css('display', 'none');
		}
		
		function addSeatGroup(seatGroup){
			var toAppend = $('<div></div>');
			toAppend.addClass('seatGroup');
			var seatGroupWidth = (config.seatSize + config.seatMargin * 2 + 2) * seatGroup.width;
			toAppend.css('width', seatGroupWidth);
			toAppend.css('left', seatGroup.x);
			toAppend.css('top', seatGroup.y);
			
			for(var i = 0; i < seatGroup.seatAmount; i++){
				var seatId = i + seatGroup.startingId;
				var seatElement = $('<div></div>');
				seatElement.addClass('seat');
				seatElement.attr('seatId', seatId);
				seatElement.css('width', config.seatSize);
				seatElement.css('height', config.seatSize);
				seatElement.css('margin', config.seatMargin);
				seatElement.html(seatId);
				toAppend.append(seatElement);
			}
			
			roomElement.append(toAppend);
		}
		
		function addArea(area){
			var toAppend = $('<div></div>');
			toAppend.addClass('roomArea');
			toAppend.css('left', area.x);
			toAppend.css('top', area.y);
			toAppend.css('width', area.width);
			toAppend.css('height', area.height);
			toAppend.html(area.label);
			
			roomElement.append(toAppend);
		}
	}
	
});


















