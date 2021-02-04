$(document).ready(function (){

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
           var c = ca[i];
           while (c.charAt(0)==' ') c = c.substring(1);
           if(c.indexOf(name) == 0)
              return c.substring(name.length,c.length);
        }
        return "";
   }

    var score = getCookie("score");

    var link = `https://twitter.com/share?url=http://lrfy-beta.herokuapp.com&text=How%20well%20do%20you%20know%20your%20songs?%20I%20scored%20${score}/10%20&hashtags=lrfy`;
    $('.share').append(`<a target="_blank" id="shr" href="${link}">Share to twitter</a>`);
 

    $('.img-result').append(`<img src=https://miro.medium.com/max/2400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg alt="pic">`);



});