

let create=async(title)=>{
    
    const response=await fetch('https://task-backend-7gl4.onrender.com/create', {
      method: 'POST',
      body: JSON.stringify({
        title:title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
   const result=await response.json();
   console.log(result);
   window.location.href = "home.html" 
}
   
   const submit=document.getElementById('submit')
   submit.addEventListener("click",(event)=>{
     let title=document.getElementById("title").value
     if(!title)
      {
        return alert("All Fielids Are Required Minimize Or Close Program And Try Again")
      }  
     create(title)
     event.preventDefault();
   })