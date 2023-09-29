document.querySelector(".markRead").addEventListener("click", function(e){
    const divs = document.getElementsByClassName('NotificationUnit');
    let inactiveArray = [];

    for (let i = 0; i < divs.length; i++) {
        if (divs[i].classList.contains('inactive')) {
            inactiveArray.push(1);
        } else {
            inactiveArray.push(0);
        }
    }

    //
    inactiveArray.forEach(function(element, index) {
        if (element === 0) {
            console.log("Position of 0: " + (index+1));
            let notificationUnit = document.querySelector(`#notification${index+1}`);
            notificationUnit.classList.add("inactive");
            let redDot = document.querySelectorAll(".newNotification");
            redDot.forEach(function(element){
                element.style.display = "none";
            })
        }
    });

    if (inactiveArray.includes(0)) {
        inactiveArray = inactiveArray.map(element => (element === 0 ? 1 : element));
    }

    let notificationNumber = document.querySelector("#numberOfNotifications");
    let zerosCount = inactiveArray.filter(element => element === 0).length;
    notificationNumber.textContent = zerosCount;
})

