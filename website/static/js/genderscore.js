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
    var twomilescore = document.getElementById("two-mile-run-score2");


    var gender = genderMenu.value;
    var ageGroup = ageGroupMenu.value;


    if (gender == "male"){

    }

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
            const deadliftscore = deadliftScores[Number(deadliftSlider.value)]
            deadliftscore2.innerHTML = deadliftscore;
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
            const standingscore = standingPowerThrowScores[Number(standingPowerThrowSlider.value)];
            spt.innerHTML = standingscore;

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
            const handreleasescore = handReleasePushupScores[Number(handReleasePushUpSlider.value)]
            hrp.innerHTML = handreleasescore;

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

            const sdcscore = sdcscores[Number(sprintDragCarrySlider.value * -1)]
            sdc.innerHTML = Math.abs(sdcscore);


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

            const plkscore = plkscores[Number(plankSlider.value)]
            plt.innerHTML = plkscore;

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

            const twomile = twomilescores[Number(twoMileRunSlider.value * -1)]
            twomilescore.innerHTML = Math.abs(twomile);

            
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

            const deadliftscore = deadliftScores[Number(deadliftSlider.value)];
            deadliftscore2.innerHTML = deadliftscore;

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
                8.4: 100,
                // ... more ranges and scores
            };

            // To look up the score for a given value:
            const standingscore = standingPowerThrowScores[Number(standingPowerThrowSlider.value)];
            spt.innerHTML = standingscore;

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

            const sdcscore = sdcscores[Number(sprintDragCarrySlider.value * -1)]
            sdc.innerHTML = Math.abs(sdcscore);

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
            const handreleasescore = handReleasePushupScores[Number(handReleasePushUpSlider.value)]
            hrp.innerHTML = handreleasescore;


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

            const plkscore = plkscores[Number(plankSlider.value)]
            plt.innerHTML = plkscore;
            const twomilescores = {
                    1395:60,
                    1370:61,
                    1344:62,
                    1323:63,
                    1304:64,
                    1284:65,
                    1266:66,
                    1260:67,
                    1253:68,
                    1243:69,
                    1232:70,
                    1223:71,
                    1214:72,
                    1204:73,
                    1196:74,
                    1187:75,
                    1179:76,
                    1170:77,
                    1161:78,
                    1152:79,
                    1143:80,
                    1136:81,
                    1128:82,
                    1119:83,
                    1110:84,
                    1103:85,
                    1093:86,
                    1084:87,
                    1077:88,
                    1067:89,
                    1057:90,
                    1048:91,
                    1036:92,
                    1024:93,
                    1012:94,
                    999:95,
                    986:96,
                    969:97,
                    951:98,
                    930:99,
                    900	:100
            }
            for (const key in twomilescores) {
                twomilescores[key] *= -1;
            }

            const twomile = twomilescores[Number(twoMileRunSlider.value * -1)]
            twomilescore.innerHTML = Math.abs(twomile);


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
            const deadliftscore = deadliftScores[Number(deadliftSlider.value)];
            deadliftscore2.innerHTML = deadliftscore;

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
                8.4: 98,
                8.5: 99,
                8.6: 99,
                8.7: 100,
                // ... more ranges and scores
            };

            // To look up the score for a given value:
            const standingscore = standingPowerThrowScores[Number(standingPowerThrowSlider.value)];
            spt.innerHTML = standingscore;
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
            const handreleasescore = handReleasePushupScores[Number(handReleasePushUpSlider.value)];
            hrp.innerHTML = handreleasescore;
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

            const sdcscore = sdcscores[Number(sprintDragCarrySlider.value * -1)];
            sdc.innerHTML = Math.abs(sdcscore);

            const plkscores = {
                  80:60,
                  83:61,
                  86:62,
                  90:63,
                  93:64,
                  96:65,
                  99:66,
                  103:67,
                  106:68,
                  109:69,
                  112:70,
                  116:71,
                  119:72,
                  122:73,
                  126:74,
                  129:75,
                  132:76,
                  135:77,
                  138:78,
                  142:79,
                  145:80,
                  148:81,
                  151:82,
                  155:83,
                  158:84,
                  161:85,
                  165:86,
                  168:87,
                  171:88,
                  174:89,
                  178:90,
                  181:91,
                  184:92,
                  187:93,
                  191:94,
                  194:95,
                  197:96,
                  200:97,
                  204:98,
                  207:99,
                  210:100
            }

            const plkscore = plkscores[Number(plankSlider.value)];
            plt.innerHTML = plkscore;

            const twomilescores = {
                    1393:60,
                    1366:61,
                    1338:62,
                    1316:63,
                    1294:64,
                    1275:65,
                    1260:66,
                    1256:67,
                    1245:68,
                    1236:69,
                    1225:70,
                    1216:71,
                    1207:72,
                    1199:73,
                    1190:74,
                    1182:75,
                    1173:76,
                    1165:77,
                    1156:78,
                    1148:79,
                    1140:80,
                    1134:81,
                    1126:82,
                    1117:83,
                    1110:84,
                    1101:85,
                    1092:86,
                    1082:87,
                    1075:88,
                    1066:89,
                    1055:90,
                    1047:91,
                    1037:92,
                    1025:93,
                    1014:94,
                    1000:95,
                    986:96,
                    970:97,
                    953:98,
                    930:99,
                    900	:100
            }
            for (const key in twomilescores) {
                twomilescores[key] *= -1;
            }

            const twomile = twomilescores[Number(twoMileRunSlider.value * -1)];
            twomilescore.innerHTML = Math.abs(twomile);


        }else if (ageGroup == "32-36") {
           console.log("Hello i made it to this selection!!!!!!")
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
            const deadliftscore = deadliftScores[Number(deadliftSlider.value)];
            deadliftscore2.innerHTML = deadliftscore;
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
                8.4: 99,
                8.5: 99,
                8.6: 100,
                // ... more ranges and scores
            };

            // To look up the score for a given value:
            const standingscore = standingPowerThrowScores[Number(standingPowerThrowSlider.value)];
            spt.innerHTML = standingscore;

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
            const handreleasescore = handReleasePushupScores[Number(handReleasePushUpSlider.value)];
            hrp.innerHTML = handreleasescore;

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

            const sdcscore = sdcscores[Number(sprintDragCarrySlider.value * -1)];
            sdc.innerHTML = Math.abs(sdcscore);

            const plkscores = {
                    75:60,
                    78:61,
                    82:62,
                    85:63,
                    88:64,
                    91:65,
                    95:66,
                    98:67,
                    101:68,
                    104:69,
                    107:70,
                    111:71,
                    114:72,
                    117:73,
                    120:74,
                    124:75,
                    127:76,
                    130:77,
                    133:78,
                    137:79,
                    140:80,
                    143:81,
                    147:82,
                    150:83,
                    153:84,
                    157:85,
                    160:86,
                    163:87,
                    166:88,
                    169:89,
                    173:90,
                    176:91,
                    179:92,
                    182:93,
                    186:94,
                    189:95,
                    192:96,
                    195:97,
                    199:98,
                    202:99,
                    205:100,
            }

            const plkscore = plkscores[Number(plankSlider.value)];
            plt.innerHTML = plkscore;

            const twomilescores = {
                    1399:60,
                    1375:61,
                    1350:62,
                    1326:63,
                    1308:64,
                    1287:65,
                    1265:66,
                    1260:67,
                    1254:68,
                    1244:69,
                    1235:70,
                    1227:71,
                    1218:72,
                    1210:73,
                    1201:74,
                    1195:75,
                    1187:76,
                    1180:77,
                    1171:78,
                    1163:79,
                    1155:80,
                    1147:81,
                    1140:82,
                    1132:83,
                    1125:84,
                    1116:85,
                    1107:86,
                    1098:87,
                    1089:88,
                    1080:89,
                    1070:90,
                    1061:91,
                    1050:92,
                    1040:93,
                    1028:94,
                    1017:95,
                    1003:96,
                    988:97,
                    967:98,
                    946:99,
                    918:100,   
            }
            for (const key in twomilescores) {
                twomilescores[key] *= -1;
            }

            const twomile = twomilescores[Number(twoMileRunSlider.value * -1)];
            twomilescore.innerHTML = Math.abs(twomile);


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
            const deadliftscore = deadliftScores[Number(deadliftSlider.value)]
            deadliftscore2.innerHTML = deadliftscore;

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
            const standingscore = standingPowerThrowScores[Number(standingPowerThrowSlider.value)];
            spt.innerHTML = standingscore;

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
            const handreleasescore = handReleasePushupScores[Number(handReleasePushUpSlider.value)]
            hrp.innerHTML = handreleasescore;

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

            const sdcscore = sdcscores[Number(sprintDragCarrySlider.value * -1)]
            sdc.innerHTML = Math.abs(sdcscore);

            const plkscores = {
                70:60,
                73:61,
                76:62,
                80:63,
                83:64,
                86:65,
                90:66,
                93:67,
                96:68,
                99:69,
                102:70,
                106:71,
                109:72,
                112:73,
                116:74,
                119:75,
                122:76,
                125:77,
                128:78,
                132:79,
                135:80,
                138:81,
                142:82,
                145:83,
                148:84,
                151:85,
                155:86,
                158:87,
                161:88,
                164:89,
                168:90,
                171:91,
                174:92,
                177:93,
                181:94,
                184:95,
                187:96,
                190:97,
                194:98,
                197:99,
                200:100,
            }

            const plkscore = plkscores[Number(plankSlider.value)]
            plt.innerHTML = plkscore;

            const twomilescores = {
                1403:60,
                1380:61,
                1354:62,
                1331:63,
                1316:64,
                1296:65,
                1280:66,
                1264:67,
                1260:68,
                1255:69,
                1246:70,
                1238:71,
                1230:72,
                1220:73,
                1212:74,
                1202:75,
                1196:76,
                1188:77,
                1177:78,
                1170:79,
                1162:80,
                1154:81,
                1145:82,
                1140:83,
                1132:84,
                1125:85,
                1116:86,
                1110:87,
                1100:88,
                1090:89,
                1080:90,
                1072:91,
                1061:92,
                1050:93,
                1038:94,
                1024:95,
                1011:96,
                996:97,
                978:98,
                956:99,
                930	:100   
            }
            for (const key in twomilescores) {
                twomilescores[key] *= -1;
            }

            const twomile = twomilescores[Number(twoMileRunSlider.value * -1)]
            twomilescore.innerHTML = Math.abs(twomile);


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
            const deadliftscore = deadliftScores[Number(deadliftSlider.value)]
            deadliftscore2.innerHTML = deadliftscore;
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
            const standingscore = standingPowerThrowScores[Number(standingPowerThrowSlider.value)];
            spt.innerHTML = standingscore;

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
            const handreleasescore = handReleasePushupScores[Number(handReleasePushUpSlider.value)]
            hrp.innerHTML = handreleasescore;
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

            const sdcscore = sdcscores[Number(sprintDragCarrySlider.value * -1)]
            sdc.innerHTML = Math.abs(sdcscore);

            const plkscores = {
                70:60,
                73:61,
                76:62,
                80:63,
                83:64,
                86:65,
                90:66,
                93:67,
                96:68,
                99:69,
                102:70,
                106:71,
                109:72,
                112:73,
                116:74,
                119:75,
                122:76,
                125:77,
                128:78,
                132:79,
                135:80,
                138:81,
                142:82,
                145:83,
                148:84,
                151:85,
                155:86,
                158:87,
                161:88,
                164:89,
                168:90,
                171:91,
                174:92,
                177:93,
                181:94,
                184:95,
                187:96,
                190:97,
                194:98,
                197:99,
                200:100,
            }

            const plkscore = plkscores[Number(plankSlider.value)]
            plt.innerHTML = plkscore;

            const twomilescores = {
                1422:60,
                1390:61,
                1373:62,
                1356:63,
                1340:64,
                1325:65,
                1311:66,
                1295:67,
                1280:68,
                1268:69,
                1260:70,
                1257:71,
                1247:72,
                1238:73,
                1232:74,
                1221:75,
                1212:76,
                1202:77,
                1198:78,
                1191:79,
                1185:80,
                1176:81,
                1167:82,
                1159:83,
                1150:84,
                1141:85,
                1133:86,
                1124:87,
                1115:88,
                1106:89,
                1096:90,
                1086:91,
                1076:92,
                1067:93,
                1055:94,
                1044:95,
                1027:96,
                1010:97,
                995:98,
                972:99,
                949:100, 
            }
            for (const key in twomilescores) {
                twomilescores[key] *= -1;
            }

            const twomile = twomilescores[Number(twoMileRunSlider.value * -1)]
            twomilescore.innerHTML = Math.abs(twomile);

        } else if (ageGroup == "47-51") {
            const deadliftScores = {
                120:60,
                130:67,
                140:73,
                150:79,
                160:90,
                170:97,
                180:99,
                190:100,
            };
            const deadliftscore = deadliftScores[Number(deadliftSlider.value)]
            deadliftscore2.innerHTML = deadliftscore;
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
            const standingscore = standingPowerThrowScores[Number(standingPowerThrowSlider.value)];
            spt.innerHTML = standingscore;

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
            const handreleasescore = handReleasePushupScores[Number(handReleasePushUpSlider.value)]
            hrp.innerHTML = handreleasescore;
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

            const sdcscore = sdcscores[Number(sprintDragCarrySlider.value * -1)]
            sdc.innerHTML = Math.abs(sdcscore);

            const plkscores = {
                70:60,
                73:61,
                76:62,
                80:63,
                83:64,
                86:65,
                90:66,
                93:67,
                96:68,
                99:69,
                102:70,
                106:71,
                109:72,
                112:73,
                116:74,
                119:75,
                122:76,
                125:77,
                128:78,
                132:79,
                135:80,
                138:81,
                142:82,
                145:83,
                148:84,
                151:85,
                155:86,
                158:87,
                161:88,
                164:89,
                168:90,
                171:91,
                174:92,
                177:93,
                181:94,
                184:95,
                187:96,
                190:97,
                194:98,
                197:99,
                200:100,
            }

            const plkscore = plkscores[Number(plankSlider.value)]
            plt.innerHTML = plkscore;



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

            const deadliftscore = deadliftScores[Number(deadliftSlider.value)]
            deadliftscore2.innerHTML = deadliftscore;
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
            const standingscore = standingPowerThrowScores[Number(standingPowerThrowSlider.value)];
            spt.innerHTML = standingscore;
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
            const handreleasescore = handReleasePushupScores[Number(handReleasePushUpSlider.value)]
            hrp.innerHTML = handreleasescore;

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

            const sdcscore = sdcscores[Number(sprintDragCarrySlider.value * -1)]
            sdc.innerHTML = Math.abs(sdcscore);

            const plkscores = {
                70:60,
                73:61,
                76:62,
                80:63,
                83:64,
                86:65,
                90:66,
                93:67,
                96:68,
                99:69,
                102:70,
                106:71,
                109:72,
                112:73,
                116:74,
                119:75,
                122:76,
                125:77,
                128:78,
                132:79,
                135:80,
                138:81,
                142:82,
                145:83,
                148:84,
                151:85,
                155:86,
                158:87,
                161:88,
                164:89,
                168:90,
                171:91,
                174:92,
                177:93,
                181:94,
                184:95,
                187:96,
                190:97,
                194:98,
                197:99,
                200:100,
            }

            const plkscore = plkscores[Number(plankSlider.value)]
            plt.innerHTML = plkscore;

            const twomilescores = {
                1464:60,
                1424:61,
                1384:62,
                1372:63,
                1363:64,
                1353:65,
                1343:66,
                1329:67,
                1319:68,
                1303:69,
                1300:70,
                1292:71,
                1275:72,
                1263:73,
                1250:74,
                1244:75,
                1244:76,
                1243:77,
                1238:78,
                1231:79,
                1222:80,
                1217:81,
                1207:82,
                1202:83,
                1198:84,
                1185:85,
                1176:86,
                1169:87,
                1154:88,
                1142:89,
                1133:90,
                1120:91,
                1110:92,
                1100:93,
                1093:94,
                1080:95,
                1070:96,
                1058:97,
                1042:98,
                1021:99,
                989	:100               
            }
            for (const key in twomilescores) {
                twomilescores[key] *= -1;
            }

            const twomile = twomilescores[Number(twoMileRunSlider.value * -1)]
            twomilescore.innerHTML = Math.abs(twomile);
        } else if (ageGroup == "57-61") {
            const deadliftScores = {
                120: 60,
                130: 71,
                140: 80,
                150: 90,
                160: 99,
                170: 100,
            };
            const deadliftscore = deadliftScores[Number(deadliftSlider.value)]
            deadliftscore2.innerHTML = deadliftscore;
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
            const standingscore = standingPowerThrowScores[Number(standingPowerThrowSlider.value)];
            spt.innerHTML = standingscore;
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
            const handreleasescore = handReleasePushupScores[Number(handReleasePushUpSlider.value)]
            hrp.innerHTML = handreleasescore;
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

            const sdcscore = sdcscores[Number(sprintDragCarrySlider.value * -1)]
            sdc.innerHTML = Math.abs(sdcscore);

            const plkscores = {
                70:60,
                73:61,
                76:62,
                80:63,
                83:64,
                86:65,
                90:66,
                93:67,
                96:68,
                99:69,
                102:70,
                106:71,
                109:72,
                112:73,
                116:74,
                119:75,
                122:76,
                125:77,
                128:78,
                132:79,
                135:80,
                138:81,
                142:82,
                145:83,
                148:84,
                151:85,
                155:86,
                158:87,
                161:88,
                164:89,
                168:90,
                171:91,
                174:92,
                177:93,
                181:94,
                184:95,
                187:96,
                190:97,
                194:98,
                197:99,
                200:100,
            }

            const plkscore = plkscores[Number(plankSlider.value)]
            plt.innerHTML = plkscore;

            const twomilescores = {
                  1488:	60,
                  1445:61,
                  1402:62,
                  1381:63,
                  1363:64,
                  1353:65,
                  1343:66,
                  1329:67,
                  1319:68,
                  1303:69,
                  1300:70,
                  1292:71,
                  1275:72,
                  1263:73,
                  1250:74,
                  1244:75,
                  1244:76,
                  1243:77,
                  1238:78,
                  1231:79,
                  1222:80,
                  1217:81,
                  1207:82,
                  1202:83,
                  1198:84,
                  1185:85,
                  1181:86,
                  1169:87,
                  1154:88,
                  1144:89,
                  1139:90,
                  1136:91,
                  1128:92,
                  1126:93,
                  1116:94,
                  1111:95,
                  1105:96,
                  1080:97,
                  1076:98,
                  1067:99,
                  103:100                
            }
            for (const key in twomilescores) {
                twomilescores[key] *= -1;
            }

            const twomile = twomilescores[Number(twoMileRunSlider.value * -1)]
            twomilescore.innerHTML = Math.abs(twomile);

        } else {
            const deadliftScores = {
                120: 60,
                130: 72,
                140: 80,
                150: 90,
                160: 99,
                170: 100,
            };
            const deadliftscore = deadliftScores[Number(deadliftSlider.value)]
            deadliftscore2.innerHTML = deadliftscore;
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
            const standingscore = standingPowerThrowScores[Number(standingPowerThrowSlider.value)];
            spt.innerHTML = standingscore;
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
            const handreleasescore = handReleasePushupScores[Number(handReleasePushUpSlider.value)]
            hrp.innerHTML = handreleasescore;

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

            const sdcscore = sdcscores[Number(sprintDragCarrySlider.value * -1)]
            sdc.innerHTML = Math.abs(sdcscore);

            const plkscores = {
                70:60,
                73:61,
                76:62,
                80:63,
                83:64,
                86:65,
                90:66,
                93:67,
                96:68,
                99:69,
                102:70,
                106:71,
                109:72,
                112:73,
                116:74,
                119:75,
                122:76,
                125:77,
                128:78,
                132:79,
                135:80,
                138:81,
                142:82,
                145:83,
                148:84,
                151:85,
                155:86,
                158:87,
                161:88,
                164:89,
                168:90,
                171:91,
                174:92,
                177:93,
                181:94,
                184:95,
                187:96,
                190:97,
                194:98,
                197:99,
                200:100,
            }

            const plkscore = plkscores[Number(plankSlider.value)]
            plt.innerHTML = plkscore;

            const twomilescores = {
                  1500:60,
                  1451:61,
                  1402:62,
                  1384:63,
                  1370:64,
                  1364:65,
                  1351:66,
                  1335:67,
                  1322:68,
                  1303:69,
                  1300:70,
                  1292:71,
                  1275:72,
                  1263:73,
                  1250:74,
                  1244:75,
                  1244:76,
                  1243:77,
                  1238:78,
                  1231:79,
                  1222:80,
                  1217:81,
                  1207:82,
                  1202:83,
                  1198:84,
                  1185:85,
                  1181:86,
                  1169:87,
                  1154:88,
                  1144:89,
                  1139:90,
                  1136:91,
                  1128:92,
                  1126:93,
                  1116:94,
                  1111:95,
                  1105:96,
                  1080:97,
                  1076:98,
                  1067:99,
                  1038:100,              
            }
            for (const key in twomilescores) {
                twomilescores[key] *= -1;
            }

            const twomile = twomilescores[Number(twoMileRunSlider.value * -1)]
            twomilescore.innerHTML = Math.abs(twomile);
        }
    }else{
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
                const deadliftscore = deadliftScores[Number(deadliftSlider.value)]
                while (deadliftscore === undefined) {
                    value++;
                    deadliftscore = deadliftScores[value];
                  }
                deadliftscore2.innerHTML = deadliftscore;
                const standingPowerThrowScores = {
                    
                   
                };
    
                
                const standingscore = standingPowerThrowScores[Number(standingPowerThrowSlider.value)];
                spt.innerHTML = standingscore;
                const handReleasePushupScores = {
                
                };
                const handreleasescore = handReleasePushupScores[Number(handReleasePushUpSlider.value)]
                hrp.innerHTML = handreleasescore;
    
                const sdcscores = {
                
                }
                for (const key in sdcscores) {
                    sdcscores[key] *= -1;
                }
    
                const sdcscore = sdcscores[Number(sprintDragCarrySlider.value * -1)]
                sdc.innerHTML = Math.abs(sdcscore);
    
                const plkscores = {
                  
                }
    
                const plkscore = plkscores[Number(plankSlider.value)]
                plt.innerHTML = plkscore;
    
                const twomilescores = {
                               
                }
                for (const key in twomilescores) {
                    twomilescores[key] *= -1;
                }
    
                const twomile = twomilescores[Number(twoMileRunSlider.value * -1)]
                twomilescore.innerHTML = Math.abs(twomile);
                


            }else if(ageGroup == "22-26") {
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
                const deadliftscore = deadliftScores[Number(deadliftSlider.value)]
                while (deadliftscore === undefined) {
                    value++;
                    deadliftscore = deadliftScores[value];
                  }
                deadliftscore2.innerHTML = deadliftscore;
                const standingPowerThrowScores = {
                    
                   
                };
    
                
                const standingscore = standingPowerThrowScores[Number(standingPowerThrowSlider.value)];
                spt.innerHTML = standingscore;
                const handReleasePushupScores = {
                
                };
                const handreleasescore = handReleasePushupScores[Number(handReleasePushUpSlider.value)]
                hrp.innerHTML = handreleasescore;
    
                const sdcscores = {
                
                }
                for (const key in sdcscores) {
                    sdcscores[key] *= -1;
                }
    
                const sdcscore = sdcscores[Number(sprintDragCarrySlider.value * -1)]
                sdc.innerHTML = Math.abs(sdcscore);
    
                const plkscores = {
                  
                }
    
                const plkscore = plkscores[Number(plankSlider.value)]
                plt.innerHTML = plkscore;
    
                const twomilescores = {
                               
                }
                for (const key in twomilescores) {
                    twomilescores[key] *= -1;
                }
    
                const twomile = twomilescores[Number(twoMileRunSlider.value * -1)]
                twomilescore.innerHTML = Math.abs(twomile);
            }else if(ageGroup == "27-31") {
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
                const deadliftscore = deadliftScores[Number(deadliftSlider.value)]
                while (deadliftscore === undefined) {
                    value++;
                    deadliftscore = deadliftScores[value];
                  }
                deadliftscore2.innerHTML = deadliftscore;
                const standingPowerThrowScores = {
                    
                   
                };
    
                
                const standingscore = standingPowerThrowScores[Number(standingPowerThrowSlider.value)];
                spt.innerHTML = standingscore;
                const handReleasePushupScores = {
                
                };
                const handreleasescore = handReleasePushupScores[Number(handReleasePushUpSlider.value)]
                hrp.innerHTML = handreleasescore;
    
                const sdcscores = {
                
                }
                for (const key in sdcscores) {
                    sdcscores[key] *= -1;
                }
    
                const sdcscore = sdcscores[Number(sprintDragCarrySlider.value * -1)]
                sdc.innerHTML = Math.abs(sdcscore);
    
                const plkscores = {
                  
                }
    
                const plkscore = plkscores[Number(plankSlider.value)]
                plt.innerHTML = plkscore;
    
                const twomilescores = {
                               
                }
                for (const key in twomilescores) {
                    twomilescores[key] *= -1;
                }
    
                const twomile = twomilescores[Number(twoMileRunSlider.value * -1)]
                twomilescore.innerHTML = Math.abs(twomile);
            }else if(ageGroup == "32-36") {
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
                const deadliftscore = deadliftScores[Number(deadliftSlider.value)]
                while (deadliftscore === undefined) {
                    value++;
                    deadliftscore = deadliftScores[value];
                  }
                deadliftscore2.innerHTML = deadliftscore;
                const standingPowerThrowScores = {
                    
                   
                };
    
                
                const standingscore = standingPowerThrowScores[Number(standingPowerThrowSlider.value)];
                spt.innerHTML = standingscore;
                const handReleasePushupScores = {
                
                };
                const handreleasescore = handReleasePushupScores[Number(handReleasePushUpSlider.value)]
                hrp.innerHTML = handreleasescore;
    
                const sdcscores = {
                
                }
                for (const key in sdcscores) {
                    sdcscores[key] *= -1;
                }
    
                const sdcscore = sdcscores[Number(sprintDragCarrySlider.value * -1)]
                sdc.innerHTML = Math.abs(sdcscore);
    
                const plkscores = {
                  
                }
    
                const plkscore = plkscores[Number(plankSlider.value)]
                plt.innerHTML = plkscore;
    
                const twomilescores = {
                               
                }
                for (const key in twomilescores) {
                    twomilescores[key] *= -1;
                }
    
                const twomile = twomilescores[Number(twoMileRunSlider.value * -1)]
                twomilescore.innerHTML = Math.abs(twomile);
            }else if(ageGroup == "37-41") {
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
                  
                const deadliftscore = deadliftScores[Number(deadliftSlider.value)]
                while (deadliftscore === undefined) {
                    value++;
                    deadliftscore = deadliftScores[value];
                  }
                deadliftscore2.innerHTML = deadliftscore;
                const standingPowerThrowScores = {
                    
                   
                };
    
                
                const standingscore = standingPowerThrowScores[Number(standingPowerThrowSlider.value)];
                spt.innerHTML = standingscore;
                const handReleasePushupScores = {
                
                };
                const handreleasescore = handReleasePushupScores[Number(handReleasePushUpSlider.value)]
                hrp.innerHTML = handreleasescore;
    
                const sdcscores = {
                
                }
                for (const key in sdcscores) {
                    sdcscores[key] *= -1;
                }
    
                const sdcscore = sdcscores[Number(sprintDragCarrySlider.value * -1)]
                sdc.innerHTML = Math.abs(sdcscore);
    
                const plkscores = {
                  
                }
    
                const plkscore = plkscores[Number(plankSlider.value)]
                plt.innerHTML = plkscore;
    
                const twomilescores = {
                               
                }
                for (const key in twomilescores) {
                    twomilescores[key] *= -1;
                }
    
                const twomile = twomilescores[Number(twoMileRunSlider.value * -1)]
                twomilescore.innerHTML = Math.abs(twomile);
            }else if(ageGroup == "42-46") {
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
                  
                const deadliftscore = deadliftScores[Number(deadliftSlider.value)]
                while (deadliftscore === undefined) {
                    value++;
                    deadliftscore = deadliftScores[value];
                  }
                deadliftscore2.innerHTML = deadliftscore;
                const standingPowerThrowScores = {
                    
                   
                };
    
                
                const standingscore = standingPowerThrowScores[Number(standingPowerThrowSlider.value)];
                spt.innerHTML = standingscore;
                const handReleasePushupScores = {
                
                };
                const handreleasescore = handReleasePushupScores[Number(handReleasePushUpSlider.value)]
                hrp.innerHTML = handreleasescore;
    
                const sdcscores = {
                
                }
                for (const key in sdcscores) {
                    sdcscores[key] *= -1;
                }
    
                const sdcscore = sdcscores[Number(sprintDragCarrySlider.value * -1)]
                sdc.innerHTML = Math.abs(sdcscore);
    
                const plkscores = {
                  
                }
    
                const plkscore = plkscores[Number(plankSlider.value)]
                plt.innerHTML = plkscore;
    
                const twomilescores = {
                               
                }
                for (const key in twomilescores) {
                    twomilescores[key] *= -1;
                }
    
                const twomile = twomilescores[Number(twoMileRunSlider.value * -1)]
                twomilescore.innerHTML = Math.abs(twomile);
            }else if(ageGroup == "47-51") {
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
                  
                const deadliftscore = deadliftScores[Number(deadliftSlider.value)]
                while (deadliftscore === undefined) {
                    value++;
                    deadliftscore = deadliftScores[value];
                  }
                deadliftscore2.innerHTML = deadliftscore;
                const standingPowerThrowScores = {
                    
                   
                };
    
                
                const standingscore = standingPowerThrowScores[Number(standingPowerThrowSlider.value)];
                spt.innerHTML = standingscore;
                const handReleasePushupScores = {
                
                };
                const handreleasescore = handReleasePushupScores[Number(handReleasePushUpSlider.value)]
                hrp.innerHTML = handreleasescore;
    
                const sdcscores = {
                
                }
                for (const key in sdcscores) {
                    sdcscores[key] *= -1;
                }
    
                const sdcscore = sdcscores[Number(sprintDragCarrySlider.value * -1)]
                sdc.innerHTML = Math.abs(sdcscore);
    
                const plkscores = {
                  
                }
    
                const plkscore = plkscores[Number(plankSlider.value)]
                plt.innerHTML = plkscore;
    
                const twomilescores = {
                               
                }
                for (const key in twomilescores) {
                    twomilescores[key] *= -1;
                }
    
                const twomile = twomilescores[Number(twoMileRunSlider.value * -1)]
                twomilescore.innerHTML = Math.abs(twomile);
            }else if(ageGroup == "52-56") {
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
                  
                const deadliftscore = deadliftScores[Number(deadliftSlider.value)]
                while (deadliftscore === undefined) {
                    value++;
                    deadliftscore = deadliftScores[value];
                  }
                deadliftscore2.innerHTML = deadliftscore;
                const standingPowerThrowScores = {
                    
                   
                };
    
                
                const standingscore = standingPowerThrowScores[Number(standingPowerThrowSlider.value)];
                spt.innerHTML = standingscore;
                const handReleasePushupScores = {
                
                };
                const handreleasescore = handReleasePushupScores[Number(handReleasePushUpSlider.value)]
                hrp.innerHTML = handreleasescore;
    
                const sdcscores = {
                
                }
                for (const key in sdcscores) {
                    sdcscores[key] *= -1;
                }
    
                const sdcscore = sdcscores[Number(sprintDragCarrySlider.value * -1)]
                sdc.innerHTML = Math.abs(sdcscore);
    
                const plkscores = {
                  
                }
    
                const plkscore = plkscores[Number(plankSlider.value)]
                plt.innerHTML = plkscore;
    
                const twomilescores = {
                               
                }
                for (const key in twomilescores) {
                    twomilescores[key] *= -1;
                }
    
                const twomile = twomilescores[Number(twoMileRunSlider.value * -1)]
                twomilescore.innerHTML = Math.abs(twomile);
            }else if (ageGroup == "57-61"){
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
                  
                const deadliftscore = deadliftScores[Number(deadliftSlider.value)]
                while (deadliftscore === undefined) {
                    value++;
                    deadliftscore = deadliftScores[value];
                  }
                deadliftscore2.innerHTML = deadliftscore;
                const standingPowerThrowScores = {
                    
                   
                };
    
                
                const standingscore = standingPowerThrowScores[Number(standingPowerThrowSlider.value)];
                spt.innerHTML = standingscore;
                const handReleasePushupScores = {
                
                };
                const handreleasescore = handReleasePushupScores[Number(handReleasePushUpSlider.value)]
                hrp.innerHTML = handreleasescore;
    
                const sdcscores = {
                
                }
                for (const key in sdcscores) {
                    sdcscores[key] *= -1;
                }
    
                const sdcscore = sdcscores[Number(sprintDragCarrySlider.value * -1)]
                sdc.innerHTML = Math.abs(sdcscore);
    
                const plkscores = {
                  
                }
    
                const plkscore = plkscores[Number(plankSlider.value)]
                plt.innerHTML = plkscore;
    
                const twomilescores = {
                               
                }
                for (const key in twomilescores) {
                    twomilescores[key] *= -1;
                }
    
                const twomile = twomilescores[Number(twoMileRunSlider.value * -1)]
                twomilescore.innerHTML = Math.abs(twomile);
            }else{

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
                  
                  
                const deadliftscore = deadliftScores[Number(deadliftSlider.value)]
                while (deadliftscore === undefined) {
                    value++;
                    deadliftscore = deadliftScores[value];
                  }
                deadliftscore2.innerHTML = deadliftscore;
                const standingPowerThrowScores = {
                    
                   
                };
    
                
                const standingscore = standingPowerThrowScores[Number(standingPowerThrowSlider.value)];
                spt.innerHTML = standingscore;
                const handReleasePushupScores = {
                
                };
                const handreleasescore = handReleasePushupScores[Number(handReleasePushUpSlider.value)]
                hrp.innerHTML = handreleasescore;
    
                const sdcscores = {
                
                }
                for (const key in sdcscores) {
                    sdcscores[key] *= -1;
                }
    
                const sdcscore = sdcscores[Number(sprintDragCarrySlider.value * -1)]
                sdc.innerHTML = Math.abs(sdcscore);
    
                const plkscores = {
                  
                }
    
                const plkscore = plkscores[Number(plankSlider.value)]
                plt.innerHTML = plkscore;
    
                const twomilescores = {
                               
                }
                for (const key in twomilescores) {
                    twomilescores[key] *= -1;
                }
    
                const twomile = twomilescores[Number(twoMileRunSlider.value * -1)]
                twomilescore.innerHTML = Math.abs(twomile);
    
            }
        }
    }

    // Update the score divs with the values of the sliders
    deadliftScoreDiv.innerHTML = deadliftSlider.value;
    standingPowerThrowScoreDiv.innerHTML = parseFloat(standingPowerThrowSlider.value).toFixed(1);
    handReleasePushUpScoreDiv.innerHTML = handReleasePushUpSlider.value;
    sprintDragCarryScoreDiv.innerHTML = formatTime(Math.abs(sprintDragCarrySlider.value));
    plankScoreDiv.innerHTML = formatTime(Math.abs(plankSlider.value));
    twoMileRunScoreDiv.innerHTML = formatTime(Math.abs(twoMileRunSlider.value));

    // Calculate the total score
    var totalScore = parseInt(deadliftSlider.value) + parseInt(standingPowerThrowSlider.value) + parseInt(handReleasePushUpSlider.value) + parseInt(sprintDragCarrySlider.value) + parseInt(plankSlider.value) + parseInt(twoMileRunSlider.value);

    // Update the total score div
    totalScoreDiv.innerHTML = totalScore;
}

function formatTime(seconds) {
// Calculate the minutes and seconds from the total number of seconds
var minutes = Math.floor(seconds / 60);
seconds = seconds % 60;

// Format
return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
} 
