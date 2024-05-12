// 1. [Thực hành] Tạo và gọi hàm

// function processConfirm(answer) {
//     let result = "";
//     if (answer) {
//         result = "Excellent. We'll play a nice game of chess.";
//     } else {
//         result = "Maybe later then.";
//     }
//     return result;
// }
// let confirmAnswer = confirm("Shall we play a game?");
// let theAnswer = processConfirm(confirmAnswer);

// alert(theAnswer);       

// Shall we play a game?
// Excellent. We'll play a nice game of chess.
// Maybe later then.

// ---------------------------------------------------------
// 3. [Thực hành] Tìm giá trị nhỏ nhất của mảng

// let arr1 =  [3, 5, 1, 8, -3, 7, 8];

// function tenham(abc){
//     let min = Math.max(...abc);
//     return min;
// }
// alert(tenham(arr1));

// ---------------------------------------------------------

// 4. [Thực hành] Hàm kiểm tra đối xứng 

// let a = 'abcba';

// function chovao(a){
//     let b = a.split('');

//     b.reverse();
//     if(a == b.join('')){
//         alert('doi xung');
//     }else{
//         alert('ko doi xung')
//     }
// }
// chovao(a);

// ---------------------------------------------------------

// 5. [Thực hành] Hàm quy đổi nhiệt độ (độ C sang độ F)
//F = C*1.8 +32
// C = (F-32)/1.8

// let doc = 17;
// let dof = 25;

// function nhietdo(a, b) {
//     let kq = a * 1.8 + 32;
//     let kq2 = (b - 32) / 1.8;
//     return [kq, kq2];
// }

// let c = nhietdo(doc, dof);
// console.log(c);

// ---------------------------------------------------------

// 6. [Thực hành] Hàm tính tổng các phần tử trong mảng


// let arr = [2,4,5,6];

// function sum (tinh){

//     let c = arr.reduce((a,b) => a + b, 0);
//     return c;
// }
// let c = sum(arr);
// console.log(c);

// ---------------------------------------------------------
// ex2: tinh dien tich va chu vi

// function a (r){
//     let c = 2 * 3.14 * r;
//     let s = 3.14 * r * r;
//     console.log(c,s);
// }

// ---------------------------------------------------------

//ex3: tao ham va kiem tra xem ky tu nhap vao co phai ky tu so hay ko?

// function check (str){
//     if(isNaN(str)){
//         console.log('ko phai so');
//     }else{console.log('la so');}
// }

// ---------------------------------------------------------

// ex4: viet va kiem tra xem so do co phai so nguyen khay ko. true/false 

// function check (a){
//         console.log(Number.isInteger(a) && a > 0);
// }

// ---------------------------------------------------------

// ex5: truyen vao 2 so nguyen,doi cho 2 so nguyen:

// function swap (a,b){
//     const c = b;
//     b = a;
//     a = c;
//     console.log(a, b);
// }

// ---------------------------------------------------------

// 4. [Bài tập] Luyện tập với hàm (Tổng hợp)
// Bài 1: Viết chương trình cho người dùng nhập vào 3 số, viết hàm kiểm tra để tìm ra số bé nhất và in ra số đó

// let str = prompt('nhap so');
// let aothat = str;
// function sobe(ccc){
//     let min = ccc.split(',');
//     let c = Math.min(...min);
//     return c;
// }
// let kq = sobe(aothat);
// console.log(kq);

//--------------------------

//Bài 2: Viết hàm kiểm tra xem số người dùng nhập vào có phải là số nguyên tố hay không?
// (số nguyên tố là số nguyên dương chỉ có 2 ước là 1 và chính nó)

// let num = +prompt('viet so');
// function NumNum(so){
//     let check = true;
//     for(let i = 2; i < so; i++){
//         if(so % i == 0){
         
//             check = false;
//             break;
//         }else{
          
//             check = true;
//             break;
//         }
//     }
//     if (check == true){
//         var b = 'la SNT';
//         return b;
//     }else{
//         var b = 'ko la SNT';
//         return b;
//     }
    
// }

// let kq = NumNum(num);
// alert(kq);

//-----------------------------------------
// viet ham random ra ma mau rgb ngong nhien
// output: rgb(201.152.106)
// goi y Math.floor + Math.random && 0 -> 255

// function color(){
//     let r = Math.floor(Math.random()*255);
//     let b = Math.floor(Math.random()*255);
//     let g = Math.floor(Math.random()*255);

//     let rbg = `rbg(${r},${b},${g})`;
//     return rbg
// }
// let random = color();
// console.log(random);

//-----------------------------------------
// doi so va tra ve dao nguoc

// AnhTu
// uThnA

// function daonguoc(){
//     let Nhap = prompt('nhap ten dao nguoc');
//     let tendaonguoc = '';
//     for(let i = Nhap.length -1; i >= 0; i--){
//         tendaonguoc += Nhap[i];
       
//     }
//     return tendaonguoc;
// }

// console.log(daonguoc());

//-----------------------------------------

// viet ham va kiem tra xem co phai ki tu so hay ko 
// dung thi tra ve true,sai la flase 

// function check (){
//     let input = prompt('nhap vao');
//     let flag = true;
//     if(isNaN(input)){
//         flag = false;

//     }else{
//         flag = true;
//     }
//     return flag
// }

// console.log(check ());

//-----------------------------------------

// hàm :mảng kí tự,test kí tự có trong mảng hay ko.có trả về số lần suất hiện,ko = -1
// vd : 'abc' ko = -1

function test(){
    let arr = [ 't','b'];
    let arr1 = arr.indexOf('c');
    return arr1
}
console.log(test());