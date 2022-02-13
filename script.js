// run check screen functio

checkscreen()

// call the repoicon to add github icon to the work section button

repoicon()

// make the navbar items collapse the navbar back after clicking

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
var navbarbutton = document.querySelector('.navbar-toggler')
navLinks.forEach((l) => {
    l.addEventListener('click', collapse)
})
navLinks.forEach((l) => {
    l.addEventListener('click', ()=> {document.querySelector("#navigate").classList.add("bg-opacity-75")})
})
function collapse()
{
    menuToggle.classList.toggle("show")
    
}

// change the navbar opacity when clicking

var navbarbutton = document.querySelector('.navbar-toggler');
navbarbutton.addEventListener('click', change)
function change()
{
  if (!navbarbutton.classList.contains('collapsed'))
    {
      document.querySelector("#navigate").classList.remove("bg-opacity-75")
    }
    else
    {
        document.querySelector("#navigate").classList.add("bg-opacity-75")
    }
}

// change the sizes of the fonts in the contact form when typing

var thename = document.querySelector("#name");
var mail = document.querySelector("#email");
var message = document.querySelector("#message");
thename.addEventListener('input', () => {thename.style.fontSize = "100%";});
mail.addEventListener('input', () => {mail.style.fontSize = "100%";});
message.addEventListener('input', () => {message.style.fontSize = "100%";});
thename.addEventListener('focusout', () => {thename.style.fontSize = "150%";});
mail.addEventListener('focusout', () => {mail.style.fontSize = "150%";});
message.addEventListener('focusout', () => {message.style.fontSize = "150%";});

// add icon to the submit button in the contact form when hovering 

document.querySelector("#subbtn").addEventListener('mouseenter', ()=>{document.querySelector("#subbtn").innerHTML+="<span><i class='fa-solid fa-envelope' style='color: white; padding-left :25%; font-size: 25px;'></i></span>"})
document.querySelector("#subbtn").addEventListener('mouseleave', ()=>{document.querySelector("#subbtn").innerHTML="Send"});


// check the size of the screen and change the settings according to the size

window.addEventListener('resize', checkscreen)
function checkscreen()
{
    
    sc = window.innerWidth;
    if (sc < 995)
    {
        document.querySelector(".srow").innerHTML= "<div class='col-12 col-lg-6' > <img src='pics/work/pong.png' class='work_img' alt=''></div> <div class='col-12 col-lg-6'> <h1 class='work_title'>Pong Game</h1><p class='work_p'>The famous Pong game, try to reach the maximum score and compete with others (on the same pc- multiplayer)</p><i class='fa-brands fa-python work_icons'></i><img src='pics/work/turtle.png' class='work_icons work_turtle_icon' alt=''><a id='workbtn' class='btn btn-success btn-lg work_btn' href='https://github.com/AliJoron/pong-game' target='_blank' role='button'>View Github Repo</a></div>"
        document.querySelector(".frow").innerHTML= "<div class='col-12 col-lg-6'> <img src='pics/work/snake.png' class='work_img' alt=''></div> <div class='col-12 col-lg-6'> <h1 class='work_title'>Snake Game</h1><p class='work_p'>The famous Snake game, try to reach the maximum score and compete with others (on the same pc- not multiplayer)</p><i class='fa-brands fa-python work_icons'></i><img src='pics/work/turtle.png' class='work_icons work_turtle_icon' alt=''><a id='workbtn' class='btn btn-success btn-lg work_btn' href='https://github.com/AliJoron/snake-game' target='_blank' role='button'>View Github Repo</a></div>"
        document.querySelector(".srow .btn").addEventListener('mouseenter', ()=>{document.querySelector(".srow .btn").innerHTML+="<span><i class='fab fa-github  contact_item' style='color: white; padding-left :25%; font-size: 25px;'></i></span>"})
        document.querySelector(".srow .btn").addEventListener('mouseleave', ()=>{document.querySelector(".srow .btn").innerHTML="View Github Repo"})
        document.querySelector(".frow .btn").addEventListener('mouseenter', ()=>{document.querySelector(".frow .btn").innerHTML+="<span><i class='fab fa-github  contact_item' style='color: white; padding-left :25%; font-size: 25px;'></i></span>"})
        document.querySelector(".frow .btn").addEventListener('mouseleave', ()=>{document.querySelector(".frow .btn").innerHTML="View Github Repo"})

    }
    else
    {
        document.querySelector(".srow").innerHTML= "<div class='col-12 col-lg-6'> <h1 class='work_title'>Pong Game</h1><p class='work_p'>The famous Pong game, try to reach the maximum score and compete with others (on the same pc- multiplayer)</p><i class='fa-brands fa-python work_icons'></i><img src='pics/work/turtle.png' class='work_icons work_turtle_icon' alt=''><a id='workbtn' class='btn btn-success btn-lg work_btn' href='https://github.com/AliJoron/pong-game' target='_blank' role='button'>View Github Repo</a></div><div class='col-12 col-lg-6 align_right'> <img src='pics/work/pong.png' class='work_img' alt=''></div>"
        document.querySelector(".frow").innerHTML= "<div class='col-12 col-lg-6'> <h1 class='work_title'>Snake Game</h1><p class='work_p'>The famous Snake game, try to reach the maximum score and compete with others (on the same pc- not multiplayer)</p><i class='fa-brands fa-python work_icons'></i><img src='pics/work/turtle.png' class='work_icons work_turtle_icon' alt=''><a id='workbtn' class='btn btn-success btn-lg work_btn' href='https://github.com/AliJoron/snake-game' target='_blank' role='button'>View Github Repo</a></div><div class='col-12 col-lg-6 align_right'> <img src='pics/work/snake.png' class='work_img' alt=''></div> "
        document.querySelector(".srow .btn").addEventListener('mouseenter', ()=>{document.querySelector(".srow .btn").innerHTML+="<span><i class='fab fa-github  contact_item' style='color: white; padding-left :25%; font-size: 25px;'></i></span>"})
        document.querySelector(".srow .btn").addEventListener('mouseleave', ()=>{document.querySelector(".srow .btn").innerHTML="View Github Repo"})
        document.querySelector(".frow .btn").addEventListener('mouseenter', ()=>{document.querySelector(".frow .btn").innerHTML+="<span><i class='fab fa-github  contact_item' style='color: white; padding-left :25%; font-size: 25px;'></i></span>"})
        document.querySelector(".frow .btn").addEventListener('mouseleave', ()=>{document.querySelector(".frow .btn").innerHTML="View Github Repo"})


    }
}
function repoicon()
{
    var workicons = document.querySelectorAll(".work_btn");
    for (let i = 0; i < workicons.length; i++)
    {
        if (i===0 || i===2)
        {
            workicons[i].addEventListener('mouseenter', ()=>{workicons[i].innerHTML+="<span><i class='fab fa-github  contact_item' style='color: white; padding-left :25%; font-size: 25px;'></i></span>"})
            workicons[i].addEventListener('mouseleave', ()=>{workicons[i].innerHTML="View Github Repo"})
        }
       
    }
}
