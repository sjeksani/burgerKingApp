var app = angular.module("burgerKingApp", ['ui.router']);

app.controller('homeController', function(myService) {
    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {
            myIndex = 1
        }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 3000); // Change image every 2 seconds
    }

});

app.config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'Screens/home.html',
        controller: 'homeController'

    });
    $stateProvider.state('menu', {
        url: '/menu',
        templateUrl: 'menu.html'
    });


    $stateProvider.state('menu.Burgers', {
        url: 'Burgers',
        templateUrl: 'Screens/Burgers.html'

    });
    $stateProvider.state('menu.featuredItems', {
        url: '/featuredItems',
        templateUrl: 'featureditems.html'


    });
     $stateProvider.state('menu.customize', {
        url: '/customize/:id',
        templateUrl: 'Screens/customizeitem.html'


    });

     $stateProvider.state('menu.customBrgrItem', {
        url: '/customBrgrItem/:id',
        templateUrl: 'Screens/customBrgrItem.html'

    });

});