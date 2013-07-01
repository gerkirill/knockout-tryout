list = function() {
    var self = this;

    self.sortedAsc = ko.observable(true);

    self.records = ko.observableArray()

    self.loadData = function(data) {
    	self.records.removeAll();
    	$(data).each(function(key, value){
    		self.records.push(value);
    	});
    }

    self.setOrderAsc = function() {
    	self.sortedAsc(true);
    }

    self.setOrderDesc = function() {
    	self.sortedAsc(false);
    }
}