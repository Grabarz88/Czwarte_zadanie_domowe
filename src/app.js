import './style.scss';

import $ from 'jquery';


var registered_username; 
var registered_password;
var registered_email;
var registered_name;
var registered_surname;
var last_wrong_password;

$('.Register_applying').click(()=>{
    register_form();
})


function register_form(){
    var registering_check_password = document.getElementById("register_password").value;
    var registering_check_repeat_password = document.getElementById("repeat_password").value;
    if (registering_check_password === registering_check_repeat_password) 
        {
            registered_username = document.getElementById("register_username").value;
            registered_password = document.getElementById("register_password").value;
            registered_email = document.getElementById("register_email").value;
            registered_name = document.getElementById("register_firstname").value;
            registered_surname = document.getElementById("register_surname").value;

            sessionStorage.registered_username = registered_username;
            sessionStorage.registered_password = registered_password;
            sessionStorage.registered_email = registered_email;
            sessionStorage.registered_name = registered_name;
            sessionStorage.registered_surname = registered_surname;


            alert('Account created successully');
            return(registered_username, registered_password, registered_email, registered_name, registered_surname);
        }
    else
        {
            alert('Passwords are not the same');
        }
}


$('.Login').click(()=>{
    login_check();
})

function login_check(){
    var login_check_username = document.getElementById("login_username").value;
    var login_check_password = document.getElementById("login_password").value;
    var registered_username = sessionStorage.registered_username;
    var registered_password = sessionStorage.registered_password;
    if (login_check_username === registered_username && login_check_password === registered_password)
        {
            location.replace("strona_uzytkownika.html");
        }
    else 
        {
            alert('Error. Login or password is incorrect.');
            last_wrong_password = login_check_password;
            sessionStorage.last_wrong_password = last_wrong_password;
        }
    }  

document.getElementById("username").innerHTML = sessionStorage.registered_username;
document.getElementById("first_name").innerHTML = sessionStorage.registered_name;
document.getElementById("last_name").innerHTML = sessionStorage.registered_surname;
document.getElementById("email").innerHTML = sessionStorage.registered_email;
document.getElementById("last_wrong_password").innerHTML = sessionStorage.last_wrong_password;



$('.animation_submit').click(()=>{
    animation_start();
})

function animation_start(){
    var animation_number = document.getElementById("choose_animation").value;
    document.getElementById("to_animate").classList.remove('animated1');
    document.getElementById("to_animate").classList.remove('animated2');
    document.getElementById("to_animate").classList.remove('animated3');
    if (animation_number === "1")
    {
        document.getElementById("to_animate").classList.add('animated1');
    }
    else if (animation_number === "2")
    {
        document.getElementById("to_animate").classList.add('animated2');
    }
    else if (animation_number === "3")
    {
        document.getElementById("to_animate").classList.add('animated3');
    }
}