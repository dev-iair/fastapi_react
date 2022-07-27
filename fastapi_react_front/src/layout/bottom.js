import React, { Component } from "react";

class Bottom extends Component {
    render(){
        return (
            <div className="corp-area">
            <h3 className="corp-area__title">FASTAPI - REACT</h3>
            <span className="corp-area__tel">전화번호 <a href="02-1234-5678">02-1234-5678</a></span>
            <span className="corp-area__address">서울특별시</span>
            <span>FASTAPI - REACT</span>
            <button className="corp-area__btn-terms">상세</button>
            </div>
        );
    }
}
export default Bottom;