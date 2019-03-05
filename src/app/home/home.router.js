/**
 * home router
 * @Author: zhangxuelian
 * @Date: 2017-09-13 14:37:45
 * @Last Modified by: chenpeiyu
 * @Last Modified time: 2019-03-04 14:35:08
 **/
define(['app/common/app'], function(app) {
    angular.module("home", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $couchPotatoProvider) {
        $stateProvider
        /**
         * 系统管理模块
         */
        .state('home.demo', {
            url: "/demo",
            templateUrl: 'app/home/demo.html',
            controller: 'demoCtrl',
            noanimation: true,
            cache: true,
            resolve: {
                dummy: $couchPotatoProvider.resolveDependencies(['app/home/demo.ctrl.js'])
            }
        })
    });
});
