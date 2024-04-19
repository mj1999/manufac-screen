import wineData from "./Wine-Data.json";

//function to seperate data classwise based on alcohol value
export function processFlavData() {
  const processedData = [];
  wineData.forEach((el) => {
    if (!processedData[el.Alcohol - 1]) {
      processedData[el.Alcohol - 1] = [];
    }
    const item = Number(el.Flavanoids);
    processedData[el.Alcohol - 1].push(item);
  });
  return processedData;
}

// function to seperate data classwise based on calculated gamma values
export function processGammaData() {
  const processedData = [];
  wineData.forEach((el) => {
    if (!processedData[el.Alcohol - 1]) {
      processedData[el.Alcohol - 1] = [];
    }
    const item = (el.Ash * el.Hue) / el.Magnesium; //gamma calculated based on values mentioned
    processedData[el.Alcohol - 1].push(item);
  });

  return processedData;
}

//function to calculate mean,median mode values
export function calculate(data) {
  data.map((item) => item.sort()); // sorting values in classwise seperated data so that we dont have to calculate it each time to get median of seperate class data
  const mean = [];
  const median = [];
  const mode = [];
  data.forEach((item) => {
    // bounding result to 3 decimal places and adding to result array
    mean.push(calcMean(item).toFixed(3));
    median.push(calcMedian(item).toFixed(3));
    mode.push(calcMode(item).toFixed(3));
  });
  return { mean, median, mode };
}

function calcMean(arr) {
  return arr.reduce((sum, el) => sum + el);
}
function calcMedian(arr) {
  return arr.length % 2 === 0
    ? (arr[Math.round(arr.length / 2)] + // conditional statement to calculate median based on odd or even length of elements
        arr[Math.round(arr.length / 2 - 1)]) /
        2
    : arr[Math.round(arr.length / 2)];
}

//function to calculate mode from given sorted array
function calcMode(arr) {
  let freq = 0;
  let max = 0;
  let curr = arr[0];
  let mode = arr[0];
  for (let num of arr) {
    if (num === curr) {
      freq++;
    } else {
      freq = 1;
      curr = num;
    }
    if (freq > max) {
      max = freq;
      mode = curr;
    }
  }
  return mode;
}
