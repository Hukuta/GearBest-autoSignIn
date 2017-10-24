var loginLink = document.querySelectorAll("a.not-login-a");
if (loginLink && loginLink.length > 0 && document.getElementById('js_isLoginInfo').innerHTML == "")
    location.assign(loginLink[0].href);
