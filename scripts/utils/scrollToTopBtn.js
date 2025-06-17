
// const scrollBtn = document.getElementById("scrollBtn");


export function scrollBtnFn() {
    const scrollBtn = document.createElement("button"); //create Btn
    scrollBtn.classList.add("scroll-button");
    scrollBtn.innerText = "↑";
    //css styling
    const styles = {
        position: "fixed",
        bottom: "30px",
        right: "30px",
        padding: "10px 20px",
        backgroundColor: "rgba(162, 161, 161, 0.5)",
        border: "2px solid green",
        color: "black",
        border: "none",
        borderRadius: "50px",
        display: "none",
        zIndex: "2",
        cursor: "pointer",
        fontSize: "24px",
        width: "50px",
        height: "50px"
    };

    // Apply all styles at once using a loop
    Object.assign(scrollBtn.style, styles);

    document.body.appendChild(scrollBtn); //add Btn to DOM

    // Show the button on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    // Scroll to top when button is clicked
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" //smooth scrolling
        });
    });
}