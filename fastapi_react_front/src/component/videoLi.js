import React,{useState} from 'react';

const VideoLi = (props) => {

    const [isOn, setToggle] = useState(false);
  
    const toggleContent = () => {
        setToggle(isOn => !isOn);
    }

    const joinContent = (arr) => {
        const cont = arr.join('\n')
        return cont
    }

    return (
        <li className="video-box__item">
        <video controls><source src={props.src} type="video/mp4" /></video>
        <div className={isOn ? "video-box__item__info on" : "video-box__item__info"} onClick={()=>toggleContent()}>
            <p><a href="#!" className="video-box__item__title">{props.title}</a></p>
            <span>{props.date}</span>
            <i className="icon-arrow"></i>
            <div className="video-box__item__content">
                {joinContent(props.content)}
                </div>
        </div>
        </li>
    )
}

export default VideoLi;