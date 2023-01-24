/////////////////////////////////////////////////////////////////////////
// Javascript file generated by ctc2html v9.1.4.1 at Mon Nov 7 21:49:36 2022
// Copyright (c) 2006-2013 Testwell Oy
// Copyright (c) 2013-2016 Verifysoft Technology GmbH
/////////////////////////////////////////////////////////////////////////
target=location.hash;

function highlight(row, a, b) {
   var cl;
   var cells;
   row.style.cursor = 'pointer';
   if (row.tagName != "TR") {
      row = row.parentNode;
      if (row.tagName != "TR") {
         row = row.parentNode;
      }
   }
   cells = row.parentNode.rows[row.rowIndex - a - 1].getElementsByTagName("td");
   for (var i = 0; i < cells.length; i++) {
      cl = cells[i].getAttribute("class");
      if (cl != null) {
         cells[i].setAttribute("class", cl.replace(/profile/, "highlight"));
      } else {
	 cl = cells[i].getAttribute("className");
	 if (cl != null) {
	     cells[i].setAttribute("className", cl.replace(/profile/, "highlight"));
	 }
      }
   }
   cells = row.parentNode.rows[row.rowIndex - b - 1].getElementsByTagName("td");
   for (var i = 0; i < cells.length; i++) {
      cl = cells[i].getAttribute("class");
      if (cl != null) {
         cells[i].setAttribute("class", cl.replace(/profile/, "highlight"));
      } else {
	 cl = cells[i].getAttribute("className");
	 if (cl != null) {
	     cells[i].setAttribute("className", cl.replace(/profile/, "highlight"));
	 }
      }
   }
   cells = row.parentNode.rows[row.rowIndex - a - 1].getElementsByTagName("span");
   for (var i = 0; i < cells.length; i++) {
      cl = cells[0].getAttribute("class");
      if (cl != null) {
         cells[0].setAttribute("class", cl.replace(/profile/, "highlight"));
      } else {
	 cl = cells[0].getAttribute("className");
	 if (cl != null) {
	     cells[0].setAttribute("className", cl.replace(/profile/, "highlight"));
	 }
      }
   }
   cells = row.parentNode.rows[row.rowIndex - b - 1].getElementsByTagName("span");
   for (var i = 0; i < cells.length; i++) {
      cl = cells[0].getAttribute("class");
      if (cl != null) {
         cells[0].setAttribute("class", cl.replace(/profile/, "highlight"));
      } else {
	 cl = cells[0].getAttribute("className");
	 if (cl != null) {
	     cells[0].setAttribute("className", cl.replace(/profile/, "highlight"));
	 }
      }
   }
}

function unhighlight(row, a, b) {
   var cl;
   var cells;
   if (row.tagName != "TR") {
      row = row.parentNode;
      if (row.tagName != "TR") {
         row = row.parentNode;
      }
   }
   cells = row.parentNode.rows[row.rowIndex - a - 1].getElementsByTagName("td");
   for (var i = 0; i < cells.length; i++) {
      cl = cells[i].getAttribute("class");
      if (cl != null) {
         cells[i].setAttribute("class", cl.replace(/highlight/, "profile"));
      } else {
	 cl = cells[i].getAttribute("className");
	 if (cl != null) {
	     cells[i].setAttribute("className", cl.replace(/highlight/, "profile"));
	 }
      }
   }
   cells = row.parentNode.rows[row.rowIndex - b - 1].getElementsByTagName("td");
   for (var i = 0; i < cells.length; i++) {
      cl = cells[i].getAttribute("class");
      if (cl != null) {
         cells[i].setAttribute("class", cl.replace(/highlight/, "profile"));
      } else {
	 cl = cells[i].getAttribute("className");
	 if (cl != null) {
	     cells[i].setAttribute("className", cl.replace(/highlight/, "profile"));
	 }
      }
   }
   cells = row.parentNode.rows[row.rowIndex - a - 1].getElementsByTagName("span");
   for (var i = 0; i < cells.length; i++) {
      cl = cells[i].getAttribute("class");
      if (cl != null) {
         cells[0].setAttribute("class", cl.replace(/highlight/, "profile"));
      } else {
	 cl = cells[0].getAttribute("className");
	 if (cl != null) {
	     cells[0].setAttribute("className", cl.replace(/highlight/, "profile"));
	 }
      }
   }
   cells = row.parentNode.rows[row.rowIndex - b - 1].getElementsByTagName("span");
   for (var i = 0; i < cells.length; i++) {
      cl = cells[i].getAttribute("class");
      if (cl != null) {
         cells[0].setAttribute("class", cl.replace(/highlight/, "profile"));
      } else {
	 cl = cells[0].getAttribute("className");
	 if (cl != null) {
	     cells[0].setAttribute("className", cl.replace(/highlight/, "profile"));
	 }
      }
   }
}

function load_profile() {
   if (target == "#a1") {
      parent.index_profile.location = "indexC.html#a1";
      parent.profile.location = "indexD1.html";
   }
}

function load_funcs() {
   if (target == "#ad1") {
      parent.index_funcs.location = "indexH.html#ad1";
      parent.functions.location = "indexB1.html";
   }
}

function load_untested() {
   if (target == "#ufi1") {
      parent.index_untested.location = "indexI.html#ufi1";
      parent.untested.location = "indexU.html";
   }
}
