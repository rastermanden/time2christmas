function christmas($scope,$interval) {
    $scope.christmasIsCommming ={}
  
    var timeToChristmas = function(){
        today=new Date()
        var christmas=new Date(today.getFullYear(), 11, 24) //Month is 0-11 in JavaScript
        if (today.getMonth()==11 && today.getDate()>24) //if Christmas has passed already
        christmas.setFullYear(christmas.getFullYear()+1) //calculate next year's Christmas
        secondsLeft = Math.ceil((christmas.getTime()-today.getTime())/1000)
        
        //days
        $scope.daysLeft = parseInt(secondsLeft / 86400);
        secondsLeft = secondsLeft % 86400;
        //hours
        $scope.christmasIsCommming.hours = parseInt(secondsLeft / 3600);
        secondsLeft = secondsLeft % 3600;
        //minutes
        $scope.christmasIsCommming.minutes = parseInt(secondsLeft / 60);
        $scope.christmasIsCommming.seconds = parseInt(secondsLeft % 60);
    };
    
    timeToChristmas()
    $interval(timeToChristmas,1000);
}