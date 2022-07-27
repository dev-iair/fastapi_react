import React, { Component } from "react";

class Terms extends Component {

    componentDidMount(){
        function termsLayer () {
            document.querySelector('.corp-area__btn-terms').addEventListener('click', ()=>{
                document.querySelector('.terms-layer').classList.add('on');
            });
            document.querySelector('.terms-layer__title .btn-back').addEventListener('click', ()=>{
                document.querySelector('.terms-layer').classList.remove('on');
            });
        
            document.querySelectorAll('.terms-box__item').forEach(el=>{
                el.addEventListener('click', ()=>{
                    el.classList.toggle('on');
                });
            });
        }
        termsLayer ();

        document.getElementById('searchInput').addEventListener('keyup', e => {
            if(e.key === 'Enter'){
                document.getElementById('searchBtn').click();
            }
        })
        
    }

    render(){
        return (
            <>
                <div className="terms-layer">
                    <h2 className="terms-layer__title"><button type="button" className="btn-back"></button>상세</h2>
                    <div className="terms-layer__scroll-area">
                        <ol>
                            <li className="terms-box__item">
                                <h3>상세</h3>
                                <button type="button" className="terms-box__item__btn-arrow"></button>
                                <div className="terms">
                                    <ol>
                                        <li>상세 페이지 입니다.</li>
                                    </ol>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="search-layer">
                    <div className="dim"></div>
                    <h2 className="search-layer__title">검색</h2>
                    <div className="search-layer__search-area">
                        <div className="select-box" style={{textAlign:"center"}}>
                            제목
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="검색어를 입력하세요." id="searchInput"/>
                            <button type="button" className="search" id="searchBtn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.5 18C12.0721 18 13.5312 17.5163 14.7367 16.6896L18.6426 20.5955C19.1819 21.1348 20.0562 21.1348 20.5955 20.5955C21.1348 20.0562 21.1348 19.1819 20.5955 18.6426L16.6896 14.7367C17.5163 13.5312 18 12.0721 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18ZM10.5 15C12.9853 15 15 12.9853 15 10.5C15 8.01472 12.9853 6 10.5 6C8.01472 6 6 8.01472 6 10.5C6 12.9853 8.01472 15 10.5 15Z" fill="#C4C4C4"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="alert-wrap">
                        <div className="alert-msg">검색할 키워드를 입력해주세요.</div>
                    </div>
                </div>
                <button type="button" className="go-top"></button>
            </>
        );
    }
}
export default Terms;