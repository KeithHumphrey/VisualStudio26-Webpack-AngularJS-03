import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';

angular.module('mainApp', ['ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages'])

    .controller('MainController', function ($scope, $mdSidenav, $mdDialog) {

        $scope.menuItems = [
            { name: 'Home', icon: 'bi-house-fill' },
            { name: 'Customers', icon: 'bi-person-fill' },
            { name: 'Reports', icon: 'bi-file-earmark-text-fill' },
            { name: 'Settings', icon: 'bi-wrench' }
        ];

        $scope.showDialog = function () {

            $mdDialog.show(
                $mdDialog.alert()
                    .title('Alert')
                    .textContent('ℹ️ Information')
                    .ok('Close')
                );
        };

        $scope.toggleMenu = function () {
            $mdSidenav('left').toggle();
        };

        $scope.closeMenu = function () {
            $mdSidenav('left').close();
        };

    });