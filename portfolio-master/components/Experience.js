import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

function Experience() {

    const Experience = [
        {
            company: 'Accenture, Inc.',
            role: 'Software Engineer',
            years: 'June 2021 - Current',
            jd: "Responsible for upgrading the existing Accenture's internal HR web app from AngularJS to Angular14. Translating designs from AdobeXD to a functional component and converting classic Javascript code to Typescript",
            techs: [
                'Angular14', 'Typescript', 'Bootstrap', 'Git'
            ]
        },
        {
            company: 'Europe Investors Direct AB Phils. Representative Office',
            role: 'Application Support Specialist',
            years: 'Feb 2019 - June 2021',
            jd: "Responsible for designing Investor Relation Tools according to our client's branding guidelines. Writing efficient code to provide cross-browser responsiveness for Chrome, Safari, Firefox, and Internet Explorer",
            techs: [
                'HTML', 'CSS', 'XML', 'Javascript', 'Trello'
            ]
        },
        {
            company: '7Sevendeal Marketing Services',
            years: 'April 2018 - December 2018',
            role: 'Web Developer',
            jd: "Responsible for improving and adding feature on company's existing website using PHP. Worked on WordPress platform and used some popular plugins such as WooCommerce and Elementor for the company's ecommerce website",
            techs: [
                'PHP', 'Jquery', 'Ajax', 'Bootstrap', 'Wordpress'
            ]
        }
        ,
        {
            company: 'Personal Development',
            jd: 'Loves working on web applications and creating unique UI designs.',
            techs: [
                'ReactJS', 'NodeJS', 'Socket.IO', 'Tailwind', 'NextJS', 'Heroku'
            ]
        }
    ]

    return (
        <div id='experience' className=''>
            <div className='text-center '>
                <div className='text-xs font-medium text-gray-500 mb-1'>My tech powers</div>
                <div className='text-[#4db5ff] text-2xl'>Experience & <span className='text-orange-400'>Skills</span></div>
            </div>

            <div className='flex flex-col space-y-7 mt-10'>
                {Experience.map((item, i) => (
                    <div key={i} className=''>
                        {i === 3 && <div className='border-t border-[#4db5ff] mb-7'></div>}

                        <div className='flex flex-col sm:flex-row justify-between mb-1'>
                            <div className='font-semibold text-[#4db5ff] text-sm sm:text-base'>{item.company}</div>
                            <div className='text-xs sm:text-sm text-gray-200'>{item.years}</div>
                        </div>
                        <div className='pl-5 text-sm flex flex-col space-y-2 border-l-2 border-gray-500'>

                            {i !== 3 && <div className='font-semibold'>{item.role}</div>}
                            <div className='text-justify text-gray-200 text-sm sm:text-base'>
                                {item.jd}
                            </div>
                            <div className='flex space-x-3'>
                                {item.techs.map((tech, j) => (
                                    <div className=' text-orange-400 font-mono' key={j}>{tech}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Experience