// Not a number received if trying to parseInt a non-digit char,
// appropriate check: str.isNan(), also regex usage:  entry.match(/^[0-9]+$/)
console.log(parseInt('a'))

// Create (1)30-count array and (2)an array from 0 to 9
console.log(Array(30))
   var  ary = [...Array(10).keys()]
console.log(ary)

// using count of array to do something at each element. (can also use the element as well)
ary.map((n)=>{
   console.log(n+'abcd')
})

// dictionary
d1 = {
   a:'1', b:'2',c:'3'
}
d2 = {
   x:'50',y:'79',z:'99'
}
console.l
// dictionary merging; individual element can be added or the whole dictionary can also be added
d3 = {...d1.a,...d2.z,...d2}
console.log(d3)

console.log(Math.log2(25))

