var template = $('#user_stuff').html();
var render = _.template(template);

$.getJSON('https://api.github.com/users/elmasrya').done( function (user) {
    $('.hero-unit').append( render(user) );
});
