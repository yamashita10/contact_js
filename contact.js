$(document).ready(function(){
    $('.js-modal-open').on('click',function(){
        $('.js-modal').fadeIn();
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });


    function reflect_modal(){
      let input_content = $('textarea[name="content"]').val();
      console.log(input_content);
      $('#modal_content').text(input_content);
    }

    $('textarea[name="content"]').change(function() {
      reflect_modal();
    });
});
