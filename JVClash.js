

var mots=["Astalavista", "Cordialement", "Mes salutations", "toboggan", "dinosaurésque", "coupin", "gentille personne","truculent","être formidable"];
var insultes=["va te faire enculer", "nique ta mère", "suce ma bite", "ta mère", "fils de pute", "fils", "chienne", "enculé","pute"]


  $(".jv-editor-toolbar").append('<div class="btn-group"><button class="btn clashButton btn-primary btn-danger " type="button" data-edit="arrow-d" title="JVC Clash"><span >Clash</span></button> </div>');

$(".clashButton").append('<div id="previewClash"><ul class="doube"></ul></div>');
                         
                         
                         
                       
$('#previewClash').css({
    width: '505px', 
    height:'220px',
    background: '#34495e',
  color:'white',

    "z-index":'900',
    display:'none'
    });

 $("#previewClash").css('position',"absolute");

change(); preview();
function change()
{
    

 $.each(mots , function(i, val) { 
   
   
 $('.txt-msg p').each(function() {
        var text = $(this).html();
     
    
  $(this).html(text.replace(val, '<span class="insulte">'+insultes [i]+'</span>')); 
    });
   
 });

}
  



$('.insulte').css({"color":"red", "font-style":"italic"});

$('.droite').css({"margin-left":"20px", "font-style":"italic", "color":"#2ecc71"});


$('.clashButton').mouseover(function () {
       $('#previewClash').show();
    }).mouseout(function () {
      $('#previewClash').hide();
    });

$('#previewClash ul').css({
  width:'100%',
  padding:'0',
  
  overflow:'hidden',
    "margin-top":"20px"
  
   
});
  
  $('#previewClash ul li ').css({
     "line-height":'1.5em',
  float:'left',
  display:'inline',
     width:'50%',
    margin:'0'
    
});

function preview()
{  

  $.each(mots , function(i, val) { 
  $("#previewClash ul") 
        .append($('<li class="pull-left">')
         .append(val))
    
        .append($('<li class="insulte droite">')
         .append(insultes[i]));
                           
 });
  
 
}




