
$(() => {
let listItems = $('li');
for (let i = 0; i < listItems.length; i++){
    if ((i + 1) % 2=== 0){
        $(listItems[i]).css('height', '40px')
    }
}

$('li').each((key, value) => {
    if ((key + 1) % 2 === 0) {
        $(value).css('height',
        '40px');
    }


    });


});

