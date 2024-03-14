//alert("Hello World")

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  var videos = ["https://www.youtube.com/embed/jKh-DP89FPY?si=EXBGeuu6REVFXrUf", "https://www.youtube.com/embed/y3pJOimnOy8?si=au_23XuWoCAWraJJ","https://www.youtube.com/embed/GaLV82vOSsQ?si=VZ2-UuU5hYZeqYdW","https://www.youtube.com/embed/IDYxLj3bYds?si=xM0FGRNKQLIhMVSL", "https://www.youtube.com/embed/pu54_7M35Vs?si=1mRpTwS6nR5zICay"];


  var rand = Math.floor(Math.random() * 5)
  console.log("random number " + rand);

  $('#youtubevideo').attr("src", videos[rand]);

