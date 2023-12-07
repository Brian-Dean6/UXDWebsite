window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("contact-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Message successfully sent!";
  }

  function error() {
    status.classList.add("failure");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}



 // Function to shuffle an array
 function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to rearrange cards
function rearrangeCards() {
  const cardsContainer = document.getElementById("cardsContainer");
  const cards = Array.from(cardsContainer.children);

  // Shuffle the cards array
  shuffleArray(cards);

  // Clear the container
  cardsContainer.innerHTML = "";

  // Append the shuffled cards to the container
  cards.forEach(card => {
    cardsContainer.appendChild(card);
  });
}
window.addEventListener("load", rearrangeCards);

//NEWS
$(document).ready(function() {
  $(".news-item").hover(
      function() {
          $(this).addClass("animate__animated animate__pulse");
      },
      function() {
          $(this).removeClass("animate__animated animate__pulse");
      }
  );
});


  // Add smooth scroll to "Read More" links
  $(".news-item a").on("click", function(e) {
      e.preventDefault();
      let target = $($(this).attr("href"));
      $("html, body").animate({
          scrollTop: target.offset().top
      }, 800);
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-card");
    let index = 0;

    function showTestimonial() {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.classList.add("active");
            } else {
                testimonial.classList.remove("active");
            }
        });
    }

    function nextTestimonial() {
        index = (index + 1) % testimonials.length;
        showTestimonial();
    }

    function prevTestimonial() {
        index = (index - 1 + testimonials.length) % testimonials.length;
        showTestimonial();
    }

    // Initial display
    showTestimonial();

    // Add event listeners to navigation buttons
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", nextTestimonial);
        prevBtn.addEventListener("click", prevTestimonial);
    }
});


//Form Submission
