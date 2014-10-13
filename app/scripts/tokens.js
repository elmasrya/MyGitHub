var token = '7e04cc41c5dca2da46619761369ec625afb682dd';

  $.ajaxSetup({
    headers: {
      "Authorization": "token " + token
    }
  });
