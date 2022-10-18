$(function () {
    $('#name').keyup(function (e) {
        $(".greet").text("hello " + $('#name').val());
    });
});