function home()

{
    window.location.replace("main.html")
}

const name =" " ;
const dob=" ";
const email=" ";
const npass=" ";
const cpass=" ";
const ename=false;
const edob=false;
function create(){
    const name =document.getElementById("nameInput").value;
    const dob =document.getElementById("dob").value;
    const email =document.getElementById("email").value;
    const npass =document.getElementById("npass").value;
    const cpass=document.getElementById("cpass").value;
    
    if(ename==name){
        alert("Enter Name ");
    }else if(ename==dob){
        alert("Enter Date of Birth")
    }
    else if(ename==email){
        alert("Enter E-Mail")
    }
    else if(ename==npass){
        alert("enter password")
    }
    else if(ename==cpass && npass==cpass){
        alert("reenter Password")
    }
    else{
        alert(npass)
    }
    
}

    