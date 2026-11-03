/* Exercise 2:
Search functionality for Superheroes Page
*/

window.onload = function(){

    const btn = document.getElementById("searchButton");
    btn.addEventListener("click", function(){

        let query = document.getElementById("search").value.trim();
        let url = "superheroes.php";

        if (query !== ""){
            url += "?query=" + encodeURIComponent(query);
        }

        //Fetches the data from the server and displays it in an alert
        fetch(url).then(function(response){
            return response.text();
        }).then(function(data){
            document.getElementById("results").innerHTML = data;
        })
        .catch(function(error){
            console.log(error);
        })

    })

}