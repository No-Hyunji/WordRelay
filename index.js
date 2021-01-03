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
    // w, i 에 저장을 해도되고 안해도 됨. 어차피 한번 쓰이는 것 
    if(w === i){ // 같으면 여기블럭 
        document.querySelector('#word').textContent = input; 
        // 제시어칸 선택 했으면 여기에 input값을 넣어준다. 대입.
        document.querySelector('#error').textContent = '';
        // 기존에 글자 지울때 빈 문자열 씀 
        document.querySelector('#input').value = '';
        document.querySelector('#input').focus();
    } else { // 다르면 여기블럭 
        document.querySelector('#error').textContent = '땡';
        // 에러칸 선택 한 뒤 '땡'문자열 출력해줌. 
        document.querySelector('#input').value = '';
        document.querySelector('#input').focus();
    }
})