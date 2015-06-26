angular.module('app').value('peToastr', toastr);

angular.module('app').factory('peNotifier', function(peToastr){
    return{
        notify: function(msg){
            peToastr.success(msg);
            console.log(msg);
        },
        error: function(msg){
            peToastr.error(msg);
            console.log(msg);
        }
    }
});
