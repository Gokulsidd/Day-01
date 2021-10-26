// var request=new XMLHttpRequest()
// request.open('GET','https://restcountries.com/v2/all',true);
// request.send();
// request.onload=function(){
//     var data=JSON.parse(request.response);
//     var res=data.filter((ele)=>ele.population<100000)
//     console.log(res.map((ele)=>ele))
//     var student=[{
//         name:'alice',
//         marks:60
//     },{
//         name:'bob',
//         marks:70
//     },{
//         name:'mark',
//         marks:80
//     }];
//     var res1=student.filter((ele)=>ele.marks>60);
//     console.log(res1.map((ele)=>ele.name))
    var array=prompt();
    console.log(array)
    var arr1=[0].split(" ");
    arr1.push(array);
    console.log(arr1[0])
    var res2=array.Filter((ele)=>ele>1)
    console.log(res2);
    // }
