Knockout tryout
===============

Running example can be found here http://sigma.kurgent.com/ko/

This example demonstrates using knockout library to calculate number of checked checkboxes and state of the 
"check all" checkbox and its label. Rules are:

 - if at least one cb is checked - the label is "Uncheck all"
 - if no cb checked - the label is "Check all"
 - if there are both checked and unchecked cb-s - the label is grey
 - otherwise (if all the cb-s have the same state) - the label is black
