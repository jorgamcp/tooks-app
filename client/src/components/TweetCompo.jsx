import React, { useState } from "react";
import './TweetCompo.css';

export default function TookCompo(props) {

    const [counterRetweets, setcounterRetweets] = useState(0);
    const [counterLikes, setCounterLikes] = useState(0);

    const [isLiked, setIsLiked] = useState(false);
    const [isRetweeted, setIsRetweeted] = useState(false);

    const [userWantsResponse, setuserWantsResponse] = useState(false);

    const [showOptions, setShowOptions] = useState(false);

    const [isEditing,setIsEditing] = useState(false);

    // const [contentTweet,setContentTweet] = useState(props.content_tweet);

    const makeEditing = () => {
        setIsEditing(!isEditing);
    }
    const makeRetweet = () => {

        setIsRetweeted(!isRetweeted);
        if (counterRetweets >= 0 && isRetweeted == false) {
            setcounterRetweets(counterRetweets + 1);
        }
        else {
            setcounterRetweets(counterRetweets - 1);
        }
    }

    const likedTweet = () => {
        setIsLiked(!isLiked);

        if (counterLikes >= 0 && isLiked === false) {
            setCounterLikes(counterLikes + 1);
        }
        else {
            setCounterLikes(counterLikes - 1)
        }
    }

    const makeComment = () => {
        setuserWantsResponse(!userWantsResponse);
    }

    const userClickOptions = () => {
        setShowOptions(!showOptions);
    }

    const handleTweetEditing = (event) => {
        props.setContentTweet(event.target.value);
    }
    return (
        <article>
            {/* Cabecera del took*/}
            <div className="user-info-container">
                <div className="container-span-info-user">
                    <div id="image_and_user">
                        <img src="https://via.placeholder.com/150" alt="Imagen de sori"></img>
                        <div className="user-info-profile">
                            <span id="show-account-name"><strong>{props.account_displayname}</strong></span>
                            <span id="username">@{props.account_id ?? "null"}</span>
                        </div>
                    </div>
                    
                </div>

            </div>

            <div className="tweet-content"  onDoubleClick={makeEditing}>
            {
                isEditing === true ? 
                <>
                    <textarea defaultValue={props.content_tweet} onDoubleClick={handleTweetEditing}></textarea>
                </>
                     :
                <>
                     <span >{props.content_tweet ?? <>Officia est sunt culpa cupidatat commodo voluptate et officia aliqua.
                        Non velit ut do mollit adipisicing cillum sunt do Lorem veniam mollit et occaecat duis.</>}</span>
                        <span className="tip"><i>Double click to edit.</i></span>
                </>
            }
                
            </div>
            <div className="tweet-info">
                <p>{props.date ?? ""}</p>
                <p>11 ene. 2023</p>
                {/* <p>282 Reproducciones</p> */}
            </div>
            <div className="counter-likes-container">
            {
                counterLikes === 0 ? 
                <>

                </>
                :
                <span>{counterLikes} Likes</span>  
                
            }
                
            </div>
            <div className="tweet-actions">

                <div onClick={makeComment}>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
                </div>


                <div onClick={makeRetweet} id="dtooktear_cont">
                    {
                        isRetweeted === true ?
                            <>
                                <svg id="reposted" viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg>
                                <p className="counter" id="counter-retweets">{counterRetweets === 0 ? "" : counterRetweets}</p>
                            </>
                            :
                            <>
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg>
                                <p className="counter" id="counter-retweets">{counterRetweets === 0 ? "" : counterRetweets}</p>
                            </>
                    }

                </div>
                <div onClick={likedTweet}>
                    {
                        isLiked === true ?
                            <>

                                <svg id="svgcora" viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>
                                <p className="counter" id="counter-likes counter-liked">{counterLikes === 0 ? "" : counterLikes}</p>
                            </>
                            :
                            <>
                                <div>

                                    <svg id="svgcoran" viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>
                                    <p className="counter" id="counter-likes">{counterLikes === 0 ? "" : counterLikes}</p>
                                </div>
                            </>
                    }



                </div>
                <div onClick={userClickOptions}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_429_11030)">
                            <path d="M4 8H13" stroke="#292929" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17 8L20 8" stroke="#292929" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11 16L20 16" stroke="#292929" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 16H7" stroke="#292929" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="9" cy="16" r="2" stroke="#292929" strokeWidth="2.5" />
                            <circle cx="15" cy="8" r="2" stroke="#292929" strokeWidth="2.5" />
                        </g>
                        <defs>
                            <clipPath id="clip0_429_11030">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    {showOptions === true ? <>
                        <div className="actions-container-options">
                            <div className="option" id="op1">
                                <span>Copiar el enlace del Took</span>
                            </div>
                            <div className="option" id="op2">
                                <span>Enviar por DTook</span>
                            </div>
                            <div className="option" id="op3">
                                <span>Anclar</span>
                            </div>
                        </div>
                    </>
                        : <></>
                    }



                </div>
            </div>

            {userWantsResponse === true ?
                <>
                    <div className="response_container_box ">

                        <input type={"text"} placeholder="Type Here ..."></input>
                        <a id="response_sen" href="#">Send Response</a>

                    </div>
                </>
                :
                <>
                    <div className="response_container_box nshow">

                        <input type={"text"} placeholder="Type Here ..."></input>
                        <a id="response_sen" href="#">Send Response</a>

                    </div>
                </>
            }

            <div className="responses">
                <div>
                </div>
            </div>
        </article>
    )
}