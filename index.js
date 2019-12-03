function countWords(str){
  return str.trim().split(/\s+/).length;
}

const str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Total Words `+countWords(str)+`</h1>`;