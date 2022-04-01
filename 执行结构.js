const a = { b: 3 }

function foo(obj) {
  obj.b = 5

  return obj
}

const aa = foo(a)

// console.log(a.b)
// console.log(aa.b)


function Ofo() {}

function Bick() {
  this.name = 'mybick'
}

var myBick = new Ofo()
Ofo.prototype = new Bick()

var youBick = new Bick()

// console.log(myBick)
// console.log(youBick.name)


/**
 *  1. 拆箱 装箱
 *  3. function fn(a, b) {}  fn.length
 *  4. a == 1 && a == 2 && a == 3
 *  123['toString'].length
 */

const obj = {
  a: 1
}
let temp = 1

Object.defineProperty(obj, 'a', {
  get() {
    temp++
    return temp
  },
  set(val) {
    console.log('--- val', val)
    temp = val
  }
})

// console.log(obj.a === 1 && obj.a === 2 && obj.a === 3)

let handle = {
  get(obj, prop) {
    // temp++
    console.log('--- temp', obj, prop)
    return temp
  },
  set(val) {
    console.log('--- val', val)
    temp = val
  }
}
let pro = new Proxy(obj, handle)
// console.log('--- pro', pro)
// console.log(pro.a === 1 && pro.a === 2 && pro.a === 3)

