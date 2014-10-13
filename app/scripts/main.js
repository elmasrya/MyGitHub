var topTemplate = $('#topUserApi').html();
var showTop = _.template(topTemplate);
var userUrl='https://api.github.com/users/elmasrya';

$.getJSON(userUrl).done(
  function (user) {
    $('.top').append( showTop(user) );
});




var sideBarTemplate = $('#sideBarUserApi').html();
var showSideBar = _.template(sideBarTemplate);

$.getJSON(userUrl).done(
  function (user) {
    $('.sideBar').append( showSideBar(user) );
});
