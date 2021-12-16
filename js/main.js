
 $(window).scroll(function(){
        if($(this).scrollTop() > $("#sec1").offset().top-100){
            $(".navbar").css("backgroundColor","rgba(0,0,0,0.9)")
            $("#upBtn").fadeIn(500)
        }
        else{
            $(".navbar").css("backgroundColor","transparent")
            $("#upBtn").fadeOut(500)

        }
    })

    $("#upBtn").click(backToTop)

    function backToTop(){
        $("html,body").animate({"scrollTop":"0"},400)
    }
    $(".nav-link").click(function(e){
        let getid=$(e.target).attr("href")
        $("html,body").animate({"scrollTop":`${$(getid).offset().top}px`},300)

    })
    $(document).ready(()=>{
        $(".load").fadeOut(1000);
        $("body").css("overflow","auto")
        
    })

    $("#toggleColor").click(()=>{
       
        if($("#option").offset().left==0){
            $(" #option").animate({"left":`-${$("#color-option").innerWidth()}px`},1000)
        }
        else{
            $(" #option").animate({"left":`0`},1000)

        }
    })
let colorItem=$(".color-item")
for (let index = 0; index < colorItem.length; index++) {
    colorItem.eq(index).css("backgroundColor",randomColor())    
}
 function randomColor(){
     let red=Math.floor(Math.random()*(255-0+1))
     let green=Math.floor(Math.random()*(255-0+1))
     let blue=Math.floor(Math.random()*(255-0+1))
     return `rgb(${red},${green},${blue})`
 }
 colorItem.click((e)=>{
    $(".change").css("color",$(e.target).css("backgroundColor")) 
 })
 var typed = new Typed('.type', {
    strings: ["Developer", "Designer","Photographer"],
    typeSpeed: 75,
    smartBackspace: true,
    loop: true,
    startDelay: 70,
    backSpeed: 75,

    
  });

//   $(window).scroll(()=>{
//       if($(window).scrollTop() > $(".stat").offset().top-300){
//         $('.work').animationCounter({
//             start: 0,
//             end: 100,
//             delay:50
//           });
//       }
//       else{
//           $(".work").append("100");
//       }
//       }
//  )
