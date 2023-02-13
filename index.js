let img=document.querySelector('.imge');
let pchoise=document.querySelector('.pchoise');
let cchoise=document.querySelector('.cchoise');
let head=document.querySelector('.head');
let tail=document.querySelector('.tail');
let pnume=document.querySelector('.pnum');
let cnume=document.querySelector('.cnum');
let result=document.querySelector('.result');
let pnum=0;
let cnum=0;
let choise=['head','tail'];
let imge=['head.png','tail.png'];
head.onclick=function(){
    if(pnum===5 && cnum===5){
        result.innerHTML='Equalizer !'
        head.style.display='none';
        tail.style.display='none';
        return
    }
    else if(pnum===5){
        result.innerHTML='You are win !'
        head.style.display='none';
        tail.style.display='none';
        return
    }
    else if(cnum===5){
        result.innerHTML='Computer is win !'
        head.style.display='none';
        tail.style.display='none';
        return
    }
    head.style.pointerEvents='none';
    tail.style.pointerEvents='none';
    setTimeout(() => {
        head.style.pointerEvents='visible';
        tail.style.pointerEvents='visible'; 
        }, 2000);
    pchoise.innerHTML='head';
    pchoise.style.color='red';
    cchoise.innerHTML= choise[Math.floor(Math.random() * choise.length)];
    cchoise.innerHTML==='head'?cchoise.style.color='red':cchoise.style.color='blue';
    img.style.cssText=' animation-name: imge; animation-duration: 0.5s ; animation-iteration-count: 4;'
    setTimeout(() => {
        img.style.cssText=`animation-name: imgee; `;
        let path=`url(./${imge[Math.floor(Math.random() * imge.length)]})`;
        img.style.backgroundImage=path;
        if(path==='url(./head.png)' && cchoise.innerHTML==='head' ){
            pnum++;
            pnume.innerHTML=pnum;
            cnum++;
            cnume.innerHTML=cnum;
        }
        else if(path==='url(./head.png)' && cchoise.innerHTML!='head'){
            pnum++;
            pnume.innerHTML=pnum;
        }
        else if(path==='url(./tail.png)' && cchoise.innerHTML==='tail'){
            cnum++;
            cnume.innerHTML=cnum;
        }
    }, 2000);
}
tail.onclick=function(){
    head.style.pointerEvents='none';
    tail.style.pointerEvents='none';
    setTimeout(() => {
    head.style.pointerEvents='visible';
    tail.style.pointerEvents='visible'; 
    }, 2000);
        if(pnum===5 && cnum===5){
        result.innerHTML='Equalizer !'
        head.style.display='none';
        tail.style.display='none';
        return;
    }
   else if(pnum===5){
        result.innerHTML='You are win !'
        head.style.display='none';
        tail.style.display='none';
        return;
    }
    else if(cnum===5){
        result.innerHTML='Computer is win !'
        head.style.display='none';
        tail.style.display='none';
        return;
    }
    pchoise.innerHTML='tail';
    pchoise.style.color='blue';
    cchoise.innerHTML= choise[Math.floor(Math.random() * choise.length)];
    cchoise.innerHTML==='head'?cchoise.style.color='red':cchoise.style.color='blue';
    img.style.cssText=' animation-name: imge; animation-duration: 0.5s ; animation-iteration-count: 4;'
    setTimeout(() => {
        img.style.cssText=`animation-name: imgee;`;
        let path=`url(./${imge[Math.floor(Math.random() * imge.length)]})`;
        img.style.backgroundImage=path;
        if(path==='url(./tail.png)' && cchoise.innerHTML==='tail'){
            pnum++;
            pnume.innerHTML=pnum;
            cnum++;
            cnume.innerHTML=cnum;
        }
        else if(path==='url(./tail.png)' && cchoise.innerHTML!='tail'){
            pnum++;
            pnume.innerHTML=pnum;
        }
        else if(path==='url(./head.png)' && cchoise.innerHTML==='head'){
            cnum++;
            cnume.innerHTML=cnum;
        }
    }, 2000);
}
