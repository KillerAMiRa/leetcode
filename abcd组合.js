function combinationNum(str) {
  let arr = str.split('')
  let as = []
  for (let i = 0; i < arr.length; i++) {
    as.push(arr[i])
  }
  console.log('--- arr', as)

}
// perm function
var perm = function(s) {
  var result = []
  if (s.length <= 1) {
    return [s]
  } else {
    for (var i = 0; i < s.length; i++) {
      var c = s[i]
      var newStr = s.slice(0, i) + s.slice(i + 1, s.length)
      var l = perm(newStr)

      for (var j = 0; j < l.length; j++) {
        var tmp = c + l[j]
        result.push(tmp)
      }
    }
  }
  return result
}

// n  4  3  5  6   7
// 2 8 24 120 720 5040
console.log(perm('abcdefg').length)
// combinationNum('abcd')