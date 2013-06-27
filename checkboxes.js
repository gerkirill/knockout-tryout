checkboxes = function() {
    var self = this;
    self.checkboxes = {};
    $('.data-checkboxes .option').each(function(){
        var checkbox = this;
        self.checkboxes['cb_'+checkbox.value] = ko.observable(checkbox.checked);
    });
    self.checkedCount = ko.computed(function(){
        var cnt = 0;
        for (var k in self.checkboxes) {
            if (self.checkboxes[k]()) cnt++;
        }
        return cnt;
    });
    self.uncheckedCount = ko.computed(function(){
        var cnt = 0;
        for (var k in self.checkboxes) {
            if (!self.checkboxes[k]()) cnt++;
        }
        return cnt;
    });
    self.heterogenous = ko.computed(function(){
        return self.uncheckedCount() > 0 && self.checkedCount() > 0;
    })
    self.switcherChecked = ko.computed({
        read: function(){
            return self.checkedCount() > 0;
        },
        write: function(value) {
            for (var k in self.checkboxes) {
                if (self.checkboxes[k](value));
            }
        }
    });
}