var que = document.getElementsByClassName('question');
var i;
var len = que.length;

for(i = 0; i < len; i++){
  que[i].addEventListener('click', function(){
    this.classList.toggle('active');
    var answer = this.nextElementSibling;
    if(answer.style.maxHeight){
      answer.style.maxHeight = null;
    }
    else{
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
}