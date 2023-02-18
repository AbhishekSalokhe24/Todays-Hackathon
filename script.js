let url = "https://kontests.net/api/v1/all";
let responce = fetch(url);
responce.then((val)=>{
    return val.json();
}).then((cont)=>{

  ihtml = ""

    console.log(cont)
    for(item in cont){

        console.log(cont);
        console.log(cont[item]);
        ihtml +=
         `<div class="card" style="width: 21rem; ">
         
         <div class="card-body">
           <h5 class="card-title " id="h5">${cont[item].name}</h5>
           <p class="card-text"><b>Start Time:</b> ${cont[item].start_time}</p>
           <p class="card-text"><b>End Time:</b> ${cont[item].end_time}</p>
           <a href="${cont[item].url}" class="btn btn-primary" style="background-color: #33ffcc;color:black" >Visit Link</a>
         </div>
       </div>`
    }
    card_container.innerHTML = ihtml;
})


