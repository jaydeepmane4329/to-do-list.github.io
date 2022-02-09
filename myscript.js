// Selected Creat button.
const btn = document.getElementById('btn');
// add eventListener to  'Creat' button for Creating new elements
btn.addEventListener('click',() => {
   
  //  If your Put some value in Text feild
  if(textFeild.value){
  const textFeild = document.getElementById('textFeild');
  Parent = document.getElementById('Parent');
  // Creating new Element for acchieve New To-do-List Event
  const creatElement = document.createElement('div');
  creatElement.innerHTML = textFeild.value;
  // Applied Css Properties
  creatElement.classList.add('creatElement')
  // Made ContentEditable and then append
  Parent.appendChild(creatElement).contentEditable = 'true';
  
   //Creating Delete Button for each Of Event
  let CreatButton = document.createElement('button');
    // Applied Font Awesome icon As A button
      CreatButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
      // applying Css Property to delete Icon
      CreatButton.classList.add('button');
      Parent.appendChild(CreatButton);
 
      // Applied EventListener For deleting  'creatElement,delete Button itself and complete button etc'.
      CreatButton.addEventListener('click',() => {
    
        //Deleting CreatedElement(event)
        Parent.removeChild(creatElement);
        // deleting CreatedButtob('delete' icon)
        Parent.removeChild(CreatButton);
        // deleting complete button( 'complete' Icon)
        Parent.removeChild(completeButton);
        })
     

        //creating Button for Completion Status 
    let completeButton = document.createElement('button');
       completeButton.innerHTML = '<i class="fas fa-check-circle"></i>'
      //  Applying Css Property
       completeButton.classList.add('btn')
       Parent.appendChild(completeButton);
       

      //  adding Event Listener for adding Css property as Textdecoration '------' line on Event
       completeButton.addEventListener('click',() =>{
        creatElement.style.textDecoration = "line-through"
       })
  }
  else{
    alert('Please Enter Something')
  }
});



