var topTemplate = $('#topUserApi').html();
var showTop = _.template(topTemplate);
var userUrl='https://api.github.com/users/elmasrya';

$.getJSON(userUrl).done(
  function (user) {
    $('.top').append( showTop(user) );
});

var sideBarTemplate = $('#sideBarUserApi').html();
var showSideBar = _.template(sideBarTemplate);
var userUrl='https://api.github.com/users/elmasrya';

$.getJSON(userUrl).done(
  function (user) {
    $('.sideBar').append( showSideBar(user) );
});

/*
var orgsTemplate=$('#requiresOrgsApi').html();
var showOrgs= _.template(orgsTemplate);
var orgsUrl= 'https://api.github.com/users/elmasrya/orgs';

$.getJSON(orgsUrl).done (
	function(user) {
	$('.orgsBox').append( showOrgs(user) );
});
*/
