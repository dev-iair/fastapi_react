import React, { Component } from "react";
import Bottom from '../layout/bottom';

class Setting extends Component {

    componentDidMount(){
        function setting () {
             
            let point = document.querySelector('.setting__line__point');
            let settingSpeed = document.querySelectorAll('.setting__speed li');

            document.querySelectorAll('.setting-box__item__btn-arrow').forEach(el=>{
                el.addEventListener('click', ()=>{
                    el.parentElement.classList.toggle('on')
                    let curSpeed = sessionStorage.getItem('videoSpeed');
                    if (curSpeed === 0) {
                        point.style.left = 0;
                    } else {
                        point.style.left = (point.parentElement.offsetWidth/(settingSpeed.length-1)-curSpeed)*curSpeed+'px';
                    }
                })
            });
            document.querySelectorAll('.setting-box__item h3').forEach(el=>{
                el.addEventListener('click', ()=>{
                    el.parentElement.classList.toggle('on')
                    let curSpeed = sessionStorage.getItem('videoSpeed');
                    if (curSpeed === 0) {
                        point.style.left = 0;
                    } else {
                        point.style.left = (point.parentElement.offsetWidth/(settingSpeed.length-1)-curSpeed)*curSpeed+'px';
                    }
                })
            });
    
            for (let i = 0; i < 4; i++) {
                settingSpeed[i].addEventListener('click', ()=>{
                    if (i === 0) {
                        point.style.left = 0;
                    } else {
                        point.style.left = (point.parentElement.offsetWidth/(settingSpeed.length-1)-i)*i+'px';
                    }
                    sessionStorage.setItem('videoSpeed', i);
                })
            }
        }
        setting ();
    }

    render(){
        return (
            <>
            <h2 className="container__title">설정</h2>
            <div className="container__scroll-area">
                <ol className="setting-box">
                    <li className="setting-box__item">
                        <h3>속도 조절</h3>
                        <button type="button" className="setting-box__item__btn-arrow"></button>
                        <div className="setting">
                            <span className="setting__line"><i className="setting__line__point"></i></span>
                            <ul className="setting__speed">
                                <li>x 0.7</li>
                                <li>x 1.0</li>
                                <li>x 1.2</li>
                                <li>x 1.5</li>
                            </ul>
                        </div>
                    </li>
                </ol>
                <Bottom />
            </div>
            </>
        );
    }
}
export default Setting;