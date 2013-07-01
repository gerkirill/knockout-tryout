list = function() {
    var self = this;

    self.sortedAsc = ko.observable(true).subscribeTo("ordering", true, _setOrder);
    self.records = ko.observableArray();

    function _loadData(data) {
        self.records.removeAll();
        $(data).each(function(key, value){
            self.records.push(value);
        });
    }

    function _setOrder(order) {
        $.getJSON('list-'+order+'.json', function(data){
            _loadData(data);
        });
        return 'asc' === order;
    }
}

// initialize the application
var app = Sammy('#main', function() {
    // define a 'route'
    this.get('#/', function() {
        ko.postbox.publish("ordering", "asc");
    });

    this.get('#/desc', function() {
        ko.postbox.publish("ordering", "desc");
    });
});