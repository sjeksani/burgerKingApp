app.controller('itemsCtrl', function(myService, $scope, $state) {
    var that = this;
    myService.getBurgersDetails().then(function(response) {
        that.returnedResult = response.data.list.featuredItems;
        console.log(returnedResult);
    });

    $scope.addToCart = function(id) {

        if (confirm("Are you sure you want to add this item") == true) {
            $state.go("menu.customize", { id: id });
        } else {

        }
    }

});
app.controller('customCtrl', function(myService, $scope, $state) {

    $scope.currentProduct;
    $scope.detailedItem;


    myService.getBurgersDetails().then(function(response) {
        $scope.currentProduct = response.data.list.featuredItems;
        // console.log(returnedResult);
        $scope.currentProduct.forEach(function(item) {
            if (item.id == $state.params.id) {
                $scope.detailedItem = item;
                console.log($scope.detailedItem);
            }
        });
    });



});

app.controller('brgrCtrl', function(myService, $scope, $state) {
    var that = this;
    myService.getBurgersDetails().then(function(response) {
        that.returnedResult = response.data.list.burgers1;
        console.log(returnedResult);
    });

    $scope.addToCart = function(id) {

        if (confirm("Are you sure you want to add this item") == true) {
            $state.go("menu.customBrgrItem", { id: id });
        } else {

        }
    }

});



app.controller('custombrgrCtrl', function(myService, $scope, $state) {

    $scope.currentProduct;
    $scope.detailedItem;


    myService.getBurgersDetails().then(function(response) {
        $scope.currentProduct = response.data.list.burgers1;
        // console.log(returnedResult);
        $scope.currentProduct.forEach(function(item) {
            if (item.id == $state.params.id) {
                $scope.detailedItem = item;
                console.log($scope.detailedItem);
            }
        });
    });



});




app.service("myService", function($http) {
    this.getBurgersDetails = function() {
        console.log("service");
        return $http.get('data/burgers.json');
    };
});