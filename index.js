string=["nnn","hhhggh","gggg"]
const max=
string.map((e)=>{
    return {word:e,
    length: e.length }}).reduce((acc,cur)=>{ return acc.length> cur.length ? acc : cur})
    console.log(max)
const input=[
    ["a","b","z"],
    ["p","o","o"],
    ["h","y","u"],
]
const output = input.flat().reduce((acc, curr) => {
    if (acc[curr])
        acc[curr] += 1;
    else
        acc[curr] = 1;
    return acc;
}, {});

console.log(output);
    
 
