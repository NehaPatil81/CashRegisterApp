var billAmount=document.getElementById("bill-amount");
var cashAmount=document.getElementById("cash-amount");
var returnChangebtn=document.getElementById("changebtn");
var errmsg=document.getElementById("err-message");
var notes=document.getElementsByClassName("notes");

var availableNotes=[2000,500,200,100,20,10,1];

returnChangebtn.addEventListener("click", function returnChange(){
  
  errmsg.style.display="none";
  if(billAmount.value>0){
    if(cashAmount.value>= billAmount.value){
        change=cashAmount.value-billAmount.value;
        notestobereturned(change);
    }
    else{
      showerrmsg("Cash given should be equal or greater than bill amount");
    }
  }
  else{
    showerrmsg("Invalid Bill Amount");
  }
});

function showerrmsg(msg){
  errmsg.style.display="block";
  errmsg.innerText=msg;
}

function notestobereturned(change){
for(let i=0; i<availableNotes.length; i++){
  var noOfNotes=Math.trunc(change/availableNotes[i]);
  change=change%availableNotes[i];
  notes[i].innerText=noOfNotes;
}
}


