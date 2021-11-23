
window.function = function (numgroups, numstudents, allnames, timeseed) {
  
  numgroups = numgroups.value ?? "";
  numstudents = numstudents.value ?? "";
  allnames = allnames.value ?? "";
  timeseed = timeseed.value ?? "";
  
  if (allnames == "") {
    return "";
  }
  
  else {
  
    var groups = "";
    var grouptemp = "";
    var allnamesarr = allnames.split(", ");
    
    for (i = 0; i < numgroups; i++) {
      grouptemp = "Group "+(i+1)+":";
      for (j = 0; j < numstudents; j++) {
        var randname = Math.floor(Math.random() * allnames.length);
        if(allnames[randname]){
		grouptemp = grouptemp + allnames[randname] + ", ");
        }
        allnames.splice(randname,1);
        console.log(allnames);
      }
      groups = groups + grouptemp;
      grouptemp = "";
    }
  }
  
}
