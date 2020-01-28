function segmentWord(input, words) {
  if (input.length === 0) return true

  let dp = Array(input.length + 1).fill(false)

  for (let i = 1; i <= input.length; i++) {
    if (!dp[i] && words.includes(input.slice(0, i))) dp[i] = true

    if (dp[i]) {
      if (i === input.length) return true
    }
  }
}

console.log(segmentWord('hellohowareyou', ['are', 'you', 'how', 'hello']))
console.log(segmentWord('whoareyou', ['are', 'you', 'who']))
console.log(segmentWord('whoareyou', ['whoar', 'who', 'are', 'reyo', 'you']))
console.log(segmentWord('whereami', ['am', 'i', 'where']))
