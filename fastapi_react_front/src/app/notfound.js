import React, { Component } from "react";
import Bottom from '../layout/bottom';

class NotFound extends Component {

    render(){
        return (
            <div className="container__scroll-area">
                <img src="/image/notfound.png" style={{width:"100%", marginTop:"10%"}} alt="" />
                <Bottom />
            </div>
        );
    }
}
export default NotFound;