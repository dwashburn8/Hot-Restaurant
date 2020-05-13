$(document).ready(()=>{
    $("#submit").on("click", function(event){
        event.preventDefault();
        console.log("working");
        
        let newCustomer = {
            name : $("#nameInput").val(),
            phone : $("#phoneInput").val(),
            email: $("#emailInput").val(),
            id: $("#idInput").val()
        };

        $.post("/api/reservations", newCustomer)
        .then(function(data){
            if(data){
                alert("adding...")

            }
        });

        location.reload()
    })


})