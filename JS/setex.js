const myset = new Set()
console.log(myset);
myset.add(24);
myset.add(21);
myset.add(17);
myset.add(24);
myset.add(21);
console.log(myset)

myset.add(69)
console.log(myset)
const num = [1,2,3,4,5,6]
const a1 = num.filter((n)=>{
    return (n%2 == 0);
})
console.log(a1);

const a2 = num.reduce((n)=>{
    return (n+=n);
})
console.log(a2);
