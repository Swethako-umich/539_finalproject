
document.addEventListener("DOMContentLoaded", function(){
    var scrollTexts = document.querySelectorAll(".scroll-text");

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.classList.remove("hidden");
        } else if (entry.boundingClientRect.top < 0) {
          entry.target.classList.remove("visible");
          entry.target.classList.add("hidden");
        } else {
          entry.target.classList.remove("visible");
          entry.target.classList.remove("hidden");
        }
      });
    }, {
      threshold: 0.5
    });

    scrollTexts.forEach(function (text) {
      observer.observe(text);
    });
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion){

  document.addEventListener("scroll", function(){
  const image = document.querySelector('.scroll-rotate-img');

  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  const maxRotation = 20;

  const rotation = (scrollTop / maxScroll) * maxRotation;

  image.style.transform = `rotate(${rotation}deg)`;
});
  }

document.querySelector("#highlight_fearing").addEventListener("mouseover", function() {
	console.log("Highlight");
    document.getElementById("highlight_fearing").style.color = "white";
    document.getElementById("highlight_fearing").style.backgroundColor = "black";
})
// document.querySelector("#highlight_fearing").addEventListener("mouseout", function() {
// 	console.log("Un-Highlight");
//     document.getElementById("highlight_fearing").style.color = "#0a0a0a";
//     document.getElementById("highlight_fearing").style.backgroundColor = "bisque";
// })
document.querySelector("#highlight_embrace").addEventListener("mouseover", function() {
	console.log("Highlight");
    document.getElementById("highlight_embrace").style.color = "white";
    document.getElementById("highlight_embrace").style.backgroundColor = "black";
})

document.querySelector("#highlight_proud").addEventListener("mouseover", function() {
	console.log("Highlight");
    document.getElementById("highlight_proud").style.color = "white";
    document.getElementById("highlight_proud").style.backgroundColor = "black";
})
document.querySelector("#highlight_how").addEventListener("mouseover", function() {
	console.log("Highlight");
    document.getElementById("highlight_how").style.color = "white";
    document.getElementById("highlight_how").style.backgroundColor = "black";
})
document.querySelector("#highlight_info").addEventListener("mouseover", function() {
	console.log("Highlight");
    document.getElementById("highlight_info").style.color = "black";
    document.getElementById("highlight_info").style.backgroundColor = "white";
})
document.querySelector("#highlight_ui").addEventListener("mouseover", function() {
	console.log("Highlight");
    document.getElementById("highlight_ui").style.color = "black";
    document.getElementById("highlight_ui").style.backgroundColor = "white";
})
document.querySelector("#highlight_persona").addEventListener("mouseover", function() {
	console.log("Highlight");
    document.getElementById("highlight_persona").style.color = "black";
    document.getElementById("highlight_persona").style.backgroundColor = "white";
})
document.querySelector("#highlight_need").addEventListener("mouseover", function() {
	console.log("Highlight");
    document.getElementById("highlight_need").style.color = "black";
    document.getElementById("highlight_need").style.backgroundColor = "white";
})

document.querySelector("#flip_projects").addEventListener("mouseover", function(){
    console.log("Flipped");
    document.getElementById("flip_projects").style.transform = "rotateY(0deg)";
    document.getElementById("flip_projects").style.backgroundColor = "white";
    document.getElementById("flip_projects").style.color = "black";
    document.getElementById("flip_projects").style.borderColor = "black";
    document.getElementById("flip_projects").style.border = "3px solid #000000";
    document.getElementById("flip_projects").style.transition = "transform 0.6s";
    
})
document.querySelector("#flip_projects").addEventListener("mouseout", function(){
    console.log("Un-Flipped");
    document.getElementById("flip_projects").style.transform = "rotateY(180deg)";
    document.getElementById("flip_projects").style.backgroundColor = "#0a0a0a";
    document.getElementById("flip_projects").style.color = "white";
    document.getElementById("flip_projects").style.borderColor = none;
    document.getElementById("flip_projects").style.border = none;

})
document.querySelector("#flip_resume").addEventListener("mouseover", function(){
    console.log("Flipped");
    document.getElementById("flip_resume").style.transform = "rotateY(0deg)";
    document.getElementById("flip_resume").style.backgroundColor = "white";
    document.getElementById("flip_resume").style.color = "black";
    document.getElementById("flip_resume").style.borderColor = "black";
    document.getElementById("flip_resume").style.border = "3px solid #000000";
    document.getElementById("flip_resume").style.transition = "transform 0.6s";

})
document.querySelector("#flip_resume").addEventListener("mouseout", function(){
    console.log("Un-Flipped");
    document.getElementById("flip_resume").style.transform = "rotateY(180deg)";
    document.getElementById("flip_resume").style.backgroundColor = "#0a0a0a";
    document.getElementById("flip_resume").style.color = "white";
    document.getElementById("flip_resume").style.borderColor = none;
    document.getElementById("flip_resume").style.border = none;

})

