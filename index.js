function takeANumber (line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}


function nowServing(deliLine){
  if (deliLine.length === 0){
    return `There is nobody waiting to be served!`
  }
  else {
    return `Currently serving ${deliLine.shift()}.`;
  }
}


function currentLine (line){
  if (line.length === 0){
    return `The line is currently empty.`
  }
  else {
    var lineCur = `The line is currently: `;

    for (let i = 0; i < line.length ; i++){
      lineCur += `${i+1}. ${line[i]}`
      if (i !== line.length -1){
        lineCur += `, `
      }
    }
    return lineCur;
  }
  
}