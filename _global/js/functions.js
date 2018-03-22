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
		
		$(window).resize(function(){
			self.resize();
			self.buscaHome();
		});
		
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
	
	buscaHome: function(){
		var tamanhoTela = $(window).height()
			menu = $('section.menu');
			
			tam = (tamanhoTela - menu.height() - 490);
			
			if(tam < 180){
				tam = 180;
			}

			$('section.busca div.formBusca').css({'margin-top': tam});
			$('section.busca').css({'min-height': tam});
		
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
		
		$('section.menu div.boxMenu').click(function(){
			var atual = $(this);
			$('section.menu div.boxMenu').removeClass('ativo');
			$('div.etapa_2').hide();
			if($('div.etapa_3', atual).is(":visible") == false){
				$('div.etapa_3').hide();
				$("section.menu").animate({
				paddingBottom: "0",
				  }, 800, function() {
				});	
			}
			atual.addClass('ativo');

			$('div.etapa_2', atual).show();
			
			
			return false;	
		});
		
		$('section.menu div.etapa_2 a').click(function(){
			$(this).parents('.etapa_2').next('.etapa_3').show();
			
			$("section.menu").animate({
				paddingBottom: "170",
			  }, 800, function() {
			});	
			
			$('.scroll-pane-menu').jScrollPane();
			return false;	
		});
		
		$('section.menu div.etapa_3 ul li a').click(function(){
		
		});
		
		$('section.menu div.boxMenu div.etapa_3 a.voltar').click(function(){
			$('section.menu div.boxMenu div.etapa_3').hide();
			$("section.menu").animate({
				paddingBottom: "0",
				  }, 800, function() {
				});	
			return false;
		});
		
		
		  
		
		/*$('section.niveisGeograficos div.mapa a').click(function(){
			$('section.niveisGeograficos div.boxMapa').removeClass('ativo');
			$(this).parents('.boxMapa').toggleClass('ativo');
			
			if($('section#niveisGeograficos').is(":visible") == true){
				$('section.niveisGeograficos div.boxMapa').removeClass('ativo');
			}
			
			$('section#dadosNiveisGeograficos').slideToggle('fast', function(){
				$('section#dadosNiveisGeograficos').is(":visible");
				$('.scroll-pane').jScrollPane();
				if($('section#dadosNiveisGeograficos').is(":visible") == true){
					$("html, body").animate({ scrollTop: $('section#dadosNiveisGeograficos').position().top - 170 }, 1000);
				}
			});
			
	
			return false;	
		});
		
		$('section.niveisGeograficosMunicipios div.mapa a').click(function(){
			$('section.niveisGeograficosMunicipios div.boxMapa').removeClass('ativo');
			$(this).parents('.boxMapa').toggleClass('ativo');
			
			if($('section#dadosNiveisGeograficosMunicipios').is(":visible") == true){
				$('section.niveisGeograficosMunicipios div.boxMapa').removeClass('ativo');
			}
			
			$('section#dadosNiveisGeograficosMunicipios').slideToggle('fast', function(){
				$('section#dadosNiveisGeograficosMunicipios').is(":visible");
				$('.scroll-pane').jScrollPane();
				if($('section#dadosNiveisGeograficosMunicipios').is(":visible") == true){
					$("html, body").animate({ scrollTop: $('section#dadosNiveisGeograficosMunicipios').position().top - 170 }, 1000);
				}
			});
			return false;	
		});
		*/
		
	},
	
	buscaTopo: function(){
		var busca = $('section.busca div.formBusca div.box').position().top;

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