let dogame=true;
let score=0;
document.addEventListener("click",()=>{
    if(!dogame){
        return;
    }
    
    let jumpN=document.querySelector('#blue_box').style.bottom;
    document.querySelector('#blue_box').style.bottom ="40%";
    setTimeout(()=>{
        document.querySelector('#blue_box').style.bottom=jumpN;
    },600);
});

function Update(){
    if(!dogame){
        return;
    }
    let blueb=document.querySelector("#blue_box").getBoundingClientRect();
    let redb=document.querySelector("#red_box").getBoundingClientRect();
    
    if(blueb.left<redb.right && blueb.right>redb.left && blueb.top< redb.bottom && blueb.bottom>redb.top){
        alert("Game Over!");
        score=0;
        document.querySelector("#red_box").style.left="100%";
        location.reload()
    }
    if(dogame){
        document.querySelector("#score").textContent=score;
        score++;
    }
    requestAnimationFrame(Update);
}
Update();