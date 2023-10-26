         
document.getElementById("button1").classList.add("selected-button");

document.getElementById("button1").addEventListener("click",
     function() {

        hideAllContent();
        document.getElementById("content-1").style.display = "block";
        this.classList.add("selected-button");
    
        document.getElementById("button2").classList.remove("selected-button");
        document.getElementById("button3").classList.remove("selected-button");
    });

document.getElementById("button2").addEventListener("click", 
    function() {
    
        hideAllContent(); 
        document.getElementById("content-2").style.display = "block";
        this.classList.add("selected-button");
    
        document.getElementById("button1").classList.remove("selected-button");
        document.getElementById("button3").classList.remove("selected-button");
    });

document.getElementById("button3").addEventListener("click", 
    function() {
   
        hideAllContent();
    
        document.getElementById("content-3").style.display = "block";
        this.classList.add("selected-button");

        document.getElementById("button1").classList.remove("selected-button");
        document.getElementById("button2").classList.remove("selected-button");
    });


// Hàm ẩn tất cả các nội dung
function hideAllContent() {
    document.getElementById("content-1").style.display = "none";
    document.getElementById("content-2").style.display = "none";
    document.getElementById("content-3").style.display = "none";
}

//select
document.getElementById("category-select").addEventListener("change", function () {
    const selectedCategory = this.value;
    const movies = document.querySelectorAll(".item");
    movies.forEach((movie) => {
        const movieCategory = movie.getAttribute("data-category");
        if (selectedCategory === "all" || movieCategory.includes(selectedCategory)) {
            movie.style.display = "flex";
        } else {
            movie.style.display = "none";
        }
    });
});
