import React from 'react';
import Image from 'next/image';
import tictactoe from '../resources/image/tictactoe.png';
import todolist from '../resources/image/todolist.png';

function Projects() {
    const Projects = [
        {
            title: 'Multiplayer Tic Tac Toe',
            img: tictactoe,
            desc: 'A web-based tic tac toe game that can be played by two player online. Provides dashboard for the players game stats, match timer, and lots of interesting feature',
            techs: [
                'ReactJS', 'Socket.IO', 'NextJS', 'Tailwind'
            ],
            link: 'https://my-online-tictactoe.herokuapp.com/',
            repo: 'https://github.com/caleadrian/online-tictactoe'
        },
        {
            title: 'Typescript Todo List',
            img: todolist,
            desc: 'A Todo List app with some javascript frameworks',
            techs: [
                'ReactJS', 'Typescript', 'Redux', 'Framer', 'Tailwind'
            ],
            link: 'https://todo-reactjs-ts-redux.vercel.app/',
            repo: 'https://github.com/caleadrian/todo-reactjs-ts-redux'
        }
    ]

    const openLink = (url) => {
        window.open(url, '_blank')
    }

    return (
        <div id='projects' className=''>
            <div className='text-center '>
                <div className='text-xs font-medium text-gray-500 mb-1'>Craft with 🧡</div>
                <div className='text-[#4db5ff] text-2xl'>Personal Projects</div>
            </div>

            <div className='flex flex-col lg:flex-row lg:items-start lg:space-x-5 lg:space-y-0 mt-10 space-y-5'>
                {Projects.map((item, i) => (
                    <div key={i} className='bg-white bg-opacity-5 backdrop-blur-sm px-4 rounded-md w-full lg:w-3/6'>
                        <div className='my-5 text-lg font-semibold sm:font-normal'>{item.title}</div>
                        <div className='h-[1px] w-full bg-white relative bg-opacity-10'></div>
                        <div className='flex justify-start space-x-5 my-5'>
                            <div className='w-36 h-36 rounded-md overflow-hidden flex-shrink-0'>
                                <Image src={item.img} alt='multiplayer tictactoe' className='hover:scale-150 transition-all duration-500' />
                            </div>

                            <div>
                                <div className='sm:text-sm'>
                                    {item.desc}
                                </div>

                                <div className='mt-1'>
                                    <button className='mt-2 bg-gradient-to-t from-orange-400 to-yellow-400 text-white py-2 sm:py-1 px-8 sm:px-6 rounded-md text-sm mr-4 font-semibold focus:outline-none focus:ring-4 focus:ring-offset-0 focus:ring-[#f7b02d39]' onClick={() => openLink(item.link)}>
                                        Demo
                                    </button>
                                    <button className='mt-2 border border-white bg-transparent text-white  py-2 sm:py-1 px-8 sm:px-6 rounded-md bg-white hover:bg-white hover:text-black text-sm font-semibold focus:outline-none focus:ring-4 focus:ring-offset-0 focus:ring-[#f7b02d39]' onClick={() => openLink(item.repo)}>
                                        Repo
                                    </button>
                                </div>


                                <div className='flex text-sm flex-wrap mt-4'>
                                    {item.techs.map((tech, j) => (
                                        <div key={j} className=' text-orange-400 font-mono mr-4'>{tech}</div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Projects