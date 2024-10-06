document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //append list
  let myForm = document.getElementById("create-task-form")
  myForm.addEventListener("submit", (e)=>{
      e.preventDefault()

      let value = document.getElementById("new-task-description").value
      let list = document.getElementById("tasks")
      let listItem = document.createElement("li")
      listItem.textContent = value

      //click effect
      let input = document.getElementById("submit-task")
      input.addEventListener("click", ()=>{    
        alert("voila, you have succesfully added a task!!!")
      })

      //mouseover effect
      let submitTask =  document.getElementById("submit-task")
      submitTask.addEventListener("mouseover", () =>{
        submitTask.style.background = "grey"
      })
      submitTask.addEventListener("mouseleave", () =>{
        submitTask.style.background = ""
      })


      //add delete button
      e.preventDefault()
      let button = document.createElement("button")
      button.textContent = "X"
      button.style.marginLeft = "20px"
      button.style.color = "white"; 
      button.style.background = "red"; 
      button.style.fontSize = "10px";  
      button.style.padding = "5px";  
      

      button.addEventListener("click", () =>{
        listItem.remove(); 
      });

      listItem.appendChild(button);
      list.appendChild(listItem);
      
      myForm.reset()

list.appendChild(listItem)

});

console.log(tasks)

console.log("connected")

})
