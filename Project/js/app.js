

const navbar = document.querySelector('#navbar')
const header = document.querySelector('#header')
window.onscroll=function(){
    let top = window.scrollY;
    console.log(top)
    if (top >= 50){
        header.classList.add('active')
    }
    else{
        header.classList.remove('active')
    }
}
// btn 1 start
const post1 =document.querySelector('#post1')
const collection1=document.querySelector('#collections1')
document.querySelector('#btn1').addEventListener("click",function(){
    document.getElementsByClassName("items")[1].style.display="none";
    document.getElementsByClassName("items")[0].style.display="none";
    collection1.classList.remove('activecolour')
    post1.classList.remove('activecolour')
})

document.querySelector('#post1').addEventListener("click",function(){
    document.getElementsByClassName("items")[0].style.display="grid";
    document.getElementsByClassName("items")[1].style.display="none";
    post1.classList.add('activecolour')
    collection1.classList.remove('activecolour')
})
document.querySelector('#collections1').addEventListener("click",function(){
    document.getElementsByClassName("items")[1].style.display="grid";
    document.getElementsByClassName("items")[0].style.display="none";
    collection1.classList.add('activecolour')
    post1.classList.remove('activecolour')
})
// btn 1 end
// btn 2 start

document.querySelector('#btn2').addEventListener("click",function(){
    document.getElementsByClassName("items")[2].style.display="none";
    document.getElementsByClassName("items")[3].style.display="none";
    document.querySelector('#collections2').classList.remove('activecolour')
    document.querySelector('#post2').classList.remove('activecolour')
})
document.querySelector('#post2').addEventListener("click",function(){
    document.getElementsByClassName("items")[2].style.display="grid";
    document.getElementsByClassName("items")[3].style.display="none";
    document.querySelector('#post2').classList.add('activecolour')
    document.querySelector('#collections2').classList.remove('activecolour')
})
document.querySelector('#collections2').addEventListener("click",function(){
    document.getElementsByClassName("items")[3].style.display="grid";
    document.getElementsByClassName("items")[2].style.display="none";
    document.querySelector('#collections2').classList.add('activecolour')
    document.querySelector('#post2').classList.remove('activecolour')
})

// btn 3 start
document.querySelector('#btn3').addEventListener("click",function(){
    document.getElementsByClassName("items")[4].style.display="none";
    document.getElementsByClassName("items")[5].style.display="none";
    document.querySelector('#collections3').classList.remove('activecolour')
    document.querySelector('#post3').classList.remove('activecolour')
})
document.querySelector('#post3').addEventListener("click",function(){
    document.getElementsByClassName("items")[4].style.display="grid";
    document.getElementsByClassName("items")[5].style.display="none";
    document.querySelector('#post3').classList.add('activecolour')
    document.querySelector('#collections3').classList.remove('activecolour')
})
document.querySelector('#collections3').addEventListener("click",function(){
    document.getElementsByClassName("items")[5].style.display="grid";
    document.getElementsByClassName("items")[4].style.display="none";
    document.querySelector('#collections3').classList.add('activecolour')
    document.querySelector('#post3').classList.remove('activecolour')
})


// popup


let cardbtnArray = document.querySelectorAll(".cardbtn");
cardbtnArray.forEach(function(btn){
    btn.onclick=function(){
        let modal=btn.getAttribute("data-modal");
        document.getElementById(modal).classList.add('openpopup')
    }
})
let closebtnArray=document.querySelectorAll(".closebtn");
closebtnArray.forEach(function(btn){
    btn.onclick=function(){
        let modal=btn.getAttribute("data-modal");
        document.getElementById(modal).classList.remove('openpopup')
    }
})

    