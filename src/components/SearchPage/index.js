import React from 'react'
import './styles/searchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './../ChannelRow';
import VideoRow from './../VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj" channel="Clever Programmer" verified subs="660K" numberOfVideos={382} description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the..." />

            <hr />

            <VideoRow views="1.4M" subs="665K" description="Do you want a FREE one hour training... check this out" timestamp="59 seconds ago" channel="Clever Programmer" title="🔴 Let'S Build a YouTube Clone with React JS for Beginners" image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg" />

            <VideoRow views="1.2M" subs="659K" description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer...https://cleverprogrammer.com if you want to..." timestamp="4 days ago" channel="Clever Programmer" title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWzw_JSXmlG42kIYvX95AJUNafXhG_QkP-PA&usqp=CAU" />

            <VideoRow views="1.2M" subs="659K" description="In this LIVE training, Sonny and Qazi will show you " timestamp="1 month ago" channel="Clever Programmer" title="🔴 Full Stack React and Firebase Tutorial - Build" image="https://i.ytimg.com/vi/1wZw7RvXPRU/maxresdefault.jpg" />

            <VideoRow views="2.2M" subs="659K" description="Here is the best free javascript programming" timestamp="2 months ago" channel="Clever Programmer" title="JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1IOqnlq9N-wDjlmhZ4k20WKyhV0Hi030TJA&usqp=CAU" />
        </div>
    )
}

export default SearchPage
