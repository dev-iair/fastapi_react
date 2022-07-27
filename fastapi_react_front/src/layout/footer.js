import React, { Component } from "react";

class Footer extends Component {

    componentDidMount(){
        
            // 검색 레이어
            function searchLayer () {
                document.querySelector('.btn-search').addEventListener('click', ()=>{
                    document.querySelector('.search-layer').classList.toggle('on');
                    document.querySelector('.btn-search').classList.toggle('on');
                    document.getElementById('searchInput').value = '';
                    document.getElementById('searchInput').focus();
                });
                document.querySelector('.dim').addEventListener('click', ()=>{
                    document.querySelector('.search-layer').classList.remove('on');
                    document.querySelector('.btn-search').classList.remove('on');
                });
            }
            
            // gotop
            function goTop () {
                let goTop = document.querySelector('.go-top');
                let scrollArea = document.querySelector('.container__scroll-area');
            
                scrollArea.addEventListener('scroll', event => {
                    if (scrollArea.scrollTop > 20) {
                        goTop.classList.add('on');
                    } else {
                        goTop.classList.remove('on');
                    }
                });
            
                goTop.addEventListener('click', ()=>{
                    scrollArea.scrollTop = 0;
                });
            }

            goTop ();
            searchLayer ();

            const urlPath = window.location.pathname;
            
            if(urlPath === '/tour'){
                document.querySelectorAll('.footer__btn')[1].classList.add('on');
            }else if(urlPath === '/'){
                document.querySelectorAll('.footer__btn')[0].classList.add('on');
            }else{
                document.querySelector('.btn-search').style.display = 'none';
            }
    }

    render(){
        return (
            <footer className="footer">
            <nav className="footer__nav">
                <a href="/" className="footer__btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 4C17 3.44772 17.4477 3 18 3V3C18.5523 3 19 3.44772 19 4V17C19 17.5523 18.5523 18 18 18V18C17.4477 18 17 17.5523 17 17V4Z" fill="#C4C4C4"/>
                        <path d="M11 7L16 4V17L11 14V7Z" fill="#C4C4C4"/>
                        <path d="M2 10.5C2 8.567 3.567 7 5.5 7H10V14H5.5C3.567 14 2 12.433 2 10.5V10.5Z" fill="#C4C4C4"/>
                        <path d="M6 14.5H9L9.73723 19.292C9.8754 20.1901 9.18055 21 8.27191 21V21C7.54017 21 6.91786 20.4661 6.8066 19.7429L6 14.5Z" fill="#C4C4C4"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M20 12.5C21.1046 12.5 22 11.6046 22 10.5C22 9.39543 21.1046 8.5 20 8.5V12.5Z" fill="#C4C4C4"/>
                    </svg>
                    <span>공지사항</span>
                </a>
                <a href="/tour" className="footer__btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="6" r="3" fill="#C4C4C4"/>
                        <rect x="9" y="11" width="6" height="10" rx="1" fill="#C4C4C4"/>
                        <rect x="8" y="11" width="3" height="2" rx="1" fill="#C4C4C4"/>
                        <rect x="8" y="19" width="8" height="2" rx="1" fill="#C4C4C4"/>
                    </svg>                        
                    <span>안내</span>
                </a>
                <button type="button" className="footer__btn btn-search">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.5 18C12.0721 18 13.5312 17.5163 14.7367 16.6896L18.6426 20.5955C19.1819 21.1348 20.0562 21.1348 20.5955 20.5955C21.1348 20.0562 21.1348 19.1819 20.5955 18.6426L16.6896 14.7367C17.5163 13.5312 18 12.0721 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18ZM10.5 15C12.9853 15 15 12.9853 15 10.5C15 8.01472 12.9853 6 10.5 6C8.01472 6 6 8.01472 6 10.5C6 12.9853 8.01472 15 10.5 15Z" fill="#C4C4C4"/>
                    </svg>
                    <span>검색</span>
                </button>
                {/* <a href="setting" className="footer__btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06L21.16 9.47999C21.34 9.33999 21.39 9.06999 21.28 8.86999L19.36 5.54999C19.24 5.32999 18.99 5.25999 18.77 5.32999L16.38 6.28999C15.88 5.90999 15.35 5.58999 14.76 5.34999L14.4 2.80999C14.36 2.56999 14.16 2.39999 13.92 2.39999H10.08C9.83999 2.39999 9.64999 2.56999 9.60999 2.80999L9.24999 5.34999C8.65999 5.58999 8.11999 5.91999 7.62999 6.28999L5.23999 5.32999C5.01999 5.24999 4.76999 5.32999 4.64999 5.54999L2.73999 8.86999C2.61999 9.07999 2.65999 9.33999 2.85999 9.47999L4.88999 11.06C4.83999 11.36 4.79999 11.69 4.79999 12C4.79999 12.31 4.81999 12.64 4.86999 12.94L2.83999 14.52C2.65999 14.66 2.60999 14.93 2.71999 15.13L4.63999 18.45C4.75999 18.67 5.00999 18.74 5.22999 18.67L7.61999 17.71C8.11999 18.09 8.64999 18.41 9.23999 18.65L9.59999 21.19C9.64999 21.43 9.83999 21.6 10.08 21.6H13.92C14.16 21.6 14.36 21.43 14.39 21.19L14.75 18.65C15.34 18.41 15.88 18.09 16.37 17.71L18.76 18.67C18.98 18.75 19.23 18.67 19.35 18.45L21.27 15.13C21.39 14.91 21.34 14.66 21.15 14.52L19.14 12.94ZM12 15.6C10.02 15.6 8.39999 13.98 8.39999 12C8.39999 10.02 10.02 8.39999 12 8.39999C13.98 8.39999 15.6 10.02 15.6 12C15.6 13.98 13.98 15.6 12 15.6Z" fill="#C4C4C4"/>
                    </svg>
                    <span>설정</span>
                </a> */}
            </nav>
            </footer>
      );
    }
}
export default Footer;