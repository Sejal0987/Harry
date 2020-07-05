

// function myerr()
// {
//   var val,val1,val2;
// val=document.getElementById("find1").value;
// val1=document.getElementById("find2").value;
// val2=document.getElementById("find3").value;
// try{
//   if(val=="") throw "empty";
//   else
//   if(val1=="") throw "empty";
//   else
//   if(val2=="") throw "empty";
//   else {
//     document.getElementById("myform").action="index3.html";
//
//   }
//
//
// }
// catch(err)
// {
//   alert("Input is "+ err);
// }
// }
// document.getElementById("demo").addEventListener("click",myerr);
//




var arr=["gry","sly","huff","rav"];
var count=0;
 var count2=0;

$(".fixed").on("mouseover", function(){
  $(".fixed").animate({opacity:0});
  setTimeout(function(){$(".fixed").animate({opacity:1});},100);
});
$(".fixmusic").one("click",soundd);

$(".image2").on("click",soundd);
function soundd()
{
  var audio= new Audio("harry.mp3");
  audio.play();
}
$(".parahead").slideUp();
$(".imghead").on("click",function(){
  $(".parahead").slideToggle();
});


$("#myform").submit(function(){
  var x=$("name").value;
  if(x=="")
  {
    alert("error");
  }

});
$(".imghead").one("click",function(){
  var audio=new Audio('potter.mp3')
  audio.play();
});
$(".img1").hide();
$(".img2").hide();
$(".img3").hide();
$(".img4").hide();

$(".hat").one("click",function(){
  $(".hat").addClass("shaking");
  setTimeout(function(){$(".hat").removeClass("shaking")},3000);
randomnumber();


});
function randomnumber(){
  var y=Math.floor((Math.random()*4)+1);

  $(".img"+y).show();
  $(".img"+y).on("click",function(){
  $(".img"+y+" a").attr("href","index3.html");
});

}

$(".change").one("click",function(){
  $(".change").attr("src","https://c0.wallpaperflare.com/preview/102/951/642/harry-potter-magic-wands-olivanders-universal-studios.jpg");
  $(".change").one("click",function(){
    $(".change").animate({opacity:0.2});
    count++;
  });


});
$(".change2").one("click",function(){
  $(".change2").animate({opacity:0.2});
  count++;
});
$(".change3").one("click",function(){
  $(".change3").animate({opacity:0.2});
  count++;
});
$(".change4").one("click",function(){
  $(".change4").animate({opacity:0.2});
  count++;
});
$(".train").one("click",function(){
  if(count==4)
  {
    $(".train a").attr("href","index2.html");
  }
  else {
    alert("Take all Items..");
  }
});

$(".things").on("click",function(){
  var audio=new Audio('potter.mp3')
  audio.play();

});
$(".sub1").on("click",function(){
  alert(Name + " , " + City + " , " +  Email);
});
