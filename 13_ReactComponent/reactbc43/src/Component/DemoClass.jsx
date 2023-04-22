import React, { Component } from "react";

export default class DemoClass extends Component {


    //Phương thức hiển thị giao diện của Component
    render() {

        //Return sẽ trả về một đối tượng, nội dung component sẽ được chứa trong thẻ bất kỳ, ví dụ thẻ div, thẻ section, thẻ hearder, thẻ footer.
        return (
            <div>
                <button className="btn btn-success">
                    Nội dung Component
                </button>

                <div className="card text-start">
                    <img className="card-img-top" src="holder.js/100px180/" alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Body</p>
                    </div>
                </div>

            </div>)
    }
}