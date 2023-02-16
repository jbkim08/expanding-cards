//alert('테스트');
//클래스 panel들을 모두 선택해 상수 panels에 담기
const panels = document.querySelectorAll('.panel');

panels.forEach( panel => {
  panel.addEventListener('click', () => {
    removeActive(); //먼저 active클래스 제거
    panel.classList.add('active');
  });
})

function removeActive(){
  panels.forEach( panel => {
    panel.classList.remove('active');
  })
}