var input=document.getElementsByClassName('bttn');
var screen=document.getElementById('screen');
var operand1=0;
var operand2=null;
var operator=null;
var ans=null;
var flag=0;
for(var i=0; i<input.length; i++){
    input[i].addEventListener('click',function(){
        var value=this.getAttribute("data-type");
    //    console.log(value);
         if(value=="AC")
            {
                screen.innerHTML=" ";
                // operand2=null;
                // operand1=null;
            }
         if(value=="+"||value=="*"||value=="-"||value=="/"){
             operator=value;
             console.log("flag"); 
             operand1=parseFloat(screen.textContent.trim());
             console.log(operand1); 
             screen.innerHTML=" ";  
         }
         if(value=="="){
          operand2=parseFloat(screen.textContent.trim());
          console.log(operand2);
              if(operator=="+"){
                  ans=eval("operand1 + operand2");
              } 
              if(operator=="*"){
                ans=eval("operand1 * operand2");
            } 
            if(operator=="/"){
                ans=eval("operand1 / operand2");
            } 
            if(operator=="-"){
                ans=eval("operand1 - operand2");
            }
            console.log(ans);
            screen.innerText=ans;   
         }
         if(value=="1"||value=="3"||value=="4"||value=="5"||value=="6"||value=="7"||value=="8"||value=="9"||value=="0"||value=="2"){
             console.log("flag1");
             screen.innerHTML=screen.textContent+value;
         }  
          
    })
}