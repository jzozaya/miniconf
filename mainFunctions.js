
var SlideWidth = 500;
var SlideSpeed = 80;
var clickedModelo = false;
var clickedVc = false; 
var clickedGas = false;
var clickedDiesel = false;	
var clickedManual = false;
var clickedAutomatica = false;
var clickedDsg = false;
var clickedTiptronic = false;
var pantalla = screen.width;
var cont = 0;
		
$(document).ready(function () {	
		function SetFloatDown(){
			$('#float').stop().animate({ marginTop: 10 }, 800, 'easeOutExpo', function () { SetFloatUp() });}
		function SetFloatUp(){
			$('#float').stop().animate({ marginTop: 0 }, 800, 'easeOutExpo', function () { SetFloatDown() });}
		
		 $('#float').stop().animate({ marginTop: 10 }, 800, 'easeOutExpo', function () { SetFloatUp() });
		  /* if(navigator.platform === 'iPhone'){
			    SlideWidth = 250;
				
			   }	
			   */
			   if(pantalla < 500){
				    SlideWidth = 250;
					$('#float').css('width','30px');
				   
				   }	
						   $('#modelo').click(function(){			
							if(clickedModelo === false){ 	
							$(".modelo").addClass("esconde"),	
						   alinicio();
							$('#slider-wrapper').css("width", calclargo() + "px"),		
						   
							clickedModelo = true;
							}else{
							  $(".modelo").removeClass("esconde"),
							 alinicio();
							  $('#slider-wrapper').css("width", calclargo() + "px"),		 
							 
							  clickedModelo = false;
							  }		 
						   });
						   
						   $('#vc').click(function(){
						   if(clickedVc === false){ 
						   $(".vc").addClass("esconde"); 
						   alinicio();
						   $('#slider-wrapper').css("width", calclargo() + "px");		     
						  
						   clickedVc = true;
						   }else{
							 $("div.vc").removeClass("esconde"); 
							 alinicio();
							 $('#slider-wrapper').css("width", calclargo() + "px");		    
							 
							 clickedVc = false; 			 
							 }		 
						   }); 
						  
						   $('#gas').click(function(){
						   if(clickedGas === false ) {
						   $('.gas').addClass("esconde");	 
							 alinicio();
						   $('#slider-wrapper').css("width", calclargo() + "px");
						   clickedGas = true;
						   }else{
							  $('.gas').removeClass("esconde");	
								alinicio(); 
							  $('#slider-wrapper').css("width", calclargo() + "px");
							  clickedGas = false;
							  }
							  
							  if(clickedDiesel === true){
								   $('.gasdiesel').addClass("esconde");	 
								   alinicio();
								  }		
						   });  
						   
							$('#diesel').click(function(){
						   if(clickedDiesel === false ) {
						   $('.diesel').addClass("esconde");	
							 alinicio(); 
						   $('#slider-wrapper').css("width", calclargo() + "px");
						   clickedDiesel = true;
						   }else{
							  $('.diesel').removeClass("esconde");
								alinicio();	 
							  $('#slider-wrapper').css("width", calclargo() + "px");
							  clickedDiesel = false;
							  }	
							  
						  if(clickedGas === true){
								   $('.gasdiesel').addClass("esconde");	 
								   alinicio();
								  }	
							 });  
							 
							 
						  $('#manual').click(function(){			
							  if(clickedManual === false){
							  $('.manual').addClass("esconde");
							   alinicio();
							   $('#slider-wrapper').css("width", calclargo() + "px");
							   clickedManual = true;			 	
								  }else{
							  $('.manual').removeClass("esconde");
							   alinicio();
							   $('#slider-wrapper').css("width", calclargo() + "px");
							   clickedManual = false;					
									  }            
						  });   
						   
						   $('#automatica').click(function(){			
							  if(clickedManual === false){
							  $('.automatica').addClass("esconde");
							   alinicio();
							   $('#slider-wrapper').css("width", calclargo() + "px");
							   clickedAutomatica = true;			 	
								  }else{
							  $('.automatica').removeClass("esconde");
							   alinicio();
							   $('#slider-wrapper').css("width", calclargo() + "px");
							   clickedAutomatica = false;					
									  }            
						  });   
						  
						   $('#dsg').click(function(){			
							  if(clickedManual === false){
							  $('.dsg').addClass("esconde");
							   alinicio();
							   $('#slider-wrapper').css("width", calclargo() + "px");
							   clickedDsg = true;			 	
								  }else{
							  $('.dsg').removeClass("esconde");
							   alinicio();
							   $('#slider-wrapper').css("width", calclargo() + "px");
							   clickedDsg = false;					
									  }            
						  });   
						  
						  $('#tiptronic').click(function(){			
							  if(clickedManual === false){
							  $('.tiptronic').addClass("esconde");
							   alinicio();
							   $('#slider-wrapper').css("width", calclargo() + "px");
							   clickedTiptronic = true;			 	
								  }else{
							  $('.tiptronic').removeClass("esconde");
							   alinicio();
							   $('#slider-wrapper').css("width", calclargo() + "px");
							   clickedTiptronic = false;					
									  }            
						  });  
	/*
	$('#tiptronic').click(function(){
		//var xx =  $('#slider-wrapper > div.esconde').length;
		alert(calclargo() + "+" + (-1 * (CurrentMargin())));
			});	 
			
		*/	
			
	function calclargo (){
		var xx =  $('#slider-wrapper > div.esconde').length;
		
		xx = (19 - xx)* SlideWidth;
		return parseInt(xx);
		} 	
		
//	function alinicio(){
	//	var margenactualpositivo = (CurrentMargin())*(-1);
//		margenactualpositivo =  parseInt(margenactualpositivo);
//		 while(margenactualpositivo > 0){
		
//		 margenactualpositivo = margenactualpositivo - 150;
//		  PreviousSlide();
//		 }		 
//	}

     function alinicio(){
		 var margenactualpositivo = (CurrentMargin())*(-1);
		 var totals = CurrentMargin() + margenactualpositivo;
		  $("#slider-wrapper").animate({ marginLeft: totals }, 500, function () { SetNavigationDisplay() });		 
		 }
	function alfinal(){
		
		  var totals2 = (-1 * (calclargo()-SlideWidth));
		  $("#slider-wrapper").animate({ marginLeft: totals2 }, 500, function () { SetNavigationDisplay() });		 
		 }
		 	 
	 
	 $('.sw').bind('swiperight', function(event) {
		  var dif = calclargo();
		  var dif2 = (-1 * (CurrentMargin()));
		  if(dif - dif2 === dif){
			   alfinal();
			  }
		  else{
       PreviousSlide();
		  }
    });
      $('.sw').bind('swipeleft', function(event) {
		  var dif = calclargo();
		  var dif2 = (-1 * (CurrentMargin()));
		  if(dif - dif2 === SlideWidth){
			  alinicio();
			  }else{
		 
		 
      NextSlide();
	  }
    });	 
	
	
		 $('#reset').click(function(){    //	$('div div.slide:first-child').css("width", "270px");	 !!!
	      clickedModelo = false;
	      clickedVc = false; 
		  clickedGas = false;
		  clickedDiesel = false;	
		  clickedManual = false;
		  clickedAutomatica = false;
		  clickedDsg = false;
		  clickedTiptronic = false;
		  $('div').removeClass("esconde");
		  $('#slider-wrapper').css("width", calclargo() + "px");
		  $("input[type='checkbox']").attr("checked",false).checkboxradio("refresh");
		  alinicio();
		  $("#gas").checkboxradio({ mini: "true" }).checkboxradio("refresh");
	     }); 	 
      var clicked = false;

      $('#myButton').click(function() {
        if(clicked === false) {
        $(this).addClass('ui-disabled');
        clicked = true;
        alert('Button is now disabled');
        } 
       });

       $('#enableButton').click(function() {
       $('#myButton').removeClass('ui-disabled');
       clicked = false; 
       });
			
			//++++++++++++++++++++++++
            
            SetNavigationDisplay();
        });
        function CurrentMargin() {
            var currentMargin = $("#slider-wrapper").css("margin-left");
            if (currentMargin == "auto") {
                currentMargin = 0;
            }

            return parseInt(currentMargin);
        }

        function SetNavigationDisplay() {
            var currentMargin = CurrentMargin();
			
			$('#container-slide').animate({opacity:1}, 400, 'easeInOutExpo').css('overflow','hidden');
			
            if (currentMargin == 0) {
                $("#PreviousButton").addClass('ui-disabled');
            }	
            else {
                $("#PreviousButton").removeClass('ui-disabled');			
            }
            var wrapperWidth = $("#slider-wrapper").width();
            if ((currentMargin * -1) == (wrapperWidth - SlideWidth)) {
                $("#NextButton").addClass('ui-disabled');
            }
            else {
                $("#NextButton").removeClass('ui-disabled');
            }
			
        }
		
		function Light(){
			
			}
		
	
        function NextSlide() {
            var newMargin = CurrentMargin() - SlideWidth;   
			$('h4').show(800, 'easeInOutExpo', function(){});
			
			$('#container-slide').animate({opacity:.7}, 800, 'easeInOutExpo').css('overflow','visible');
			       
            $("#slider-wrapper").animate({ marginLeft: newMargin }, 500, 'easeInOutExpo', function () { SetNavigationDisplay() });
        }

        function PreviousSlide() {
			$('#container-slide').animate({opacity:.7}, 800, 'easeInOutExpo').css('overflow','visible');
			
			
            var newMargin = CurrentMargin() + SlideWidth;
            $("#slider-wrapper").animate({ marginLeft: newMargin }, 500, 'easeInOutExpo', function () { SetNavigationDisplay() });
        } 
		