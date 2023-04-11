// console.log(1111);
const fs  = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname,'/test.html'),'utf8',function (err,data) {
    if (err) {
        return console.log('读取失败'+ err.message);
    }
    console.log('文件读取成功,内容是'+ data);
})
// fs.writeFile('./2.txt','aaa',function (err,res) {
//     if (err) {
//         console.log(err.message);
//     }
//     console.log('写入成功');
//     // if (undefined) {
//     //     console.log('undefined是true');
//     // }else {
//     //     console.log('undefined是false');
//     // }
// })
let data={
    name:"张三",
    tel:'1008611',
    age:"180"
}
//将javascript对象转换为json字符串
data = JSON.stringify(data, undefined, 4);
// console.log('11',__dirname);
// fs.writeFile(__dirname + '/test1.json',data,err=>{
//     if(err){
//         console.log('写入出错了');
//     }else{
//         console.log('文件写入成功');
//     }
// })
// let path1 = path.join(__dirname,'./test1.json')
// console.log(path1);
