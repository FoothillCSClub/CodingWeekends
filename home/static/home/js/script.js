var Q1_2017 = document.getElementsByClassName("Q1_2017")[0],
Q3_2017 = document.getElementsByClassName("Q3_2017")[0],
Q1_2018 = document.getElementsByClassName("Q1_2018")[0];

hoverEventsWithPicsTop(Q1_2017);
nextQuarterHoverEvents(Q3_2017, Q1_2017);
futureEvents(Q1_2018, Q3_2017);

function hoverEventsWithPicsTop(div)
{
  div.addEventListener("mouseenter", function(event){
    var year = div.getElementsByTagName("h1")[0];
    var quarter = div.getElementsByTagName("h2")[0];
    div.classList.toggle("Q1_2017");
    div.classList.toggle("blankBackground");
    div.classList.toggle("noMargin");
    year.classList.toggle("fadeOut");
    year.classList.toggle("fadeIn");
    quarter.classList.toggle("fadeOut");
    quarter.classList.toggle("fadeIn");
  });

  div.addEventListener("mouseleave", function(event){
    var year = document.getElementsByTagName("h1")[0];
    var quarter = document.getElementsByTagName("h2")[0];
    div.classList.toggle("Q1_2017");
    div.classList.toggle("blankBackground");
    div.classList.toggle("noMargin");
    year.classList.toggle("fadeOut");
    year.classList.toggle("fadeIn");
    quarter.classList.toggle("fadeOut");
    quarter.classList.toggle("fadeIn");
  });
}

function hoverEventsWithPics(div, prevDiv)
{
  div.addEventListener("mouseenter", function(event){
    var year = div.getElementsByTagName("h1")[0];
    var quarter = div.getElementsByTagName("h2")[0];
    div.classList.toggle("Q1_2017");
    div.classList.toggle("blankBackground");
    prevDiv.classList.toggle("noBottomMargin");
    div.classList.toggle("noMargin");
    year.classList.toggle("fadeOut");
    year.classList.toggle("fadeIn");
    quarter.classList.toggle("fadeOut");
    quarter.classList.toggle("fadeIn");
  });

  div.addEventListener("mouseleave", function(event){
    var year = document.getElementsByTagName("h1")[0];
    var quarter = document.getElementsByTagName("h2")[0];
    div.classList.toggle("Q1_2017");
    div.classList.toggle("blankBackground");
    prevDiv.classList.toggle("noBottomMargin");
    div.classList.toggle("noMargin");
    year.classList.toggle("fadeOut");
    year.classList.toggle("fadeIn");
    quarter.classList.toggle("fadeOut");
    quarter.classList.toggle("fadeIn");
  });
}

function nextQuarterHoverEvents(div, prevDiv)
{
  var promisesToRun = [];
  div.addEventListener("mouseenter", function(event){
    Promise.all(promisesToRun).then(values => {
      var promise = new Promise((resolve, reject) => {
        var cardOverlay = div.getElementsByTagName("div")[0];
        var containsBr = true;
        var containsRegister = true;
        while (containsBr)
        {
          if(typeof div.getElementsByTagName("br")[0] != 'object')
            containsBr = false;
          else
            cardOverlay.removeChild(div.getElementsByTagName("br")[0]);
        }
        while(containsRegister)
        {
          if(typeof div.getElementsByClassName("register")[0] != 'object')
            containsRegister = false;
          else
            cardOverlay.removeChild(div.getElementsByClassName("register")[0]);
        }


        var year = div.getElementsByTagName("h1")[0];
        var quarter = div.getElementsByTagName("h2")[0];
        prevDiv.classList.toggle("noBottomMargin");
        div.classList.toggle("noMargin");
        year.classList.toggle("fadeOut");
        year.classList.toggle("fadeIn");
        quarter.classList.toggle("fadeOut");
        quarter.classList.toggle("fadeIn");
        //create Register
        setTimeout(function(){
          var register = document.createElement("h1");
          register.innerHTML = "Register";
          register.classList.add("register");
          cardOverlay.insertBefore(document.createElement("br"),quarter);
          cardOverlay.insertBefore(document.createElement("br"),quarter);
          cardOverlay.insertBefore(register,quarter);
          resolve(1);
        },300);
      });
      promisesToRun.push(promise);
    });
  });


  div.addEventListener("mouseleave", function(event){
    //remove register
    Promise.all(promisesToRun).then(values => {
      var promise = new Promise((resolve, reject) => {
        var cardOverlay = div.getElementsByTagName("div")[0];
        var containsBr = true;
        var containsRegister = true;
        while (containsBr)
        {
          if(typeof div.getElementsByTagName("br")[0] != 'object')
            containsBr = false;
          else
            cardOverlay.removeChild(div.getElementsByTagName("br")[0]);
        }
        while(containsRegister)
        {
          if(typeof div.getElementsByClassName("register")[0] != 'object')
            containsRegister = false;
          else
            cardOverlay.removeChild(div.getElementsByClassName("register")[0]);
        }


        var year = div.getElementsByTagName("h1")[0];
        var quarter = div.getElementsByTagName("h2")[0];
        prevDiv.classList.toggle("noBottomMargin");
        div.classList.toggle("noMargin");
        year.classList.toggle("fadeOut");
        year.classList.toggle("fadeIn");
        quarter.classList.toggle("fadeOut");
        quarter.classList.toggle("fadeIn");
        resolve(1);
      });
      promisesToRun.push(promise);
    });
  });
}



function futureEvents(div, prevDiv)
{
  var promisesToRun = [];
  div.addEventListener("mouseenter", function(event){
    Promise.all(promisesToRun).then(values => {
      var promise = new Promise((resolve, reject) => {
        var cardOverlay = div.getElementsByTagName("div")[0];
        var containsRegister = true;
        while(containsRegister)
        {
          if(typeof div.getElementsByClassName("register")[0] != 'object')
            containsRegister = false;
          else
            cardOverlay.removeChild(div.getElementsByClassName("register")[0]);
        }


        var year = div.getElementsByTagName("h1")[0];
        prevDiv.classList.toggle("noBottomMargin");
        div.classList.toggle("noMargin");
        year.classList.toggle("fadeOut");
        year.classList.toggle("fadeIn");
        //create Register
        setTimeout(function(){
          var register = document.createElement("h1");
          register.innerHTML = "Learn More";
          register.classList.add("learnMore");
          cardOverlay.insertBefore(register,year);
          resolve(1);
        },300);
      });
      promisesToRun.push(promise);
    });
  });


  div.addEventListener("mouseleave", function(event){
    //remove register
    Promise.all(promisesToRun).then(values => {
      var promise = new Promise((resolve, reject) => {
        var cardOverlay = div.getElementsByTagName("div")[0];
        var containsRegister = true;
        while(containsRegister)
        {
          if(typeof div.getElementsByClassName("learnMore")[0] != 'object')
            containsRegister = false;
          else
            cardOverlay.removeChild(div.getElementsByClassName("learnMore")[0]);
        }

        var year = div.getElementsByTagName("h1")[0];
        prevDiv.classList.toggle("noBottomMargin");
        div.classList.toggle("noMargin");
        year.classList.toggle("fadeOut");
        year.classList.toggle("fadeIn");
        resolve(1);
      });
      promisesToRun.push(promise);
    });
  });
}
