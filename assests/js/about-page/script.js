

     document.getElementById("button1").addEventListener("click", function() {
        // Ẩn tất cả các nội dung
        hideAllContent();
        
        // Hiển thị nội dung tương ứng với nút 1
        document.getElementById("content1").style.display = "block";
    });
    
    document.getElementById("button2").addEventListener("click", function() {
        // Ẩn tất cả các nội dung
        hideAllContent();
        
        // Hiển thị nội dung tương ứng với nút 2
        document.getElementById("content2").style.display = "block";
    });
    
    document.getElementById("button3").addEventListener("click", function() {
        // Ẩn tất cả các nội dung
        hideAllContent();
        
        // Hiển thị nội dung tương ứng với nút 3
        document.getElementById("content3").style.display = "block";
    });
    
    // Hàm ẩn tất cả các nội dung
    function hideAllContent() {
        document.getElementById("content1").style.display = "none";
        document.getElementById("content2").style.display = "none";
        document.getElementById("content3").style.display = "none";
    }