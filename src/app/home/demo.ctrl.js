/**
 * 审讯一体机管理--告知书管理
 * @Author: zhangxuelian 
 * @Date: 2018-01-02 14:08:09 
 * @Last Modified by: chenpeiyu
 * @Last Modified time: 2019-03-01 17:56:46
 **/
define(['app/common/app'], function (app) {
    app.registerController('demoCtrl', function ($scope, $modal, $couchPotato, modalExt, $rootScope, $location, $state, $sce, subject, $log, $timeout, normalUtil, dateUtil, $scope, normalUtil, security,commonUtil) {
        var tableObj = $scope.tableObj = {
            //设置表格
            tableConfig: {
                rows:[{
                        'name':'test2',
                        'file':'192.168.12212',
                        'video':'192.16544'
                    },{
                        'name':'test2',
                        'file':'192.168.12212',
                        'video':'192.16544'
                    },{
                        'name':'test2',
                        'file':'192.168.12212',
                        'video':'192.16544'
                    }
                ],
                optConfig: [{
                        optName: '操作',
                        optContent: [{
                                name: "编辑",
                                noPermission: true,
                                className: "common-table-reform",
                                callback: function (row) {
                                    // baseConfig.add('编辑',row);
                                }
                            },{
                                name: "删除",
                                noPermission: true,
                                className: "common-table-delete",
                                callback: function (row) {
                                    //弹窗提示
                                    modalExt.comfirm({
                                        title: "删除",
                                        type:'warning',
                                        content: "确定要删除吗？",
                                        comfirmCallback: function () {
                                          console.log('删除了')
                                        }
                                    });
                                }
                            }
                        ]
                    }
                ],
                toolbar: {
                    show: true,
                    title: '测试列表',
                    tools: [{
                        text: '添加',
                        icon: 'fa fa-plus',
                        permissionCode: '',
                        noPermission : true,
                        callback: function () {
                            // baseConfig.add('新增',{});
                        }
                    }]
                },
                colunms: [{
                        label: '告知书名称',
                        name: 'name',
                    },{
                        label: '告知书文档',
                        name: 'fileText',
                        formatter:function(row){
                            return '<i ' + (row.file  ? 'class="notificatrionYes fa fa-check-circle" title="是"' : 'class="notificatrionNo fa fa-minus-circle" title="否"') + '></i>';
                        }
                    },{
                        label: '告知书视频',
                        name: 'videoText',
                        formatter:function(row){
                            return '<i ' + (row.video ? 'class="notificatrionYes fa fa-check-circle" title="是"' : 'class="notificatrionNo fa fa-minus-circle" title="否"') + '></i>';
                        }
                    }
                ],
                turnPage: function (page, size) {
                    // baseConfig.params.page.page = page;
                    // baseConfig.params.page.size = size;
                    // baseConfig.getList();
                }
            }
        };
    });
});