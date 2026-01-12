import React from 'react';
import SwiperComponent from "@/widgets/SwiperComponent/SwiperComponent";

import './ChannelsPage.scss';

const ChannelsPage = () => {
    return (
        <div>
            <div className='channels'>
                <div className='container'>
                    <h1 className='channels_title'>Channels</h1>
                </div>
            </div>
            <div className='channels_content'>
                <div className='channels_intro'>
                    <h2 className='channels_intro_title'>
                        Operations are conducted exclusively through authorized channels including airport duty-free zones, border duty-free shops, Monrovia Freeport Ship Store, maritime and crew supply channels, and diplomatic or institutional channels.</h2>
                </div>
                <SwiperComponent/>
            </div>
        </div>
    );
};

export default ChannelsPage;