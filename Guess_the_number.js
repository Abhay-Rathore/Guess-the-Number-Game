let a;
const generate_number=()=>
    {
         a=Math.trunc(Math.random()*10);
         a=(a%6)+1;
         console.log(a);
    }

let generate=()=>
{
    document.getElementById("section3").style.display="block";
    document.getElementById("section1").style.display="none";
    document.getElementById("section2").style.display="none";

    setTimeout(()=>
    {
        document.querySelector("#field").value="";
        generate_number();
        document.querySelector("#section1").style.display="none";
        document.querySelector("#section2").style.display="block";
        document.querySelector("#section3").style.display="none";
    },3000);
}
const check_number=()=>
{
    if(a===document.querySelector("#field").value)
        alert("Great! you Won...");
    else
    alert("Oops! your guess is wrong");
 generate();
}
