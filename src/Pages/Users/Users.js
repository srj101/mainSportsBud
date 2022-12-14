import React from 'react';
import profilePicture from '../../Asset/person/profile.png';
import profile from '../../Asset/Dummy/profile';
import { InboxOutlined } from '@ant-design/icons';
import About from '../../Components/About/About';
import Friends from '../../Components/Friends/Friends';
import Community from '../../Components/Community/Community';
import { Inbox, PersonRemove, Send } from '@mui/icons-material';

const friend = true;

const Users = () => {
    return (
        <>
            <div className="h-screen bg-gray-200 mt-16 lg:px-20">
                <div className="bg-white  ">
                    <div className="w-full h-[250px]">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" className="w-full h-full rounded-tl-lg rounded-tr-lg" />
                    </div>

                    <div className="flex flex-col items-center -mt-20">
                        <img src={profilePicture} className="w-40 border-4 border-white rounded-full" />
                        <div className="flex items-center space-x-2">
                            <p className="text-2xl">{profile.name}</p>
                        </div>

                        <p className="text-sm text-gray-500">Interested in {profile.interestedIn}</p>
                    </div>
                    {
                        friend ?
                            <div className="flex  items-center lg:items-center justify-center px-8 mt-2">

                                <div className="flex items-center space-x-4 mt-2">
                                    <div className="flex items-center space-x-4 mt-2">
                                        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                                            <Send />
                                            <button>Message</button>
                                        </button>
                                        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                                            <PersonRemove />
                                            <button>Unfriend</button>
                                        </button>
                                    </div>
                                </div>

                            </div>
                            :

                            <div className="flex flex-col items-center lg:items-center justify-center px-8 mt-2">
                                <div className="flex items-center space-x-4 mt-2">
                                    <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                                        </svg>
                                        <button>Connect</button>
                                    </button>
                                </div>
                            </div>

                    }
                </div>
                {/* Connections */}

                {
                    friend &&
                    <>
                        <ul className="bg-white py-4 nav nav-tabs flex justify-center items-center  md:flex-row flex-wrap list-none border-b-0  pl-0 mb-4 text-xl" id="tabs-tab"
                            role="tablist">
                            <li className="nav-item" role="presentation">
                                <a href="#tabs-home" className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
                                    aria-selected="true">About</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a href="#tabs-profile" className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                                    aria-controls="tabs-profile" aria-selected="false">Friends</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a href="#tabs-messages" className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
                                    aria-controls="tabs-messages" aria-selected="false">Community</a>
                            </li>

                        </ul>
                        < div className="tab-content" id="tabs-tabContent">
                            <div className="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                                <About />
                            </div>
                            <div className="tab-pane fade " id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                                <Friends />
                            </div>
                            <div className="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
                                <Community />
                            </div>

                        </div>
                    </>
                }



            </div>
        </>
    );
};

export default Users;