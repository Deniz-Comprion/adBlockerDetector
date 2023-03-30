document.addEventListener("DOMContentLoaded", function () {

  function adBlockCreator() {
    document.body.innerHTML += `<div class="adsbygoogle" id="ad"></div>`;
    const bite = document.getElementById("ad");

    let adClasses = [
      "ads",
      "ad",
      "popUP",
      "PopUp",
      "ad-banner",
      "ad-placement",
      "doubleclick",
      "ad-badge",
      "adsbox",
      "adright",
      "adleft",
      "adrow",
      "ads_div",
      "adswidget",
    ];

    for (let item of adClasses) {
      bite.classList.add(item);
    }
  }

  function adBlockChecker() {
    setTimeout(() => {
    const bite = document.getElementById("ad");
    const biteStyle = window.getComputedStyle(bite);
    const biteDisplay = biteStyle.getPropertyValue("display");

    if (biteDisplay === "none") {
      //console.log("AdBlocker Detected | " + "biteDisplay = " + biteDisplay);
      const activeAdBlocker = document.getElementById("adblocker-active");
      activeAdBlocker.classList.remove("hidden");
    } else {
      //console.log("No AdBlocker Detected | " + "biteDisplay = " + biteDisplay);
      const notActiveAdBlocker = document.getElementById(
        "adblocker-not-active"
      );
      notActiveAdBlocker.classList.remove("hidden");
    }
    }, 1000);
  }

  var popUpStatus = true;
  function popUpCreator() {
    let newWindow = window.open(null, "", (width = "100"), (height = "100"));
    try {
      newWindow.close();
      popUpStatus = false;
    } catch (error) {
      popUpStatus = true;
    }
  }

  function popUpChecker() {
    if (popUpStatus == true) {
      //console.log("PopUps are not allowed!")
      const popUpNotAllowed = document.getElementById("popup-not-allowed");
      popUpNotAllowed.classList.remove("hidden");
    } else {
      //console.log("PopUps are allowed!")
      const popUpAllowed = document.getElementById("popup-allowed");
      popUpAllowed.classList.remove("hidden");
    }
  }

  adBlockCreator();   
  adBlockChecker();
  popUpCreator();
  popUpChecker();
});
