import React, {Component} from "react";

export default class DemoClass extends Component {

    //Phương thức hiển thị giao diện của component
    render() {

        //Nội dung component được chứa trong 1 thẻ bất kỳ
        return (
        <div>
            <button className="btn btn danger">
                Nội dung component
            </button>

            <img src="" alt="" />

        </div>)
    }
}