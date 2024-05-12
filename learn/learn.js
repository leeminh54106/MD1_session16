// function a(ngay,thang){
//     console.log(`xin chao ${ngay}/${thang}`);
// }

// let b =a(1,2);

//--------------------------------------------------------------------------------
// viết một hàm có tham số truyền vào là một số được nhập từ prompt.
// trong hàm xử lý:kiểm tra số được truyền vào (2 đến 8),in ra các thứ trong tuần

// let thu;
// do{
//     thu = +prompt('nhap thu: ');
// } while(thu < 2 || thu > 8)

//     function logthu(n){
//         switch(n){
//             case 8:
//                 console.log('chu nhat');
//                 break;
//             default:
//                 console.log(`thu ${n}`);
//                 break;
//         }
//     }
//     logthu(thu);

//--------------------------------------------------------------------------------

//chuyển độ C sang K, K = c+273;

// function chuyen(doC){
//     let i = doC + 273;
      
//         return i;
// }
// let a = chuyen(150);
// console.log(a);

// if(a > 200 && a < 400){
//     console.log('bt');
// }else if(a > 400 && a < 500){
//     console.log('bi sot');
// }else{
//     alert('loi roi');
// }

//--------------------------------------------------------------------------------
//  tự khai báo hai biến a,b ngẫu nhiên tùy thích;
//  viết function tăng a, b lên 10 đơn vị; có return ra a,b;
//  log a,b trước khi gọi hàm, trong hàm , sau khi gọi hàm.


// let a = 30;
// let b = 20;
// console.log(a,b);

//  function up(a,b){
//     let c = (`${a + 10} va ${b + 10}`)
//     console.log(c);
//     return c;
//  }

// let c = up(a,b);
// console.log(a,b);

//--------------------------------------------------------------------------------

// khai  báo 1 mảng
// function sắp xếp theo chiều giảm dần có dùng sort
// log mảng trước, trong ,sau khi gọi hàm

// let arr = [5,4,6,1,2,3];
// console.log(arr);
// function thutu(arr){
//    arr.sort((a,b) => b - a);
//     console.log(arr);

// }
// thutu(arr)
// console.log(arr);

//--------------------------------------------------------------------------------

// const arr = [23, 34, 12, 11, 5, 9, 55, 61];
// console.log(arr);

// // ham redece
// function sum(arr){
//     let sumsum = arr.reduce((a,b) =>  a + b,0);
    
//     return sumsum;
// }

// let bien = sum(arr);
// console.log(bien);