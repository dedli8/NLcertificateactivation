$(function () {
    const siteWidth = 1280;
    const scale = screen.width / siteWidth;
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=' + siteWidth + ', initial-scale=' + scale + '');
    $('#activate-btn').click(validateCard);

    function validateCard() {
        $('.error-message').hide();
        const reg = /^\d{10}$/;
        const regResult = reg.test($('#certificate-number').val());
        if (regResult == true) {
            $('.certificate-content').toggle();
            $('#success').toggle();
            setTimeout(function () {
                $('.certificate-content').toggle();
                $('#success').toggle();
                $('#certificate-number').val('');
            }, 3000);
        } else {
            $('.certificate-content').toggle();
            $('#reject').toggle();
            setTimeout(function () {
                $('.certificate-content').toggle();
                $('#reject').toggle();
                $('#certificate-number').val('');
                $('.error-message').show();
            }, 3000);
        }
    }

});