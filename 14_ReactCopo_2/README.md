# Buổi 3: Props
<ul>
    <li>
        Props là thuộc tính có sẵn của react class component (do kết thừa từ class Component) dùng để nhận giá trị từ component cha truyền vào (Component cha là nơi sử dụng thẻ). Props không thể gán lại giá trị mới.
        <br/>
        Không thể dùng this.props.propName = 'Giá trị mới' => Sai cú pháp    
    </li>
    <li>
        Props khác state?
        <p>
            Props và state đều là thuộc tính có sẵn của react class component để binding dữ liệu lên giao diện. Tuy nhiên: <br/>
                + State : dùng để lưu các giá trị thay đổi trên chính component đó. State có thể được gán lại thông qua phương thức setState <br/>
                + Props : dùng để chứa các giá trị từ component cha truyền vào. Props không thể gán lại giá trị.
        </p>
    </li>
</ul>