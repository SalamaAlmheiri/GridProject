// Jquery

//Sound
var duckSound= new Howl({
  src:['duck-quack.mp3']
});

// Alternate boxes
$('.myGrid3 div').each(function(index, element){
  element= $(element);
  index+=1;
  element.css("grid-row", index);

  if(index % 2==0){
    element.attr("data-aos", "fade-right");
  }
  else{
    element.attr("data-aos", "fade-left");
    }

  element.click(function(){
    sound.play();
    });

  element.click(function(){
    sound.stop();
    });
});

AOS.init();
