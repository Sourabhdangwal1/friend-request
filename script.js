var istatus = document.querySelector("h3");
var btn=document.querySelector("#add")
var flag=0
btn.addEventListener("click",function(){
    if(flag==0){
  istatus.innerHTML="Friends"
  istatus.style.color="yellow"
  btn.innerHTML="Remove Friend"
  flag=1;
    }
    else{
        istatus.innerHTML="Strangers"
        istatus.style.color="red"
        btn.innerHTML="Add Friend"

        flag=0;
    }
})
// var remove=document.querySelector("#remove")
// remove.addEventListener("click",function(){
//     istatus.innerHTML="Stranger"
//     istatus.style.color="black"

// })