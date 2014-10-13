/*............Top of webpage.....................*/
/*................................................*/


var topTemplate = $('#topUserApi').html();
var showTop = _.template(topTemplate);
var userUrl='https://api.github.com/users/elmasrya';

$.getJSON(userUrl).done(
  function (user) {
    $('.top').append( showTop(user) );
});

/*............Top of sidebar.....................*/
/*................................................*/


var userTemplate = $('#userProfileApi').html();
var showUser = _.template(userTemplate);

$.getJSON(userUrl).done(
  function (user) {
    $('.profileUser').append( showUser(user) );
});


/*............middle of sidebar.....................*/
/*................................................*/

var userInfoTemplate = $('#userInfoApi').html();
var showUserInfo = _.template(userInfoTemplate);

$.getJSON(userUrl).done(
  function (user) {
    $('.myInfo').append( showUserInfo(user) );
});

/*..............Followers, Starred, Following.....................*/
/*................................................*/

var userSocialTemplate = $('#userSocialApi').html();
var showUserSocial = _.template(userSocialTemplate);

$.getJSON(userUrl).done(
  function (user) {
    $('.count1').append( showUserSocial(user) );
});


var starredTemplate = $('#starredApi').html();
var showStarred = _.template(starredTemplate);
var starredUrl='https://api.github.com/users/elmasrya/starred';

$.getJSON(starredUrl).done(
  function (user) {
    user.forEach( function(x) {
    $('.count2').append( showStarred(x));
  });

});


var userSocialTemplate2 = $('#userSocialApi2').html();
var showUserSocial2 = _.template(userSocialTemplate2);

$.getJSON(userUrl).done(
  function (user) {
    $('.count3').append( showUserSocial2(user) );
});

/*............bottom of sidebar.....................*/
/*................................................*/


var orgsTemplate = $('#orgsApi').html();
var showOrgs = _.template(orgsTemplate);
var orgsUrl='https://api.github.com/users/elmasrya/orgs';

$.getJSON(orgsUrl).done(
  function (user) {
    user.forEach( function(x) {
    $('.orgsBox').append( showOrgs(x));
  });

});

/*............REPOS!!!!.....................*/
/*................................................*/


var repoTemplate = $('#repoApi').html();
var showRepo = _.template(repoTemplate);
var repoUrl='https://api.github.com/users/elmasrya/repos';

$.getJSON(repoUrl).done(
  function (user) {
    user.forEach( function(x) {
    $('.repoSec').append( showRepo(x));
  });

});
