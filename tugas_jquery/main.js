$(document).ready(function () {
    $('#masukan').change(function () {
        let input = $(this).val();
        $('ul').append('<li>' + input + ' <i class="fas fa-check"></i> <i class="fas fa-trash"></i></li>');
        $(this).val('');
    })

    $('ul').on('click', '.fa-trash', function () {
        $(this).parent('li').animate({bottom: '10px', opacity: '0'}).fadeOut(100)
    })

    $('ul').on('click', '.fa-check', function () {
        $(this).parent('li').toggleClass('checked')
        $(".fa-check").css("color", "grey")
    })
})