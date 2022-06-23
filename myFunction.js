
// let allvalue = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
// 'R','S','T','U','V','W','X','Y','Z', 'a', 'b', 'c',
// 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's'
// , 't', 'u', 'v', 'w', 'x', 'y', 'z','1','2','3','4','5','6','7','8','9','0'];

// let lkhbt1 = allvalue[Math.floor(Math.random()*allvalue.length)];
// let lkhbt2 = allvalue[Math.floor(Math.random()*allvalue.length)];
// let lkhbt3 = allvalue[Math.floor(Math.random()*allvalue.length)];
// let lkhbt4 = allvalue[Math.floor(Math.random()*allvalue.length)];
// let lkhbt5 = allvalue[Math.floor(Math.random()*allvalue.length)];
// let lkhbt6 = allvalue[Math.floor(Math.random()*allvalue.length)];

// let lkhbt = lkhbt1 + lkhbt2 + lkhbt3 + lkhbt4 + lkhbt5 + lkhbt6;



// thisValue = "";
// capchaValue.innerHTML = lkhbt;

// inputcapcha.addEventListener('change',function(){

// thisValue = inputcapcha.value;
// alert(thisValue)
// });
// function maxLengthCheck(object)
//     {
//     if (object.value.length > object.maxLength)
//     object.value = object.value.slice(0, object.maxLength)
//     }

// let sumbitBtn = document.getElementById("sumbitBtn");
// sumbitBtn.addEventListener('click',function(){

    

//     if (a.value == "" 
//     || b.value == "" 
//     || c.value == "" 
//     || one.value == "" 
//     || two.value == "" 
//     || three.value == "" 
//     || four.value == "" 
//     || five.value == "" 
//     || (six.value == "" )
//     || thisValue !=lkhbt )
//     {
//         alert ('Invalid');
//     }
//     else {
//         window.location.href="#result.html";
//     }
    

// });

function GenerateCaptcha() {  
    var chr1 = Math.ceil(Math.random() * 10) + '';  
    var chr2 = Math.ceil(Math.random() * 10) + '';  
    var chr3 = Math.ceil(Math.random() * 10) + '';  

    var str = new Array(4).join().replace(/(.|$)/g, function () { return ((Math.random() * 36) | 0).toString(36)[Math.random() < .5 ? "toString" : "toUpperCase"](); });  
    var captchaCode = str + chr1 + ' ' + chr2 + ' ' + chr3;  
    document.getElementById("txtCaptcha").value = captchaCode  
}  

style="margin-left: 200px;"  
function ValidCaptcha() {  
    var str1 = removeSpaces(document.getElementById('txtCaptcha').value);  
    var str2 = removeSpaces(document.getElementById('txtCompare').value); 
    // let one =document.getElementById("one").value;
    // let two =document.getElementById("two").value;
    // let three =document.getElementById("three").value;
    // let four =document.getElementById("four").value;
    // let five =document.getElementById("five").value;
    // let six =document.getElementById("six").value;
    
    
    // let a =document.getElementById("a").value;
    // let b =document.getElementById("b").value;
    // let c =document.getElementById("c").value; 

    if (str1 == str2) {
        window.location.href="result.html";
    }   
    else{
        alert("false");
    }   
}  

style="margin-left: 200px;" 
function removeSpaces(string) {  
    return string.split(' ').join('');  
}  
// const captcha = document.querySelector(".captcha"),
// reloadBtn = document.querySelector(".reload-btn"),
// inputField = document.querySelector(".input-area input"),
// checkBtn = document.querySelector(".check-btn"),
// statusTxt = document.querySelector(".status-text");
// //storing all captcha characters in array
// let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
//                      'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
//                      'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//                      't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// function getCaptcha(){
//   for (let i = 0; i < 6; i++) { //getting 6 random characters from the array
//     let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
//     captcha.innerText += ` ${randomCharacter}`; //passing 6 random characters inside captcha innerText
//   }
// }
// getCaptcha(); //calling getCaptcha when the page open
// //calling getCaptcha & removeContent on the reload btn click
// reloadBtn.addEventListener("click", ()=>{
//   removeContent();
//   getCaptcha();
// });
// checkBtn.addEventListener("click", e =>{
//   e.preventDefault(); //preventing button from it's default behaviour
//   statusTxt.style.display = "block";
//   //adding space after each character of user entered values because I've added spaces while generating captcha
//   let inputVal = inputField.value.split('').join(' ');
//   if(inputVal == captcha.innerText){ //if captcha matched
//     statusTxt.style.color = "#4db2ec";
//     statusTxt.innerText = "Nice! You don't appear to be a robot.";
//     setTimeout(()=>{ //calling removeContent & getCaptcha after 2 seconds
//       removeContent();
//       getCaptcha();
//     }, 2000);
//   }else{
//     statusTxt.style.color = "#ff0000";
//     statusTxt.innerText = "Captcha not matched. Please try again!";
//   }
// });
// function removeContent(){
//  inputField.value = "";
//  captcha.innerText = "";
//  statusTxt.style.display = "none";
// }