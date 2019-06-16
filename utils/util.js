const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const app = getApp()

module.exports = {
  formatTime: formatTime,
  dealBMI: dealBMI, 
  dealBMIMarkG: dealBMIMarkG,
  dealBMIMarkB: dealBMIMarkB,
  dealLungCapicityG: dealLungCapicityG,
  dealLungCapicityB: dealLungCapicityB,
  dealSitReachG: dealSitReachG,
  dealSitReachB: dealSitReachB,
  dealJumpG: dealJumpG,
  dealJumpB: dealJumpB,
  deal50G: deal50G,
  deal50B: deal50B,
  deal1000: deal1000,
  deal800: deal800,
  dealSitUp: dealSitUp,
  dealPullUp: dealPullUp,
  getLevel: getLevel,
  initBmi: initBmi,
  initLungMark: initLungMark,
  initReachMark: initReachMark,
  initJumpMark: initJumpMark,
  initShortRunMark: initShortRunMark,
  initLongRunMark: initLongRunMark,
  initUpMark: initUpMark
}

//计算BMI
function dealBMI () {
  var bmi = 0
  var height = app.globalData.height, weight = app.globalData.weight
  if (height && weight) {
    console.log(height, weight)
    bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  }
  return bmi;
}
//返回与BMI有关的中文和成绩
function dealBMIMarkG (bmi) {
  if (bmi == 0) return [0, '低体重'];
  var bmiMark = 0
  var bmiC = '低体重';
  if (bmi <= 17.1) {
    bmiMark = 80 * 0.15
    bmiC = '低体重'
  } else if (bmi > 17.1 && bmi <= 23.9) {
    bmiMark = 100 * 0.15
    bmiC = '正常'
  } else if (bmi > 23.9 && bmi <= 27.9) {
    bmiMark = 80 * 0.15
    bmiC = '超重'
  } else if (bmi > 27.9) {
    bmiMark = 60 * 0.15
    bmiC = '肥胖'
  }
  return [bmiMark, bmiC]
}
function dealBMIMarkB (bmi) {
  if (bmi == 0) return [0, '低体重'];
  var bmiMark = 0
  var bmiC = '低体重';
  if (bmi <= 17.8) {
    bmiMark = 80 * 0.15 
    bmiC = '低体重'
  } else if (bmi > 17.8 && bmi <= 23.9) {
    bmiMark = 100 * 0.15
    bmiC = '正常'
  } else if (bmi > 23.9 && bmi <= 27.9) {
    bmiMark = 80 * 0.15
    bmiC = '超重'
  } else if (bmi > 27.9) {
    bmiMark = 60 * 0.15
    bmiC = '肥胖'
  }
  return [bmiMark, bmiC]
}
//返回女生肺活量成绩
function dealLungCapicityG (n) {
  var lungMark = 0
  switch (app.globalData.grade) {
    case 1:
      console.log(n)
    case 2:
      if (n < 1800) {
        lungMark = 0
      } else if (n >= 1800 && n < 1840) {
        lungMark = 10 * 0.15
      } else if (n >= 1840 && n < 1880) {
        lungMark = 20 * 0.15        
      } else if (n >= 1880 && n < 1920) {
        lungMark = 30 * 0.15        
      } else if (n >= 1920 && n < 1960) {
        lungMark = 40 * 0.15        
      } else if (n >= 1960 && n < 2000) {
        lungMark = 50 * 0.15        
      } else if (n >= 2000 && n < 2100) {
        lungMark = 60 * 0.15        
      } else if (n >= 2100 && n < 2200) {
        lungMark = 62 * 0.15        
      } else if (n >= 2200 && n < 2300) {
        lungMark = 64 * 0.15        
      } else if (n >= 2300 && n < 2400) {
        lungMark = 66 * 0.15        
      } else if (n >= 2400 && n < 2500) {
        lungMark = 68 * 0.15        
      } else if (n >= 2500 && n < 2600) {
        lungMark = 70 * 0.15        
      } else if (n >= 2600 && n < 2700) {
        lungMark = 72 * 0.15        
      } else if (n >= 2700 && n < 2800) {
        lungMark = 74 * 0.15       
      } else if (n >= 2800 && n < 2900) {
        lungMark = 76 * 0.15       
      } else if (n >= 2900 && n < 3000) {
        lungMark = 78 * 0.15        
      } else if (n >= 3000 && n < 3150) {
        lungMark = 80 * 0.15        
      } else if (n >= 3150 && n < 3300) {
        lungMark = 85 * 0.15        
      } else if (n >= 3300 && n < 3350) {
        lungMark = 90 * 0.15        
      } else if (n >= 3350 && n < 3400) {
        lungMark = 95 * 0.15        
      } else if (n >= 3400) {
        lungMark = 100 * 0.15        
      }
      break;
    case 3:
    case 4:
      if (n < 1850) {
        lungMark = 0   
      } else if (n >= 1850 && n < 1890) {
        lungMark = 10 * 0.15        
      } else if (n >= 1890 && n < 1930) {
        lungMark = 20 * 0.15        
      } else if (n >= 1930 && n < 1970) {
        lungMark = 30 * 0.15       
      } else if (n >= 1970 && n < 2010) {
        lungMark = 40 * 0.15        
      } else if (n >= 2010 && n < 2050) {
        lungMark = 50 * 0.15       
      } else if (n >= 2050 && n < 2150) {
        lungMark = 60 * 0.15        
      } else if (n >= 2150 && n < 2250) {
        lungMark = 62 * 0.15       
      } else if (n >= 2250 && n < 2350) {
        lungMark = 64 * 0.15        
      } else if (n >= 2350 && n < 2450) {
        lungMark = 66 * 0.15        
      } else if (n >= 2450 && n < 2550) {
        lungMark = 68 * 0.15        
      } else if (n >= 2550 && n < 2650) {
        lungMark = 70 * 0.15        
      } else if (n >= 2650 && n < 2750) {
        lungMark = 72 * 0.15       
      } else if (n >= 2750 && n < 2850) {
        lungMark = 74 * 0.15        
      } else if (n >= 2850 && n < 2950) {
        lungMark = 76 * 0.15        
      } else if (n >= 2950 && n < 3050) {
        lungMark = 78 * 0.15       
      } else if (n >= 3050 && n < 3200) {
        lungMark = 80 * 0.15        
      } else if (n >= 3200 && n < 3350) {
        lungMark = 85 * 0.15        
      } else if (n >= 3350 && n < 3400) {
        lungMark = 90 * 0.15
      } else if (n >= 3400 && n < 3450) {
        lungMark = 95 * 0.15        
      } else if (n >= 3450) {
        lungMark = 100 * 0.15        
      }
      break;
  }
  console.log(lungMark)
  return lungMark;
}
//返回男生肺活量成绩
function dealLungCapicityB (n) {
  var lungMark = 0
  switch (app.globalData.grade) {
    case 1:
    case 2:
    console.log(app.globalData.grade)
      console.log(n)
      if (n < 2300) {
        lungMark = 0       
      } else if (n >= 2300 && n < 2460) {
        lungMark = 10 * 0.15        
      } else if (n >= 2460 && n < 2620) {
        lungMark = 20 * 0.15        
      } else if (n >= 2620 && n < 2780) {
        lungMark = 30 * 0.15       
      } else if (n >= 2780 && n < 2940) {
        lungMark = 40 * 0.15        
      } else if (n >= 2940 && n < 3100) {
        lungMark = 50 * 0.15        
      } else if (n >= 3100 && n < 3220) {
        lungMark = 60 * 0.15        
      } else if (n >= 3220 && n < 3340) {
        lungMark = 62 * 0.15  
      } else if (n >= 3340 && n < 3460) {
        lungMark = 64 * 0.15        
      } else if (n >= 3460 && n < 3580) {
        lungMark = 66 * 0.15       
      } else if (n >= 3580 && n < 3700) {
        lungMark = 68 * 0.15       
      } else if (n >= 3700 && n < 3820) {
        lungMark = 70 * 0.15        
      } else if (n >= 3820 && n < 3940) {
        lungMark = 72 * 0.15        
      } else if (n >= 3940 && n < 4060) {
        lungMark = 74 * 0.15        
      } else if (n >= 4060 && n < 4180) {
        lungMark = 76 * 0.15       
      } else if (n >= 4180 && n < 4300) {
        lungMark = 78 * 0.15       
      } else if (n >= 4300 && n < 4550) {
        lungMark = 80 * 0.15        
      } else if (n >= 4550 && n < 4800) {
        lungMark = 85 * 0.15        
      } else if (n >= 4800 && n < 4920) {
        lungMark = 90 * 0.15        
      } else if (n >= 4920 && n < 5040) {
        lungMark = 95 * 0.15        
      } else if (n >= 5040) {
        lungMark = 100 * 0.15       
      }
      break;
    case 3:
    case 4:
      if (n < 2350) {
        lungMark = 0        
      } else if (n >= 2350 && n < 2520) {
        lungMark = 10 * 0.15        
      } else if (n >= 2520 && n < 2690) {
        lungMark = 20 * 0.15        
      } else if (n >= 2690 && n < 2860) {
        lungMark = 30 * 0.15        
      } else if (n >= 2860 && n < 3030) {
        lungMark = 40 * 0.15        
      } else if (n >= 3030 && n < 3200) {
        lungMark = 50 * 0.15        
      } else if (n >= 3200 && n < 3320) {
        lungMark = 60 * 0.15        
      } else if (n >= 3320 && n < 3440) {
        lungMark = 62 * 0.15        
      } else if (n >= 3440 && n < 3560) {
        lungMark = 64 * 0.15        
      } else if (n >= 3560 && n < 3680) {
        lungMark = 66 * 0.15        
      } else if (n >= 3680 && n < 3800) {
        lungMark = 68 * 0.15       
      } else if (n >= 3800 && n < 3920) {
        lungMark = 70 * 0.15        
      } else if (n >= 3920 && n < 4040) {
        lungMark = 72 * 0.15        
      } else if (n >= 4040 && n < 4160) {
        lungMark = 74 * 0.15        
      } else if (n >= 4160 && n < 4280) {
        lungMark = 76 * 0.15        
      } else if (n >= 4280 && n < 4400) {
        lungMark = 78 * 0.15        
      } else if (n >= 4400 && n < 4650) {
        lungMark = 80 * 0.15        
      } else if (n >= 4650 && n < 4900) {
        lungMark = 85 * 0.15        
      } else if (n >= 4900 && n < 5020) {
        lungMark = 90 * 0.15        
      } else if (n >= 5020 && n < 5140) {
        lungMark = 95 * 0.15        
      } else if (n >= 5140) {
        lungMark = 100 * 0.15        
      }
      break;
  }
  return lungMark;
}
//返回坐位体前屈成绩
function dealSitReachG (n) {
  var reachMark = 0;
  switch (app.globalData.grade) {
    case 1:
    case 2:
      if(n < 2) reachMark = 0;
      else if (n >= 2 && n < 2.8) reachMark = 10 * 0.1;
      else if (n >= 2.8 && n < 3.6) reachMark = 20 * 0.1;
      else if (n >= 3.6 && n < 4.4) reachMark = 30 * 0.1;
      else if (n >= 4.4 && n < 5.2) reachMark = 40 * 0.1;
      else if (n >= 5.2 && n < 6) reachMark = 50 * 0.1;
      else if (n >= 6 && n < 7.3) reachMark = 60 * 0.1;
      else if (n >= 7.3 && n < 8.6) reachMark = 62 * 0.1;
      else if (n >= 8.6 && n < 9.9) reachMark = 64 * 0.1;
      else if (n >= 9.9 && n < 11.2) reachMark = 66 * 0.1;
      else if (n >= 11.2 && n < 12.5) reachMark = 68 * 0.1;
      else if (n >= 12.5 && n < 13.8) reachMark = 70 * 0.1;
      else if (n >= 13.8 && n < 15.1) reachMark = 72 * 0.1;
      else if (n >= 15.1 && n < 16.4) reachMark = 74 * 0.1;
      else if (n >= 16.4 && n < 17.7) reachMark = 76 * 0.1;
      else if (n >= 17.7 && n < 19) reachMark = 78 * 0.1;
      else if (n >= 19 && n < 20.6) reachMark = 80 * 0.1;
      else if (n >= 20.6 && n < 22.2) reachMark = 85 * 0.1;
      else if (n >= 22.2 && n < 24) reachMark = 90 * 0.1;
      else if (n >= 24 && n < 25.8) reachMark = 95 * 0.1;
      else if (n >= 25.8) reachMark = 100 * 0.1;
      break;
    case 3:
    case 4:
      if (n < 2.5) reachMark = 0;
      else if (n >= 2.5 && n < 3.3) reachMark = 10 * 0.1;
      else if (n >= 3.3 && n < 4.1) reachMark = 20 * 0.1;
      else if (n >= 4.1 && n < 4.9) reachMark = 30 * 0.1;
      else if (n >= 4.9 && n < 5.7) reachMark = 40 * 0.1;
      else if (n >= 5.7 && n < 6.5) reachMark = 50 * 0.1;
      else if (n >= 6.5 && n < 7.8) reachMark = 60 * 0.1;
      else if (n >= 7.8 && n < 9.1) reachMark = 62 * 0.1;
      else if (n >= 9.1 && n < 10.4) reachMark = 64 * 0.1;
      else if (n >= 10.4 && n < 11.7) reachMark = 66 * 0.1;
      else if (n >= 11.7 && n < 13) reachMark = 68 * 0.1;
      else if (n >= 13 && n < 14.3) reachMark = 70 * 0.1;
      else if (n >= 14.3 && n < 15.6) reachMark = 72 * 0.1;
      else if (n >= 15.6 && n < 16.9) reachMark = 74 * 0.1;
      else if (n >= 16.9 && n < 18.2) reachMark = 76 * 0.1;
      else if (n >= 18.2 && n < 19.5) reachMark = 78 * 0.1;
      else if (n >= 19.5 && n < 21) reachMark = 80 * 0.1;
      else if (n >= 21 && n < 22.4) reachMark = 85 * 0.1;
      else if (n >= 22.4 && n < 24.4) reachMark = 90 * 0.1;
      else if (n >= 24.4 && n < 26.3) reachMark = 95 * 0.1;
      else if (n >= 26.3) reachMark = 100 * 0.1;
      break;
  }
  return reachMark;
}
function dealSitReachB (n) {
  var reachMark = 0;
  switch (app.globalData.grade) {
    case 1:
    case 2:
      if (n < -1.3) reachMark = 0;
      else if (n >= -1.3 && n < -0.3) reachMark = 10 * 0.1;
      else if (n >= -0.3 && n < 0.7) reachMark = 20 * 0.1;
      else if (n >= 0.7 && n < 1.7) reachMark = 30 * 0.1;
      else if (n >= 1.7 && n < 2.7) reachMark = 40 * 0.1;
      else if (n >= 2.7 && n < 3.7) reachMark = 50 * 0.1;
      else if (n >= 3.7 && n < 5.1) reachMark = 60 * 0.1;
      else if (n >= 5.1 && n < 6.5) reachMark = 62 * 0.1;
      else if (n >= 6.5 && n < 7.9) reachMark = 64 * 0.1;
      else if (n >= 7.9 && n < 9.3) reachMark = 66 * 0.1;
      else if (n >= 9.3 && n < 10.7) reachMark = 68 * 0.1;
      else if (n >= 10.7 && n < 12.1) reachMark = 70 * 0.1;
      else if (n >= 12.1 && n < 13.5) reachMark = 72 * 0.1;
      else if (n >= 13.5 && n < 14.9) reachMark = 74 * 0.1;
      else if (n >= 14.9 && n < 16.3) reachMark = 76 * 0.1;
      else if (n >= 16.3 && n < 17.7) reachMark = 78 * 0.1;
      else if (n >= 17.7 && n < 19.5) reachMark = 80 * 0.1;
      else if (n >= 19.5 && n < 21.3) reachMark = 85 * 0.1;
      else if (n >= 21.3 && n < 23.1) reachMark = 90 * 0.1;
      else if (n >= 23.1 && n < 24.9) reachMark = 95 * 0.1;
      else if (n >= 24.9) reachMark = 100 * 0.1;
      break;
    case 3:
    case 4:
      if (n < -0.8) reachMark = 0;
      else if (n >= -0.8 && n < 0.2) reachMark = 10 * 0.1;
      else if (n >= 0.2 && n < 1.2) reachMark = 20 * 0.1;
      else if (n >= 1.2 && n < 2.2) reachMark = 30 * 0.1;
      else if (n >= 2.2 && n < 3.2) reachMark = 40 * 0.1;
      else if (n >= 3.2 && n < 4.2) reachMark = 50 * 0.1;
      else if (n >= 4.2 && n < 5.6) reachMark = 60 * 0.1;
      else if (n >= 5.6 && n < 7) reachMark = 62 * 0.1;
      else if (n >= 7 && n < 8.4) reachMark = 64 * 0.1;
      else if (n >= 8.4 && n < 9.8) reachMark = 66 * 0.1;
      else if (n >= 9.8 && n < 11.2) reachMark = 68 * 0.1;
      else if (n >= 11.2 && n < 12.6) reachMark = 70 * 0.1;
      else if (n >= 12.6 && n < 14) reachMark = 72 * 0.1;
      else if (n >= 14 && n < 15.4) reachMark = 74 * 0.1;
      else if (n >= 15.4 && n < 16.8) reachMark = 76 * 0.1;
      else if (n >= 16.8 && n < 18.2) reachMark = 78 * 0.1;
      else if (n >= 18.2 && n < 19.9) reachMark = 80 * 0.1;
      else if (n >= 19.9 && n < 21.5) reachMark = 85 * 0.1;
      else if (n >= 21.5 && n < 23.3) reachMark = 90 * 0.1;
      else if (n >= 23.3 && n < 25.1) reachMark = 95 * 0.1;
      else if (n >= 25.1) reachMark = 100 * 0.1;
      break;
  }
  return reachMark;
}
//返回跳远成绩
function dealJumpG (n) {
  var jumpMark = 0;
  switch (app.globalData.grade) {
    case 1:
    case 2:
      if (n < 126) jumpMark = 0;
      else if (n >= 126 && n < 131) jumpMark = 10 * 0.1;
      else if (n >= 131 && n < 136) jumpMark = 20 * 0.1;
      else if (n >= 136 && n < 141) jumpMark = 30 * 0.1;
      else if (n >= 141 && n < 146) jumpMark = 40 * 0.1;
      else if (n >= 146 && n < 151) jumpMark = 50 * 0.1;
      else if (n >= 151 && n < 154) jumpMark = 60 * 0.1;
      else if (n >= 154 && n < 157) jumpMark = 62 * 0.1;
      else if (n >= 157 && n < 160) jumpMark = 64 * 0.1;
      else if (n >= 160 && n < 163) jumpMark = 66 * 0.1;
      else if (n >= 163 && n < 166) jumpMark = 68 * 0.1;
      else if (n >= 166 && n < 169) jumpMark = 70 * 0.1;
      else if (n >= 169 && n < 172) jumpMark = 72 * 0.1;
      else if (n >= 172 && n < 175) jumpMark = 74 * 0.1;
      else if (n >= 175 && n < 178) jumpMark = 76 * 0.1;
      else if (n >= 178 && n < 181) jumpMark = 78 * 0.1;
      else if (n >= 181 && n < 188) jumpMark = 80 * 0.1;
      else if (n >= 188 && n < 195) jumpMark = 85 * 0.1;
      else if (n >= 195 && n < 201) jumpMark = 90 * 0.1;
      else if (n >= 201 && n < 207) jumpMark = 95 * 0.1;
      else if (n >= 207) jumpMark = 100 * 0.1;
      break;
    case 3:
    case 4:
      if (n < 127) jumpMark = 0;
      else if (n >= 127 && n < 132) jumpMark = 10 * 0.1;
      else if (n >= 132 && n < 137) jumpMark = 20 * 0.1;
      else if (n >= 137 && n < 142) jumpMark = 30 * 0.1;
      else if (n >= 142 && n < 147) jumpMark = 40 * 0.1;
      else if (n >= 147 && n < 152) jumpMark = 50 * 0.1;
      else if (n >= 152 && n < 155) jumpMark = 60 * 0.1;
      else if (n >= 155 && n < 158) jumpMark = 62 * 0.1;
      else if (n >= 158 && n < 161) jumpMark = 64 * 0.1;
      else if (n >= 161 && n < 164) jumpMark = 66 * 0.1;
      else if (n >= 164 && n < 167) jumpMark = 68 * 0.1;
      else if (n >= 167 && n < 170) jumpMark = 70 * 0.1;
      else if (n >= 170 && n < 173) jumpMark = 72 * 0.1;
      else if (n >= 173 && n < 176) jumpMark = 74 * 0.1;
      else if (n >= 176 && n < 179) jumpMark = 76 * 0.1;
      else if (n >= 179 && n < 182) jumpMark = 78 * 0.1;
      else if (n >= 182 && n < 189) jumpMark = 80 * 0.1;
      else if (n >= 189 && n < 196) jumpMark = 85 * 0.1;
      else if (n >= 196 && n < 202) jumpMark = 90 * 0.1;
      else if (n >= 202 && n < 208) jumpMark = 95 * 0.1;
      else if (n >= 208) jumpMark = 100 * 0.1;
      break;
      break;
  }
  return jumpMark;
}
function dealJumpB (n) {
  var jumpMark = 0;
  switch (app.globalData.grade) {
    case 1:
    case 2:
      if (n < 183) jumpMark = 0;
      else if (n >= 183 && n < 188) jumpMark = 10 * 0.1;
      else if (n >= 188 && n < 193) jumpMark = 20 * 0.1;
      else if (n >= 193 && n < 198) jumpMark = 30 * 0.1;
      else if (n >= 198 && n < 203) jumpMark = 40 * 0.1;
      else if (n >= 203 && n < 208) jumpMark = 50 * 0.1;
      else if (n >= 208 && n < 212) jumpMark = 60 * 0.1;
      else if (n >= 212 && n < 216) jumpMark = 62 * 0.1;
      else if (n >= 216 && n < 220) jumpMark = 64 * 0.1;
      else if (n >= 220 && n < 224) jumpMark = 66 * 0.1;
      else if (n >= 224 && n < 228) jumpMark = 68 * 0.1;
      else if (n >= 228 && n < 232) jumpMark = 70 * 0.1;
      else if (n >= 232 && n < 236) jumpMark = 72 * 0.1;
      else if (n >= 236 && n < 240) jumpMark = 74 * 0.1;
      else if (n >= 240 && n < 244) jumpMark = 76 * 0.1;
      else if (n >= 244 && n < 248) jumpMark = 78 * 0.1;
      else if (n >= 248 && n < 256) jumpMark = 80 * 0.1;
      else if (n >= 256 && n < 263) jumpMark = 85 * 0.1;
      else if (n >= 263 && n < 268) jumpMark = 90 * 0.1;
      else if (n >= 268 && n < 273) jumpMark = 95 * 0.1;
      else if (n >= 273) jumpMark = 100 * 0.1;
      break;
    case 3:
    case 4:
      if (n < 185) jumpMark = 0;
      else if (n >= 185 && n < 190) jumpMark = 10 * 0.1;
      else if (n >= 190 && n < 195) jumpMark = 20 * 0.1;
      else if (n >= 195 && n < 200) jumpMark = 30 * 0.1;
      else if (n >= 200 && n < 205) jumpMark = 40 * 0.1;
      else if (n >= 205 && n < 210) jumpMark = 50 * 0.1;
      else if (n >= 210 && n < 214) jumpMark = 60 * 0.1;
      else if (n >= 214 && n < 218) jumpMark = 62 * 0.1;
      else if (n >= 218 && n < 222) jumpMark = 64 * 0.1;
      else if (n >= 222 && n < 226) jumpMark = 66 * 0.1;
      else if (n >= 226 && n < 230) jumpMark = 68 * 0.1;
      else if (n >= 230 && n < 234) jumpMark = 70 * 0.1;
      else if (n >= 234 && n < 238) jumpMark = 72 * 0.1;
      else if (n >= 238 && n < 242) jumpMark = 74 * 0.1;
      else if (n >= 242 && n < 246) jumpMark = 76 * 0.1;
      else if (n >= 246 && n < 250) jumpMark = 78 * 0.1;
      else if (n >= 250 && n < 258) jumpMark = 80 * 0.1;
      else if (n >= 258 && n < 265) jumpMark = 85 * 0.1;
      else if (n >= 265 && n < 270) jumpMark = 90 * 0.1;
      else if (n >= 270 && n < 275) jumpMark = 95 * 0.1;
      else if (n >= 275) jumpMark = 100 * 0.1;
      break;
  }
  return jumpMark;
}
//返回短跑成绩
function deal50G (n) {
  var shortRunMark = 0;
  console.log(n)
  switch (app.globalData.grade) {
    case 1:
    case 2:
      if (n > 11.3) shortRunMark = 0;
      else if (n <= 11.3 && n > 11.1) shortRunMark = 10 * 0.2;
      else if (n <= 11.1 && n > 10.9) shortRunMark = 20 * 0.2;
      else if (n <= 10.9 && n > 10.7) shortRunMark = 30 * 0.2;
      else if (n <= 10.7 && n > 10.5) shortRunMark = 40 * 0.2;
      else if (n <= 10.5 && n > 10.3) shortRunMark = 50 * 0.2;
      else if (n <= 10.3 && n > 10.1) shortRunMark = 60 * 0.2;
      else if (n <= 10.1 && n > 9.9) shortRunMark = 62 * 0.2;
      else if (n <= 9.9 && n > 9.7) shortRunMark = 64 * 0.2;
      else if (n <= 9.7 && n > 9.5) shortRunMark = 66 * 0.2;
      else if (n <= 9.5 && n > 9.3) shortRunMark = 68 * 0.2;
      else if (n <= 9.3 && n > 9.1) shortRunMark = 70 * 0.2;
      else if (n <= 9.1 && n > 8.9) shortRunMark = 72 * 0.2;
      else if (n <= 8.9 && n > 8.7) shortRunMark = 74 * 0.2;
      else if (n <= 8.7 && n > 8.5) shortRunMark = 76 * 0.2;
      else if (n <= 8.5 && n > 8.3) shortRunMark = 78 * 0.2;
      else if (n <= 8.3 && n > 8) shortRunMark = 80 * 0.2;
      else if (n <= 8 && n > 7.7) shortRunMark = 85 * 0.2;
      else if (n <= 7.7 && n > 7.6) shortRunMark = 90 * 0.2;
      else if (n <= 7.6 && n > 7.5) shortRunMark = 95 * 0.2;
      else if (n <= 7.5) shortRunMark = 100 * 0.2;
      break;
    case 3:
    case 4:
      if (n > 11.2) shortRunMark = 0;
      else if (n <= 11.2 && n > 11) shortRunMark = 10 * 0.2;
      else if (n <= 11 && n > 10.8) shortRunMark = 20 * 0.2;
      else if (n <= 10.8 && n > 10.6) shortRunMark = 30 * 0.2;
      else if (n <= 10.6 && n > 10.4) shortRunMark = 40 * 0.2;
      else if (n <= 10.4 && n > 10.2) shortRunMark = 50 * 0.2;
      else if (n <= 10.2 && n > 10) shortRunMark = 60 * 0.2;
      else if (n <= 10 && n > 9.8) shortRunMark = 62 * 0.2;
      else if (n <= 9.8 && n > 9.6) shortRunMark = 64 * 0.2;
      else if (n <= 9.6 && n > 9.4) shortRunMark = 66 * 0.2;
      else if (n <= 9.4 && n > 9.2) shortRunMark = 68 * 0.2;
      else if (n <= 9.2 && n > 9) shortRunMark = 70 * 0.2;
      else if (n <= 9 && n > 8.8) shortRunMark = 72 * 0.2;
      else if (n <= 8.8 && n > 8.6) shortRunMark = 74 * 0.2;
      else if (n <= 8.6 && n > 8.4) shortRunMark = 76 * 0.2;
      else if (n <= 8.4 && n > 8.2) shortRunMark = 78 * 0.2;
      else if (n <= 8.2 && n > 7.9) shortRunMark = 80 * 0.2;
      else if (n <= 7.9 && n > 7.6) shortRunMark = 85 * 0.2;
      else if (n <= 7.6 && n > 7.5) shortRunMark = 90 * 0.2;
      else if (n <= 7.5 && n > 7.4) shortRunMark = 95 * 0.2;
      else if (n <= 7.4) shortRunMark = 100 * 0.2;
      break;
  }
  return shortRunMark;
}
function deal50B (n) {
  var shortRunMark = 0;
  switch (app.globalData.grade) {
    case 1:
    case 2:
      if (n > 10.1) shortRunMark = 0;
      else if (n <= 10.1 && n > 9.9) shortRunMark = 10 * 0.2;
      else if (n <= 9.9 && n > 9.7) shortRunMark = 20 * 0.2;
      else if (n <= 9.7 && n > 9.5) shortRunMark = 30 * 0.2;
      else if (n <= 9.5 && n > 9.3) shortRunMark = 40 * 0.2;
      else if (n <= 9.3 && n > 9.1) shortRunMark = 50 * 0.2;
      else if (n <= 9.1 && n > 8.9) shortRunMark = 60 * 0.2;
      else if (n <= 8.9 && n > 8.7) shortRunMark = 62 * 0.2;
      else if (n <= 8.7 && n > 8.5) shortRunMark = 64 * 0.2;
      else if (n <= 8.5 && n > 8.3) shortRunMark = 66 * 0.2;
      else if (n <= 8.3 && n > 8.1) shortRunMark = 68 * 0.2;
      else if (n <= 8.1 && n > 7.9) shortRunMark = 70 * 0.2;
      else if (n <= 7.9 && n > 7.7) shortRunMark = 72 * 0.2;
      else if (n <= 7.7 && n > 7.5) shortRunMark = 74 * 0.2;
      else if (n <= 7.5 && n > 7.3) shortRunMark = 76 * 0.2;
      else if (n <= 7.3 && n > 7.1) shortRunMark = 78 * 0.2;
      else if (n <= 7.1 && n > 7) shortRunMark = 80 * 0.2;
      else if (n <= 7 && n > 6.9) shortRunMark = 85 * 0.2;
      else if (n <= 6.9 && n > 6.8) shortRunMark = 90 * 0.2;
      else if (n <= 6.8 && n > 6.7) shortRunMark = 95 * 0.2;
      else if (n <= 6.7) shortRunMark = 100 * 0.2;
      break;
    case 3:
    case 4:
      if (n > 10) shortRunMark = 0;
      else if (n <= 10 && n > 9.8) shortRunMark = 10 * 0.2;
      else if (n <= 9.8 && n > 9.6) shortRunMark = 20 * 0.2;
      else if (n <= 9.6 && n > 9.4) shortRunMark = 30 * 0.2;
      else if (n <= 9.4 && n > 9.3) shortRunMark = 40 * 0.2;
      else if (n <= 9.2 && n > 9) shortRunMark = 50 * 0.2;
      else if (n <= 9 && n > 8.8) shortRunMark = 60 * 0.2;
      else if (n <= 8.8 && n > 8.6) shortRunMark = 62 * 0.2;
      else if (n <= 8.6 && n > 8.4) shortRunMark = 64 * 0.2;
      else if (n <= 8.4 && n > 8.2) shortRunMark = 66 * 0.2;
      else if (n <= 8.2 && n > 8) shortRunMark = 68 * 0.2;
      else if (n <= 8 && n > 7.8) shortRunMark = 70 * 0.2;
      else if (n <= 7.8 && n > 7.6) shortRunMark = 72 * 0.2;
      else if (n <= 7.6 && n > 7.4) shortRunMark = 74 * 0.2;
      else if (n <= 7.4 && n > 7.2) shortRunMark = 76 * 0.2;
      else if (n <= 7.2 && n > 7) shortRunMark = 78 * 0.2;
      else if (n <= 7 && n > 6.9) shortRunMark = 80 * 0.2;
      else if (n <= 6.9 && n > 6.8) shortRunMark = 85 * 0.2;
      else if (n <= 6.8 && n > 6.7) shortRunMark = 90 * 0.2;
      else if (n <= 6.7 && n > 6.6) shortRunMark = 95 * 0.2;
      else if (n <= 6.6) shortRunMark = 100 * 0.2;
      break;
  }
  return shortRunMark;
}
//返回男生1000m成绩
function deal1000 (m,s) {
  if( isNaN(s)) s=0
  var n = m * 60 + s;
  var longRunMark = 0;
  switch (app.globalData.grade) {
    case 1:
    case 2:
      if (n > 372) longRunMark = 0;
      else if (n <= 372 && n > 352) longRunMark = 10 * 0.2
      else if (n <= 352 && n > 332) longRunMark = 20 * 0.2
      else if (n <= 332 && n > 312) longRunMark = 30 * 0.2
      else if (n <= 312 && n > 292) longRunMark = 40 * 0.2
      else if (n <= 292 && n > 272) longRunMark = 50 * 0.2
      else if (n <= 272 && n > 267) longRunMark = 60 * 0.2
      else if (n <= 267 && n > 262) longRunMark = 62 * 0.2
      else if (n <= 262 && n > 257) longRunMark = 64 * 0.2
      else if (n <= 257 && n > 252) longRunMark = 66 * 0.2
      else if (n <= 252 && n > 247) longRunMark = 68 * 0.2
      else if (n <= 247 && n > 242) longRunMark = 70 * 0.2
      else if (n <= 242 && n > 237) longRunMark = 72 * 0.2
      else if (n <= 237 && n > 232) longRunMark = 74 * 0.2
      else if (n <= 232 && n > 227) longRunMark = 76 * 0.2
      else if (n <= 227 && n > 222) longRunMark = 78 * 0.2
      else if (n <= 222 && n > 214) longRunMark = 80 * 0.2
      else if (n <= 214 && n > 207) longRunMark = 85 * 0.2
      else if (n <= 207 && n > 202) longRunMark = 90 * 0.2
      else if (n <= 202 && n > 197) longRunMark = 95 * 0.2
      else if (n <= 197 && n > 193) longRunMark = 100 * 0.2
      else if (n <= 193 && n > 189) longRunMark = 100 * 0.2 + 1
      else if (n <= 189 && n > 185) longRunMark = 100 * 0.2 + 2
      else if (n <= 185 && n > 181) longRunMark = 100 * 0.2 + 3
      else if (n <= 181 && n > 177) longRunMark = 100 * 0.2 + 4
      else if (n <= 177 && n > 174) longRunMark = 100 * 0.2 + 5
      else if (n <= 174 && n > 171) longRunMark = 100 * 0.2 + 6
      else if (n <= 171 && n > 168) longRunMark = 100 * 0.2 + 7
      else if (n <= 168 && n > 165) longRunMark = 100 * 0.2 + 8
      else if (n <= 165 && n > 162) longRunMark = 100 * 0.2 + 9
      else if (n <= 162 ) longRunMark = 100 * 0.2 + 10
      break;
    case 3:
    case 4:
      if (n > 370) longRunMark = 0;
      else if (n <= 370 && n > 350) longRunMark = 10 * 0.2
      else if (n <= 350 && n > 330) longRunMark = 20 * 0.2
      else if (n <= 330 && n > 310) longRunMark = 30 * 0.2
      else if (n <= 310 && n > 290) longRunMark = 40 * 0.2
      else if (n <= 290 && n > 270) longRunMark = 50 * 0.2
      else if (n <= 270 && n > 265) longRunMark = 60 * 0.2
      else if (n <= 265 && n > 260) longRunMark = 62 * 0.2
      else if (n <= 260 && n > 255) longRunMark = 64 * 0.2
      else if (n <= 255 && n > 250) longRunMark = 66 * 0.2
      else if (n <= 250 && n > 245) longRunMark = 68 * 0.2
      else if (n <= 245 && n > 240) longRunMark = 70 * 0.2
      else if (n <= 240 && n > 235) longRunMark = 72 * 0.2
      else if (n <= 235 && n > 230) longRunMark = 74 * 0.2
      else if (n <= 230 && n > 225) longRunMark = 76 * 0.2
      else if (n <= 225 && n > 220) longRunMark = 78 * 0.2
      else if (n <= 220 && n > 212) longRunMark = 80 * 0.2
      else if (n <= 212 && n > 205) longRunMark = 85 * 0.2
      else if (n <= 205 && n > 200) longRunMark = 90 * 0.2
      else if (n <= 200 && n > 195) longRunMark = 95 * 0.2
      else if (n <= 195 && n > 191) longRunMark = 100 * 0.2
      else if (n <= 191 && n > 187) longRunMark = 100 * 0.2 + 1
      else if (n <= 187 && n > 183) longRunMark = 100 * 0.2 + 2
      else if (n <= 183 && n > 179) longRunMark = 100 * 0.2 + 3
      else if (n <= 179 && n > 175) longRunMark = 100 * 0.2 + 4
      else if (n <= 175 && n > 172) longRunMark = 100 * 0.2 + 5
      else if (n <= 172 && n > 169) longRunMark = 100 * 0.2 + 6
      else if (n <= 169 && n > 166) longRunMark = 100 * 0.2 + 7
      else if (n <= 166 && n > 163) longRunMark = 100 * 0.2 + 8
      else if (n <= 163 && n > 161) longRunMark = 100 * 0.2 + 9
      else if (n <= 161) longRunMark = 100 * 0.2 + 10
      break; 
  }
  return longRunMark;
}
//返回女生800m成绩
function deal800 (m,s) {
  if( isNaN(s)) s = 0
  var n = m * 60 + s;
  var longRunMark = 0;
  switch (app.globalData.grade) {
    case 1:
    case 2:
      if (n > 324) longRunMark = 0;
      else if (n <= 324 && n > 314) longRunMark = 10 * 0.2
      else if (n <= 314 && n > 304) longRunMark = 20 * 0.2
      else if (n <= 304 && n > 294) longRunMark = 30 * 0.2
      else if (n <= 294 && n > 284) longRunMark = 40 * 0.2
      else if (n <= 284 && n > 274) longRunMark = 50 * 0.2
      else if (n <= 274 && n > 269) longRunMark = 60 * 0.2
      else if (n <= 269 && n > 264) longRunMark = 62 * 0.2
      else if (n <= 264 && n > 259) longRunMark = 64 * 0.2
      else if (n <= 259 && n > 254) longRunMark = 66 * 0.2
      else if (n <= 254 && n > 249) longRunMark = 68 * 0.2
      else if (n <= 249 && n > 244) longRunMark = 70 * 0.2
      else if (n <= 244 && n > 239) longRunMark = 72 * 0.2
      else if (n <= 239 && n > 234) longRunMark = 74 * 0.2
      else if (n <= 234 && n > 229) longRunMark = 76 * 0.2
      else if (n <= 229 && n > 224) longRunMark = 78 * 0.2
      else if (n <= 224 && n > 217) longRunMark = 80 * 0.2
      else if (n <= 217 && n > 210) longRunMark = 85 * 0.2
      else if (n <= 210 && n > 204) longRunMark = 90 * 0.2
      else if (n <= 204 && n > 198) longRunMark = 95 * 0.2
      else if (n <= 198 && n > 193) longRunMark = 100 * 0.2
      else if (n <= 193 && n > 188) longRunMark = 100 * 0.2 + 1
      else if (n <= 188 && n > 183) longRunMark = 100 * 0.2 + 2
      else if (n <= 183 && n > 178) longRunMark = 100 * 0.2 + 3
      else if (n <= 178 && n > 173) longRunMark = 100 * 0.2 + 4
      else if (n <= 173 && n > 168) longRunMark = 100 * 0.2 + 5
      else if (n <= 168 && n > 163) longRunMark = 100 * 0.2 + 6
      else if (n <= 163 && n > 158) longRunMark = 100 * 0.2 + 7
      else if (n <= 158 && n > 153) longRunMark = 100 * 0.2 + 8
      else if (n <= 153 && n > 148) longRunMark = 100 * 0.2 + 9
      else if (n <= 148) longRunMark = 100 * 0.2 + 10
      break;
    case 3:
    case 4:
      if (n > 322) longRunMark = 0;
      else if (n <= 322 && n > 312) longRunMark = 10 * 0.2
      else if (n <= 312 && n > 302) longRunMark = 20 * 0.2
      else if (n <= 302 && n > 292) longRunMark = 30 * 0.2
      else if (n <= 292 && n > 282) longRunMark = 40 * 0.2
      else if (n <= 282 && n > 272) longRunMark = 50 * 0.2
      else if (n <= 272 && n > 267) longRunMark = 60 * 0.2
      else if (n <= 267 && n > 262) longRunMark = 62 * 0.2
      else if (n <= 262 && n > 257) longRunMark = 64 * 0.2
      else if (n <= 257 && n > 252) longRunMark = 66 * 0.2
      else if (n <= 252 && n > 247) longRunMark = 68 * 0.2
      else if (n <= 247 && n > 242) longRunMark = 70 * 0.2
      else if (n <= 242 && n > 237) longRunMark = 72 * 0.2
      else if (n <= 237 && n > 232) longRunMark = 74 * 0.2
      else if (n <= 232 && n > 227) longRunMark = 76 * 0.2
      else if (n <= 227 && n > 222) longRunMark = 78 * 0.2
      else if (n <= 222 && n > 215) longRunMark = 80 * 0.2
      else if (n <= 215 && n > 208) longRunMark = 85 * 0.2
      else if (n <= 208 && n > 202) longRunMark = 90 * 0.2
      else if (n <= 202 && n > 196) longRunMark = 95 * 0.2
      else if (n <= 196 && n > 191) longRunMark = 100 * 0.2
      else if (n <= 191 && n > 186) longRunMark = 100 * 0.2 + 1
      else if (n <= 186 && n > 181) longRunMark = 100 * 0.2 + 2
      else if (n <= 181 && n > 176) longRunMark = 100 * 0.2 + 3
      else if (n <= 176 && n > 171) longRunMark = 100 * 0.2 + 4
      else if (n <= 171 && n > 166) longRunMark = 100 * 0.2 + 5
      else if (n <= 166 && n > 161) longRunMark = 100 * 0.2 + 6
      else if (n <= 161 && n > 156) longRunMark = 100 * 0.2 + 7
      else if (n <= 156 && n > 151) longRunMark = 100 * 0.2 + 8
      else if (n <= 151 && n > 146) longRunMark = 100 * 0.2 + 9
      else if (n <= 146) longRunMark = 100 * 0.2 + 10
      break;
  }
  return longRunMark;
}
//返回引体向上成绩
function dealPullUp (n) {
  var upMark = 0;
  switch (app.globalData.grade) {
    case 1:
    case 2:
      if (n < 5) upMark = 0;
      else if (n >= 5 && n < 6) upMark = 10 * 0.1;
      else if (n >= 6 && n < 7) upMark = 20 * 0.1;
      else if (n >= 7 && n < 8) upMark = 30 * 0.1;
      else if (n >= 8 && n < 9) upMark = 40 * 0.1;
      else if (n >= 9 && n < 10) upMark = 50 * 0.1;
      else if (n >= 10 && n < 11) upMark = 60 * 0.1;
      else if (n >= 11 && n < 12) upMark = 64 * 0.1; 
      else if (n >= 12 && n < 13) upMark = 68 * 0.1;
      else if (n >= 13 && n < 14) upMark = 72 * 0.1;
      else if (n >= 14 && n < 15) upMark = 76 * 0.1;
      else if (n >= 15 && n < 16) upMark = 80 * 0.1;
      else if (n >= 16 && n < 17) upMark = 85 * 0.1;
      else if (n >= 17 && n < 18) upMark = 90 * 0.1;
      else if (n >= 18 && n < 19) upMark = 95 * 0.1;
      else if (n >= 19 && n < 20) upMark = 100 * 0.1;
      else if (n >= 20 && n < 21) upMark = 10 + 1;
      else if (n >= 21 && n < 22) upMark = 10 + 2;
      else if (n >= 22 && n < 23) upMark = 10 + 3;
      else if (n >= 23 && n < 24) upMark = 10 + 4;
      else if (n >= 24 && n < 25) upMark = 10 + 5;
      else if (n >= 25 && n < 26) upMark = 10 + 6;
      else if (n >= 26 && n < 27) upMark = 10 + 7;
      else if (n >= 27 && n < 28) upMark = 10 + 8;
      else if (n >= 28 && n < 29) upMark = 10 + 9;
      else if (n >= 29) upMark = 10 + 10;
      break;
    case 3:
    case 4:
      if (n < 6) upMark = 0;
      else if (n >= 6 && n < 7) upMark = 10 * 0.1;
      else if (n >= 7 && n < 8) upMark = 20 * 0.1;
      else if (n >= 8 && n < 9) upMark = 30 * 0.1;
      else if (n >= 9 && n < 10) upMark = 40 * 0.1;
      else if (n >= 10 && n < 11) upMark = 50 * 0.1;
      else if (n >= 11 && n < 12) upMark = 60 * 0.1;
      else if (n >= 12 && n < 13) upMark = 64 * 0.1;
      else if (n >= 13 && n < 14) upMark = 68 * 0.1;
      else if (n >= 14 && n < 15) upMark = 72 * 0.1;
      else if (n >= 15 && n < 16) upMark = 76 * 0.1;
      else if (n >= 16 && n < 17) upMark = 80 * 0.1;
      else if (n >= 17 && n < 18) upMark = 85 * 0.1;
      else if (n >= 18 && n < 19) upMark = 90 * 0.1;
      else if (n >= 19 && n < 20) upMark = 95 * 0.1;
      else if (n >= 20 && n < 21) upMark = 100 * 0.1;
      else if (n >= 21 && n < 22) upMark = 10 + 1;
      else if (n >= 22 && n < 23) upMark = 10 + 2;
      else if (n >= 23 && n < 24) upMark = 10 + 3;
      else if (n >= 24 && n < 25) upMark = 10 + 4;
      else if (n >= 25 && n < 26) upMark = 10 + 5;
      else if (n >= 26 && n < 27) upMark = 10 + 6;
      else if (n >= 27 && n < 28) upMark = 10 + 7;
      else if (n >= 28 && n < 29) upMark = 10 + 8;
      else if (n >= 29 && n < 30) upMark = 10 + 9;
      else if (n >= 30) upMark = 10 + 10;
      break;
  }
  return upMark;
}
//返回仰卧起坐成绩
function dealSitUp (n) {
  var upMark = 0
  switch (app.globalData.grade) {
    case 1:
    case 2:
      if (n < 16) upMark = 0;
      else if (n >= 16 && n < 18) upMark = 10 * 0.1;
      else if (n >= 18 && n < 20) upMark = 20 * 0.1;
      else if (n >= 20 && n < 22) upMark = 30 * 0.1;
      else if (n >= 22 && n < 24) upMark = 40 * 0.1;
      else if (n >= 24 && n < 26) upMark = 50 * 0.1;
      else if (n >= 26 && n < 28) upMark = 60 * 0.1;
      else if (n >= 28 && n < 30) upMark = 62 * 0.1;
      else if (n >= 30 && n < 32) upMark = 64 * 0.1;
      else if (n >= 32 && n < 34) upMark = 66 * 0.1;
      else if (n >= 34 && n < 36) upMark = 68 * 0.1;
      else if (n >= 36 && n < 38) upMark = 70 * 0.1;
      else if (n >= 38 && n < 40) upMark = 72 * 0.1;
      else if (n >= 40 && n < 42) upMark = 74 * 0.1;
      else if (n >= 42 && n < 44) upMark = 76 * 0.1;
      else if (n >= 44 && n < 46) upMark = 78 * 0.1;
      else if (n >= 46 && n < 49) upMark = 80 * 0.1;
      else if (n >= 49 && n < 52) upMark = 85 * 0.1;
      else if (n >= 52 && n < 54) upMark = 90 * 0.1;
      else if (n >= 54 && n < 56) upMark = 95 * 0.1;
      else if (n >= 56 && n < 58) upMark = 100 * 0.1;
      else if (n >= 58 && n < 60) upMark = 10 + 1;
      else if (n >= 60 && n < 62) upMark = 10 + 2;
      else if (n >= 62 && n < 63) upMark = 10 + 3;
      else if (n >= 63 && n < 64) upMark = 10 + 4;
      else if (n >= 64 && n < 65) upMark = 10 + 5;
      else if (n >= 65 && n < 66) upMark = 10 + 6;
      else if (n >= 66 && n < 67) upMark = 10 + 7;
      else if (n >= 67 && n < 68) upMark = 10 + 8;
      else if (n >= 68 && n < 69) upMark = 10 + 9;
      else if (n >= 69) upMark = 10 + 10;
      break;
    case 3:
    case 4:
      if (n < 17) upMark = 0;
      else if (n >= 17 && n < 19) upMark = 10 * 0.1;
      else if (n >= 19 && n < 21) upMark = 20 * 0.1;
      else if (n >= 21 && n < 23) upMark = 30 * 0.1;
      else if (n >= 23 && n < 25) upMark = 40 * 0.1;
      else if (n >= 25 && n < 27) upMark = 50 * 0.1;
      else if (n >= 27 && n < 29) upMark = 60 * 0.1;
      else if (n >= 29 && n < 31) upMark = 62 * 0.1;
      else if (n >= 31 && n < 33) upMark = 64 * 0.1;
      else if (n >= 33 && n < 35) upMark = 66 * 0.1;
      else if (n >= 35 && n < 37) upMark = 68 * 0.1;
      else if (n >= 37 && n < 39) upMark = 70 * 0.1;
      else if (n >= 39 && n < 41) upMark = 72 * 0.1;
      else if (n >= 41 && n < 43) upMark = 74 * 0.1;
      else if (n >= 43 && n < 45) upMark = 76 * 0.1;
      else if (n >= 45 && n < 47) upMark = 78 * 0.1;
      else if (n >= 47 && n < 50) upMark = 80 * 0.1;
      else if (n >= 50 && n < 53) upMark = 85 * 0.1;
      else if (n >= 53 && n < 55) upMark = 90 * 0.1;
      else if (n >= 55 && n < 57) upMark = 95 * 0.1;
      else if (n >= 57 && n < 59) upMark = 100 * 0.1;
      else if (n >= 59 && n < 61) upMark = 10 + 1;
      else if (n >= 61 && n < 63) upMark = 10 + 2;
      else if (n >= 63 && n < 64) upMark = 10 + 3;
      else if (n >= 64 && n < 65) upMark = 10 + 4;
      else if (n >= 65 && n < 66) upMark = 10 + 5;
      else if (n >= 66 && n < 67) upMark = 10 + 6;
      else if (n >= 67 && n < 68) upMark = 10 + 7;
      else if (n >= 68 && n < 69) upMark = 10 + 8;
      else if (n >= 69 && n < 70) upMark = 10 + 9;
      else if (n >= 70) upMark = 10 + 10;
      break;
  }
  return upMark;
}

//返回评级
function getLevel(n){
  var level = ""

  if (n >= 90) level = "优秀"
  else if (n < 90 && n >= 80) level = "良好"
  else if (n < 80 && n >= 60) level = "及格"
  else if (n < 60) level = "不及格"

  return level
}
//返回各指标原始分和评级(及个别加分项)
function initBmi(){
  var level = ""
  var m = parseInt(app.globalData.bmiMark / 0.15)
  level = getLevel(m)
  return [m, level]
} 
function initLungMark(){
  var level = ""
  var m = parseInt(app.globalData.lungMark / 0.15)
  level = getLevel(m)
  return [m, level]
}
function initReachMark(){
  var level = ""
  var m = parseInt(app.globalData.reachMark * 10)
  level = getLevel(m)
  return [m, level]
}
function initJumpMark(){
  var level =""
  var m = parseInt(app.globalData.jumpMark * 10)
  level = getLevel(m)
  return [m, level]
}
function initShortRunMark(){
  var level = ""
  var m = parseInt(app.globalData.shortRunMark * 5)
  level = getLevel(m)
  return [m, level]
}
function initLongRunMark(){
  var level = ""
  var m , a='-'
  if (app.globalData.longRunMark > 20) {
    m = 100
    a = parseInt(app.globalData.longRunMark - 20)
  } else {
    m = parseInt(app.globalData.longRunMark * 5)
  }
  level = getLevel(m)
  return [m, level, a]
}
function initUpMark(){
  var level = ""
  var m, a='-'
  if (app.globalData.upMark > 10) {
    m = 100
    a = parseInt(app.globalData.upMark - 10)
  } else {
    m = parseInt(app.globalData.upMark * 10)
  }
  level = getLevel(m)
  return [m, level, a]
}
