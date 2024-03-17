const boxes=document.getElementsByClassName("box");
const boxChoice=document.getElementsByClassName('boxChoice')[0];
const styleBoxChoice=window.getComputedStyle(boxChoice);
const styleBoxes=[];

for (let i =0; i<boxes.length;i++){

    const style=window.getComputedStyle(boxes[i]);
    styleBoxes.push(style);
}

for(let i=0;i<boxes.length;i++){
    
    boxes[i].onclick=function codeCarre(){

                const backgroundColor=styleBoxes[i].getPropertyValue('background-color');
                
                boxChoice.style.cssText='display:flex; color:white; font-size:20px; text-align:center; justify-content:center; align-items:center;';
                
                boxChoice.style.backgroundColor=backgroundColor;
                boxChoice.textContent=boxes[i].style.backgroundColor;
                
                
            };

}
        
        
    






