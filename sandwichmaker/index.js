function makeSandwich(bread){
    return function (ingredients){
      let order = `You ordered a ${bread} sandwich with: `
  
      for (let i = 0; i < ingredients.length; i++){
        if (i === ingredients.length -1 && i ===0) {
          order += `and ${ingredients [i]},`
        } else if (ingredients.length ===1) {
          order += `${ingredients [i]}`
        } else {
          order += `${ingredients [i]}`  
        }
      }
      return order
    }
  }
  
  const makeWheatSandwich = makeSandwich('wheat');
  const makeRyeSandwich = makeSandwich('rye');
  
  console.log(makeRyeSandwich(['bacon, ', 'lettuce, ', 'tomato.']))