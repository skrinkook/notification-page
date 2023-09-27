document.querySelector(".markRead").addEventListener("click", function(e){
    const divs = document.getElementsByClassName('NotificationUnit');
    const inactiveArray = [];

    for (let i = 0; i < divs.length; i++) {
        if (divs[i].classList.contains('inactive')) {
            inactiveArray.push(1);
        } else {
            inactiveArray.push(0);
        }
    }

    inactiveArray.forEach(function(element, index) {
        if (element === 0) {
            let notificationUnit = document.querySelector(`#notification${index+1}`);
            notificationUnit.classList.add("inactive");
            let redCircle = document.getElementsByClassName(`newNotification`);
            redCircle.style.display = "none";
            let numberOfNotifications = document.querySelector(`#numberOfNotifications`);
            console.log("Position of 0: " + (index+1));
        }
    });

})
