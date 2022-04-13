const { languages, milestones } = window;
// used to test data
console.log({ languages, milestones }, "Store Data");


// Printing the table in the milestones section
if(window.milestones.length){
    let track = 0;
    showMilestones(track);
    if(window.milestones.length > 5){
        document.querySelectorAll("#table .btn").forEach(btn => {
            btn.style.display = "initial";
            btn.addEventListener("click", function(){
                if(btn.getAttribute("value") === "Back"){
                    track - 5 < 5 ? track = 0 : track -= 5;
                }
                else{
                    track + 5 > window.milestones.length - 1 ? track = track : track += 5;
                }
                showMilestones(track);
            })
        });
    }
}

function showMilestones(track){
    let body = document.querySelector("#table table tbody");
    // clear all the existing row
    while(body.firstChild){
        body.removeChild(body.firstChild);
    }
    // add maximum 5 rows
    for(let i = track; i < track + 5 && i < window.milestones.length; i++){
        body.appendChild(addRow(window.milestones[i])); 
    }
}

function addRow(milestone){
    let row = document.createElement("tr");
    let time = document.createElement("td");
    let content = document.createElement("td");
    time.innerHTML = milestone.time;
    content.innerHTML = milestone.content;
    row.appendChild(time);
    row.appendChild(content);
    return row; 
}

// Showing out the languages
if(window.languages.length > 0){
    let track = 0;
    showLanguages(track);
    document.querySelectorAll("#lang-list .btn").forEach(btn => 
        {
            btn.style.display = "initial";
            btn.addEventListener("click", function(){
                if(btn.getAttribute("value") === "Back"){
                    track - 1 < 0 ? track = 0 : track -= 1;
                }
                else{
                    track + 1 > window.languages.length - 1 ? track = track : track++;
                }
                console.log(track);
                showLanguages(track);
            })
        });
}

function showLanguages(track){
    document.querySelector("#language h1").innerHTML = window.languages[track].title;
    document.querySelector("#language #lang-list p").innerHTML = window.languages[track].name;
}

// function for the nav icon
let icon = document.querySelector("#nav-icon");
icon.addEventListener("click", function(){
    document.querySelector("#navbar").classList.toggle("nav-active");
})