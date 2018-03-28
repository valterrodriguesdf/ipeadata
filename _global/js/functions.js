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
		
		$('#nav').slicknav();
		
		$(window).bind('scroll', function () {
			self.buscaTopo();
		});
		
		self.buscaTopo();
		self.resize();
		self.pageHome();
		self.buscaHome();
		self.navegacao();
		
		$(window).resize(function(){
			self.resize();
			self.buscaHome();
		});
		
		self.buscaHome();
		
		$(window).bind('scroll', function () {
			if( $(window).scrollTop() > 100 ) {
				$('header.topo').css({'top': 0});
				$('#barra-brasil').hide();
				$('#menu').css({'top': 15});
			} else {
				$('header.topo').css({'top': 33});
				$('#barra-brasil').show();
				$('#menu').css({'top': 45});
			}
		});
		
	},
	
	navegacao: function(){
		$('nav ul.navegacao li a').click(function(){
			var conta = $( $(this).attr('href') ).position().top;
			$("html, body").animate({ scrollTop:  conta }, 1000);
			return false;	
		});
	},
	
	buscaHome: function(){
		var tamanhoTela = $(window).height(),
			menu = $('section.menu'),
			logo = $('section.busca h1'),
			meio = $('section.busca div.meio');
		
			tam = tamanhoTela - menu.height();
			
			if(tam < 230){
				tam = 200;
				logo.css({'min-height': '60px'});
			} else {
				logo.css({'min-height': '150px'});	
			}
						
			meio.css({'min-height': tam});
					
	},
	
	pageHome: function(){
		
		$('.scroll-pane').jScrollPane();
		$('.scroll-pane-menu').jScrollPane();
		
		$('section.temas div.boxTema').each(function(index) {
			divCores = $('div.bar div.itemBar', $(this));
			var totalCores = divCores.length;
			var tamanho = 100/totalCores;
			divCores.width(tamanho + '%');
        });	
		
		$('section.menu div.boxMenu').not('.ativo').hover(function(){
			$('section.menu div.boxMenu div.etapa_2').hide();	
			$('section.menu div.boxMenu div.etapa_3').hide();	
			$('section.menu div.boxMenu').removeClass('ativo');
			
			$("section.menu").height('520px');
			self.buscaHome();
			self.buscaTopo();
			
			return false;
		});
		
		
		$('section.menu div.boxMenu').click(function(){		
			var atual = $(this);
			$('section.menu div.boxMenu').removeClass('ativo');
			$('div.etapa_2').hide();
			if($('div.etapa_3', atual).is(":visible") == false){
				$('div.etapa_3').hide();
			}
			atual.addClass('ativo');
			
			$('div.etapa_2', atual).show();
			
			return false;	
		});
		
		$('section.menu div.etapa_2 a').click(function(){
			var atual = $(this).parents('.etapa_2').next('.etapa_3');

			atual.fadeIn('fast', function(){
				$("section.menu").height('750px');
				self.buscaHome();	
				self.buscaTopo();	
				$('.scroll-pane-menu').jScrollPane();
			});
			

			return false;	
		});
		
		$('section.menu div.etapa_3 ul li a').click(function(){
		
		});
		
		$('section.menu div.boxMenu div.etapa_3 a.voltar').click(function(){
			$('section.menu div.boxMenu div.etapa_3').hide();	
			return false;
		});
		
	},
	
	buscaTopo: function(){
		var busca = $('section.busca div.formBusca div.box').position().top + 120;

		  if ($(window).scrollTop() > busca ) {
			  $('header.topo div.buscaTopo').fadeIn("fast");
		  } else {
			  $('header.topo div.buscaTopo').fadeOut("fast");
		  }
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