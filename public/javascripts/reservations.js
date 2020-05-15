$(document).ready(()=>{
  
  function getInfo(){
    $.ajax({
        url:"/api/reservations",
        method: "GET"
    }).then(function(data){
        console.log(data);
        let newLine = $('<div class="col ml-2 mr-2">');
        let lineBreak = $("<br>");
        for(i=0; i<data.length; i++){
            
                let h1 = $("<h4>")
                let p2 = $("<p>")
                let p3 = $("<p>")
                let p4 = $("<p>")
                let p5 = $("<p>")
                h1.text("Name: "+ data[i].name);
                p2.text("Phone Number: " + data[i].phone);
                p3.text("Email: " + data[i].email);
                p4.text("ID: " + data[i].id);
                p5.text("--------------------------")
                newLine.append(h1);
                newLine.append(p2);
                newLine.append(p3);
                newLine.append(p4);
                newLine.append(p5);
                newLine.append(lineBreak);
            $("#reservations").append(newLine)
        }
    })
}

function getWaitList(){
    $.ajax({
        url: "/api/waitlist",
        method: "GET"
    }).then((data)=>{
        let newLine = $('<div class="col ml-2 mr-2">');
        let lineBreak = $("<br>");
        for(i=0; i<data.length; i++){
            
                let h1 = $("<h4>")
                let p2 = $("<p>")
                let p3 = $("<p>")
                let p4 = $("<p>")
                let p5 = $("<p>")
                h1.text("Name: "+ data[i].name);
                p2.text("Phone Number: " + data[i].phone);
                p3.text("Email: " + data[i].email);
                p4.text("ID: " + data[i].id);
                p5.text("--------------------------")
                newLine.append(h1);
                newLine.append(p2);
                newLine.append(p3);
                newLine.append(p4);
                newLine.append(p5);
                newLine.append(lineBreak);
            $("#waitingList").append(newLine)
        }
    })
}


getInfo();
getWaitList();
})