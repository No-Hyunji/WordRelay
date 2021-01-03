const btn = document.querySelector('#button'); // id가 button인 태그를 가져온다!
// document.querySelector(아이디)는 그 아이디의 태그를 가져온다. 
btn.addEventListener('click',() => {
    // 태그는 저장이 가능. 
    const wordTag = document.querySelector('#word');
    const word = wordTag.textContent; // let을 사용하면 처음값을 바꿀 수 있다. 
    // 값을 가져올 때 input 말곤 거의 textContext를 쓴다.
    // .은 ~의를 의미하는 것과 같다. 
    const inputTag = document.querySelector('#input');
    const errorTag = document.querySelector('#error');
    const input = inputTag.value;
    // w, i 에 저장을 해도되고 안해도 됨. 어차피 한번 쓰이는 것 
    // 한 번만 쓰이는 변수들 그냥 대입않고 쓰기.
    if(word[word.length - 1] === input[0]){ // 같으면 여기블럭 
        wordTag.textContent = input; 
        // 제시어칸 선택 했으면 여기에 input값을 넣어준다. 대입.
        // document.querySelector('#word').textContent가
        // 위에 word라는 상수에 대입했지만 word = input 이렇게는 쓸 수 없음
        // word는 문자열이기 때문에 대입을 못한다. 
        // 현재 '노현지'라는 문자열이 들어있는데 word = input이렇게 하면
        // 값이 수정되버린다. 
        errorTag.textContent = '';
        // 기존에 글자 지울때 빈 문자열 씀 
        inputTag.value = '';
        inputTag.focus();
    } else { // 다르면 여기블럭 
        errorTag.textContent = '땡';
        // 에러칸 선택 한 뒤 '땡'문자열 출력해줌. 
        inputTag.value = '';
        inputTag.focus();
    }
})