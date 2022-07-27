import React, { useState, useEffect, useRef } from "react";
import VideoLi from '../component/videoLi'
import Bottom from '../layout/bottom';

const Tour = () => {

    const [tour, setTour] = useState([]);

    const contentList = useRef([]);
    const curPage = useRef(1);
    const searchText = useRef('');
    
    useEffect(() => {
        const addBtn = document.getElementById('addBtn');
        const searchBtn = document.getElementById('searchBtn');

        const getData = (page, text) => {

            let apiData = {};
            apiData.pageNo = page;
            apiData.searchText = text;

            const keyIndex = (page*5)-5;
    
            fetch(process.env.REACT_APP_API_URL+'/api/tour', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(apiData)
            })
            .then(response => response.json())
            .then(data => {
                    let tourList = [];
                    tourList = data.map((val, index) => <VideoLi title={val.title} date={val.reg_date} src={"/video/"+val.title_id+"/results.mp4"} content={val.content} key={keyIndex+index}/>);
                    if(tourList.length<5){
                        addBtn.style.display = 'none';
                    }
                    contentList.current = [...contentList.current, ...tourList]
                    setTour(contentList.current)
                })
        }

        getData(curPage.current, searchText.current);

        addBtn.addEventListener('click', event => {
            curPage.current += 1;
            getData(curPage.current, searchText.current);
        });

        searchBtn.addEventListener('click', event =>{

            let searchTxt = document.getElementById('searchInput').value;

            if (searchTxt.length<1){
                setTimeout(()=>{
                    document.querySelector('.alert-wrap').classList.add('on');
                }, setTimeout(()=>{
                    document.querySelector('.alert-wrap').classList.remove('on');
                }, 3000));

            }else{
                addBtn.style.display = '';
                document.querySelector('.video-box').innerHTML='';
                searchText.current = searchTxt;
                curPage.current = 1;
                getData(curPage.current, searchText.current);
                document.querySelector('.search-layer').classList.remove('on');
                document.querySelector('.btn-search').classList.remove('on');
                document.getElementById('searchInput').value = '';
            }
        })

      },[]);

    return (
        <>
        <h2 className="container__title">안내</h2>
        <div className="container__scroll-area">
            <ul className="video-box">
                {tour}
            </ul>
            <button type="button" className="more-btn" id="addBtn">더 보기</button>
            <Bottom />
        </div>
        </>
    );

}

export default Tour;