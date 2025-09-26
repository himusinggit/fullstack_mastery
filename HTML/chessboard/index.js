
const cols=['a','b','c','d','e','f','g','h'];
window.onload=()=>{
    let data;
    let userdata;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let square = document.createElement('div');
            square.classList.add('block');
            square.id = cols[j] + "" + (8 - i);  // e.g., "a1", "h8"
            square.innerHTML = cols[j] + "" + (8 - i); // Display the square name, e.g., "a1"

            if ((i + j) % 2 === 0) {
                square.classList.add('white'); // Light square
            } else {
                square.classList.add('black'); // Dark square
            }

            // Assign onclick event to each square
            square.onclick = () => {
                alert('You clicked on: ' + square.id);  // Alert square location
                userdata = square.id;  // Store the clicked square
                console.log('Selected square:', userdata);  // Logging for debugging
                if(data==square.id){
                    console.log('true');
                }
                else{
                    console.log('false');
                }
            };

            document.querySelector('.chessboard').appendChild(square);
        }
    }

document.querySelector('.btn').onclick=()=>{
let counter=3;
data=cols[Math.floor(Math.random()*8)]+""+Math.floor(Math.random()*8+1);
document.querySelector('.ques h1').innerHTML=3;
let coundowninterval=setInterval(()=>{
    counter--;
    document.querySelector('.ques h1').innerHTML=counter;
    if(counter<1){
        clearInterval(coundowninterval);
    }
},1000);
setTimeout(()=>{
    document.querySelector('.ques h1').innerHTML=data;
},3000);
setTimeout(()=>{
    document.querySelector('.ques').style.display='none';
},4000);
}
function animate(){
    requestAnimationFrame(animate);
    console.log(userdata);
}
// animate();
}