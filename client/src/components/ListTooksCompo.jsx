import { useEffect, useState } from "react";
import TookCompo from "./TweetCompo";


export default function ListTooksCompo() {

    const [tooks, setTooks] = useState([""]);

    const [data, setData] = useState(null);

    const changeContent = (new_content, id) => {
        tooks.map((elemento, i) => {
            if (id === i) {
                elemento[i].content_tweet = new_content
            }
        })
    }



    useEffect(() => {
        fetch('http://localhost:3001/api/tooks')
            .then((res) => res.json())
            .then((tooks) => setTooks(tooks));
    }, []);




    return (
        <div>

            <div id="list_container">

                {
                    tooks.map(data => {
                        return <TookCompo
                            key={data._id}
                            account_displayname={data.display_name}
                            account_id={data.account_id}
                            content_tweet={data.content_took}
                            setContentTweet={changeContent}
                        />
                    })
                }



            </div>
        </div>
    )
}
