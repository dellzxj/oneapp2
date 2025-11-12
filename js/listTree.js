/*大屏*/
var setting = {
    view: {
        dblClickExpand: false
    },
    check: {
        enable: false
    }

};
var zNodes =[
    {"id":0,"name":"利民无人农场环境监测设备","open":true,icon:"img/down1.png",children:[
        { "id":1,"pid":0, "name":"气象站","open":true, icon:"img/page.png",
            children: [
                { "id":11,"pid":1, "name":"气象站"},

            ]
        },
        {"id":2,"pid":0,"name":"土壤墒情",icon:"img/page.png",
            children: [
                { "id":21,"pid":2, "name":"三段式墒情仪"},

                { "id":23,"pid":2, "name":"墒情仪"}
            ]
        },

    ]}

];



var cNodes =[
    {"id":0,"name":"利民无人农场环境监测设备","open":true,icon:"img/down1.png",children:[
            { "id":1,"pid":0, "name":"气象站","open":true, icon:"img/page.png",
                children: [
                    { "id":11,"pid":1, "name":"气象站"},

                ]
            },
            {"id":2,"pid":0,"name":"土壤墒情",icon:"img/page.png",
                children: [
                    { "id":21,"pid":2, "name":"三段式墒情仪"},

                    { "id":23,"pid":2, "name":"墒情仪"}
                ]
            },

        ]}

];

var zTree;
$(document).ready(function(){
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    $.fn.zTree.init($("#treeDemo1"), setting, zNodes);
    $.fn.zTree.init($("#treeDemo2"), setting, zNodes);
    
    zTree = $.fn.zTree.getZTreeObj("treeDemo");


});

var cTree;
$(document).ready(function(){
    $.fn.cTree.init($("#treeDemo"), setting, cNodes);
    $.fn.cTree.init($("#treeDemo1"), setting, cNodes);
    $.fn.cTree.init($("#treeDemo2"), setting, cNodes);

    cTree = $.fn.cTree.getCTreeObj("treeDemo");


});


