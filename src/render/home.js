
const HandleDelete=async(id)=>{
  const response= await fetch('https://task-backend-7gl4.onrender.com/delete/'+id, {
            method: 'DELETE',
          });
        const result= await response.json();
        console.log(result);
        window.location.href = "home.html"
        //window.location.reload()
}

const HandleAsDone=async(id,title)=>{
  const response= await fetch('https://task-backend-7gl4.onrender.com/update/'+id, {
    method: 'PATCH',
    body: JSON.stringify({
      title: title,
      isDone: true
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
        const result= await response.json();
        console.log(result);
        //window.location.href = "home.html"
        window.location.reload()
}

onload= async() => {
    const rowTask=document.getElementById('rowTask')

    const response = await fetch('https://task-backend-7gl4.onrender.com/tasks');
    const result = await response.json();
    
    result.forEach((data)=>{
      const id=data.id
      const title=data.title
      const isDone=data.isDone
      const container=
      `
  <div class="tasks">
      <div>
        <p>${title}</p>
      </div>
      <div>
        <div class='isDone'>
        ${isDone  ? `<i id="true" class="fas fa-check-circle"></i>`  : 
          `
            <button onClick=" HandleAsDone(${id},'${title}')">
              <i class="far fa-circle"></i> 
            </button>
          `
        }    
        </div>
      </div>
      <div class='delete'>
         <button class="delete-button" onClick="HandleDelete(${id})">
           <i class="fas fa-trash"></i>
         </button>
     </div>
   </div>
    <hr />
        `
        rowTask.innerHTML+=container
    })
  };

  /* 
    <div id="tasks" class="tasks">
               <div>
                 <p>title</p>
               </div>
           <div>
              <div class='isDone'>
                 <button onClick={handleSubmit}>
                    item.isDone : 
                 </button>
              </div>
           </div>
           <div class='delete'>
              <button class="delete-button" onClick={handleSubmit}>
                  delte
              </button>
          </div>
        </div>
        <hr />
        */