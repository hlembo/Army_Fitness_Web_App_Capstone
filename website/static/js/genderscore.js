function updateScore() {
    // Get the sliders and score divs
    var deadliftSlider = document.getElementById("deadlift");
    var standingPowerThrowSlider = document.getElementById("standing-power-throw");
    var handReleasePushUpSlider = document.getElementById("hand-release-push-up");
    var sprintDragCarrySlider = document.getElementById("sprint-drag-carry");
    var plankSlider = document.getElementById("plank");
    var twoMileRunSlider = document.getElementById("two-mile-run");
    var deadliftScoreDiv = document.getElementById("deadlift-score");
    var standingPowerThrowScoreDiv = document.getElementById("standing-power-throw-score");
    var handReleasePushUpScoreDiv = document.getElementById("hand-release-push-up-score");
    var sprintDragCarryScoreDiv = document.getElementById("sprint-drag-carry-score");
    var plankScoreDiv = document.getElementById("plank-score");
    var twoMileRunScoreDiv = document.getElementById("two-mile-run-score");
    var totalScoreDiv = document.getElementById("total-score");
    var genderMenu = document.getElementById("gender");
    var ageGroupMenu = document.getElementById("age-group");
    var deadliftscore2 = document.getElementById("deadlift-score2");
    var spt = document.getElementById("standing-power-throw-score2");
    var hrp = document.getElementById("hand-release-push-up-score2");
    var sdc = document.getElementById("sprint-drag-carry-score2");
    var plt = document.getElementById("plank-score2");
    var ts= document.getElementById("two-mile-run-score2");

    var gender = genderMenu.value;
    var ageGroup = ageGroupMenu.value;

    


    if (gender == "female") {
        if (ageGroup == "17-21") {
            const deadliftScores = {
                120: 60,
                121: 60,
                122: 60,
                130: 64,
                140: 71,
                150: 78,
                160: 87,
                170: 91,
                180: 94,
                190: 97,
                200: 98,
                210: 100,
            };

            // To look up the score for a given value:
            var deadliftScore = getScore(Number(deadliftSlider.value), deadliftScores);
            deadliftscore2.innerHTML = deadliftScore;
            //Standing Power Throw checking
            const standingPowerThrowScores = {
                3.9: 60,
                4.0: 60,
                4.1: 60,
                4.2: 60,
                4.3: 60,
                4.4: 61,
                4.5: 61,
                4.6: 62,
                4.7: 63,
                4.8: 65,
                4.9: 66,
                5.0: 68,
                5.1: 68,
                5.2: 69,
                5.3: 71,
                5.4: 74,
                5.5: 75,
                5.6: 76,
                5.7: 78,
                5.8: 80,
                5.9: 81,
                6.0: 83,
                6.1: 85,
                6.2: 86,
                6.3: 87,
                6.4: 88,
                6.5: 90,
                6.6: 91,
                6.7: 91,
                6.8: 92,
                6.9: 93,
                7.0: 94,
                7.1: 94,
                7.2: 95,
                7.3: 96,
                7.4: 96,
                7.5: 97,
                7.6: 97,
                7.7: 98,
                7.8: 98,
                7.9: 98,
                8.0: 98,
                8.1: 98,
                8.2: 99,
                8.3: 99,
                8.4: 100,
                // ... more ranges and scores
            };

            // To look up the score for a given value:
            var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
            spt.innerHTML = standingPowerThrowScore;

            const handReleasePushupScores = {
                10: 60,
                11: 61,
                12: 62,
                13: 64,
                14: 65,
                15: 66,
                16: 68,
                17: 69,
                18: 70,
                19: 71,
                20: 72,
                21: 74,
                22: 75,
                23: 76,
                24: 77,
                25: 78,
                26: 79,
                27: 80,
                28: 82,
                29: 83,
                30: 84,
                31: 85,
                32: 86,
                33: 87,
                34: 88,
                35: 89,
                36: 90,
                37: 91,
                38: 92,
                39: 94,
                42: 95,
                43: 96,
                45: 97,
                47: 98,
                50: 99,
                53: 100,
            };
            var handReleaseScore = getScore(Number(handReleasePushUpSlider.value), handReleasePushupScores);
            hrp.innerHTML = handReleaseScore;


            const sdcscores = {
                195: 60,
                188: 61,
                180: 62,
                178: 63,
                175: 64,
                173: 65,
                169: 66,
                167: 67,
                165: 68,
                164: 69,
                161: 70,
                160: 71,
                159: 72,
                157: 73,
                155: 74,
                154: 75,
                153: 76,
                151: 77,
                150: 78,
                149: 79,
                148: 80,
                146: 81,
                145: 82,
                144: 83,
                143: 84,
                142: 85,
                141: 86,
                140: 87,
                138: 88,
                137: 89,
                136: 90,
                134: 91,
                133: 92,
                132: 93,
                130: 94,
                128: 95,
                126: 96,
                125: 97,
                122: 98,
                119: 99,
                115: 100,
            }
            for (const key in sdcscores) {
                sdcscores[key] *= -1;
            }

            var sdcScore = getScore(Number(sprintDragCarrySlider.value * -1), sdcscores);

            sdc.innerHTML = Math.abs(sdcScore);


            const plkscores = {
                90: 60,
                93: 61,
                97: 62,
                100: 63,
                103: 64,
                106: 65,
                109: 66,
                113: 67,
                116: 68,
                119: 69,
                122: 70,
                126: 71,
                129: 72,
                132: 73,
                135: 74,
                139: 75,
                142: 76,
                145: 77,
                149: 78,
                152: 79,
                155: 80,
                158: 81,
                161: 82,
                165: 83,
                168: 84,
                171: 85,
                175: 86,
                178: 87,
                181: 88,
                184: 89,
                188: 90,
                191: 91,
                194: 92,
                197: 93,
                201: 94,
                204: 95,
                207: 96,
                210: 97,
                214: 98,
                217: 99,
                220: 100,
            }

            var plankScore = getScore(Number(plankSlider.value), plkscores);
            plt.innerHTML = plankScore;


            const twomilescores = {
                1402:60,
                1378:61,
                1355:62,
                1331:63,
                1314:64,
                1297:65,
                1280:66,
                1263:67,
                1258:68,
                1249:69,
                1240:70,
                1230:71,
                1221:72,
                1212:73,
                1203:74,
                1196:75,
                1188:76,
                1180:77,
                1172:78,
                1164:79,
                1157:80,
                1149:81,
                1140:82,
                1134:83,
                1126:84,
                1119:85,
                1110:86,
                1102:87,
                1093:88,
                1084:89,
                1076:90,
                1067:91,
                1057:92,
                1047:93,
                1034:94,
                1021:95,
                1008:96,
                994:97,
                976:98,
                955:99,
                929:100

            }
            for (const key in twomilescores) {
                twomilescores[key] *= -1;
            }

           var twomilescore2 = getScore(Number(twoMileRunSlider.value * -1), twomilescores);
            ts.innerHTML = Math.abs(twomilescore2);



        } else if (ageGroup == "22-26") {
            const deadliftScores = {
                120: 60,
                130: 64,
                140: 71,
                150: 78,
                160: 87,
                170: 89,
                180: 91,
                190: 94,
                200: 96,
                210: 98,
                220: 99,
                230: 100,
            };

            var deadliftScore = getScore(Number(deadliftSlider.value), deadliftScores);
            deadliftscore2.innerHTML = deadliftScore;

            const standingPowerThrowScores = {
                4.0: 60,
                4.1: 60,
                4.2: 60,
                4.3: 60,
                4.4: 61,
                4.5: 61,
                4.6: 62,
                4.7: 63,
                4.8: 64,
                4.9: 65,
                5.0: 66,
                5.1: 67,
                5.2: 69,
                5.3: 71,
                5.4: 72,
                5.5: 74,
                5.6: 75,
                5.7: 76,
                5.8: 79,
                5.9: 80,
                6.0: 81,
                6.1: 83,
                6.2: 84,
                6.3: 85,
                6.4: 86,
                6.5: 87,
                6.6: 88,
                6.7: 89,
                6.8: 90,
                6.9: 91,
                7.0: 92,
                7.1: 93,
                7.2: 94,
                7.3: 94,
                7.4: 95,
                7.5: 96,
                7.6: 97,
                7.7: 97,
                7.8: 98,
                7.9: 98,
                8.0: 98,
                8.1: 98,
                8.2: 99,
                8.3: 99,
                8.4: 99,
                8.5: 100,
                // ... more ranges and scores
            };

            // To look up the score for a given value:
            var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
            spt.innerHTML = standingPowerThrowScore;

            const sdcscores = {
                195: 60,
                189: 61,
                181: 62,
                179: 63,
                177: 64,
                174: 65,
                171: 66,
                169: 67,
                167: 68,
                165: 69,
                163: 70,
                162: 71,
                160: 72,
                158: 73,
                157: 74,
                155: 75,
                154: 76,
                152: 77,
                151: 78,
                150: 79,
                149: 80,
                147: 81,
                146: 82,
                145: 83,
                143: 84,
                142: 85,
                141: 86,
                140: 87,
                138: 88,
                136: 89,
                135: 90,
                133: 91,
                132: 92,
                130: 93,
                129: 94,
                126: 95,
                125: 96,
                122: 97,
                120: 98,
                116: 99,
                115: 100,
            }
            for (const key in sdcscores) {
                sdcscores[key] *= -1;
            }

            var sdcScore = getScore(Number(sprintDragCarrySlider.value * -1), sdcscores);
            sdc.innerHTML = Math.abs(sdcScore);

            const handReleasePushupScores = {
                10: 60,
                11: 62,
                12: 65,
                13: 68,
                14: 69,
                15: 70,
                16: 71,
                17: 72,
                18: 74,
                19: 76,
                21: 77,
                22: 78,
                23: 79,
                24: 82,
                25: 83,
                26: 84,
                27: 85,
                28: 86,
                30: 87,
                31: 88,
                32: 89,
                33: 90,
                34: 91,
                35: 92,
                36: 93,
                37: 94,
                39: 95,
                42: 96,
                43: 97,
                46: 98,
                49: 99,
                50: 100,
            };
            var handReleaseScore = getScore(Number(handReleasePushUpSlider.value), handReleasePushupScores);
            hrp.innerHTML = handReleaseScore;



            const plkscores = {
                85: 60,
                88: 61,
                92: 62,
                95: 63,
                98: 64,
                101: 65,
                105: 66,
                108: 67,
                111: 68,
                114: 69,
                118: 70,
                121: 71,
                124: 72,
                127: 73,
                130: 74,
                134: 75,
                137: 76,
                140: 77,
                143: 78,
                147: 79,
                150: 80,
                153: 81,
                157: 82,
                160: 83,
                163: 84,
                166: 85,
                170: 86,
                173: 87,
                176: 88,
                179: 89,
                183: 90,
                186: 91,
                189: 92,
                192: 93,
                196: 94,
                199: 95,
                202: 96,
                205: 97,
                209: 98,
                212: 99,
                215: 100,
            }

            var plankScore = getScore(Number(plankSlider.value), plkscores);
            plt.innerHTML = plankScore;

            const twomilescores = {
                1395: 60,
                1370: 61,
                1344: 62,
                1323: 63,
                1304: 64,
                1284: 65,
                1266: 66,
                1260: 67,
                1253: 68,
                1243: 69,
                1232: 70,
                1223: 71,
                1214: 72,
                1204: 73,
                1196: 74,
                1187: 75,
                1179: 76,
                1170: 77,
                1161: 78,
                1152: 79,
                1143: 80,
                1136: 81,
                1128: 82,
                1119: 83,
                1110: 84,
                1103: 85,
                1093: 86,
                1084: 87,
                1077: 88,
                1067: 89,
                1057: 90,
                1048: 91,
                1036: 92,
                1024: 93,
                1012: 94,
                999: 95,
                986: 96,
                969: 97,
                951: 98,
                930: 99,
                900: 100
            }
            for (const key in twomilescores) {
                twomilescores[key] *= -1;
            }

           var twomilescore2 = getScore(Number(twoMileRunSlider.value * -1), twomilescores);
            ts.innerHTML = Math.abs(twomilescore2);



        } else if (ageGroup == "27-31") {
            const deadliftScores = {
                120: 60,
                130: 64,
                140: 71,
                150: 79,
                160: 86,
                170: 89,
                180: 91,
                190: 94,
                200: 95,
                210: 98,
                220: 99,
                230: 100
            };
            var deadliftScore = getScore(Number(deadliftSlider.value), deadliftScores);
            deadliftscore2.innerHTML = deadliftScore;

            const standingPowerThrowScores = {
                4.2: 60,
                4.3: 60,
                4.4: 60,
                4.5: 61,
                4.6: 61,
                4.7: 62,
                4.8: 63,
                4.9: 64,
                5.0: 65,
                5.1: 67,
                5.2: 68,
                5.3: 70,
                5.4: 71,
                5.5: 72,
                5.6: 74,
                5.7: 76,
                5.8: 77,
                5.9: 79,
                6.0: 79,
                6.1: 80,
                6.2: 81,
                6.3: 83,
                6.4: 84,
                6.5: 86,
                6.6: 87,
                6.7: 88,
                6.8: 89,
                6.9: 90,
                7.0: 91,
                7.1: 92,
                7.2: 93,
                7.3: 94,
                7.4: 94,
                7.5: 95,
                7.6: 95,
                7.7: 96,
                7.8: 96,
                7.9: 96,
                8.0: 97,
                8.1: 97,
                8.2: 98,
                8.3: 98,
                8.4: 98,
                8.5: 99,
                8.6: 99,
                8.7: 100,
                // ... more ranges and scores
            };

            // To look up the score for a given value:
            var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
            spt.innerHTML = standingPowerThrowScore;
            const handReleasePushupScores = {
                10: 60,
                11: 63,
                12: 65,
                13: 68,
                14: 70,
                15: 72,
                16: 74,
                17: 76,
                18: 77,
                19: 78,
                20: 79,
                21: 80,
                22: 82,
                23: 83,
                24: 84,
                25: 86,
                26: 87,
                27: 88,
                28: 89,
                30: 90,
                32: 91,
                33: 92,
                34: 93,
                35: 94,
                36: 95,
                38: 96,
                39: 97,
                42: 98,
                45: 99,
                48: 100,
            };
            var handReleaseScore = getScore(Number(handReleasePushUpSlider.value), handReleasePushupScores);
            hrp.innerHTML = handReleaseScore;

            const sdcscores = {
                195: 60,
                187: 61,
                180: 62,
                179: 63,
                176: 64,
                174: 65,
                171: 66,
                169: 67,
                167: 68,
                165: 69,
                163: 70,
                161: 71,
                160: 72,
                158: 73,
                157: 74,
                156: 75,
                154: 76,
                152: 77,
                151: 78,
                150: 79,
                149: 80,
                148: 81,
                147: 82,
                146: 83,
                144: 84,
                143: 85,
                142: 86,
                140: 87,
                139: 88,
                138: 89,
                136: 90,
                135: 91,
                133: 92,
                132: 93,
                130: 94,
                128: 95,
                126: 96,
                124: 97,
                121: 98,
                117: 99,
                115: 100
            }
            for (const key in sdcscores) {
                sdcscores[key] *= -1;
            }

            var sdcScore = getScore(Number(sprintDragCarrySlider.value * -1), sdcscores);
            sdc.innerHTML = Math.abs(sdcScore);

            const plkscores = {
                80: 60,
                83: 61,
                86: 62,
                90: 63,
                93: 64,
                96: 65,
                99: 66,
                103: 67,
                106: 68,
                109: 69,
                112: 70,
                116: 71,
                119: 72,
                122: 73,
                126: 74,
                129: 75,
                132: 76,
                135: 77,
                138: 78,
                142: 79,
                145: 80,
                148: 81,
                151: 82,
                155: 83,
                158: 84,
                161: 85,
                165: 86,
                168: 87,
                171: 88,
                174: 89,
                178: 90,
                181: 91,
                184: 92,
                187: 93,
                191: 94,
                194: 95,
                197: 96,
                200: 97,
                204: 98,
                207: 99,
                210: 100
            }

            var plankScore = getScore(Number(plankSlider.value), plkscores);
            plt.innerHTML = plankScore;


            const twomilescores = {
                1393: 60,
                1366: 61,
                1338: 62,
                1316: 63,
                1294: 64,
                1275: 65,
                1260: 66,
                1256: 67,
                1245: 68,
                1236: 69,
                1225: 70,
                1216: 71,
                1207: 72,
                1199: 73,
                1190: 74,
                1182: 75,
                1173: 76,
                1165: 77,
                1156: 78,
                1148: 79,
                1140: 80,
                1134: 81,
                1126: 82,
                1117: 83,
                1110: 84,
                1101: 85,
                1092: 86,
                1082: 87,
                1075: 88,
                1066: 89,
                1055: 90,
                1047: 91,
                1037: 92,
                1025: 93,
                1014: 94,
                1000: 95,
                986: 96,
                970: 97,
                953: 98,
                930: 99,
                900: 100
            }
            for (const key in twomilescores) {
                twomilescores[key] *= -1;
            }

           var twomilescore2 = getScore(Number(twoMileRunSlider.value * -1), twomilescores);
            ts.innerHTML = Math.abs(twomilescore2);



        } else if (ageGroup == "32-36") {
            const deadliftScores = {
                120: 60,
                130: 64,
                140: 71,
                150: 79,
                160: 88,
                170: 91,
                180: 93,
                190: 95,
                200: 96,
                210: 98,
                220: 99,
                230: 100
            }
            var deadliftScore = getScore(Number(deadliftSlider.value), deadliftScores);
            deadliftscore2.innerHTML = deadliftScore;

            const standingPowerThrowScores = {
                4.1: 60,
                4.2: 60,
                4.3: 60,
                4.4: 61,
                4.5: 61,
                4.6: 61,
                4.7: 62,
                4.8: 63,
                4.9: 64,
                5.0: 65,
                5.1: 67,
                5.2: 68,
                5.3: 70,
                5.4: 71,
                5.5: 73,
                5.6: 74,
                5.7: 76,
                5.8: 78,
                5.9: 80,
                6.0: 81,
                6.1: 82,
                6.2: 83,
                6.3: 85,
                6.4: 87,
                6.5: 88,
                6.6: 88,
                6.7: 89,
                6.8: 90,
                6.9: 91,
                7.0: 92,
                7.1: 93,
                7.2: 93,
                7.3: 94,
                7.4: 95,
                7.5: 95,
                7.6: 96,
                7.7: 96,
                7.8: 97,
                7.9: 97,
                8.0: 98,
                8.1: 98,
                8.2: 98,
                8.3: 98,
                8.4: 99,
                8.5: 99,
                8.6: 100,
                // ... more ranges and scores
            };

            // To look up the score for a given value:
            var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
            spt.innerHTML = standingPowerThrowScore;

            const handReleasePushupScores = {
                10: 60,
                11: 64,
                12: 66,
                13: 70,
                14: 72,
                15: 73,
                16: 74,
                17: 75,
                18: 78,
                19: 80,
                22: 81,
                23: 83,
                24: 85,
                25: 87,
                26: 88,
                28: 89,
                30: 90,
                31: 91,
                32: 92,
                34: 93,
                35: 94,
                36: 95,
                37: 96,
                40: 97,
                43: 98,
                46: 99,
                47: 100,
            };
            var handReleaseScore = getScore(Number(handReleasePushUpSlider.value), handReleasePushupScores);
            hrp.innerHTML = handReleaseScore;


            const sdcscores = {
                202: 60,
                195: 61,
                186: 62,
                182: 63,
                180: 64,
                178: 65,
                175: 66,
                173: 67,
                171: 68,
                170: 69,
                167: 70,
                166: 71,
                165: 72,
                163: 73,
                161: 74,
                160: 75,
                159: 76,
                157: 77,
                156: 78,
                155: 79,
                154: 80,
                152: 81,
                151: 82,
                150: 83,
                148: 84,
                147: 85,
                146: 86,
                144: 87,
                143: 88,
                141: 89,
                140: 90,
                138: 91,
                137: 92,
                135: 93,
                134: 94,
                131: 95,
                130: 96,
                128: 97,
                125: 98,
                121: 99,
                119: 100,
            }
            for (const key in sdcscores) {
                sdcscores[key] *= -1;
            }

            var sdcScore = getScore(Number(sprintDragCarrySlider.value * -1), sdcscores);
            sdc.innerHTML = Math.abs(sdcScore);

            const plkscores = {
                75: 60,
                78: 61,
                82: 62,
                85: 63,
                88: 64,
                91: 65,
                95: 66,
                98: 67,
                101: 68,
                104: 69,
                107: 70,
                111: 71,
                114: 72,
                117: 73,
                120: 74,
                124: 75,
                127: 76,
                130: 77,
                133: 78,
                137: 79,
                140: 80,
                143: 81,
                147: 82,
                150: 83,
                153: 84,
                157: 85,
                160: 86,
                163: 87,
                166: 88,
                169: 89,
                173: 90,
                176: 91,
                179: 92,
                182: 93,
                186: 94,
                189: 95,
                192: 96,
                195: 97,
                199: 98,
                202: 99,
                205: 100,
            }

            var plankScore = getScore(Number(plankSlider.value), plkscores);
            plt.innerHTML = plankScore;


            const twomilescores = {
                1399: 60,
                1375: 61,
                1350: 62,
                1326: 63,
                1308: 64,
                1287: 65,
                1265: 66,
                1260: 67,
                1254: 68,
                1244: 69,
                1235: 70,
                1227: 71,
                1218: 72,
                1210: 73,
                1201: 74,
                1195: 75,
                1187: 76,
                1180: 77,
                1171: 78,
                1163: 79,
                1155: 80,
                1147: 81,
                1140: 82,
                1132: 83,
                1125: 84,
                1116: 85,
                1107: 86,
                1098: 87,
                1089: 88,
                1080: 89,
                1070: 90,
                1061: 91,
                1050: 92,
                1040: 93,
                1028: 94,
                1017: 95,
                1003: 96,
                988: 97,
                967: 98,
                946: 99,
                918: 100,
            }
            for (const key in twomilescores) {
                twomilescores[key] *= -1;
            }

           var twomilescore2 = getScore(Number(twoMileRunSlider.value * -1), twomilescores);
            ts.innerHTML = Math.abs(twomilescore2);



        } else if (ageGroup == "37-41") {
            const deadliftScores = {
                120: 60,
                130: 65,
                140: 71,
                150: 79,
                160: 90,
                170: 93,
                180: 95,
                190: 97,
                200: 99,
                210: 100
            };
            var deadliftScore = getScore(Number(deadliftSlider.value), deadliftScores);
            deadliftscore2.innerHTML = deadliftScore;

            const standingPowerThrowScores = {
                4.1: 60,
                4.2: 60,
                4.3: 60,
                4.4: 61,
                4.5: 62,
                4.6: 63,
                4.7: 64,
                4.8: 65,
                4.9: 67,
                5.0: 68,
                5.1: 69,
                5.2: 72,
                5.3: 73,
                5.4: 75,
                5.5: 76,
                5.6: 78,
                5.7: 80,
                5.8: 82,
                5.9: 83,
                6.0: 84,
                6.1: 86,
                6.2: 87,
                6.3: 88,
                6.4: 90,
                6.5: 91,
                6.6: 88,
                6.7: 93,
                6.8: 94,
                6.9: 94,
                7.0: 95,
                7.1: 95,
                7.2: 96,
                7.3: 97,
                7.4: 97,
                7.5: 98,
                7.6: 98,
                7.7: 98,
                7.8: 98,
                7.9: 98,
                8.0: 99,
                8.1: 99,
                8.2: 100,
                // ... more ranges and scores
            };

            // To look up the score for a given value:
            var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
            spt.innerHTML = standingPowerThrowScore;

            const handReleasePushupScores = {
                10: 60,
                11: 67,
                12: 72,
                13: 76,
                14: 78,
                15: 79,
                16: 80,
                17: 82,
                18: 83,
                19: 84,
                20: 86,
                21: 88,
                22: 90,
                23: 91,
                26: 92,
                27: 93,
                28: 94,
                31: 95,
                33: 96,
                34: 97,
                36: 98,
                39: 99,
                41: 100,
            };
            var handReleaseScore = getScore(Number(handReleasePushUpSlider.value), handReleasePushupScores);
            hrp.innerHTML = handReleaseScore;


            const sdcscores = {
                207: 60,
                201: 61,
                193: 62,
                189: 63,
                185: 64,
                182: 65,
                180: 66,
                178: 67,
                176: 68,
                175: 69,
                172: 70,
                170: 71,
                169: 72,
                167: 73,
                166: 74,
                165: 75,
                163: 76,
                162: 77,
                160: 78,
                159: 79,
                158: 80,
                156: 81,
                155: 82,
                154: 83,
                152: 84,
                151: 85,
                150: 86,
                149: 87,
                147: 88,
                146: 89,
                145: 90,
                143: 91,
                141: 92,
                140: 93,
                138: 94,
                135: 95,
                134: 96,
                131: 97,
                130: 98,
                124: 99,
                122: 100
            }
            for (const key in sdcscores) {
                sdcscores[key] *= -1;
            }

            var sdcScore = getScore(Number(sprintDragCarrySlider.value * -1), sdcscores);
            sdc.innerHTML = Math.abs(sdcScore);

            const plkscores = {
                70: 60,
                73: 61,
                76: 62,
                80: 63,
                83: 64,
                86: 65,
                90: 66,
                93: 67,
                96: 68,
                99: 69,
                102: 70,
                106: 71,
                109: 72,
                112: 73,
                116: 74,
                119: 75,
                122: 76,
                125: 77,
                128: 78,
                132: 79,
                135: 80,
                138: 81,
                142: 82,
                145: 83,
                148: 84,
                151: 85,
                155: 86,
                158: 87,
                161: 88,
                164: 89,
                168: 90,
                171: 91,
                174: 92,
                177: 93,
                181: 94,
                184: 95,
                187: 96,
                190: 97,
                194: 98,
                197: 99,
                200: 100,
            }

            var plankScore = getScore(Number(plankSlider.value), plkscores);
            plt.innerHTML = plankScore;


            const twomilescores = {
                1403: 60,
                1380: 61,
                1354: 62,
                1331: 63,
                1316: 64,
                1296: 65,
                1280: 66,
                1264: 67,
                1260: 68,
                1255: 69,
                1246: 70,
                1238: 71,
                1230: 72,
                1220: 73,
                1212: 74,
                1202: 75,
                1196: 76,
                1188: 77,
                1177: 78,
                1170: 79,
                1162: 80,
                1154: 81,
                1145: 82,
                1140: 83,
                1132: 84,
                1125: 85,
                1116: 86,
                1110: 87,
                1100: 88,
                1090: 89,
                1080: 90,
                1072: 91,
                1061: 92,
                1050: 93,
                1038: 94,
                1024: 95,
                1011: 96,
                996: 97,
                978: 98,
                956: 99,
                930: 100
            }
            for (const key in twomilescores) {
                twomilescores[key] *= -1;
            }

           var twomilescore2 = getScore(Number(twoMileRunSlider.value * -1), twomilescores);
            ts.innerHTML = Math.abs(twomilescore2);



        } else if (ageGroup == "42-46") {
            const deadliftScores = {
                120: 60,
                130: 65,
                140: 72,
                150: 79,
                160: 90,
                170: 95,
                180: 96,
                190: 98,
                200: 99,
                210: 100
            }
            var deadliftScore = getScore(Number(deadliftSlider.value), deadliftScores);
            deadliftscore2.innerHTML = deadliftScore;
            //To be continued
            const standingPowerThrowScores = {
                3.9: 60,
                4.0: 60,
                4.1: 60,
                4.2: 61,
                4.3: 61,
                4.4: 61,
                4.5: 62,
                4.6: 63,
                4.7: 65,
                4.8: 65,
                4.9: 66,
                5.0: 67,
                5.1: 68,
                5.2: 73,
                5.3: 74,
                5.4: 76,
                5.5: 77,
                5.6: 79,
                5.7: 80,
                5.8: 83,
                5.9: 84,
                6.0: 86,
                6.1: 87,
                6.2: 88,
                6.3: 89,
                6.4: 90,
                6.5: 91,
                6.6: 92,
                6.7: 93,
                6.8: 94,
                6.9: 95,
                7.0: 96,
                7.1: 96,
                7.2: 97,
                7.3: 97,
                7.4: 98,
                7.5: 98,
                7.6: 98,
                7.7: 98,
                7.8: 98,
                7.9: 99,
                8.0: 99,
                8.1: 100,
                // ... more ranges and scores
            };

            // To look up the score for a given value:
            var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
            spt.innerHTML = standingPowerThrowScore;

            const handReleasePushupScores = {
                10: 60,
                11: 67,
                12: 73,
                13: 79,
                14: 81,
                15: 83,
                16: 85,
                17: 86,
                18: 87,
                19: 88,
                20: 90,
                21: 91,
                22: 92,
                23: 93,
                24: 94,
                26: 95,
                28: 96,
                30: 97,
                31: 98,
                34: 99,
                36: 100
            };
            var handReleaseScore = getScore(Number(handReleasePushUpSlider.value), handReleasePushupScores);
            hrp.innerHTML = handReleaseScore;

            const sdcscores = {
                222: 60,
                211: 61,
                201: 62,
                197: 63,
                192: 64,
                190: 65,
                186: 66,
                182: 67,
                181: 68,
                180: 69,
                178: 70,
                176: 71,
                175: 72,
                173: 73,
                172: 74,
                170: 75,
                169: 76,
                167: 77,
                166: 78,
                165: 79,
                164: 80,
                162: 81,
                161: 82,
                160: 83,
                158: 84,
                157: 85,
                156: 86,
                155: 87,
                153: 88,
                151: 89,
                150: 90,
                148: 91,
                147: 92,
                145: 93,
                143: 94,
                140: 95,
                138: 96,
                137: 97,
                135: 98,
                130: 99,
                129: 100
            }
            for (const key in sdcscores) {
                sdcscores[key] *= -1;
            }

            var sdcScore = getScore(Number(sprintDragCarrySlider.value * -1), sdcscores);
            sdc.innerHTML = Math.abs(sdcScore);

            const plkscores = {
                70: 60,
                73: 61,
                76: 62,
                80: 63,
                83: 64,
                86: 65,
                90: 66,
                93: 67,
                96: 68,
                99: 69,
                102: 70,
                106: 71,
                109: 72,
                112: 73,
                116: 74,
                119: 75,
                122: 76,
                125: 77,
                128: 78,
                132: 79,
                135: 80,
                138: 81,
                142: 82,
                145: 83,
                148: 84,
                151: 85,
                155: 86,
                158: 87,
                161: 88,
                164: 89,
                168: 90,
                171: 91,
                174: 92,
                177: 93,
                181: 94,
                184: 95,
                187: 96,
                190: 97,
                194: 98,
                197: 99,
                200: 100,
            }

            var plankScore = getScore(Number(plankSlider.value), plkscores);
            plt.innerHTML = plankScore;


            const twomilescores = {
                1422: 60,
                1390: 61,
                1373: 62,
                1356: 63,
                1340: 64,
                1325: 65,
                1311: 66,
                1295: 67,
                1280: 68,
                1268: 69,
                1260: 70,
                1257: 71,
                1247: 72,
                1238: 73,
                1232: 74,
                1221: 75,
                1212: 76,
                1202: 77,
                1198: 78,
                1191: 79,
                1185: 80,
                1176: 81,
                1167: 82,
                1159: 83,
                1150: 84,
                1141: 85,
                1133: 86,
                1124: 87,
                1115: 88,
                1106: 89,
                1096: 90,
                1086: 91,
                1076: 92,
                1067: 93,
                1055: 94,
                1044: 95,
                1027: 96,
                1010: 97,
                995: 98,
                972: 99,
                949: 100,
            }
            for (const key in twomilescores) {
                twomilescores[key] *= -1;
            }

           var twomilescore2 = getScore(Number(twoMileRunSlider.value * -1), twomilescores);
            ts.innerHTML = Math.abs(twomilescore2);


        } else if (ageGroup == "47-51") {
            const deadliftScores = {
                120: 60,
                130: 67,
                140: 73,
                150: 79,
                160: 90,
                170: 97,
                180: 99,
                190: 100,
            };
            var deadliftScore = getScore(Number(deadliftSlider.value), deadliftScores);
            deadliftscore2.innerHTML = deadliftScore;
            const standingPowerThrowScores = {
                3.7: 60,
                3.8: 60,
                3.9: 60,
                4.0: 60,
                4.1: 61,
                4.2: 62,
                4.3: 62,
                4.4: 63,
                4.5: 64,
                4.6: 67,
                4.7: 68,
                4.8: 69,
                4.9: 71,
                5.0: 73,
                5.1: 75,
                5.2: 78,
                5.3: 80,
                5.4: 81,
                5.5: 83,
                5.6: 85,
                5.7: 86,
                5.8: 87,
                5.9: 89,
                6.0: 90,
                6.1: 91,
                6.2: 94,
                6.3: 94,
                6.4: 95,
                6.5: 96,
                6.6: 96,
                6.7: 96,
                6.8: 97,
                6.9: 97,
                7.0: 97,
                7.1: 98,
                7.2: 98,
                7.3: 98,
                7.4: 98,
                7.5: 98,
                7.6: 99,
                7.7: 99,
                7.8: 100,
                // ... more ranges and scores
            };

            // To look up the score for a given value:
            var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
            spt.innerHTML = standingPowerThrowScore;

            const handReleasePushupScores = {
                10: 60,
                11: 67,
                12: 74,
                13: 81,
                14: 83,
                15: 84,
                16: 85,
                17: 86,
                18: 88,
                19: 89,
                20: 90,
                21: 91,
                22: 92,
                23: 93,
                24: 94,
                25: 95,
                27: 96,
                30: 97,
                31: 98,
                34: 99,
                35: 100,
            };
            var handReleaseScore = getScore(Number(handReleasePushUpSlider.value), handReleasePushupScores);
            hrp.innerHTML = handReleaseScore;

            const sdcscores = {
                231: 60,
                222: 61,
                212: 62,
                209: 63,
                204: 64,
                201: 65,
                196: 66,
                194: 67,
                190: 68,
                188: 69,
                185: 70,
                182: 71,
                180: 72,
                179: 73,
                178: 74,
                177: 75,
                176: 76,
                174: 77,
                172: 78,
                171: 79,
                170: 80,
                168: 81,
                167: 82,
                166: 83,
                165: 84,
                164: 85,
                162: 86,
                161: 87,
                160: 88,
                158: 89,
                157: 90,
                155: 91,
                153: 92,
                151: 93,
                150: 94,
                148: 95,
                146: 96,
                144: 97,
                142: 98,
                133: 99,
                131: 100


            }
            for (const key in sdcscores) {
                sdcscores[key] *= -1;
            }

            var sdcScore = getScore(Number(sprintDragCarrySlider.value * -1), sdcscores);
            sdc.innerHTML = Math.abs(sdcScore);

            const plkscores = {
                70: 60,
                73: 61,
                76: 62,
                80: 63,
                83: 64,
                86: 65,
                90: 66,
                93: 67,
                96: 68,
                99: 69,
                102: 70,
                106: 71,
                109: 72,
                112: 73,
                116: 74,
                119: 75,
                122: 76,
                125: 77,
                128: 78,
                132: 79,
                135: 80,
                138: 81,
                142: 82,
                145: 83,
                148: 84,
                151: 85,
                155: 86,
                158: 87,
                161: 88,
                164: 89,
                168: 90,
                171: 91,
                174: 92,
                177: 93,
                181: 94,
                184: 95,
                187: 96,
                190: 97,
                194: 98,
                197: 99,
                200: 100,
            }

            var plankScore = getScore(Number(plankSlider.value), plkscores);
            plt.innerHTML = plankScore;




        } else if (ageGroup == "52-56") {
            const deadliftScores = {
                120: 60,
                130: 70,
                140: 80,
                150: 90,
                160: 97,
                170: 98,
                180: 99,
                190: 100
            };

            var deadliftScore = getScore(Number(deadliftSlider.value), deadliftScores);
            deadliftscore2.innerHTML = deadliftScore;
            const standingPowerThrowScores = {
                3.5: 60,
                3.6: 60,
                3.7: 60,
                3.8: 60,
                3.9: 61,
                4.0: 61,
                4.1: 62,
                4.2: 62,
                4.3: 65,
                4.4: 67,
                4.5: 68,
                4.6: 70,
                4.7: 72,
                4.8: 73,
                4.9: 75,
                5.0: 77,
                5.1: 79,
                5.2: 82,
                5.3: 83,
                5.4: 85,
                5.5: 87,
                5.6: 89,
                5.7: 91,
                5.8: 92,
                5.9: 93,
                6.0: 94,
                6.1: 95,
                6.2: 96,
                6.3: 96,
                6.4: 96,
                6.5: 97,
                6.6: 98,
                6.7: 98,
                6.8: 98,
                6.9: 98,
                7.0: 98,
                7.1: 99,
                7.2: 99,
                7.3: 99,
                7.4: 100,
                // ... more ranges and scores
            };

            // To look up the score for a given value:
            var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
            spt.innerHTML = standingPowerThrowScore;
            const handReleasePushupScores = {
                10: 60,
                11: 67,
                12: 74,
                13: 82,
                14: 85,
                15: 87,
                16: 88,
                17: 90,
                18: 91,
                19: 92,
                20: 93,
                22: 94,
                23: 95,
                24: 96,
                25: 97,
                26: 98,
                28: 99,
                30: 100,
            };
            var handReleaseScore = getScore(Number(handReleasePushUpSlider.value), handReleasePushupScores);
            hrp.innerHTML = handReleaseScore;


            const sdcscores = {
                243: 60,
                238: 61,
                230: 62,
                225: 63,
                222: 64,
                218: 65,
                213: 66,
                209: 67,
                207: 68,
                205: 69,
                199: 70,
                196: 71,
                193: 72,
                190: 73,
                189: 74,
                187: 75,
                185: 76,
                182: 77,
                180: 78,
                179: 79,
                178: 80,
                177: 81,
                175: 82,
                174: 83,
                172: 84,
                171: 85,
                170: 86,
                168: 87,
                166: 88,
                165: 89,
                164: 90,
                162: 91,
                161: 92,
                160: 93,
                158: 94,
                155: 95,
                152: 96,
                150: 97,
                148: 98,
                141: 99,
                138: 100
            }
            for (const key in sdcscores) {
                sdcscores[key] *= -1;
            }

            var sdcScore = getScore(Number(sprintDragCarrySlider.value * -1), sdcscores);
            sdc.innerHTML = Math.abs(sdcScore);

            const plkscores = {
                70: 60,
                73: 61,
                76: 62,
                80: 63,
                83: 64,
                86: 65,
                90: 66,
                93: 67,
                96: 68,
                99: 69,
                102: 70,
                106: 71,
                109: 72,
                112: 73,
                116: 74,
                119: 75,
                122: 76,
                125: 77,
                128: 78,
                132: 79,
                135: 80,
                138: 81,
                142: 82,
                145: 83,
                148: 84,
                151: 85,
                155: 86,
                158: 87,
                161: 88,
                164: 89,
                168: 90,
                171: 91,
                174: 92,
                177: 93,
                181: 94,
                184: 95,
                187: 96,
                190: 97,
                194: 98,
                197: 99,
                200: 100,
            }

            var plankScore = getScore(Number(plankSlider.value), plkscores);
            plt.innerHTML = plankScore;


            const twomilescores = {
                1464: 60,
                1424: 61,
                1384: 62,
                1372: 63,
                1363: 64,
                1353: 65,
                1343: 66,
                1329: 67,
                1319: 68,
                1303: 69,
                1300: 70,
                1292: 71,
                1275: 72,
                1263: 73,
                1250: 74,
                1244: 76,
                1243: 77,
                1238: 78,
                1231: 79,
                1222: 80,
                1217: 81,
                1207: 82,
                1202: 83,
                1198: 84,
                1185: 85,
                1176: 86,
                1169: 87,
                1154: 88,
                1142: 89,
                1133: 90,
                1120: 91,
                1110: 92,
                1100: 93,
                1093: 94,
                1080: 95,
                1070: 96,
                1058: 97,
                1042: 98,
                1021: 99,
                989: 100
            }
            for (const key in twomilescores) {
                twomilescores[key] *= -1;
            }

           var twomilescore2 = getScore(Number(twoMileRunSlider.value * -1), twomilescores);
            ts.innerHTML = Math.abs(twomilescore2);

        } else if (ageGroup == "57-61") {
            const deadliftScores = {
                120: 60,
                130: 71,
                140: 80,
                150: 90,
                160: 99,
                170: 100,
            };
            var deadliftScore = getScore(Number(deadliftSlider.value), deadliftScores);
            deadliftscore2.innerHTML = deadliftScore;
            const standingPowerThrowScores = {
                3.4: 60,
                3.5: 60,
                3.6: 61,
                3.7: 61,
                3.8: 62,
                3.9: 63,
                4.0: 64,
                4.1: 65,
                4.2: 66,
                4.3: 67,
                4.4: 68,
                4.5: 69,
                4.6: 71,
                4.7: 71,
                4.8: 72,
                4.9: 75,
                5.0: 77,
                5.1: 80,
                5.2: 84,
                5.3: 87,
                5.4: 89,
                5.5: 90,
                5.6: 91,
                5.7: 92,
                5.8: 93,
                5.9: 94,
                6.0: 95,
                6.1: 96,
                6.2: 97,
                6.3: 98,
                6.4: 99,
                6.5: 99,
                6.6: 100,
                // ... more ranges and scores
            };

            // To look up the score for a given value:
            var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
            spt.innerHTML = standingPowerThrowScore;
            const handReleasePushupScores = {
                10: 60,
                11: 67,
                12: 77,
                13: 84,
                14: 89,
                15: 90,
                16: 91,
                17: 92,
                18: 94,
                19: 95,
                20: 96,
                21: 97,
                22: 98,
                23: 99,
                24: 100
            };
            
            var handReleaseScore = getScore(Number(handReleasePushUpSlider.value), handReleasePushupScores);
            hrp.innerHTML = handReleaseScore;

            const sdcscores = {
                288: 60,
                261: 61,
                256: 62,
                248: 63,
                240: 64,
                234: 65,
                226: 66,
                223: 67,
                221: 68,
                220: 69,
                216: 70,
                215: 71,
                214: 72,
                212: 73,
                205: 74,
                201: 75,
                197: 76,
                191: 77,
                189: 78,
                188: 79,
                187: 80,
                184: 81,
                183: 82,
                182: 83,
                181: 84,
                180: 85,
                179: 86,
                178: 87,
                177: 88,
                175: 89,
                174: 90,
                172: 91,
                168: 92,
                166: 93,
                165: 94,
                164: 95,
                161: 96,
                159: 97,
                154: 98,
                148: 99,
                146: 100
            }
            for (const key in sdcscores) {
                sdcscores[key] *= -1;
            }

            var sdcScore = getScore(Number(sprintDragCarrySlider.value * -1), sdcscores);
            sdc.innerHTML = Math.abs(sdcScore);

            const plkscores = {
                70: 60,
                73: 61,
                76: 62,
                80: 63,
                83: 64,
                86: 65,
                90: 66,
                93: 67,
                96: 68,
                99: 69,
                102: 70,
                106: 71,
                109: 72,
                112: 73,
                116: 74,
                119: 75,
                122: 76,
                125: 77,
                128: 78,
                132: 79,
                135: 80,
                138: 81,
                142: 82,
                145: 83,
                148: 84,
                151: 85,
                155: 86,
                158: 87,
                161: 88,
                164: 89,
                168: 90,
                171: 91,
                174: 92,
                177: 93,
                181: 94,
                184: 95,
                187: 96,
                190: 97,
                194: 98,
                197: 99,
                200: 100,
            }

            var plankScore = getScore(Number(plankSlider.value), plkscores);
            plt.innerHTML = plankScore;


            const twomilescores = {
                1488: 60,
                1445: 61,
                1402: 62,
                1381: 63,
                1363: 64,
                1353: 65,
                1343: 66,
                1329: 67,
                1319: 68,
                1303: 69,
                1300: 70,
                1292: 71,
                1275: 72,
                1263: 73,
                1250: 74,
                1244: 76,
                1243: 77,
                1238: 78,
                1231: 79,
                1222: 80,
                1217: 81,
                1207: 82,
                1202: 83,
                1198: 84,
                1185: 85,
                1181: 86,
                1169: 87,
                1154: 88,
                1144: 89,
                1139: 90,
                1136: 91,
                1128: 92,
                1126: 93,
                1116: 94,
                1111: 95,
                1105: 96,
                1080: 97,
                1076: 98,
                1067: 99,
                1038: 100
            }
            for (const key in twomilescores) {
                twomilescores[key] *= -1;
            }

           var twomilescore2 = getScore(Number(twoMileRunSlider.value * -1), twomilescores);
            ts.innerHTML = Math.abs(twomilescore2);


        } else {
            const deadliftScores = {
                120: 60,
                130: 72,
                140: 80,
                150: 90,
                160: 99,
                170: 100,
            };
            var deadliftScore = getScore(Number(deadliftSlider.value), deadliftScores);
            deadliftscore2.innerHTML = deadliftScore;
            const standingPowerThrowScores = {
                3.4: 60,
                3.5: 60,
                3.6: 61,
                3.7: 61,
                3.8: 62,
                3.9: 63,
                4.0: 64,
                4.1: 65,
                4.2: 66,
                4.3: 67,
                4.4: 68,
                4.5: 69,
                4.6: 71,
                4.7: 71,
                4.8: 72,
                4.9: 75,
                5.0: 77,
                5.1: 80,
                5.2: 84,
                5.3: 87,
                5.4: 89,
                5.5: 90,
                5.6: 91,
                5.7: 92,
                5.8: 93,
                5.9: 94,
                6.0: 95,
                6.1: 96,
                6.2: 97,
                6.3: 98,
                6.4: 99,
                6.5: 99,
                6.6: 100,
                // ... more ranges and scores
            };

            // To look up the score for a given value:
            var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
            spt.innerHTML = standingPowerThrowScore;
            const handReleasePushupScores = {
                10: 60,
                11: 69,
                12: 79,
                13: 86,
                14: 89,
                15: 90,
                16: 91,
                17: 92,
                18: 94,
                19: 95,
                20: 96,
                21: 97,
                22: 98,
                23: 99,
                24: 100
            };
            var handReleaseScore = getScore(Number(handReleasePushUpSlider.value), handReleasePushupScores);
            hrp.innerHTML = handReleaseScore;


            const sdcscores = {
                288: 60,
                261: 61,
                256: 62,
                248: 63,
                240: 64,
                234: 65,
                226: 66,
                223: 67,
                221: 68,
                220: 69,
                216: 70,
                215: 71,
                214: 72,
                212: 73,
                205: 74,
                201: 75,
                197: 76,
                191: 77,
                189: 78,
                188: 79,
                187: 80,
                184: 81,
                183: 82,
                182: 83,
                181: 84,
                180: 85,
                179: 86,
                178: 87,
                177: 88,
                175: 89,
                174: 90,
                172: 91,
                168: 92,
                166: 93,
                165: 94,
                164: 95,
                161: 96,
                159: 97,
                154: 98,
                148: 99,
                146: 100
            }
            for (const key in sdcscores) {
                sdcscores[key] *= -1;
            }

            var sdcScore = getScore(Number(sprintDragCarrySlider.value * -1), sdcscores);
            sdc.innerHTML = Math.abs(sdcScore);

            const plkscores = {
                70: 60,
                73: 61,
                76: 62,
                80: 63,
                83: 64,
                86: 65,
                90: 66,
                93: 67,
                96: 68,
                99: 69,
                102: 70,
                106: 71,
                109: 72,
                112: 73,
                116: 74,
                119: 75,
                122: 76,
                125: 77,
                128: 78,
                132: 79,
                135: 80,
                138: 81,
                142: 82,
                145: 83,
                148: 84,
                151: 85,
                155: 86,
                158: 87,
                161: 88,
                164: 89,
                168: 90,
                171: 91,
                174: 92,
                177: 93,
                181: 94,
                184: 95,
                187: 96,
                190: 97,
                194: 98,
                197: 99,
                200: 100,
            }

            var plankScore = getScore(Number(plankSlider.value), plkscores);
            plt.innerHTML = plankScore;


            const twomilescores = {
                1500: 60,
                1451: 61,
                1402: 62,
                1384: 63,
                1370: 64,
                1364: 65,
                1351: 66,
                1335: 67,
                1322: 68,
                1303: 69,
                1300: 70,
                1292: 71,
                1275: 72,
                1263: 73,
                1250: 74,
                1244: 76,
                1243: 77,
                1238: 78,
                1231: 79,
                1222: 80,
                1217: 81,
                1207: 82,
                1202: 83,
                1198: 84,
                1185: 85,
                1181: 86,
                1169: 87,
                1154: 88,
                1144: 89,
                1139: 90,
                1136: 91,
                1128: 92,
                1126: 93,
                1116: 94,
                1111: 95,
                1105: 96,
                1080: 97,
                1076: 98,
                1067: 99,
                1038: 100,
            }
            for (const key in twomilescores) {
                twomilescores[key] *= -1;
            }

           var twomilescore2 = getScore(Number(twoMileRunSlider.value * -1), twomilescores);
            ts.innerHTML = Math.abs(twomilescore2);

        }
    } 
       
        if (gender == "male") {
            if (ageGroup == "17-21") {
                const deadliftScores = {
                    140: 60,
                    150: 61,
                    160: 64,
                    170: 67,
                    180: 68,
                    190: 69,
                    200: 72,
                    210: 74,
                    220: 77,
                    230: 79,
                    240: 82,
                    250: 83,
                    260: 84,
                    270: 87,
                    280: 90,
                    290: 91,
                    300: 93,
                    310: 95,
                    330: 97,
                    340: 100
                };
                var deadliftScore = getScore(Number(deadliftSlider.value), deadliftScores);
                deadliftscore2.innerHTML = deadliftScore;
                const standingPowerThrowScores = {
                    6: 60,
                    6.6: 61,
                    6.9: 62,
                    7.2: 63,
                    7.4: 64,
                    7.5: 65,
                    7.7: 66,
                    7.9: 67,
                    8: 68,
                    8.1: 69,
                    8.2: 70,
                    8.3: 71,
                    8.4: 72,
                    8.5: 73,
                    8.6: 74,
                    8.8: 75,
                    8.9: 76,
                    9.0: 77,
                    9.1: 78,
                    9.2: 79,
                    9.3: 80,
                    9.4: 81,
                    9.5: 82,
                    9.6: 83,
                    9.7: 84,
                    9.8: 85,
                    9.9: 86,
                    10.0: 87,
                    10.3: 88,
                    10.4: 89,
                    10.5: 90,
                    10.6: 91,
                    10.7: 92,
                    10.9: 93,
                    11.0: 94,
                    11.3: 95,
                    11.5: 96,
                    11.7: 97,
                    12.0: 98,
                    12.4: 99,
                    12.6: 100
                };


                var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
                spt.innerHTML = standingPowerThrowScore;
                const handReleasePushupScores = {
                    10: 60,
                    13: 61,
                    16: 62,
                    17: 63,
                    20: 64,
                    22: 65,
                    23: 66,
                    24: 67,
                    25: 68,
                    27: 69,
                    28: 70,
                    29: 71,
                    30: 72,
                    31: 73,
                    32: 75,
                    33: 76,
                    34: 77,
                    35: 78,
                    36: 79,
                    37: 80,
                    38: 82,
                    39: 83,
                    40: 84,
                    41: 86,
                    42: 87,
                    43: 88,
                    44: 89,
                    45: 90,
                    46: 91,
                    47: 92,
                    48: 93,
                    49: 94,
                    50: 95,
                    51: 96,
                    53: 97,
                    54: 98,
                    56: 99,
                    57: 100

                };
                var handReleaseScore = getScore(Number(handReleasePushUpSlider.value), handReleasePushupScores);
                hrp.innerHTML = handReleaseScore;


                const sdcscores = {
                    148: 60,
                    142: 61,
                    137: 62,
                    135: 63,
                    133: 64,
                    131: 65,
                    128: 66,
                    127: 67,
                    126: 68,
                    124: 69,
                    123: 70,
                    122: 71,
                    121: 72,
                    120: 73,
                    119: 74,
                    118: 75,
                    117: 76,
                    116: 77,
                    115: 78,
                    114: 79,
                    113: 80,
                    112: 81,
                    111: 82,
                    110: 83,
                    109: 84,
                    108: 85,
                    107: 86,
                    106: 87,
                    105: 88,
                    104: 89,
                    103: 90,
                    102: 91,
                    101: 92,
                    100: 93,
                    99: 94,
                    97: 95,
                    96: 96,
                    95: 97,
                    94: 98,
                    91: 99,
                    89: 100
                }
                for (const key in sdcscores) {
                    sdcscores[key] *= -1;
                }

                var sdcScore = getScore(Number(sprintDragCarrySlider.value * -1), sdcscores);
            
                sdc.innerHTML = Math.abs(sdcScore);

                const plkscores = {
                    90: 60,
                    93: 61,
                    97: 62,
                    100: 63,
                    103: 64,
                    106: 65,
                    109: 66,
                    113: 67,
                    116: 68,
                    119: 69,
                    122: 70,
                    126: 71,
                    129: 72,
                    132: 73,
                    135: 74,
                    139: 75,
                    142: 76,
                    145: 77,
                    149: 78,
                    152: 79,
                    155: 80,
                    158: 81,
                    161: 82,
                    165: 83,
                    168: 84,
                    171: 85,
                    175: 86,
                    178: 87,
                    181: 88,
                    184: 89,
                    188: 90,
                    191: 91,
                    194: 92,
                    197: 93,
                    201: 94,
                    204: 95,
                    207: 96,
                    210: 97,
                    214: 98,
                    217: 99,
                    220: 100
                }

                var plankScore = getScore(Number(plankSlider.value), plkscores);
                plt.innerHTML = plankScore;

                const twomilescores = {
                    1320: 60,
                    1263: 61,
                    1242: 62,
                    1219: 63,
                    1200: 64,
                    1183: 65,
                    1167: 66,
                    1152: 67,
                    1140: 68,
                    1127: 69,
                    1115: 70,
                    1103: 71,
                    1092: 72,
                    1081: 73,
                    1072: 74,
                    1063: 75,
                    1053: 76,
                    1044: 77,
                    1035: 78,
                    1025: 79,
                    1017: 80,
                    1008: 81,
                    999: 82,
                    990: 83,
                    982: 84,
                    974: 85,
                    965: 86,
                    957: 87,
                    948: 88,
                    939: 89,
                    930: 90,
                    920: 91,
                    911: 92,
                    900: 93,
                    891: 94,
                    880: 95,
                    868: 96,
                    855: 97,
                    840: 98,
                    822: 99,
                    802: 100
                }
                for (const key in twomilescores) {
                    twomilescores[key] *= -1;
                }

                var twomilescore2 = getScore(Number(twoMileRunSlider.value * -1), twomilescores);
                ts.innerHTML = Math.abs(twomilescore2);



            } else if (ageGroup == "22-26") {
                const deadliftScores = {
                    140: 60,
                    150: 61,
                    160: 65,
                    170: 67,
                    180: 69,
                    190: 70,
                    200: 71,
                    210: 73,
                    220: 75,
                    230: 77,
                    240: 79,
                    250: 81,
                    260: 84,
                    270: 86,
                    280: 88,
                    290: 89,
                    310: 90,
                    320: 92,
                    330: 99,
                    340: 100
                };
                var deadliftScore = getScore(Number(deadliftSlider.value), deadliftScores);
                deadliftscore2.innerHTML = deadliftScore;
                const standingPowerThrowScores = {
                    6.3: 60,
                    6.9: 61,
                    7.3: 62,
                    7.5: 63,
                    7.7: 64,
                    7.8: 65,
                    8.1: 66,
                    8.2: 67,
                    8.3: 68,
                    8.5: 69,
                    8.6: 70,
                    8.8: 71,
                    8.9: 72,
                    9: 73,
                    9.1: 74,
                    9.2: 75,
                    9.3: 76,
                    9.4: 77,
                    9.5: 78,
                    9.6: 79,
                    9.7: 80,
                    9.8: 81,
                    9.9: 82,
                    10: 83,
                    10.1: 84,
                    10.2: 85,
                    10.3: 86,
                    10.4: 87,
                    10.6: 88,
                    10.7: 89,
                    11: 90,
                    11.1: 91,
                    11.3: 92,
                    11.4: 93,
                    11.5: 94,
                    11.8: 95,
                    12: 96,
                    12.2: 97,
                    12.5: 98,
                    12.9: 99,
                    13: 100

                };


                var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
                spt.innerHTML = standingPowerThrowScore;

                const handReleasePushupScores = {
                    10: 60,
                    12: 61,
                    13: 62,
                    14: 63,
                    16: 64,
                    17: 65,
                    20: 66,
                    21: 68,
                    22: 69,
                    25: 70,
                    26: 71,
                    27: 72,
                    30: 73,
                    31: 76,
                    32: 77,
                    33: 78,
                    34: 79,
                    35: 80,
                    37: 82,
                    38: 83,
                    40: 84,
                    41: 85,
                    42: 86,
                    43: 87,
                    44: 88,
                    45: 89,
                    46: 90,
                    47: 91,
                    48: 92,
                    49: 93,
                    50: 94,
                    52: 95,
                    53: 96,
                    54: 97,
                    57: 98,
                    60: 99,
                    61: 100
                };
                var handReleaseScore = getScore(Number(handReleasePushUpSlider.value), handReleasePushupScores);
                hrp.innerHTML = handReleaseScore;


                const sdcscores = {
                    151: 60,
                    146: 61,
                    141: 62,
                    138: 63,
                    136: 64,
                    134: 65,
                    131: 66,
                    130: 67,
                    128: 68,
                    127: 69,
                    125: 70,
                    123: 71,
                    122: 72,
                    121: 73,
                    120: 74,
                    119: 75,
                    118: 76,
                    116: 77,
                    115: 78,
                    114: 79,
                    113: 80,
                    112: 81,
                    111: 82,
                    110: 83,
                    109: 84,
                    108: 85,
                    107: 86,
                    106: 87,
                    105: 88,
                    104: 89,
                    103: 90,
                    102: 91,
                    101: 92,
                    100: 93,
                    99: 94,
                    97: 95,
                    96: 96,
                    94: 97,
                    93: 98,
                    92: 99,
                    90: 100
                }
                for (const key in sdcscores) {
                    sdcscores[key] *= -1;
                }

                var sdcScore = getScore(Number(sprintDragCarrySlider.value * -1), sdcscores);
            
                sdc.innerHTML = Math.abs(sdcScore);

                const plkscores = {
                    85: 60,
                    88: 61,
                    92: 62,
                    95: 63,
                    98: 64,
                    101: 65,
                    105: 66,
                    108: 67,
                    111: 68,
                    114: 69,
                    118: 70,
                    121: 71,
                    124: 72,
                    127: 73,
                    130: 74,
                    134: 75,
                    137: 76,
                    140: 77,
                    143: 78,
                    147: 79,
                    150: 80,
                    153: 81,
                    157: 82,
                    160: 83,
                    163: 84,
                    166: 85,
                    170: 86,
                    173: 87,
                    176: 88,
                    179: 89,
                    183: 90,
                    186: 91,
                    189: 92,
                    192: 93,
                    196: 94,
                    199: 95,
                    202: 96,
                    205: 97,
                    209: 98,
                    212: 99,
                    215: 100
                }

                var plankScore = getScore(Number(plankSlider.value), plkscores);
                plt.innerHTML = plankScore;

                const twomilescores = {
                    1320: 60,
                    1274: 61,
                    1252: 62,
                    1230: 63,
                    1212: 64,
                    1196: 65,
                    1180: 66,
                    1166: 67,
                    1153: 68,
                    1140: 69,
                    1130: 70,
                    1118: 71,
                    1108: 72,
                    1097: 73,
                    1087: 74,
                    1079: 75,
                    1069: 76,
                    1060: 77,
                    1050: 78,
                    1042: 79,
                    1033: 80,
                    1024: 81,
                    1015: 82,
                    1006: 83,
                    997: 84,
                    989: 85,
                    980: 86,
                    970: 87,
                    961: 88,
                    953: 89,
                    943: 90,
                    932: 91,
                    923: 92,
                    913: 93,
                    901: 94,
                    890: 95,
                    878: 96,
                    865: 97,
                    848: 98,
                    830: 99,
                    807: 100
                }
                for (const key in twomilescores) {
                    twomilescores[key] *= -1;
                }

                var twomilescore2 = getScore(Number(twoMileRunSlider.value * -1), twomilescores);
                ts.innerHTML = Math.abs(twomilescore2);
            } else if (ageGroup == "27-31") {
                const deadliftScores = {
                    140: 60,
                    150: 63,
                    160: 65,
                    170: 68,
                    180: 69,
                    190: 70,
                    200: 71,
                    210: 73,
                    220: 75,
                    230: 77,
                    240: 79,
                    250: 81,
                    260: 84,
                    270: 85,
                    280: 87,
                    290: 88,
                    300: 89,
                    310: 90,
                    320: 91,
                    330: 99,
                    340: 100
                };
                var deadliftScore = getScore(Number(deadliftSlider.value), deadliftScores);
                deadliftscore2.innerHTML = deadliftScore;
                const standingPowerThrowScores = {
                    6.5: 60,
                    7.1: 61,
                    7.5: 62,
                    7.7: 63,
                    7.9: 64,
                    8.1: 65,
                    8.3: 66,
                    8.4: 67,
                    8.5: 68,
                    8.6: 69,
                    8.8: 70,
                    8.9: 71,
                    9: 72,
                    9.2: 73,
                    9.3: 75,
                    9.4: 76,
                    9.6: 77,
                    9.7: 78,
                    9.8: 80,
                    10: 81,
                    10.1: 82,
                    10.2: 83,
                    10.4: 84,
                    10.5: 85,
                    10.6: 86,
                    10.7: 87,
                    10.9: 88,
                    11: 89,
                    11.1: 90,
                    11.3: 91,
                    11.4: 92,
                    11.6: 93,
                    11.7: 94,
                    12: 95,
                    12.2: 96,
                    12.4: 97,
                    12.6: 98,
                    12.9: 99,
                    13.1: 100
                };


                var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
                spt.innerHTML = standingPowerThrowScore;
                const handReleasePushupScores = {
                    10: 60,
                    11: 61,
                    12: 62,
                    14: 63,
                    16: 64,
                    18: 65,
                    20: 66,
                    21: 69,
                    23: 70,
                    26: 71,
                    27: 72,
                    29: 73,
                    30: 74,
                    31: 75,
                    32: 77,
                    33: 78,
                    34: 79,
                    35: 80,
                    36: 81,
                    37: 82,
                    38: 83,
                    40: 84,
                    41: 85,
                    42: 86,
                    43: 87,
                    44: 88,
                    45: 89,
                    46: 90,
                    47: 91,
                    48: 92,
                    49: 93,
                    51: 94,
                    52: 95,
                    53: 96,
                    55: 97,
                    56: 98,
                    59: 99,
                    62: 100

                };
                var handReleaseScore = getScore(Number(handReleasePushUpSlider.value), handReleasePushupScores);
                hrp.innerHTML = handReleaseScore;


                const sdcscores = {
                    152: 60,
                    148: 61,
                    142: 62,
                    140: 63,
                    137: 64,
                    135: 65,
                    133: 66,
                    131: 67,
                    130: 68,
                    128: 69,
                    126: 70,
                    125: 71,
                    124: 72,
                    122: 73,
                    121: 74,
                    120: 75,
                    119: 76,
                    118: 77,
                    117: 78,
                    116: 79,
                    115: 80,
                    114: 81,
                    113: 82,
                    112: 83,
                    111: 84,
                    110: 85,
                    109: 86,
                    108: 87,
                    107: 88,
                    106: 89,
                    105: 90,
                    103: 91,
                    102: 92,
                    101: 93,
                    100: 94,
                    98: 95,
                    97: 96,
                    95: 97,
                    94: 98,
                    91: 99,
                    90: 100
                }
                for (const key in sdcscores) {
                    sdcscores[key] *= -1;
                }

                var sdcScore = getScore(Number(sprintDragCarrySlider.value * -1), sdcscores);
            
                sdc.innerHTML = Math.abs(sdcScore);
                const plkscores = {
                    80: 60,
                    83: 61,
                    86: 62,
                    90: 63,
                    93: 64,
                    96: 65,
                    99: 66,
                    103: 67,
                    106: 68,
                    109: 69,
                    112: 70,
                    116: 71,
                    119: 72,
                    122: 73,
                    126: 74,
                    129: 75,
                    132: 76,
                    135: 77,
                    138: 78,
                    142: 79,
                    145: 80,
                    148: 81,
                    151: 82,
                    155: 83,
                    158: 84,
                    161: 85,
                    165: 86,
                    168: 87,
                    171: 88,
                    174: 89,
                    178: 90,
                    181: 91,
                    184: 92,
                    187: 93,
                    191: 94,
                    194: 95,
                    197: 96,
                    200: 97,
                    204: 98,
                    207: 99,
                    210: 100

                }

                var plankScore = getScore(Number(plankSlider.value), plkscores);
                plt.innerHTML = plankScore;

                const twomilescores = {
                    1320: 60,
                    1260: 61,
                    1246: 62,
                    1225: 63,
                    1206: 64,
                    1191: 65,
                    1176: 66,
                    1162: 67,
                    1149: 68,
                    1138: 69,
                    1126: 70,
                    1115: 71,
                    1105: 72,
                    1095: 73,
                    1085: 74,
                    1078: 75,
                    1070: 76,
                    1061: 77,
                    1051: 78,
                    1043: 79,
                    1034: 80,
                    1025: 81,
                    1018: 82,
                    1009: 83,
                    1001: 84,
                    992: 85,
                    984: 86,
                    975: 87,
                    965: 88,
                    958: 89,
                    948: 90,
                    939: 91,
                    930: 92,
                    919: 93,
                    907: 94,
                    897: 95,
                    885: 96,
                    871: 97,
                    855: 98,
                    838: 99,
                    811: 100
                }
                for (const key in twomilescores) {
                    twomilescores[key] *= -1;
                }

                var twomilescore2 = getScore(Number(twoMileRunSlider.value * -1), twomilescores);
                ts.innerHTML = Math.abs(twomilescore2);
            } else if (ageGroup == "32-36") {
                const deadliftScores = {
                    140: 60,
                    150: 66,
                    160: 68,
                    170: 69,
                    180: 70,
                    190: 71,
                    200: 73,
                    210: 75,
                    220: 77,
                    230: 79,
                    240: 81,
                    250: 83,
                    260: 85,
                    270: 87,
                    280: 88,
                    290: 89,
                    300: 90,
                    310: 91,
                    320: 93,
                    330: 99,
                    340: 100
                };
                var deadliftScore = getScore(Number(deadliftSlider.value), deadliftScores);
                deadliftscore2.innerHTML = deadliftScore;
                const standingPowerThrowScores = {
                    6.5: 60,
                    7.1: 61,
                    7.4: 62,
                    7.6: 63,
                    7.9: 64,
                    8.1: 65,
                    8.2: 66,
                    8.3: 67,
                    8.5: 68,
                    8.6: 69,
                    8.7: 70,
                    8.8: 71,
                    8.9: 72,
                    9.1: 73,
                    9.2: 74,
                    9.3: 75,
                    9.4: 76,
                    9.5: 77,
                    9.6: 78,
                    9.7: 79,
                    9.8: 80,
                    9.9: 81,
                    10: 82,
                    10.1: 83,
                    10.2: 84,
                    10.3: 85,
                    10.4: 86,
                    10.5: 87,
                    10.7: 88,
                    10.8: 89,
                    11: 90,
                    11.2: 91,
                    11.3: 92,
                    11.4: 93,
                    11.6: 94,
                    11.8: 95,
                    12: 96,
                    12.2: 97,
                    12.4: 98,
                    12.6: 99,
                    12.9: 100

                };


                var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
                spt.innerHTML = standingPowerThrowScore;
                const handReleasePushupScores = {
                    10: 60,
                    11: 61,
                    12: 62,
                    13: 63,
                    14: 64,
                    16: 65,
                    17: 66,
                    19: 67,
                    20: 68,
                    21: 69,
                    22: 70,
                    23: 71,
                    24: 72,
                    26: 73,
                    28: 74,
                    29: 75,
                    30: 76,
                    31: 77,
                    32: 79,
                    33: 81,
                    34: 82,
                    36: 83,
                    38: 84,
                    39: 85,
                    40: 86,
                    41: 87,
                    42: 88,
                    43: 89,
                    44: 90,
                    45: 91,
                    47: 92,
                    48: 93,
                    50: 94,
                    52: 95,
                    53: 96,
                    54: 97,
                    56: 98,
                    59: 99,
                    60: 100
                };
                var handReleaseScore = getScore(Number(handReleasePushUpSlider.value), handReleasePushupScores);
                hrp.innerHTML = handReleaseScore;


                const sdcscores = {
                    156: 60,
                    151: 61,
                    146: 62,
                    144: 63,
                    141: 64,
                    139: 65,
                    136: 66,
                    135: 67,
                    133: 68,
                    131: 69,
                    130: 70,
                    128: 71,
                    127: 72,
                    125: 73,
                    124: 74,
                    123: 75,
                    122: 76,
                    121: 77,
                    120: 78,
                    119: 79,
                    118: 80,
                    117: 81,
                    116: 82,
                    115: 83,
                    114: 84,
                    113: 85,
                    112: 86,
                    111: 87,
                    110: 88,
                    109: 89,
                    108: 90,
                    106: 91,
                    105: 92,
                    104: 93,
                    103: 94,
                    101: 95,
                    100: 96,
                    98: 97,
                    97: 98,
                    94: 99,
                    93: 100
                }
                for (const key in sdcscores) {
                    sdcscores[key] *= -1;
                }

                var sdcScore = getScore(Number(sprintDragCarrySlider.value * -1), sdcscores);
            
                sdc.innerHTML = Math.abs(sdcScore);

                const plkscores = {
                    75: 60,
                    78: 61,
                    82: 62,
                    85: 63,
                    88: 64,
                    91: 65,
                    95: 66,
                    98: 67,
                    101: 68,
                    104: 69,
                    107: 70,
                    111: 71,
                    114: 72,
                    117: 73,
                    120: 74,
                    124: 75,
                    127: 76,
                    130: 77,
                    133: 78,
                    137: 79,
                    140: 80,
                    143: 81,
                    147: 82,
                    150: 83,
                    153: 84,
                    156: 85,
                    160: 86,
                    163: 87,
                    166: 88,
                    169: 89,
                    173: 90,
                    176: 91,
                    179: 92,
                    182: 93,
                    186: 94,
                    189: 95,
                    192: 96,
                    195: 97,
                    199: 98,
                    202: 99,
                    205: 100
                }

                var plankScore = getScore(Number(plankSlider.value), plkscores);
                plt.innerHTML = plankScore;

                const twomilescores = {
                    1320: 60,
                    1261: 61,
                    1249: 62,
                    1229: 63,
                    1211: 64,
                    1196: 65,
                    1181: 66,
                    1168: 67,
                    1156: 68,
                    1143: 69,
                    1133: 70,
                    1123: 71,
                    1113: 72,
                    1103: 73,
                    1092: 74,
                    1083: 75,
                    1076: 76,
                    1068: 77,
                    1060: 78,
                    1051: 79,
                    1043: 80,
                    1035: 81,
                    1025: 82,
                    1018: 83,
                    1009: 84,
                    1001: 85,
                    992: 86,
                    985: 87,
                    976: 88,
                    967: 89,
                    958: 90,
                    949: 91,
                    939: 92,
                    930: 93,
                    918: 94,
                    906: 95,
                    894: 96,
                    880: 97,
                    865: 98,
                    846: 99,
                    822: 100
                }
                for (const key in twomilescores) {
                    twomilescores[key] *= -1;
                }

                var twomilescore2 = getScore(Number(twoMileRunSlider.value * -1), twomilescores);
                ts.innerHTML = Math.abs(twomilescore2);
            } else if (ageGroup == "37-41") {
                const deadliftScores = {
                    140: 60,
                    150: 66,
                    160: 68,
                    170: 69,
                    180: 70,
                    190: 71,
                    200: 73,
                    210: 75,
                    220: 77,
                    230: 79,
                    240: 81,
                    250: 83,
                    260: 85,
                    270: 87,
                    280: 88,
                    290: 89,
                    300: 90,
                    310: 91,
                    320: 93,
                    330: 99,
                    340: 100
                };

                var deadliftScore = getScore(Number(deadliftSlider.value), deadliftScores);
                deadliftscore2.innerHTML = deadliftScore;
                const standingPowerThrowScores = {
                    6.4: 60,
                    7: 61,
                    7.3: 62,
                    7.5: 63,
                    7.7: 64,
                    7.8: 65,
                    8.1: 66,
                    8.2: 67,
                    8.3: 68,
                    8.5: 69,
                    8.6: 70,
                    8.7: 71,
                    8.8: 72,
                    8.9: 73,
                    9: 74,
                    9.1: 75,
                    9.2: 76,
                    9.3: 77,
                    9.4: 78,
                    9.5: 79,
                    9.6: 80,
                    9.7: 81,
                    9.8: 82,
                    9.9: 83,
                    10.1: 84,
                    10.2: 85,
                    10.3: 86,
                    10.4: 87,
                    10.5: 88,
                    10.6: 89,
                    10.7: 90,
                    10.9: 91,
                    11.1: 92,
                    11.2: 93,
                    11.4: 94,
                    11.6: 95,
                    11.8: 96,
                    12: 97,
                    12.2: 98,
                    12.6: 99,
                    12.8: 100

                };


                var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
                spt.innerHTML = standingPowerThrowScore;
                const handReleasePushupScores = {
                    10: 60,
                    11: 61,
                    12: 63,
                    13: 64,
                    14: 65,
                    15: 66,
                    16: 67,
                    17: 68,
                    19: 69,
                    20: 70,
                    21: 71,
                    22: 72,
                    23: 73,
                    24: 74,
                    25: 75,
                    26: 76,
                    27: 77,
                    28: 78,
                    29: 79,
                    30: 80,
                    31: 81,
                    32: 83,
                    33: 84,
                    34: 85,
                    37: 86,
                    38: 87,
                    39: 88,
                    41: 89,
                    42: 90,
                    43: 91,
                    44: 92,
                    45: 93,
                    46: 94,
                    48: 95,
                    51: 96,
                    53: 97,
                    54: 98,
                    57: 99,
                    59: 100
                };
                var handReleaseScore = getScore(Number(handReleasePushUpSlider.value), handReleasePushupScores);
                hrp.innerHTML = handReleaseScore;


                const sdcscores = {
                    161: 60,
                    156: 61,
                    151: 62,
                    148: 63,
                    146: 64,
                    144: 65,
                    141: 66,
                    140: 67,
                    138: 68,
                    136: 69,
                    134: 70,
                    133: 71,
                    132: 72,
                    130: 73,
                    129: 74,
                    128: 75,
                    127: 76,
                    125: 77,
                    124: 78,
                    123: 79,
                    122: 80,
                    121: 81,
                    120: 82,
                    119: 83,
                    118: 84,
                    117: 85,
                    116: 86,
                    115: 87,
                    114: 88,
                    113: 89,
                    112: 90,
                    110: 91,
                    109: 92,
                    108: 93,
                    107: 94,
                    105: 95,
                    103: 96,
                    102: 97,
                    100: 98,
                    97: 99,
                    96: 100
                }
                for (const key in sdcscores) {
                    sdcscores[key] *= -1;
                }

                var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
                spt.innerHTML = standingPowerThrowScore;

                const plkscores = {
                    70: 60,
                    73: 61,
                    76: 62,
                    80: 63,
                    83: 64,
                    86: 65,
                    90: 66,
                    93: 67,
                    96: 68,
                    99: 69,
                    102: 70,
                    106: 71,
                    109: 72,
                    112: 73,
                    116: 74,
                    119: 75,
                    122: 76,
                    125: 77,
                    128: 78,
                    132: 79,
                    135: 80,
                    138: 81,
                    142: 82,
                    145: 83,
                    148: 84,
                    151: 85,
                    155: 86,
                    158: 87,
                    161: 88,
                    164: 89,
                    167: 90,
                    171: 91,
                    174: 92,
                    177: 93,
                    181: 94,
                    184: 95,
                    187: 96,
                    190: 97,
                    194: 98,
                    197: 99,
                    200: 100
                }

                var plankScore = getScore(Number(plankSlider.value), plkscores);
                plt.innerHTML = plankScore;

                const twomilescores = {
                    1331: 60,
                    1277: 61,
                    1260: 62,
                    1241: 63,
                    1222: 64,
                    1207: 65,
                    1195: 66,
                    1182: 67,
                    1170: 68,
                    1159: 69,
                    1146: 70,
                    1137: 71,
                    1127: 72,
                    1117: 73,
                    1108: 74,
                    1098: 75,
                    1090: 76,
                    1080: 77,
                    1074: 78,
                    1065: 79,
                    1058: 80,
                    1050: 81,
                    1041: 82,
                    1033: 83,
                    1023: 84,
                    1015: 85,
                    1006: 86,
                    998: 87,
                    990: 88,
                    980: 89,
                    970: 90,
                    960: 91,
                    951: 92,
                    941: 93,
                    930: 94,
                    919: 95,
                    906: 96,
                    893: 97,
                    877: 98,
                    860: 99,
                    838: 100
                }
                for (const key in twomilescores) {
                    twomilescores[key] *= -1;
                }

                var twomilescore2 = getScore(Number(twoMileRunSlider.value * -1), twomilescores);
                ts.innerHTML = Math.abs(twomilescore2);
            } else if (ageGroup == "42-46") {
                const deadliftScores = {
                    140: 60,
                    150: 69,
                    160: 73,
                    170: 75,
                    180: 76,
                    190: 77,
                    200: 79,
                    210: 81,
                    220: 84,
                    230: 85,
                    240: 87,
                    250: 89,
                    260: 91,
                    270: 92,
                    280: 93,
                    290: 94,
                    300: 95,
                    310: 96,
                    320: 97,
                    330: 99,
                    340: 100
                };

                var deadliftScore = getScore(Number(deadliftSlider.value), deadliftScores);
                deadliftscore2.innerHTML = deadliftScore;
                const standingPowerThrowScores = {
                    6.2: 60,
                    6.7: 61,
                    7.1: 62,
                    7.3: 63,
                    7.4: 64,
                    7.6: 65,
                    7.8: 66,
                    7.9: 67,
                    8: 68,
                    8.1: 69,
                    8.2: 70,
                    8.3: 71,
                    8.4: 72,
                    8.6: 73,
                    8.7: 75,
                    8.8: 76,
                    8.9: 77,
                    9: 78,
                    9.1: 79,
                    9.2: 80,
                    9.3: 81,
                    9.4: 82,
                    9.5: 83,
                    9.6: 84,
                    9.7: 85,
                    9.8: 86,
                    9.9: 87,
                    10.1: 88,
                    10.3: 89,
                    10.4: 90,
                    10.5: 91,
                    10.6: 92,
                    10.7: 93,
                    10.8: 94,
                    11.1: 95,
                    11.3: 96,
                    11.4: 97,
                    11.7: 98,
                    12.1: 99,
                    12.3: 100

                };


                var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
                spt.innerHTML = standingPowerThrowScore;
                const handReleasePushupScores = {
                    10: 60,
                    11: 62,
                    12: 64,
                    13: 65,
                    14: 66,
                    15: 67,
                    16: 68,
                    17: 69,
                    18: 70,
                    19: 71,
                    20: 73,
                    21: 74,
                    22: 75,
                    23: 76,
                    25: 77,
                    26: 78,
                    27: 79,
                    28: 80,
                    29: 81,
                    30: 82,
                    31: 83,
                    32: 85,
                    33: 86,
                    34: 87,
                    36: 88,
                    37: 89,
                    38: 90,
                    41: 91,
                    42: 92,
                    43: 93,
                    44: 94,
                    46: 95,
                    48: 96,
                    50: 97,
                    53: 98,
                    55: 99,
                    56: 100

                };
                var handReleaseScore = getScore(Number(handReleasePushUpSlider.value), handReleasePushupScores);
                hrp.innerHTML = handReleaseScore;


                const sdcscores = {
                    165: 60,
                    161: 61,
                    156: 62,
                    153: 63,
                    151: 64,
                    149: 65,
                    146: 66,
                    145: 67,
                    143: 68,
                    142: 69,
                    140: 70,
                    138: 71,
                    137: 72,
                    135: 73,
                    134: 74,
                    133: 75,
                    132: 76,
                    130: 77,
                    129: 78,
                    128: 79,
                    127: 80,
                    126: 81,
                    125: 82,
                    124: 83,
                    122: 84,
                    121: 85,
                    120: 86,
                    119: 87,
                    118: 88,
                    117: 89,
                    116: 90,
                    114: 91,
                    113: 92,
                    112: 93,
                    111: 94,
                    109: 95,
                    108: 96,
                    106: 97,
                    104: 98,
                    102: 99,
                    100: 100
                }
                for (const key in sdcscores) {
                    sdcscores[key] *= -1;
                }

                var sdcScore = getScore(Number(sprintDragCarrySlider.value * -1), sdcscores);
            
                sdc.innerHTML = Math.abs(sdcScore);

                const plkscores = {
                    70: 60,
                    73: 61,
                    76: 62,
                    80: 63,
                    83: 64,
                    86: 65,
                    90: 66,
                    93: 67,
                    96: 68,
                    99: 69,
                    102: 70,
                    106: 71,
                    109: 72,
                    112: 73,
                    116: 74,
                    119: 75,
                    122: 76,
                    125: 77,
                    128: 78,
                    132: 79,
                    135: 80,
                    138: 81,
                    142: 82,
                    145: 83,
                    148: 84,
                    151: 85,
                    155: 86,
                    158: 87,
                    161: 88,
                    164: 89,
                    167: 90,
                    171: 91,
                    174: 92,
                    177: 93,
                    181: 94,
                    184: 95,
                    187: 96,
                    190: 97,
                    194: 98,
                    197: 99,
                    200: 100
                }

                var plankScore = getScore(Number(plankSlider.value), plkscores);
                plt.innerHTML = plankScore;

                const twomilescores = {
                    1352: 60,
                    1304: 61,
                    1260: 62,
                    1258: 63,
                    1240: 64,
                    1225: 65,
                    1210: 66,
                    1200: 67,
                    1190: 68,
                    1178: 69,
                    1166: 70,
                    1156: 71,
                    1144: 72,
                    1136: 73,
                    1126: 74,
                    1117: 75,
                    1109: 76,
                    1100: 77,
                    1090: 78,
                    1080: 79,
                    1075: 80,
                    1067: 81,
                    1058: 82,
                    1050: 83,
                    1041: 84,
                    1032: 85,
                    1024: 86,
                    1015: 87,
                    1007: 88,
                    998: 89,
                    988: 90,
                    978: 91,
                    966: 92,
                    956: 93,
                    945: 94,
                    933: 95,
                    920: 96,
                    904: 97,
                    888: 98,
                    869: 99,
                    845: 100
                }
                for (const key in twomilescores) {
                    twomilescores[key] *= -1;
                }

                var twomilescore2 = getScore(Number(twoMileRunSlider.value * -1), twomilescores);
                ts.innerHTML = Math.abs(twomilescore2);
            } else if (ageGroup == "47-51") {
                const deadliftScores = {
                    140: 60,
                    150: 70,
                    160: 78,
                    170: 80,
                    180: 81,
                    190: 83,
                    200: 85,
                    210: 87,
                    220: 89,
                    230: 90,
                    240: 91,
                    250: 92,
                    260: 93,
                    270: 94,
                    280: 95,
                    290: 96,
                    300: 97,
                    310: 98,
                    320: 99,
                    330: 100
                };

                var deadliftScore = getScore(Number(deadliftSlider.value), deadliftScores);
                deadliftscore2.innerHTML = deadliftScore;
                const standingPowerThrowScores = {
                    6: 60,
                    6.4: 61,
                    6.7: 62,
                    6.9: 63,
                    7.1: 64,
                    7.2: 65,
                    7.4: 66,
                    7.5: 67,
                    7.6: 68,
                    7.7: 69,
                    7.9: 70,
                    8: 71,
                    8.1: 72,
                    8.2: 74,
                    8.3: 75,
                    8.4: 76,
                    8.5: 77,
                    8.6: 78,
                    8.7: 80,
                    8.8: 81,
                    8.9: 82,
                    9: 83,
                    9.1: 84,
                    9.2: 85,
                    9.3: 86,
                    9.4: 87,
                    9.5: 88,
                    9.6: 89,
                    9.7: 90,
                    9.9: 91,
                    10: 92,
                    10.1: 93,
                    10.2: 94,
                    10.4: 95,
                    10.6: 96,
                    10.7: 97,
                    11: 98,
                    11.4: 99,
                    11.6: 100

                };


                var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
                spt.innerHTML = standingPowerThrowScore;
                const handReleasePushupScores = {
                    10: 60,
                    11: 63,
                    12: 66,
                    13: 68,
                    14: 69,
                    15: 70,
                    16: 71,
                    17: 72,
                    18: 73,
                    19: 74,
                    20: 75,
                    21: 77,
                    22: 79,
                    23: 80,
                    25: 81,
                    27: 82,
                    28: 83,
                    29: 84,
                    30: 85,
                    31: 86,
                    32: 87,
                    33: 89,
                    34: 90,
                    36: 91,
                    38: 92,
                    39: 93,
                    41: 94,
                    42: 95,
                    44: 96,
                    47: 97,
                    50: 98,
                    53: 99,
                    55: 100

                };
                var handReleaseScore = getScore(Number(handReleasePushUpSlider.value), handReleasePushupScores);
                hrp.innerHTML = handReleaseScore;


                const sdcscores = {
                    173: 60,
                    168: 61,
                    164: 62,
                    161: 63,
                    159: 64,
                    157: 65,
                    154: 66,
                    152: 67,
                    150: 68,
                    149: 69,
                    147: 70,
                    146: 71,
                    145: 72,
                    143: 73,
                    141: 74,
                    140: 75,
                    139: 76,
                    137: 77,
                    136: 78,
                    135: 79,
                    134: 80,
                    133: 81,
                    132: 82,
                    130: 83,
                    129: 84,
                    128: 85,
                    127: 86,
                    126: 87,
                    125: 88,
                    123: 89,
                    122: 90,
                    121: 91,
                    120: 92,
                    119: 93,
                    117: 94,
                    115: 95,
                    114: 96,
                    112: 97,
                    110: 98,
                    106: 99,
                    105: 100
                }
                for (const key in sdcscores) {
                    sdcscores[key] *= -1;
                }

                var sdcScore = getScore(Number(sprintDragCarrySlider.value * -1), sdcscores);
            
                sdc.innerHTML = Math.abs(sdcScore);

                const plkscores = {
                    70: 60,
                    73: 61,
                    76: 62,
                    80: 63,
                    83: 64,
                    86: 65,
                    90: 66,
                    93: 67,
                    96: 68,
                    99: 69,
                    102: 70,
                    106: 71,
                    109: 72,
                    112: 73,
                    116: 74,
                    119: 75,
                    122: 76,
                    125: 77,
                    128: 78,
                    132: 79,
                    135: 80,
                    138: 81,
                    142: 82,
                    145: 83,
                    148: 84,
                    151: 85,
                    155: 86,
                    158: 87,
                    161: 88,
                    164: 89,
                    167: 90,
                    171: 91,
                    174: 92,
                    177: 93,
                    181: 94,
                    184: 95,
                    187: 96,
                    190: 97,
                    194: 98,
                    197: 99,
                    200: 100
                }

                var plankScore = getScore(Number(plankSlider.value), plkscores);
                plt.innerHTML = plankScore;

                const twomilescores = {
                    1375: 60,
                    1337: 61,
                    1303: 62,
                    1273: 63,
                    1260: 64,
                    1253: 65,
                    1240: 66,
                    1228: 67,
                    1217: 68,
                    1206: 69,
                    1197: 70,
                    1187: 71,
                    1176: 72,
                    1167: 73,
                    1157: 74,
                    1147: 75,
                    1140: 76,
                    1131: 77,
                    1122: 78,
                    1113: 79,
                    1106: 80,
                    1096: 81,
                    1086: 82,
                    1080: 83,
                    1071: 84,
                    1063: 85,
                    1054: 86,
                    1046: 87,
                    1036: 88,
                    1027: 89,
                    1017: 90,
                    1006: 91,
                    996: 92,
                    987: 93,
                    975: 94,
                    962: 95,
                    948: 96,
                    932: 97,
                    914: 98,
                    894: 99,
                    870: 100
                }
                for (const key in twomilescores) {
                    twomilescores[key] *= -1;
                }

                var twomilescore2 = getScore(Number(twoMileRunSlider.value * -1), twomilescores);
                ts.innerHTML = Math.abs(twomilescore2);
            } else if (ageGroup == "52-56") {
                const deadliftScores = {
                    140: 60,
                    150: 70,
                    160: 79,
                    170: 84,
                    180: 85,
                    190: 86,
                    200: 88,
                    210: 90,
                    220: 93,
                    230: 94,
                    240: 95,
                    250: 96,
                    260: 97,
                    270: 98,
                    280: 99,
                    290: 100
                };

                var deadliftScore = getScore(Number(deadliftSlider.value), deadliftScores);
                deadliftscore2.innerHTML = deadliftScore;
                const standingPowerThrowScores = {
                    5.7	:60,
                    6	:61,
                    6.2	:62,
                    6.4	:63,
                    6.6	:64,
                    6.7	:65,
                    6.9	:66,
                    7	:68,
                    7.1	:69,
                    7.3	:70,
                    7.4	:71,
                    7.5	:72,
                    7.6	   :73,
                    7.7	:74,
                    7.8	:76,
                    7.9	:77,
                    8	:78,
                    8.1	:80,
                    8.2	:81,
                    8.3	:82,
                    8.4	:83,
                    8.5	:84,
                    8.6	:86,
                    8.7	:87,
                    8.8	:88,
                    8.9	:89,
                    9	   :90,
                    9.1	:91,
                    9.2	:92,
                    9.3	:93,
                    9.5	:94,
                    9.6	:95,
                    9.8	:96,
                    10	:97,
                    10.2:98,
                    10.4   :99,
                    10.6:100
                    
                };


                var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
                spt.innerHTML = standingPowerThrowScore;
                const handReleasePushupScores = {
                    10: 60,
                    11: 64,
                    12: 67,
                    13: 69,
                    14: 71,
                    15: 72,
                    16: 74,
                    17: 76,
                    18: 77,
                    19: 78,
                    20: 79,
                    21: 80,
                    22: 81,
                    23: 83,
                    24: 84,
                    25: 85,
                    26: 86,
                    27: 87,
                    28: 88,
                    30: 89,
                    31: 90,
                    32: 91,
                    33: 92,
                    34: 93,
                    35: 94,
                    38: 95,
                    40: 96,
                    43: 97,
                    45: 98,
                    48: 99,
                    51: 100
                };
                
                var handReleaseScore = getScore(Number(handReleasePushUpSlider.value), handReleasePushupScores);
                hrp.innerHTML = handReleaseScore;
                

                const sdcscores = {
                    180: 60,
                    177: 61,
                    170: 62,
                    168: 63,
                    166: 64,
                    164: 65,
                    161: 66,
                    160: 67,
                    158: 68,
                    157: 69,
                    155: 70,
                    154: 71,
                    152: 72,
                    151: 73,
                    150: 74,
                    149: 75,
                    148: 76,
                    146: 77,
                    145: 78,
                    143: 80,
                    141: 81,
                    140: 82,
                    139: 83,
                    137: 84,
                    136: 85,
                    135: 86,
                    134: 87,
                    133: 88,
                    131: 89,
                    130: 90,
                    129: 91,
                    127: 92,
                    126: 93,
                    125: 94,
                    123: 95,
                    121: 96,
                    120: 97,
                    117: 98,
                    115: 99,
                    112: 100
                }
                for (const key in sdcscores) {
                    sdcscores[key] *= -1;
                }

                var sdcScore = getScore(Number(sprintDragCarrySlider.value * -1), sdcscores);
            
                sdc.innerHTML = Math.abs(sdcScore);

                const plkscores = {
                    70: 60,
                    73: 61,
                    76: 62,
                    80: 63,
                    83: 64,
                    86: 65,
                    90: 66,
                    93: 67,
                    96: 68,
                    99: 69,
                    102: 70,
                    106: 71,
                    109: 72,
                    112: 73,
                    116: 74,
                    119: 75,
                    122: 76,
                    125: 77,
                    128: 78,
                    132: 79,
                    135: 80,
                    138: 81,
                    142: 82,
                    145: 83,
                    148: 84,
                    151: 85,
                    155: 86,
                    158: 87,
                    161: 88,
                    164: 89,
                    167: 90,
                    171: 91,
                    174: 92,
                    177: 93,
                    181: 94,
                    184: 95,
                    187: 96,
                    190: 97,
                    194: 98,
                    197: 99,
                    200: 100
                }

                var plankScore = getScore(Number(plankSlider.value), plkscores);
                plt.innerHTML = plankScore;
                const twomilescores = {
                    1400: 60,
                    1373: 61,
                    1344: 62,
                    1320: 63,
                    1299: 64,
                    1276: 65,
                    1260: 66,
                    1259: 67,
                    1249: 68,
                    1239: 69,
                    1227: 70,
                    1218: 71,
                    1208: 72,
                    1200: 73,
                    1193: 74,
                    1185: 75,
                    1176: 76,
                    1170: 77,
                    1161: 78,
                    1153: 79,
                    1143: 80,
                    1136: 81,
                    1129: 82,
                    1120: 83,
                    1112: 84,
                    1104: 85,
                    1095: 86,
                    1084: 87,
                    1077: 88,
                    1068: 89,
                    1056: 90,
                    1046: 91,
                    1036: 92,
                    1026: 93,
                    1015: 94,
                    1002: 95,
                    988: 96,
                    974: 97,
                    955: 98,
                    934: 99,
                    909: 100
                }
                for (const key in twomilescores) {
                    twomilescores[key] *= -1;
                }

                var twomilescore2 = getScore(Number(twoMileRunSlider.value * -1), twomilescores);
                ts.innerHTML = Math.abs(twomilescore2);
            } else if (ageGroup == "57-61") {
                const deadliftScores = {
                    140: 60,
                    150: 71,
                    160: 79,
                    170: 89,
                    180: 91,
                    190: 93,
                    200: 94,
                    210: 96,
                    220: 97,
                    230: 98,
                    240: 99,
                    250: 100
                };

                var deadliftScore = getScore(Number(deadliftSlider.value), deadliftScores);
                deadliftscore2.innerHTML = deadliftScore;
                const standingPowerThrowScores = {
                    5.3: 60,
                    5.7: 61,
                    6: 62,
                    6.1: 63,
                    6.2: 64,
                    6.3: 65,
                    6.5: 66,
                    6.6: 67,
                    6.7: 68,
                    6.8: 69,
                    6.9: 70,
                    7: 72,
                    7.1: 73,
                    7.2: 74,
                    7.3: 75,
                    7.4: 76,
                    7.5: 78,
                    7.6: 79,
                    7.7: 80,
                    7.8: 81,
                    7.9: 82,
                    8: 83,
                    8.1: 85,
                    8.2: 86,
                    8.3: 87,
                    8.4: 88,
                    8.5: 90,
                    8.7: 91,
                    8.8: 92,
                    8.9: 93,
                    9: 94,
                    9.1: 95,
                    9.3: 96,
                    9.4: 97,
                    9.5: 98,
                    9.7: 99,
                    9.9: 100

                };


                var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
                spt.innerHTML = standingPowerThrowScore;
                const handReleasePushupScores = {
                    10: 60,
                    11: 65,
                    12: 68,
                    13: 71,
                    14: 73,
                    15: 75,
                    16: 76,
                    17: 78,
                    18: 80,
                    19: 81,
                    20: 82,
                    21: 83,
                    22: 84,
                    23: 86,
                    24: 87,
                    25: 88,
                    26: 89,
                    29: 90,
                    30: 91,
                    31: 92,
                    33: 93,
                    34: 94,
                    35: 95,
                    37: 96,
                    38: 97,
                    40: 98,
                    43: 99,
                    46: 100
                };
                var handReleaseScore = getScore(Number(handReleasePushUpSlider.value), handReleasePushupScores);
                hrp.innerHTML = handReleaseScore;
                

                const sdcscores = {
                    192: 60,
                    184: 61,
                    179: 62,
                    177: 63,
                    175: 64,
                    173: 65,
                    170: 66,
                    168: 67,
                    167: 68,
                    165: 69,
                    163: 70,
                    162: 71,
                    160: 72,
                    158: 73,
                    157: 74,
                    156: 75,
                    155: 76,
                    153: 77,
                    151: 78,
                    150: 79,
                    149: 80,
                    148: 81,
                    147: 82,
                    146: 83,
                    144: 84,
                    143: 85,
                    142: 86,
                    141: 87,
                    140: 88,
                    139: 89,
                    137: 90,
                    136: 91,
                    135: 92,
                    133: 93,
                    131: 94,
                    129: 95,
                    128: 96,
                    126: 97,
                    123: 98,
                    122: 99,
                    118: 100
                }
                for (const key in sdcscores) {
                    sdcscores[key] *= -1;
                }

                var sdcScore = getScore(Number(sprintDragCarrySlider.value * -1), sdcscores);
            
                sdc.innerHTML = Math.abs(sdcScore);

                const plkscores = {
                    70: 60,
                    73: 61,
                    76: 62,
                    80: 63,
                    83: 64,
                    86: 65,
                    90: 66,
                    93: 67,
                    96: 68,
                    99: 69,
                    102: 70,
                    106: 71,
                    109: 72,
                    112: 73,
                    116: 74,
                    119: 75,
                    122: 76,
                    125: 77,
                    128: 78,
                    132: 79,
                    135: 80,
                    138: 81,
                    142: 82,
                    145: 83,
                    148: 84,
                    151: 85,
                    155: 86,
                    158: 87,
                    161: 88,
                    164: 89,
                    167: 90,
                    171: 91,
                    174: 92,
                    177: 93,
                    181: 94,
                    184: 95,
                    187: 96,
                    190: 97,
                    194: 98,
                    197: 99,
                    200: 100
                }

                var plankScore = getScore(Number(plankSlider.value), plkscores);
                plt.innerHTML = plankScore;
                const twomilescores = {
                    1416: 60,
                    1392: 61,
                    1378: 62,
                    1359: 63,
                    1341: 64,
                    1323: 65,
                    1307: 66,
                    1295: 67,
                    1279: 68,
                    1261: 69,
                    1260: 70,
                    1254: 71,
                    1246: 72,
                    1241: 73,
                    1231: 74,
                    1222: 75,
                    1214: 76,
                    1207: 77,
                    1199: 78,
                    1191: 79,
                    1185: 80,
                    1176: 81,
                    1167: 82,
                    1157: 83,
                    1147: 84,
                    1140: 85,
                    1133: 86,
                    1125: 87,
                    1116: 88,
                    1105: 89,
                    1097: 90,
                    1087: 91,
                    1077: 92,
                    1065: 93,
                    1047: 94,
                    1034: 95,
                    1018: 96,
                    1004: 97,
                    982: 98,
                    955: 99,
                    928: 100
                }
                for (const key in twomilescores) {
                    twomilescores[key] *= -1;
                }

                var twomilescore2 = getScore(Number(twoMileRunSlider.value * -1), twomilescores);
                ts.innerHTML = Math.abs(twomilescore2);

            } else {


                const deadliftScores = {
                    140: 60,
                    141: 61,
                    142: 62,
                    143: 63,
                    144: 64,
                    145: 65,
                    146: 66,
                    147: 67,
                    148: 68,
                    149: 69,
                    150: 72,
                    160: 82,
                    170: 92,
                    180: 93,
                    190: 94,
                    200: 95,
                    210: 98,
                    220: 99,
                    230: 100,
                };


                var deadliftScore = getScore(Number(deadliftSlider.value), deadliftScores);
                deadliftscore2.innerHTML = deadliftScore;
                const standingPowerThrowScores = {
                    4.9: 60,
                    5.1: 61,
                    5.4: 62,
                    5.7: 63,
                    5.9: 64,
                    6.1: 66,
                    6.2: 68,
                    6.4: 69,
                    6.6: 70,
                    6.7: 71,
                    6.8: 72,
                    7: 73,
                    7.1: 74,
                    7.2: 76,
                    7.3: 77,
                    7.4: 79,
                    7.5: 81,
                    7.6: 83,
                    7.7: 84,
                    7.8: 86,
                    7.9: 88,
                    8: 90,
                    8.1: 91,
                    8.2: 92,
                    8.3: 93,
                    8.5: 94,
                    8.6: 95,
                    8.7: 97,
                    8.8: 99,
                    9: 100

                };


                var standingPowerThrowScore = getScore(Number(standingPowerThrowSlider.value), standingPowerThrowScores);
                spt.innerHTML = standingPowerThrowScore;
                const handReleasePushupScores = {
                    10: 60,
                    11: 68,
                    12: 71,
                    13: 74,
                    14: 76,
                    15: 77,
                    16: 79,
                    17: 80,
                    18: 81,
                    19: 82,
                    20: 83,
                    21: 84,
                    22: 85,
                    23: 87,
                    24: 89,
                    26: 90,
                    29: 91,
                    30: 92,
                    31: 93,
                    33: 94,
                    34: 95,
                    35: 96,
                    37: 97,
                    39: 98,
                    41: 99,
                    43: 100
                };
                var handReleaseScore = getScore(Number(handReleasePushUpSlider.value), handReleasePushupScores);
                hrp.innerHTML = handReleaseScore;


                const sdcscores = {
                    196: 60,
                    194: 61,
                    192: 62,
                    191: 63,
                    189: 64,
                    183: 65,
                    180: 66,
                    177: 67,
                    176: 68,
                    172: 69,
                    169: 70,
                    167: 71,
                    166: 72,
                    164: 73,
                    163: 74,
                    161: 75,
                    158: 76,
                    156: 77,
                    155: 78,
                    153: 79,
                    152: 80,
                    147: 81,
                    144: 82,
                    143: 83,
                    142: 84,
                    141: 85,
                    140: 86,
                    139: 87,
                    138: 88,
                    137: 89,
                    136: 95,
                    135: 96,
                    134: 97,
                    133: 98,
                    132: 99,
                    129: 100
                }
                for (const key in sdcscores) {
                    sdcscores[key] *= -1;
                }

                var sdcScore = getScore(Number(sprintDragCarrySlider.value * -1), sdcscores);
            
                sdc.innerHTML = Math.abs(sdcScore);

                const plkscores = {
                    70: 60,
                    73: 61,
                    76: 62,
                    80: 63,
                    83: 64,
                    86: 65,
                    90: 66,
                    93: 67,
                    96: 68,
                    99: 69,
                    102: 70,
                    106: 71,
                    109: 72,
                    112: 73,
                    116: 74,
                    119: 75,
                    122: 76,
                    125: 77,
                    128: 78,
                    132: 79,
                    135: 80,
                    138: 81,
                    142: 82,
                    145: 83,
                    148: 84,
                    151: 85,
                    155: 86,
                    158: 87,
                    161: 88,
                    164: 89,
                    167: 90,
                    171: 91,
                    174: 92,
                    177: 93,
                    181: 94,
                    184: 95,
                    187: 96,
                    190: 97,
                    194: 98,
                    197: 99,
                    200: 100

                }

                var plankScore = getScore(Number(plankSlider.value), plkscores);
                plt.innerHTML = plankScore;

                const twomilescores = {
                    1416: 60,
                    1392: 61,
                    1378: 62,
                    1359: 63,
                    1341: 64,
                    1323: 65,
                    1307: 66,
                    1295: 67,
                    1279: 68,
                    1261: 69,
                    1260: 70,
                    1254: 71,
                    1246: 72,
                    1241: 73,
                    1231: 74,
                    1222: 75,
                    1214: 76,
                    1207: 77,
                    1199: 78,
                    1191: 79,
                    1185: 80,
                    1176: 81,
                    1167: 82,
                    1157: 83,
                    1147: 84,
                    1140: 85,
                    1133: 86,
                    1125: 87,
                    1116: 88,
                    1105: 89,
                    1097: 90,
                    1087: 91,
                    1077: 92,
                    1065: 93,
                    1047: 94,
                    1034: 95,
                    1018: 96,
                    1004: 97,
                    982: 98,
                    955: 99,
                    928: 100
                }
                for (const key in twomilescores) {
                    twomilescores[key] *= -1;
                }
                var twomilescore2 = getScore(Number(twoMileRunSlider.value * -1), twomilescores);
                ts.innerHTML = Math.abs(twomilescore2);

            }
        }
    
    deadliftScoreDiv.innerHTML = deadliftSlider.value;
    standingPowerThrowScoreDiv.innerHTML = parseFloat(standingPowerThrowSlider.value).toFixed(1);
    handReleasePushUpScoreDiv.innerHTML = handReleasePushUpSlider.value;
    sprintDragCarryScoreDiv.innerHTML = formatTime(Math.abs(sprintDragCarrySlider.value));
    plankScoreDiv.innerHTML = formatTime(Math.abs(plankSlider.value));
    twoMileRunScoreDiv.innerHTML = formatTime(Math.abs(twoMileRunSlider.value));

    // Calculate the total score
    var totalScore = parseInt(deadliftscore2.innerHTML) + parseInt(spt.innerHTML) +parseInt(hrp.innerHTML) +parseInt(sdc.innerHTML) +parseInt(plt.innerHTML) +parseInt(ts.innerHTML);

    // Update the total score div
    
    totalScoreDiv.innerHTML = parseInt(totalScore);
    // Update the value of the hidden input field
    document.getElementById("total-score-input").value = parseInt(totalScore);

}


/*
function getScore(score, lookupTable) {
    while (lookupTable[score] === undefined) {
      score++;
    }
    return lookupTable[score];
  }
*/
function getScore(score, lookupTable) {
    while (lookupTable[score] === undefined) {
      score = Number((score + 0.1).toFixed(1));
    }
    return lookupTable[score];
}


function formatTime(seconds) {
    // Calculate the minutes and seconds from the total number of seconds
    var minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    // Format
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

// ...

  
  function updateStandingPowerThrow() {
    const textBox = document.getElementById("standing-power-throw-text");
    const slider = document.getElementById("standing-power-throw");
    const value = textBox.value;
  
    if (value === "") {
      slider.value = slider.min;
    } else {
      const floatValue = parseFloat(value);
      if (floatValue >= parseFloat(slider.min) && floatValue <= parseFloat(slider.max)) {
        slider.value = floatValue;
      }
    }
    updateScore();
  }
  
  function updateDeadlift() {
    const slider = document.getElementById("deadlift");
    const textbox = document.getElementById("deadlift-text");
    const value = textbox.value;
  
    if (value === "") {
      slider.value = slider.min;
    } else {
      const intValue = parseInt(value);
      if (intValue >= parseInt(slider.min) && intValue <= parseInt(slider.max)) {
        slider.value = intValue;
      }
    }
    updateScore();
  }
  
  function updateHandReleasePushUp() {
    const slider = document.getElementById("hand-release-push-up");
    const textbox = document.getElementById("hand-release-push-up-text");
    const value = textbox.value;
  
    if (value === "") {
      slider.value = slider.min;
    } else {
      const intValue = parseInt(value);
      if (intValue >= parseInt(slider.min) && intValue <= parseInt(slider.max)) {
        slider.value = intValue;
      }
    }
    updateScore();
  }
  
  function updateSprintDragCarry() {
    const slider = document.getElementById("sprint-drag-carry");
    const textbox = document.getElementById("sprint-drag-carry-text");
    const value = textbox.value;
  
    if (value === "") {
      slider.value = slider.min;
    } else {
      const intValue = timeToSeconds(value) * -1;
      if (intValue >= parseInt(slider.min) && intValue <= parseInt(slider.max)) {
        slider.value = intValue;
      }
    }
    updateScore();
  }
  
  
  
  function updatePlank() {
    const slider = document.getElementById("plank");
    const textbox = document.getElementById("plank-text");
    const value = textbox.value;
  
    if (value === "") {
      slider.value = slider.min;
    } else {
      const intValue = timeToSeconds(value);
      if (intValue >= parseInt(slider.min) && intValue <= parseInt(slider.max)) {
        slider.value = intValue;
      }
    }
    updateScore();
  }
  
  function updateTwoMileRun() {
    const slider = document.getElementById("two-mile-run");
    const textbox = document.getElementById("two-mile-run-text");
    const value = textbox.value;
  
    if (value === "") {
      slider.value = slider.min;
    } else {
      const intValue = timeToSeconds(value) * -1;
      if (intValue >= parseInt(slider.min) && intValue <= parseInt(slider.max)) {
        slider.value = intValue;
      }
    }
    updateScore();
  }
  
  function timeToSeconds(timeStr) {
    const timeParts = timeStr.split(':');
    const minutes = parseInt(timeParts[0]);
    const seconds = parseInt(timeParts[1]);
    return (minutes * 60) + seconds;
  }
  
  
  function secondsToTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }
  
 



function timeToSeconds(timeStr) {
  const timeParts = timeStr.split(':');
  const minutes = parseInt(timeParts[0]);
  const seconds = parseInt(timeParts[1]);
  return (minutes * 60) + seconds;
}

function secondsToTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}



   
  