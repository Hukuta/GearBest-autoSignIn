var authorize = function () {
    var gapiInterval = setInterval(function () {
        if (typeof window['gapi'] == 'undefined')
            return null;

        clearInterval(gapiInterval);

        gapi.auth.authorize({
            'approvalprompt': 'force',
            'client_id': '643156394993-h15vso2j5acka94qgvl273mqun0083q3.apps.googleusercontent.com',
            'height': 'long',
            'cookiepolicy': 'https://gearbest.com',
            'requestvisibleactions': 'http://schemas.google.com/AddActivity',
            'redirecturi': 'postmessage',
            'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email'
        }, window.loginFinishedCallback);
    }, 250);

};

var d = document.createElement('script');
d.id = 'googleapis_login';
d.innerHTML = '(function(){(' + authorize.toString() + ")()})()";
(document.getElementsByTagName('body')[0]).appendChild(d);