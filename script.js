$(function(){
    //アンサー　display: none;
    $('.answer').css('display','none');
    //アコーディオン 
      $('.faq-list-item').click(function(){
        if($(this).find('.answer').hasClass('open')){
            $(this).find('.answer').removeClass('open');
            $(this).find('.answer').slideUp();
            $(this).find('span').text('+');
        } else {
            $(this).find('.answer').addClass('open');
            $(this).find('.answer').slideDown();
            $(this).find('span').text('-');
        }
      });
});
