/**
                                      
 .-.                      .-.       .-.       
 : :                      : :      .' `.      
 : :.---.  .--.  .--.   .-' : .--. `. .'.--.  
 : :: .; `' '_.'' .; ; ' .; :' .; ; : :' .; ; 
 :_;: ._.'`.__.'`.__,_;`.__.'`.__,_;:_;`.__,_;
    : :                                       
    :_;            

                                 
 * @language: Portuguese
 * @job: HTML5/CSS3/JS
 * @technology: HTML5/CSS3/JS
 * @author: Valter Rodrigues
 * @date: 01/03/2018 
 *
 * Copyright(c) Todos os direitos reservados.
 *  
**/

if (window.console == null) window.console = { log: function(p) { } };

var self;

var Functions = function(){
	self = this;
	self.init();
}

Functions.fn = Functions.prototype;
Functions.fn.extend = jQuery.extend;
Functions.fn.extend({
    init: function(){
		
		
		
		$(window).bind('scroll', function () {
			var busca = $('section.busca div.formBusca div.box').position().top;

			if ($(window).scrollTop() > busca ) {

			} else {
				
			}
		});
		
		self.resize();
		$(window).resize(function(){
			self.resize();
		});
	},
	resize: function(){
		$('section.temas div.boxTipo').each(function(index) {
			var h = $( this ).height();
			$('div.rep_1', $(this)).height(h);
			$('div.rep_2', $(this)).height(h);
        });
	}	
});

jQuery( function(){
	functions = new Functions();
});