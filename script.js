let paragraphs=["The 1965 war between India and Pakistan was the second conflict between the two countries over the status of the state of Jammu and Kashmir. The clash did not resolve this dispute, but it did engage the United States and the Soviet Union in ways that would have important implications for subsequent superpower involvement in the region. A The dispute over this region originated in the process of decolonization in South Asia. When the British colony of India gained its","Dragons are among the most popular and enduring of the world's mythological creatures.Dragon tales are known in many cultures, from the Americas to Europe, and from India to China. They have a long and rich history in many forms and continue to populate our books, films and television shows.It's not clear when or where stories of dragons first emerged, but the huge, flying serpents were described at least as early as the age of the ancient Greeks and Sumerians. OK","Owls belong to the phylogenetic class Aves. Two distinct families contain the more than 200 species of owls. The family Tytonidae contains approximately 17 known species of barn owls; the other species belong to the family Strigidae.The oldest known owl fossils are from the Miocene, which occurred 38 to 54 million years ago. Based on the fossil evidence, these ancient owls evolved into the 2 families of modern owls. The oldest barn owl fossils found thus far are estimated .."];
// referencing 

window.pararray=[];


let textarea=document.querySelector('textarea');
let timer=document.getElementById('timer');
let htmlpara=document.getElementById('para');
let tablecorr=document.getElementById('correct');
let tableerr=document.getElementById('errors');
let tablegrade=document.getElementById('grade');
let tablespeed=document.getElementById('speed');
let commenting=document.getElementById('commenting');

let result=document.getElementById('result');
let playagain=document.getElementById('playagain');

// global variables 
let time=120;
let correct=0;
let incorrect=0;
let totalwords=0;
let totalpara=0;
// referencing 
// show paragraphs 
function showpara(lpara){
    window.allpara=lpara;
    totalpara=0;
let i=0;
htmlpara.innerHTML=allpara[i].join(" ");

//   setinterval 
window.showparainterval=setInterval(()=>{
    let text_value=textarea.value.trim();
    text_value=text_value.replace(/\s{2,}/g,' ');
    
    
    
    pararray[i]=text_value;
    
    // calculation(text_value,allpara[i]);
    if(text_value.length==allpara[i].join(" ").length)
    {
        
        i++;
        totalpara++;
        if(i==4){
            clearInterval(showparainterval);
            clearInterval(cleartimer);
        
showresult();
        }
        else if (i!=4){

            textarea.value="";
            htmlpara.innerHTML=allpara[i].join(" ");
        }
        

}

// if(time!=0)
// {
//     clearInterval(showparainterval);

// }

},100)


}
// show paragraphs 
// slice para 
function slicepara(p){
    let ptoarray=p.split(" ");       //paragraph to array convertions total 80 words
    let aa=ptoarray.slice(0,20);     //
    let bb=ptoarray.slice(20,40);
    let cc=ptoarray.slice(40,60);
    let dd=ptoarray.slice(60,80);
    let paraarray=[aa,bb,cc,dd];
    showpara(paraarray);
    
}
// slice para 
// random paragraph 
function randompara(){
    let rand=Math.floor((Math.random())*3);
    let p=paragraphs[rand];
    slicepara(p);
    
}
// random paragraph ending

// starting page     &   result   button
const stbtn=document.getElementById("startbtn");
const closestart=()=>{
    
   let close=document.getElementById('starter');
   close.style.cssText="display:none !important";
   randompara();
   textchecker();
}

stbtn.addEventListener('click',closestart);
playagain.onclick=()=>{
    result.style.cssText="display:none; !important";
    timer.innerHTML=`60 sec`;
    randompara();
}
// starting page 

// checker function
function textchecker(){
 
    window.chkr=setInterval(() => {
        if(textarea.value!="")
        {
            countdown();
            clearInterval(chkr);
        }
        
    }, 50);
}

function createresult()
{
    correct=0;
    incorrect=0;
  
    if((totalpara==0)||(pararray[1]==""))
    {
        let fstpara=pararray[0].split(" ");
        
        let no2para=allpara[0];
        
        for(let i=0;i<fstpara.length;i++)
        {
            if(fstpara[i]===no2para[i])
            {
                  correct++;

            }
            else{
                incorrect++
            }

        }
    }
    // .................2nd................................
    else if((totalpara==1)||(pararray[2]==""))
    {
        let paran01=pararray[0].split(" ");
        
        let no1para=allpara[0];
        for(let i=0;i<paran01.length;i++)
        {
            if(paran01[i]===no1para[i])
            {
                  correct++;
               
            }
            else{
               
                incorrect++
            }

        }
        let paran02=pararray[1].split(" ");
        
        let no2para=allpara[1];
        for(let i=0;i<paran02.length;i++)
        {
            if(paran02[i]===no2para[i])
            {
                  correct++;

            }
            else{
                incorrect++
                
            }

        }

       
    }
     // .................3rd................................
     else if((totalpara==2)||(pararray[3]==""))
     {
         let paran01=pararray[0].split(" ");
         
         let no1para=allpara[0];
         for(let i=0;i<paran01.length;i++)
         {
             if(paran01[i]===no1para[i])
             {
                   correct++;
                
             }
             else{
            
                 incorrect++
             }
 
         }
         let paran02=pararray[1].split(" ");
         
         let no2para=allpara[1];
         for(let i=0;i<paran02.length;i++)
         {
             if(paran02[i]===no2para[i])
             {
                   correct++;
 
             }
             else{
                 incorrect++
              
             }
 
         }
         let paran03=pararray[2].split(" ");
         
         let no3para=allpara[2];
         for(let i=0;i<paran03.length;i++)
         {
             if(paran03[i]===no3para[i])
             {
                   correct++;
 
             }
             else{
                 incorrect++
                
             }
 
         }
 
        
     }
     //.......................4th..............................
     else if((totalpara>=3)&&(pararray[3]!=""))
     {
         let paran01=pararray[0].split(" ");
         
         let no1para=allpara[0];
         for(let i=0;i<paran01.length;i++)
         {
             if(paran01[i]===no1para[i])
             {
                   correct++;
                
             }
             else{
                
                 incorrect++
             }
 
         }
         let paran02=pararray[1].split(" ");
         
         let no2para=allpara[1];
         for(let i=0;i<paran02.length;i++)
         {
             if(paran02[i]===no2para[i])
             {
                   correct++;
 
             }
             else{
                 incorrect++
              
             }
 
         }
         let paran03=pararray[2].split(" ");
         
         let no3para=allpara[2];
         for(let i=0;i<paran03.length;i++)
         {
             if(paran03[i]===no3para[i])
             {
                   correct++;
 
             }
             else{
                 incorrect++
                
             }
 
         }
         let paran04=pararray[3].split(" ");
         
         let no4para=allpara[3];
         for(let i=0;i<paran04.length;i++)
         {
             if(paran04[i]===no4para[i])
             {
                   correct++;
 
             }
             else{
                 incorrect++
                 
                
             }
 
         }
 
        
     }
}


function gradespeed(a,b)
{
let words=a+b;
let rt=120-time;
let sp=(words/rt)*60;
const speed=sp.toFixed(2);

let grade="d";
if(speed<25){
    grade="D";
    tablegrade.innerHTML=grade;
    commenting.innerHTML="Hard Work Needed !"

}
else if((speed>=25)&&(speed<=34))
{


grade="C";
tablegrade.innerHTML=grade;
commenting.innerHTML='Average ("-") !';
}
else if((speed>34)&&(speed<=40))
{
grade="C+";
tablegrade.innerHTML=grade;
commenting.innerHTML='More than Average ("-") !';
}
else if((speed>40)&&(speed<=50))
{
grade="B";
tablegrade.innerHTML=grade;
commenting.innerHTML='Speed of Sound ("-") !';
}
else if((speed>50)&&(speed<=60))
{
grade="B+";
tablegrade.innerHTML=grade;
commenting.innerHTML=' Speed of Lightening ("-") !';
}
else if((speed>60)&&(speed<=70))
{
grade="A";
tablegrade.innerHTML=grade;
commenting.innerHTML='Speed of Light ("-") !';
}
else if(speed>70)
{
grade="A+";
tablegrade.innerHTML=grade;
commenting.innerHTML=' Infinity  ("-") !';
}

tablespeed.innerHTML=speed +" Wpm"
console.log(speed);
}

// checker function
// show result function 
function showresult(){
    createresult();

    textarea.value="";
    tablecorr.innerHTML=correct +" words";
    tableerr.innerHTML=incorrect +" words";
      gradespeed(correct,incorrect);
    setTimeout(()=>{

        result.style.cssText="display:flex; !important";
    },1000);
    textchecker();
}
// show result function 

// timing function
function countdown(){
    time=120;
    timer.innerHTML=`${time} sec`;

  window.cleartimer=  setInterval(() => {
      time--;
        timer.innerHTML=`${time} sec`;
        if(time==0){

            clearInterval(showparainterval);
            clearInterval(cleartimer);
showresult();
        }
    }, 1000);
}
// timing function






// PREVENT CONTEXT MENU FROM OPENING
document.addEventListener("contextmenu", function(evt){
  evt.preventDefault();
}, false);

