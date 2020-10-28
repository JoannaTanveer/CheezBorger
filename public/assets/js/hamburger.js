$(document).ready(function() {




    $(".submit").on("click", function (event) {
    event.preventDefault();

    const id = $(this).attr("data-id")
    console.log(id, 'id')

    fetch(`/burgers/${id}`,
    {method:"POST", 
    headers:{"content-type":"application/json"}
    }).then(()=> window.location.replace("/"))
    })

    $(".chomp").on("click", function (event) {
        event.preventDefault();

        const name = $('#burger').val()

        fetch(`/burgers/`,
    {method:"POST", 
    headers:{"content-type":"application/json"},
    body:JSON.stringify({name:name})
    }).then(()=> window.location.replace("/"))
    })
    

});