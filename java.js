//the sale time
const saleEndDate = new Date("Aug 20, 2026 23:59:59").getTime();
    const now = new Date().getTime();
    if (now < saleEndDate) {
      const timer = setInterval(function () {
        const currentTime = new Date().getTime();
        const distance = saleEndDate - currentTime;
        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("hours").innerText = hours ;
       document.getElementById("minutes").innerText = minutes;
       document.getElementById("seconds").innerText = seconds;


        // If sale expired
        if (distance < 0) {
          clearInterval(timer);
          document.getElementById("timer").innerHTML = "Sale Ended 😞";
        }
      }, 1000);
    } else{
         document.getElementById("timer").innerHTML = "Currently No Sale 😊";
    }


    //looking for something in particular
    function scrollLeft() {
  document.getElementById("bedContainer").scrollBy({
    left: -200,
    behavior: 'smooth'
  });
}

function scrollRight() {
  document.getElementById("bedContainer").scrollBy({
    left: 200,
    behavior: 'smooth'
  });
}


// the recommended section 
// Handle category button click
const buttons = document.querySelectorAll(".category-buttons button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".category-buttons .active").classList.remove("active");
    btn.classList.add("active");

    // Later you can filter products here if you want
    console.log("Category Selected:", btn.innerText);
  });
});
//  thr blog part
  const filterBtns = document.querySelectorAll(".filter-btn");
  const blogCards = document.querySelectorAll(".blog-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      blogCards.forEach(card => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.classList.add("show");
        } else {
          card.classList.remove("show");
        }
      });
    });
  });



//login part
const loginModal = document.getElementById("loginModal");
const openLogin = document.getElementById("openLogin");
const closeLogin = document.getElementById("closeLogin");

// Open login popup
openLogin.onclick = (e) => {
  e.preventDefault();
  loginModal.style.display = "flex";
};

// Close popup
closeLogin.onclick = () => loginModal.style.display = "none";

// Close when clicking outside
window.onclick = (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
};




  const login = document.getElementById("loginModal"),
        signup = document.getElementById("signupModal");

  // Open Login only
  document.getElementById("openLogin").onclick = () => login.style.display = "block";

  // Close buttons
  document.getElementById("closeLogin").onclick = () => login.style.display="none";
  document.getElementById("closeSignup").onclick = () => signup.style.display="none";

  // Switch to Signup (only from inside login popup)
  document.getElementById("toSignup").onclick = e => {
    e.preventDefault();
    login.style.display="none";
    signup.style.display="block";
  };

  // Switch back to Login
  document.getElementById("toLogin").onclick = e => {
    e.preventDefault();
    signup.style.display="none";
    login.style.display="block";
  };

  // Close when clicking outside
  window.onclick = e => {
    if (e.target===login) login.style.display="none";
    if (e.target===signup) signup.style.display="none";
  };



  document.addEventListener("DOMContentLoaded", () => {
  const modals = {
    login: document.getElementById("loginModal"),
    signup: document.getElementById("signupModal"),
    forgot: document.getElementById("forgotModal"),
    change: document.getElementById("changeModal"),
  };

  const open = (m) => { Object.values(modals).forEach(x => x.style.display="none"); m.style.display="block"; };
  const closeBtns = document.querySelectorAll(".close-btn");

  // Switch links
  document.getElementById("toSignup").onclick = () => open(modals.signup);
  document.getElementById("toLogin").onclick = () => open(modals.login);
  document.getElementById("toForgot").onclick = () => open(modals.forgot);
  document.getElementById("backToLogin1").onclick = () => open(modals.login);
  document.getElementById("backToLogin2").onclick = () => open(modals.login);

  // Close buttons
  closeBtns.forEach(btn => btn.onclick = () => btn.parentElement.parentElement.style.display = "none");

  // Click outside modal to close
  window.onclick = (e) => {
    Object.values(modals).forEach(m => { if (e.target === m) m.style.display = "none"; });
  };
});




