
/**
 * Hàm xử lý nhận vào arr = [1,3,4] và giá trị ví dụ 3 => trả ra vị trí của giá trị (ví dụ: giá trị là 3 trả ra vị trí 1)
 * @param {*} arrNum là mảng cần tìm. Ví dụ [1,3,4]
 * @param {*} giaTri là giá trị cần tìm trên mảng ví dụ 3
 * @returns trả ra vị trí 1 nếu tìm thấy và -1 nếu mảng không chứa giá trị đó 
 */

function timViTri(arrNum, giaTri) { //input: arr , giaTri
    var output = -1;
    for (var index = 0; index < arrNum.length; index++) {
        if (arrNum[index] === giaTri) {
            output = index;
            break;
        }
    }
    return output;
}
/*
    timViTri([1,3,7],2); // -1
    timViTri([3,7,9], 7); // 1
    var arrNum = [12, 19 , 17, 41, 38, 45];
    timViTri(arrNum,17); // 2
*/


function xoaGiaTri (arr,giaTri) {
    var output = -1;
    for(var index = arr.length - 1; index >= 0; index-- ){
        if(arr[index] === giaTri) {
            arr.splice(index,1);
            output = arr;
        }
    }
    return output;
}