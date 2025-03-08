
let curplayer='X';
let arr=Array(9).fill(null)

function winner(){
    if(arr[0]!=null && arr[0]==arr[1]&&arr[1]==arr[2]||
        arr[3]!=null && arr[3]==arr[4]&&arr[4]==arr[5]||
        arr[6]!=null && arr[6]==arr[7]&&arr[7]==arr[8]||
        arr[0]!=null && arr[0]==arr[3]&&arr[3]==arr[6]||
        arr[1]!=null && arr[1]==arr[4]&&arr[4]==arr[7]||
        arr[2]!=null && arr[2]==arr[5]&&arr[5]==arr[8]||
        arr[0]!=null && arr[0]==arr[4]&&arr[4]==arr[8]||
        arr[2]!=null && arr[2]==arr[4]&&arr[4]==arr[6]
    ){
        document.write(`Winner is ${curplayer}`)
    }
    else if(!arr.includes(null)){
        document.write(`Match Drow`)
    }
}
function clicked(el){
    
    let ind=Number(el.id);
    if(arr[ind]!=null){
        return ;
    }
    arr[ind]=curplayer;
    el.innerText=curplayer;
    winner();
    console.log(el.id)
    console.log(arr)
    curplayer=curplayer=='X'?'O':'X';
}