$(document).ready(function(){

    $('.NavLateral-DropDown').on('click', function(e){
        e.preventDefault();
        var DropMenu=$(this).next('ul');
        var CaretDown=$(this).children('i.NavLateral-CaretDown');
        DropMenu.slideToggle('fast');
        if(CaretDown.hasClass('NavLateral-CaretDownRotate')){
            CaretDown.removeClass('NavLateral-CaretDownRotate');
        }else{
            CaretDown.addClass('NavLateral-CaretDownRotate');
        }

    });
    $('.tooltipped').tooltip({delay: 50});
    $('.ShowHideMenu').on('click', function(){
        var MobileMenu=$('.NavLateral');
        if(MobileMenu.css('opacity')==="0"){
            MobileMenu.addClass('Show-menu');
        }else{
            MobileMenu.removeClass('Show-menu');
        }
    });
    $('.btn-Search').on('click', function(e){
        e.preventDefault();
        swal({
            title: "What are you looking for?",
            text: "Write what you want",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "Write here",
            confirmButtonText: "Search",
            cancelButtonText: "Cancel"
        }, function(inputValue){
            if (inputValue === false) return false;
            if (inputValue === "") {     swal.showInputError("You must write something");
            return false
            }
            swal("Nice!", "You wrote: " + inputValue, "success");
        });
    });

    $(document).ready(function() {

    var nice = $("body").niceScroll({
      cursorcolor:"rgba(66, 66, 66, 0.82)",
      cursorwidth:"10px"
    });  // The document page (body)

    });

    $(document).ready(function(){
      $('.scrollspy').scrollSpy('scrollOffset', 'activeClass');
    });

      new WOW().init();

      $(function(){
          $('a.smoothScroll').smoothScroll({
              offset: -80,
        scrollTarget: $(this).val()
       });

         // Waypoints
         $('.post_article').waypoint(
          function(direction) {
          if (direction ==='down') {
              var wayID = $(this).attr('id');
          } else {
              var previous = $(this).prev();
              var wayID = $(previous).attr('id');
          }
              $('.border-left-color').removeClass('border-left-color');
              $('.servicios div[id='+wayID+'] h4').addClass('border-left-color');

              // if (wayID == 'tecnicas') {
              //   alert('cierto');
              //   // // $('.table-of-contents').removeClass('table-of-contents');
              //   // $('ul.table-of-contents').addClass('table-of-contents-100');
              // }

          }, { offset: '40%' });

      });

});

(jQuery);
