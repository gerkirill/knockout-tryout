checkboxes = function() {
    var self = this;

    /** contains checkbox observables, key format is cb_<checkbox value> */
    self.checkboxes = {};

    /** create observables for checkboxes */
    $('.data-checkboxes .option').each(function(){
        var checkbox = this;
        self.checkboxes['cb_'+checkbox.value] = ko.observable(checkbox.checked);
    });

    /** calculated property - number of checked checkboxes */
    self.checkedCount = ko.computed(function(){
        var cnt = 0;
        for (var k in self.checkboxes) {
            if (self.checkboxes[k]()) cnt++;
        }
        return cnt;
    });

    /** calculated property - number of unchecked checkboxes */
    self.uncheckedCount = ko.computed(function(){
        var cnt = 0;
        for (var k in self.checkboxes) {
            if (!self.checkboxes[k]()) cnt++;
        }
        return cnt;
    });

    /** calculated property, boolean. True if there are both checked and unchecked checkboxes. */
    self.heterogenous = ko.computed(function(){
        return self.uncheckedCount() > 0 && self.checkedCount() > 0;
    })

    /** calcualted writable property, changes "check all" checkbox status and reacts on its status change */
    self.switcherChecked = ko.computed({
        read: function(){
            return self.checkedCount() > 0;
        },
        write: function(value) {
            for (var k in self.checkboxes) {
                self.checkboxes[k](value)
            }
        }
    });
}