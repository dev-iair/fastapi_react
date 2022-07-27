import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Notice from './app/notice';
import Tour from './app/tour';
import NotFound from './app/notfound';

class App extends Component {

    componentDidMount(){
        if(sessionStorage.getItem('intro')==null){
            document.querySelector('.header').classList.add('loading');
            document.querySelector('.main').classList.add('loading')
            document.querySelector('.footer').classList.add('loading')
            
            setTimeout(() => {
            }, 500, setTimeout(()=>{
                document.querySelector('.header').classList.remove('loading');
            }, 1000, setTimeout(()=>{
                document.querySelector('.header').style.boxShadow = '0 0 8px rgba(0, 0, 0, 0.1)';
                document.querySelector('.main').classList.remove('loading')
                document.querySelector('.footer').classList.remove('loading')
            }, 2000)));
            sessionStorage.setItem('intro',1);
        }
    }

    render(){
        return (
            <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Notice />} />
                <Route exact path="/tour" element={<Tour />} />
                <Route path="/*" element={<NotFound />} />
                {/* <Route path="/setting" element={<Setting />} /> */}
            </Routes>
            </BrowserRouter>
        );
    }
}
export default App;