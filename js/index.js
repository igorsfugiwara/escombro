document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });

  $(document).ready(function() {
    $('[data-toggle="popover"]').popover({
       placement: 'top',
       trigger: 'hover'
    });
 });