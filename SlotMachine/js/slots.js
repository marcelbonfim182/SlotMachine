
//note parseInt
//note stop


vezes_devem_ser_jogadas_ate_ganhar = 10; //Quantidade de vezes que os usuarios vão jogar até ganhar.

var opts = ['logoGM','onstar','mylink','mercadodaboca'];

var marcaocampodowinner = 1;


function go(){
	addSlots($("#slots_a .wrapper"));
	moveSlots($("#slots_a .wrapper"));
	addSlots($("#slots_b .wrapper"));
	moveSlots($("#slots_b .wrapper"));
	addSlots($("#slots_c .wrapper"));
	moveSlots($("#slots_c .wrapper"));
	
	contaqadrinhos();
	ganhador();
	
}

$(document).ready(
function(){
	addSlots($("#slots_a .wrapper"));
	addSlots($("#slots_b .wrapper"));
	addSlots($("#slots_c .wrapper"));
	
}		
);


function addSlots(jqo){
	for(var i = 0; i < 49; i++){
		var ctr = Math.floor(Math.random()*opts.length);
		jqo.append("<div class='slot "+opts[ctr]+"'></div>");
	}
}

function moveSlots(jqo){
		var time = 5;
		time += Math.round(Math.random()*2);
	    jqo.stop(true,true);
	
	    var x = jqo.position();
		//alert(x.top);
  
        var marginTop = parseInt(x.top - 21)
	
		marginTop -= (20 * 401)
		//document.getElementById("wrapperA").style.transform = "translate(0, "+marginTop+"px)";
		
		jqo.css("transition", "transform "+time+"s cubic-bezier(0.88, -0.25, 0.265, 1.25)");
		
		jqo.css({transform: "translateY("+marginTop+"px)"});
		
		
			var audio1 = new Audio('sound/cash.mp3');
			audio1.play();
		
			var audio = new Audio('sound/inicio.mp3');
			
			
			audio1.addEventListener("ended", function() {
				audio.play();
			});
		
		
		//Código detecta quando a transição em CSS3 acaba.
		$("#slots_a .wrapper").one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', 
		function() {
			audio.pause();
			setTimeout(function(){ document.getElementById('corpo').style.pointerEvents = 'auto'; }, 1000);
		});



}


// Função conta todas as divs e atribui numero a elas
function contaqadrinhos(){
	
	addnumbertoclass1 = 0;
	addnumbertoclass2 = 0;
	addnumbertoclass3 = 0;
	
$('#slots_a .wrapper .slot').each(function(){
	addnumbertoclass1++
	$(this).addClass(addnumbertoclass1.toString());
});

$('#slots_b .wrapper .slot').each(function(){
	addnumbertoclass2++
	$(this).addClass(addnumbertoclass2.toString());
});

$('#slots_c .wrapper .slot').each(function(){
	addnumbertoclass3++
	$(this).addClass(addnumbertoclass3.toString());
});


}

contaquantosjogaram = 0;

function ganhador(){
    //GANHADOR
	
	contaquantosjogaram++
	
	marcaocampodowinner+=20;


if ($("#slots_a .wrapper").find( "."+marcaocampodowinner ).hasClass('logoGM') && $("#slots_b .wrapper").find( "."+marcaocampodowinner ).hasClass('logoGM') && $("#slots_c .wrapper").find( "."+marcaocampodowinner ).hasClass('logoGM') ) {
  
  setTimeout(function(){var audio2 = new Audio('sound/ganhou.mp3');audio2.play(); $("#ganhoutudo").addClass("vcganhou"); document.getElementById('corpo').style.pointerEvents = 'none';}, 7300);

}


if ($("#slots_a .wrapper").find( "."+marcaocampodowinner ).hasClass('mercadodaboca') && $("#slots_b .wrapper").find( "."+marcaocampodowinner ).hasClass('mercadodaboca') && $("#slots_c .wrapper").find( "."+marcaocampodowinner ).hasClass('mercadodaboca') ) {

  setTimeout(function(){ var audio2 = new Audio('sound/ganhou.mp3');audio2.play();$("#ganhoutudo").addClass("vcganhou"); document.getElementById('corpo').style.pointerEvents = 'none'; }, 7300);

}

if ($("#slots_a .wrapper").find( "."+marcaocampodowinner ).hasClass('onstar') && $("#slots_b .wrapper").find( "."+marcaocampodowinner ).hasClass('onstar') && $("#slots_c .wrapper").find( "."+marcaocampodowinner ).hasClass('onstar') ) {

 setTimeout(function(){var audio2 = new Audio('sound/ganhou.mp3');audio2.play();$("#ganhoutudo").addClass("vcganhou"); document.getElementById('corpo').style.pointerEvents = 'none'; }, 7300);

}



if ($("#slots_a .wrapper").find( "."+marcaocampodowinner ).hasClass('mylink') && $("#slots_b .wrapper").find( "."+marcaocampodowinner ).hasClass('mylink') && $("#slots_c .wrapper").find( "."+marcaocampodowinner ).hasClass('mylink') ) {
  
  setTimeout(function(){ $("#ganhoutudo").addClass("vcganhou"); document.getElementById('corpo').style.pointerEvents = 'none';var audio2 = new Audio('sound/ganhou.mp3');audio2.play(); }, 7300);

}


	
	
	
	if(contaquantosjogaram >= (vezes_devem_ser_jogadas_ate_ganhar + parseInt(Math.random() * 3)) ) {
		
		
		setTimeout(function(){ var audio2 = new Audio('sound/ganhou.mp3');audio2.play();$("#ganhoutudo").addClass("vcganhou"); document.getElementById('corpo').style.pointerEvents = 'none'; }, 7000);
		
		
		
		//Numero ramdomico que define qual sequencia de imagens é mostrada ao ganhar.
		var numeroramdomico = parseInt(Math.random() * 4);
		//alert(numeroramdomico);
		
		
		if(numeroramdomico == "0") {

			$("#slots_a .wrapper ."+marcaocampodowinner.toString()).addClass("logoGM_WIN");
			$("#slots_b .wrapper ."+marcaocampodowinner.toString()).addClass("logoGM_WIN");
			$("#slots_c .wrapper ."+marcaocampodowinner.toString()).addClass("logoGM_WIN");
			
			$("#slots_a .wrapper ."+marcaocampodowinner.toString()).removeClass("logoGM");
			$("#slots_b .wrapper ."+marcaocampodowinner.toString()).removeClass("logoGM");
			$("#slots_c .wrapper ."+marcaocampodowinner.toString()).removeClass("logoGM");
			
			$("#slots_a .wrapper ."+marcaocampodowinner.toString()).removeClass("mercadodaboca");
			$("#slots_b .wrapper ."+marcaocampodowinner.toString()).removeClass("mercadodaboca");
			$("#slots_c .wrapper ."+marcaocampodowinner.toString()).removeClass("mercadodaboca");
			
			$("#slots_a .wrapper ."+marcaocampodowinner.toString()).removeClass("mylink");
			$("#slots_b .wrapper ."+marcaocampodowinner.toString()).removeClass("mylink");
			$("#slots_c .wrapper ."+marcaocampodowinner.toString()).removeClass("mylink");
			
			$("#slots_a .wrapper ."+marcaocampodowinner.toString()).removeClass("onstar");
			$("#slots_b .wrapper ."+marcaocampodowinner.toString()).removeClass("onstar");
			$("#slots_c .wrapper ."+marcaocampodowinner.toString()).removeClass("onstar");
			
		}
		
		if(numeroramdomico == "1") {
			$("#slots_a .wrapper ."+marcaocampodowinner.toString()).addClass("mercadodaboca_WIN");
			$("#slots_b .wrapper ."+marcaocampodowinner.toString()).addClass("mercadodaboca_WIN");
			$("#slots_c .wrapper ."+marcaocampodowinner.toString()).addClass("mercadodaboca_WIN");
			
			$("#slots_a .wrapper ."+marcaocampodowinner.toString()).removeClass("logoGM");
			$("#slots_b .wrapper ."+marcaocampodowinner.toString()).removeClass("logoGM");
			$("#slots_c .wrapper ."+marcaocampodowinner.toString()).removeClass("logoGM");
			
			$("#slots_a .wrapper ."+marcaocampodowinner.toString()).removeClass("mercadodaboca");
			$("#slots_b .wrapper ."+marcaocampodowinner.toString()).removeClass("mercadodaboca");
			$("#slots_c .wrapper ."+marcaocampodowinner.toString()).removeClass("mercadodaboca");
			
			$("#slots_a .wrapper ."+marcaocampodowinner.toString()).removeClass("mylink");
			$("#slots_b .wrapper ."+marcaocampodowinner.toString()).removeClass("mylink");
			$("#slots_c .wrapper ."+marcaocampodowinner.toString()).removeClass("mylink");
			
			$("#slots_a .wrapper ."+marcaocampodowinner.toString()).removeClass("onstar");
			$("#slots_b .wrapper ."+marcaocampodowinner.toString()).removeClass("onstar");
			$("#slots_c .wrapper ."+marcaocampodowinner.toString()).removeClass("onstar");
		}
		
		if(numeroramdomico == "2") {
			$("#slots_a .wrapper ."+marcaocampodowinner.toString()).addClass("onstar_WIN");
			$("#slots_b .wrapper ."+marcaocampodowinner.toString()).addClass("onstar_WIN");
			$("#slots_c .wrapper ."+marcaocampodowinner.toString()).addClass("onstar_WIN");
			
			
			$("#slots_a .wrapper ."+marcaocampodowinner.toString()).removeClass("logoGM");
			$("#slots_b .wrapper ."+marcaocampodowinner.toString()).removeClass("logoGM");
			$("#slots_c .wrapper ."+marcaocampodowinner.toString()).removeClass("logoGM");
			
			$("#slots_a .wrapper ."+marcaocampodowinner.toString()).removeClass("mercadodaboca");
			$("#slots_b .wrapper ."+marcaocampodowinner.toString()).removeClass("mercadodaboca");
			$("#slots_c .wrapper ."+marcaocampodowinner.toString()).removeClass("mercadodaboca");
			
			$("#slots_a .wrapper ."+marcaocampodowinner.toString()).removeClass("mylink");
			$("#slots_b .wrapper ."+marcaocampodowinner.toString()).removeClass("mylink");
			$("#slots_c .wrapper ."+marcaocampodowinner.toString()).removeClass("mylink");
			
			$("#slots_a .wrapper ."+marcaocampodowinner.toString()).removeClass("onstar");
			$("#slots_b .wrapper ."+marcaocampodowinner.toString()).removeClass("onstar");
			$("#slots_c .wrapper ."+marcaocampodowinner.toString()).removeClass("onstar");
		}
		
		if(numeroramdomico == "3") {
			$("#slots_a .wrapper ."+marcaocampodowinner.toString()).addClass("mylink_WIN");
			$("#slots_b .wrapper ."+marcaocampodowinner.toString()).addClass("mylink_WIN");
			$("#slots_c .wrapper ."+marcaocampodowinner.toString()).addClass("mylink_WIN");
			
			$("#slots_a .wrapper ."+marcaocampodowinner.toString()).removeClass("logoGM");
			$("#slots_b .wrapper ."+marcaocampodowinner.toString()).removeClass("logoGM");
			$("#slots_c .wrapper ."+marcaocampodowinner.toString()).removeClass("logoGM");
			
			$("#slots_a .wrapper ."+marcaocampodowinner.toString()).removeClass("mercadodaboca");
			$("#slots_b .wrapper ."+marcaocampodowinner.toString()).removeClass("mercadodaboca");
			$("#slots_c .wrapper ."+marcaocampodowinner.toString()).removeClass("mercadodaboca");
			
			$("#slots_a .wrapper ."+marcaocampodowinner.toString()).removeClass("mylink");
			$("#slots_b .wrapper ."+marcaocampodowinner.toString()).removeClass("mylink");
			$("#slots_c .wrapper ."+marcaocampodowinner.toString()).removeClass("mylink");
			
			$("#slots_a .wrapper ."+marcaocampodowinner.toString()).removeClass("onstar");
			$("#slots_b .wrapper ."+marcaocampodowinner.toString()).removeClass("onstar");
			$("#slots_c .wrapper ."+marcaocampodowinner.toString()).removeClass("onstar");
		}
		
	//$("#slots_a .wrapper ."+marcaocampodowinner.toString()).html("A");
	//$("#slots_b .wrapper ."+marcaocampodowinner.toString()).html("A");
	//$("#slots_c .wrapper ."+marcaocampodowinner.toString()).html("A");
	contaquantosjogaram = 0;
	

			

	
	}
	
	//$("."+marcaocampodowinner.toString()).addClass("teste");
	//alert(marcaocampodowinner);
	
}


function ok() {
	$( "#ganhoutudo" ).removeClass( "vcganhou" );
	document.getElementById('corpo').style.pointerEvents = 'auto';
}



