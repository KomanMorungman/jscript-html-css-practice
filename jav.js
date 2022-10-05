var el1 = document.getElementById("head");
el1.style.color = "black";
el1.style.textShadow = "5px 5px 5px green";
el1.style.backgroundColor = "aqua";
var el2 = document.getElementsByClassName("list-item");
var el3 = document.querySelector('ul');
var el4 = document.createElement('li');
el3.append(el4);
el4.innerText = "X-Men";
el4.classList.add("list-item");
for (i = 0; i < el2.length; i++) {
    el2[i].style.fontFamily = "cursive";
    el2[i].style.borderRadius = "50px"
}
var el5 = document.querySelector('ul');
console.log(el5.parentNode.parentNode);
console.log(el5.parentElement.parentElement);
var el6 = document.documentElement;
console.log(el6.parentNode);
console.log(el6.parentElement);
var el7 = document.querySelector('button');
/*function f() {
    el7.style.backgroundColor = "Blue";
}
el7.addEventListener('click', f);*/
/*var el8 = document.querySelector('center');
function f() {
    el8.style.backgroundColor = "Blue";
    alert("B U T Ful")
}
el8.addEventListener('click', f);*/
var el9 = document.querySelector('.list-item');
el9.style.backgroundColor = "Red";
/*function g() {
    el2[i].style.backgroundColor = "Blue";
}
for (i = 0; i < el2.length; i++) {
    el2[i].addEventListener('mouseover', g());
}*/
var el10 = document.querySelector('.but');
var el11 = document.querySelector('.divn');
function h() {
    if (el11.classList.contains("but")) {
        el11.classList.remove("but");
    } else {
        el11.classList.add("but");
    }
}
el10.addEventListener('click', h);
var el12 = document.querySelector('.hi');
function k() {
    if (el3.classList.contains("ad")) {
        el3.classList.remove("ad");
    } else {
        el3.classList.add("ad");
    }
}
el12.addEventListener('click', k);
