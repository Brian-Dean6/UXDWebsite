$(document).ready(function () {
    let currentIndex = 0;
  
    function changeTestimonial(n) {
      showTestimonial(currentIndex += n);
    }
  
    function showTestimonial(index) {
      const testimonials = $('.testimonial-card');
  
      if (index >= testimonials.length) {
        currentIndex = 0;
      } else if (index < 0) {
        currentIndex = testimonials.length - 1;
      } else {
        currentIndex = index;
      }
  
      testimonials.each(function (i, testimonial) {
        $(testimonial).css('transform', `translateX(${(i - currentIndex) * 100}%)`);
      });
    }
  
    $('.prev-btn').on('click', function () {
      changeTestimonial(-1);
    });
  
    $('.next-btn').on('click', function () {
      changeTestimonial(1);
    });
  });
  

  //Call to action
  $(document).ready(function () {

    // Notification popup
    $("#closeNotificationBtn").click(function () {
      $("#notificationPopup").fadeOut();
    });
  
    // Function to check the scroll position and show/hide CTA
    function checkScroll() {
      var scrollPosition = $(window).scrollTop();
      var ctaPosition = $("#cta").offset().top;
  
      // Adjust the threshold value based on when you want the CTA to appear
      var threshold = 200;
  
      // Show/hide CTA based on the scroll position
      if (scrollPosition > ctaPosition - threshold) {
        $("#cta").addClass("visible");
      } else {
        $("#cta").removeClass("visible");
      }
    }
  
    // Call the checkScroll function on page load
    checkScroll();
  
    // Call the checkScroll function on scroll
    $(window).scroll(function () {
      checkScroll();
    });
  
    // Show notification after 3 seconds (adjust timing as needed)
    setTimeout(function () {
      $("#notificationPopup").fadeIn();
    }, 3000);
  
    // Hover effect for CTA text
    $("#cta").hover(
      function () {
        $(this).addClass("hovered");
      },
      function () {
        $(this).removeClass("hovered");
      }
    );
  });
  

  
  