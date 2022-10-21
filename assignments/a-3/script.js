const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}ºC in 1 
days ... ${data1[1]}ºC in 2 days ... ${data1[2]}ºC in 3 days ...`);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ...`;
  }
  console.log("... " + str);
};

printForecast(data1);
printForecast(data2);
