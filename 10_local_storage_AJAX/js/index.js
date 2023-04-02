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
        //Đưa dữ liệu lên giao diện
        document.getElementById('content').innerHTML = `Họ tên: ${result.data}`;

    }); 

    //Thất bại
    promise.catch( function(err){
        //Hàm này sẽ tự gọi khi axios bị lỗi hay không đọc được dữ liệu.
        console.log(err);
        // console.error(err);

    } );


}

readDataText();

function renderXMLData() {
    var promise = axios ({
        url: '/data/data.xml',
        method: 'GET',
        responseType: 'document',
    })

    //Thành công
    promise.then(function(res) {
        console.log(res.data);
        //Data đọc từ file xml
        var hoTen = res.data.getElementById('hoTen').innerHTML;

        document.getElementById('content-xml').innerHTML = hoTen;
        
        //Hiển thị dữ liệu lên trang INDEX.html
        document.getElementById
    });

    promise.catch(function(err) {
        console.log(err.data);
    })
}

renderXMLData();

function renderJSONData() {
    var promise = axios({
        url: '/data/data.json',
        method: 'GET',

        //Ở responseType là json có thể để trống do mặc định của nó là file JSON nên có cũng được, không có cũng không sao.
        //trong JSON, dấu ngoặc nhọn là OBJECT, dấu ngoặc vuông là ARRAY. Giống js á.
        responseType: 'json',
    })

    //Thành công
    promise.then(function(res){
        console.log(res.data);

        document.getElementById('content-json').innerHTML = res.data.hoTen;

    });


    //Thất bại
    promise.catch(function(err){
        console.log(err);
    })
}

renderJSONData();


