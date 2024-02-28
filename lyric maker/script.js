function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const collectiveLyric = {
    subjectPart: ['Tu', 'Yo', 'Ella', 'El'],
    lyricOutput: ['amaba', 'envidiava', 'odiaba', 'deseaba', 'pensaba'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
  }
  
  // Store the 'lyiric' in an array
  let personalWisdom = []
  
  // Iterate over the object
  for(let prop in collectiveLyric) {
    let optionIdx = generateRandomNumber(collectiveLyric[prop].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
      case 'subjectPart':
        personalWisdom.push(`Antes "${collectiveLyric[prop][optionIdx]}"`)
        break
      case 'lyricOutput':
        personalWisdom.push(` "${collectiveLyric[prop][optionIdx]}" todo.`)
        break
      case 'advice':
        personalWisdom.push(`You should: "${collectiveLyric[prop][optionIdx]}".`)
        break
      default:
        personalWisdom.push('There is not enough info.')
    }
  }
  
  function formatWisdom(wisdom) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(personalWisdom);