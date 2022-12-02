//function 1
function createrParagraph()
{
  let para = document.createElement('p');
  para.textContent = "You clicked the button!  I love my life!  ";
  document.body.appendChild(para);

}

//buttons
const buttons = document.querySelectorAll('button');

//for loop
for(let i = 0; i < buttons.length; i++)
{

  buttons[i].addEventListener('click',createrParagraph);


}
