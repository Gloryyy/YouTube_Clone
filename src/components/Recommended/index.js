import React from 'react'
import './styles/recommended.css'
import VideoCard from './../VideoCard';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard title="Best Way To Learn Coding | 2019/2020" views="2.3M Views" timestamp="3 days ago" channelImage="https://workingdesignstud.io/wp-content/uploads/2018/06/traversy-media.jpg" channel="Traversy Media" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuejxeoglvWF0kyJTYe1lpxvcCb4FY71xiQ&usqp=CAU" />
                <VideoCard title="Web Dev Guide 2020" views="147K" timestamp="11 months ago" channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiczTVboZeyZmd-RvvtKhGBTapQDrCgkUoQ&usqp=CAU" channel="Web Dev Simplified" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJjQX6UJ5BHrMhbTCgrKz_UYSnNB4vQym4Q&usqp=CAU" />

                <VideoCard title="Top Dev Tools" views="283K" timestamp="3 months ago" channelImage="https://yt3.ggpht.com/ytc/AAUvwnjI1e_kjzToMdbPML1lfLgJxlArNmMbklUQYDsJ2Q=s88-c-k-c0x00ffffff-no-rj" channel="Dev Ed" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO86jTqhovKtQKJs-w31MOKqZyWLTW3P0LSw&usqp=CAU" />

                <VideoCard title="Learn React JS with Me (for Beginners)" views="23K" timestamp="4 days ago" channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj" channel="Clever Programmer" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZl5wDBAZcp8X3lJGgSzVvtcMW0SvEQjs1g&usqp=CAU" />

                <VideoCard title="Python Tutorial - Python for Beginners[2020]" views="510K" timestamp="3 months ago" channelImage="https://yt3.ggpht.com/ytc/AAUvwnj82Lirw0dg6V5pJWAcWdG22OESyldUcDwAFEqQWg=s88-c-k-c0x00ffffff-no-rj" channel="Programming with Mosh" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmjzo5gummif3uqTzrZUm1d5ykBeIDJMF4A&usqp=CAU" />

                <VideoCard title="Redux Tutorial - Learn Redux from Scratch" views="253K" timestamp="8 months ago" channelImage="https://yt3.ggpht.com/ytc/AAUvwnj82Lirw0dg6V5pJWAcWdG22OESyldUcDwAFEqQWg=s88-c-k-c0x00ffffff-no-rj" channel="Programming with Mosh" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNAadRhRB8AZrsI25giMpis_bMWENVEZNfgg&usqp=CAU" />

                <VideoCard title="Build Instagram Clone with React JS for Beginners" views="175K" timestamp="4 months ago" channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj" channel="Clever Programmer" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreLbrGFqS--hqYdI_lbjGr7Xa9OFGv6DLPA&usqp=CAU" />

                <VideoCard title="Build Amazon Clone Full E-Commerce + Stripe using React JS for Beginners" views="78K" timestamp="3 months ago" channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj" channel="Clever Programmer" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_q1FiJcntPEq1hwMVkbwOhVguC0Zj9MOZw&usqp=CAU" />
            </div>
        </div>
    )
}

export default RecommendedVideos
