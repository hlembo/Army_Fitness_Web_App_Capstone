// Get the gender and age group dropdown menus and the sliders
var genderMenu = document.getElementById("gender");
var ageGroupMenu = document.getElementById("age-group");
var deadliftSlider = document.getElementById("deadlift");
var standingPowerThrowSlider = document.getElementById("standing-power-throw");
var handReleasePushUpSlider = document.getElementById("hand-release-push-up");
var sprintDragCarrySlider = document.getElementById("sprint-drag-carry");
var plankSlider = document.getElementById("plank");
var twoMileRunSlider = document.getElementById("two-mile-run");
function setSliderValues() {
    // Get the selected gender and age group options
    var gender = genderMenu.value;
    var ageGroup = ageGroupMenu.value;
    //Women still need work not all scoring for the ACFT is implemented
    //TODO:
    //Implement Scores Divs for each event and add if-statments for each event
    //Optimize code right now this could be turned into an array or an object 
    //This is kinda shitty coding but it works as intended for what is needed
    //ACFT logic is kinda funky so this is the most straight forward approach
    //to accomplish the task in time 

    if(gender == "female"){
        if (ageGroup == "17-21") {
            deadliftSlider.min = "120";
            deadliftSlider.max = "210";
            standingPowerThrowSlider.min = "3.9";
            standingPowerThrowSlider.max = "8.4";
            handReleasePushUpSlider.min = "10";
            handReleasePushUpSlider.max= "53";
            sprintDragCarrySlider.max = "-115";
            sprintDragCarrySlider.min = "-195";
            plankSlider.min = "90";
            plankSlider.max = "220";
            twoMileRunSlider.max = "-929";
            twoMileRunSlider.min = "-1402";
        }else if(ageGroup == "22-26"){
            deadliftSlider.min = "120";
            deadliftSlider.max = "230";
            standingPowerThrowSlider.min = "4.0";
            standingPowerThrowSlider.max = "8.5";
            handReleasePushUpSlider.min = "10";
            handReleasePushUpSlider.max = "50";
            sprintDragCarrySlider.max = "-115";
            sprintDragCarrySlider.min = "-195";
            plankSlider.min = "85";
            plankSlider.max = "215";
            twoMileRunSlider.max = "-900";
            twoMileRunSlider.min = "-1395";
        }else if(ageGroup == "27-31"){
            deadliftSlider.min = "120";
            deadliftSlider.max = "230";
            standingPowerThrowSlider.min = "4.2";
            standingPowerThrowSlider.max = "8.7";
            handReleasePushUpSlider.min = "10";
            handReleasePushUpSlider.max= "48";
            sprintDragCarrySlider.max = "-115";
            sprintDragCarrySlider.min = "-195";
            plankSlider.min = "80";
            plankSlider.max = "210";
            twoMileRunSlider.max = "-900";
            twoMileRunSlider.min = "-1393";
        }else if(ageGroup == "32-36"){
            deadliftSlider.min = "120";
            deadliftSlider.max = "230";
            standingPowerThrowSlider.min = "4.1";
            standingPowerThrowSlider.max = "8.6";
            handReleasePushUpSlider.min = "10";
            handReleasePushUpSlider.max = "47";
            sprintDragCarrySlider.max = "-119";
            sprintDragCarrySlider.min = "-202";
            plankSlider.min = "75";
            plankSlider.max = "205";
            twoMileRunSlider.max = "-918";
            twoMileRunSlider.min = "-1399";
        }else if(ageGroup == "37-41"){
            deadliftSlider.min = "120";
            deadliftSlider.max = "210";
            standingPowerThrowSlider.min = "4.1";
            standingPowerThrowSlider.max = "8.2";
            handReleasePushUpSlider.min = "10";
            handReleasePushUpSlider.max = "41";
            sprintDragCarrySlider.max = "-122";
            sprintDragCarrySlider.min = "-207";
            plankSlider.min = "70";
            plankSlider.max = "200";
            twoMileRunSlider.max = "-930";
            twoMileRunSlider.min = "-1403";
        }else if(ageGroup == "42-46"){
            deadliftSlider.min = "120";
            deadliftSlider.max = "210";
            standingPowerThrowSlider.min = "3.9";
            standingPowerThrowSlider.max = "8.1";
            handReleasePushUpSlider.min = "10";
            handReleasePushUpSlider.max = "36";
            sprintDragCarrySlider.max = "-129";
            sprintDragCarrySlider.min = "-222";
            plankSlider.min = "70";
            plankSlider.max = "200";
            twoMileRunSlider.max = "-949";
            twoMileRunSlider.min = "-1422";
        }else if(ageGroup == "47-51"){
            deadliftSlider.min = "120";
            deadliftSlider.max = "190";
            standingPowerThrowSlider.min = "3.7";
            standingPowerThrowSlider.max = "7.8";
            handReleasePushUpSlider.min = "10";
            handReleasePushUpSlider.max = "35";
            sprintDragCarrySlider.max = "-131";
            sprintDragCarrySlider.min = "-231";
            plankSlider.min = "70";
            plankSlider.max = "200";
            twoMileRunSlider.max = "-989";
            twoMileRunSlider.min = "-1464";
        }else if(ageGroup == "52-56"){
            deadliftSlider.min = "120";
            deadliftSlider.max = "190";
            standingPowerThrowSlider.min = "3.5";
            standingPowerThrowSlider.max = "7.4";
            handReleasePushUpSlider.min = "10";
            handReleasePushUpSlider.max = "30";
            sprintDragCarrySlider.max = "-138";
            sprintDragCarrySlider.min = "-243";
            plankSlider.min = "70";
            plankSlider.max = "200";
            twoMileRunSlider.max = "-977";
            twoMileRunSlider.min = "-1454";
        }else if(ageGroup == "57-61"){
            deadliftSlider.min = "120";
            deadliftSlider.max = "170";
            standingPowerThrowSlider.min = "3.4";
            standingPowerThrowSlider.max = "6.6";
            handReleasePushUpSlider.min = "10";
            handReleasePushUpSlider.max = "24";
            sprintDragCarrySlider.max = "-146";
            sprintDragCarrySlider.min = "-288";
            plankSlider.min = "70";
            plankSlider.max = "200";
            twoMileRunSlider.max = "-1038";
            twoMileRunSlider.min = "-1488";
        }else{
            deadliftSlider.min = "120";
            deadliftSlider.max = "170";
            standingPowerThrowSlider.min = "3.4";
            standingPowerThrowSlider.max = "6.6";
            handReleasePushUpSlider.min = "10";
            handReleasePushUpSlider.max = "24";
            sprintDragCarrySlider.max = "-146";
            sprintDragCarrySlider.min = "-288";
            plankSlider.min = "70";
            plankSlider.max = "200";
            twoMileRunSlider.max = "-1038";
            twoMileRunSlider.min = "-1500";
        }
    }

    if (gender == "male") {
      //TODO: IMPLEMENT ALL THE REST OF THE SCORING MECHANISM FOR MALES
        if (ageGroup == "17-21") {
            deadliftSlider.min = "140";
            deadliftSlider.min = "340";
            standingPowerThrowSlider.min = "0";
            standingPowerThrowSlider.min = "100";
            handReleasePushUpSlider.min = "0";
            handReleasePushUpSlider.min = "100";
            sprintDragCarrySlider.max = "0";
            sprintDragCarrySlider.min = "100";
            plankSlider.min = "0";
            plankSlider.min = "360";
            twoMileRunSlider.min = "-0";
            twoMileRunSlider.min = "-100";
        }else if(ageGroup == "22-26"){
            deadliftSlider.min = "0";
            deadliftSlider.min = "210";
            standingPowerThrowSlider.min = "0";
            standingPowerThrowSlider.min = "1";
            handReleasePushUpSlider.min = "0";
            handReleasePushUpSlider.min = "2";
            sprintDragCarrySlider.max = "0";
            sprintDragCarrySlider.min = "3";
            plankSlider.min = "0";
            plankSlider.min = "4";
            twoMileRunSlider.min = "-0";
            twoMileRunSlider.min = "-5";
        }
      
    } 
}  
