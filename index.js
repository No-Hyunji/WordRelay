const btn = document.querySelector('#button'); // id가 button인 태그를 가져온다!
// document.querySelector(아이디)는 그 아이디의 태그를 가져온다. 
btn.addEventListener('click',() => {
    const word = document.querySelector('#word').textContent
    // 값을 가져올 때 input 말곤 거의 textContext를 쓴다.
    // .은 ~의를 의미하는 것과 같다. 
    const input = document.querySelector('#input').value
    const lastIndex = word.length - 1;
    const w = word[lastIndex];
    const i = input[0];
    if(w === i){
        document.querySelector('#word').textContent = input;
    } else {
        document.querySelector('#error').textContent = '땡';
    }
})