import React from "react";

const DatetoDay = ({ date }) => {
  let removesdashes = ''

  for(var i=0 ; i<date.length ; i++){
    if(date[i]!=="-"){
        removesdashes+=date[i]
    }
  }

  console.log(removesdashes);
  
    let currentdate = new Date().toJSON().slice(0, 10)

  let currentremovesdashes = ''

  for(var j=0 ; j<currentdate.length ; j++){
    if(currentdate[j]!=="-"){
        currentremovesdashes+=currentdate[j]
    }
  }
  console.log(currentremovesdashes);

  let ConvertDatetoDays = Number(currentremovesdashes)- Number(removesdashes) ;
  return <div>{`${ConvertDatetoDays}d ago`}</div>;
};

export default DatetoDay;
