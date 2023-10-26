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
// Lắng nghe sự kiện khi thay đổi thể loại
document.getElementById("category-select").addEventListener("change", function () {
    const selectedCategory = this.value;

    // Lặp qua tất cả các phim và kiểm tra thể loại
    const movies = document.querySelectorAll(".item");
   
    movies.forEach((movie) => {
        const movieCategory = movie.getAttribute("data-category");

        // Kiểm tra xem thể loại phim có trùng khớp với thể loại đã chọn hoặc có thể loại "action comedy" không
        if (selectedCategory === "all" || movieCategory.includes(selectedCategory) || (selectedCategory === "comedy" && movieCategory === "action comedy")) {
            // Hiển thị phim nếu trùng khớp
            movie.style.display = "flex";
        } else {
            // Ẩn phim nếu không trùng khớp
            movie.style.display = "none";
        }
    });
    
});
