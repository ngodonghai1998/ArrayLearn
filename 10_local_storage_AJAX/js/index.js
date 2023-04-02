// console.log(axios);

function readDataText() {

    var promise = axios({
        url: '/data/data.txt', //đường dẫn đến file hoặc link (api) do backend cấp
        method: 'GET', //Phương thức do backend cung cấp hoặc đọc FILE là GET
        responseType: 'text',

    });

    
    //Thành công
    promise.then(function(result) {
        //Hàm này sẽ tự gọi khi axios thực hiện lệnh đọc file thành công.
        console.log(result.data);

    }); 

    //Thất bại
    promise.catch( function(err){
        //Hàm này sẽ tự gọi khi axios bị lỗi hay không đọc được dữ liệu.
        console.log(err);

    } )


}