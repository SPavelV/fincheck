import {greenColorArr, redColorArr} from './common-styles.js';

export function separateValue(value) {
  return ('' + value).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

export function hidePartNumberCreditCard(value) {
  return (value).replace(/\d(?=\d{4})/g, "*");
}

export function getCurrentColor(transactionType='income') {
  const colorArr = transactionType === 'income' ? greenColorArr : redColorArr;
  let iColor = 0;
  const getColor = () => {
    if(iColor === colorArr.length) iColor = 0;
    let colorBar =  colorArr[iColor];
    iColor++;
    return colorBar;
  }

  return getColor;
}

export function getTransactionData(data, typeTransaction) {
  if(!Array.isArray(data) || data.length === 0) {
    
    return;
  };
  return data.filter(element=> element.category === typeTransaction);
}

export function getTransactionName(data,typeTransaction,name) {
  if(!Array.isArray(data) || data.length === 0) {
    
    return;
  };
  return data.filter(element => element.category === typeTransaction && element.name===name);
}

export function getRightAmountData(data, amount = 10, startIndex = 0){
  if(!Array.isArray(data) || data.length === 0) {
    
    return;
  };
  return data.filter((element, i) => i >= startIndex && i < amount + startIndex );
}

export function getDataToChart(data, maxItems = data.length,typeChart = 'line') {
  if(!Array.isArray(data) || data.length === 0) {
    
    return;
  };

  if(typeChart === 'line') {
    const dataChart = {};
    data.forEach((element, i) => {
      if(i < maxItems) {
        dataChart[element.name + i] = element.sum;
      }
    })
    return [dataChart];
  }

  if(typeChart === 'pie') {
    
    return data.map((element, i) => {
      if(i < maxItems) {
        const {name, sum: value} = element;
        return {name,value};
      }
    })

  }
  
}

export function sortByDate(data){
  if(!Array.isArray(data) || data.length === 0) {
    
    return;
  };
  
  return [...data.sort((el1, el2) => {
    const date1 = new Date(el1["date"]);
    const date2 = new Date(el2["date"]);
    return date2 - date1;
  })];
};

export function sortBySum(data) {
  if(!Array.isArray(data) || data.length === 0) {
    
    return;
  };

  return [...data.sort((el1, el2) => {
    return el1['sum'] - el2['sum'];
  })];
}

export function getArrValues(data, propName) {
  if(!Array.isArray(data) || data.length === 0) {
    
    return;
  };
  return  data.map(item => item[propName]);
}

export function getSum(data, callback) {
  if(!Array.isArray(data) || data.length === 0) {
    
    return;
  };

  const sum = data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  })

  if(!callback) return sum;

  return callback(sum);
}

export function formatDate(date) {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  };
  const dateFormat =  new Date(date);
  return dateFormat.toLocaleString("ru",options);
}

