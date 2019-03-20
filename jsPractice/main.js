$(() =>{
    $('#kitten').slideUp(5000);
    $('#kitten').slideDown(5000);
    $('.catbox').text('I am a box for a cat');
    $('#kitten').hide().delay(5000).fadeIn(800);
});