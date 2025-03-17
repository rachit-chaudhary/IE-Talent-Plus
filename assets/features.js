if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    document.addEventListener("DOMContentLoaded", function () {
        function showComparison(type) {
            const talentBtn = document.querySelector(".tv-benefits");
            const otherBtn = document.querySelector(".other-benefits");
            const talentContent = document.querySelectorAll(".talent");
            const otherContent = document.querySelectorAll(".other");
    
            if (type === "talent") {
                talentBtn.classList.add("active");
                otherBtn.classList.remove("active");
                otherContent.forEach(item => {
                    item.style.display = 'none'
                })
                talentContent.forEach(item => {
                    item.style.display = 'flex'
                })
            } else {
                talentBtn.classList.remove("active");
                otherBtn.classList.add("active");
                talentContent.forEach(item => {
                    item.style.display = 'none'
                })
                otherContent.forEach(item => {
                    item.style.display = 'flex'
                })
            }
        }
    
        // Attach event listeners to buttons
        document.querySelector(".tv-benefits").addEventListener("click", () => showComparison("talent"));
        document.querySelector(".other-benefits").addEventListener("click", () => showComparison("other"));
    });
}

