import React from 'react';
import heroImg from '../../assets/images/hero.png';
import CountUp from 'react-countup';

const Hero = () => {

    return (
        <section className='pt-0' id='about'>
            <div className='container pt-14'>
                <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                    {/*Left side content hoem*/}
                    <div className='w-full md:basis-1/2'>
                        <h5
                            data-aos='fade-right'
                            data-aos-duration='1500'
                            className='text-headingColor font-[600] text-[21px]'>
                            Hello There!
                        </h5>
                        <h1 data-aos='fade-up' data-aos-duration='1500' className='text-headingColor font-[800] text-[1.8rem]  sm:text-[40px] leading-[35px] mt-5'>
                            I am Saba Naveed <br /></h1>
                        <h2 data-aos='fade-up' data-aos-duration='1500' className='text-headingColor font-[800] text-[1.3rem] sm:text-[27px] leading-[35px] mt-5'>A Software Developer </h2>
                        <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='200' className='flex items-center gap-6 mt-7'>

                            <button onClick={() => {
                                const link = document.createElement('a');
                                link.href = 'https://drive.google.com/file/d/1GOMGYQ3kEDL5bo5WUfwziiZpWuzXDoif/view?usp=sharing';
                                link.download = 'My Resume.pdf';
                                link.target = '_blank';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }} className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]' >

                                <i class="ri-eye-line"> View Resume</i>
                            </button>

                            <a href='#portfolio' className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>See Portfolio</a>

                        </div>
                        <p data-aos='fade-left' data-aos-duration='1500' className='flex gap-2 mt-[17px] text-headingColor font-[500] text-[15px] leading-7 sm:pr-10'>A developer with a knack for creating digital experiences, on a mission to turn concepts into innovative solutions that enhance our interaction with technology.</p>
                        <div className='flex item-center gap-9 mt-14'>
                            {/* <span className='text-smallTextColor text-[16px]'>Find me here: </span> */}
                            <span>
                                <a href="https://www.linkedin.com/in/saba-n-3123b8242/" target="_blank" className='text-smallTextColor text-[28px] font-[400]'>
                                    <i class="ri-linkedin-box-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a href="https://github.com/SabaaN" target="_blank"
                                    className='text-smallTextColor text-[28px] font-[400]'>
                                    < i class="ri-github-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a href="https://twitter.com/Saba_N19" target='_blank'
                                    className='text-smallTextColor text-[28px] font-[400]'>
                                    <i class="ri-twitter-fill"></i>
                                </a>
                            </span>

                        </div>
                    </div>
                    {/*End of left side content*/}

                    {/* Hero Image */}
                    <div className='basis-1/3 mt-10 sm:mt-0'>
                        <figure className='flex items-center justify-center'>
                            <img src={heroImg} alt='' />
                        </figure>
                    </div>
                    {/* Hero Image end*/}
                    {/* right side content home */}
                    <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md"mt-0 md"flex-col md:justify-end md:text-end'>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={2} duration={2} suffix='+' />

                            </h2>
                            <h4 className='text-headingColor text-[18px] font-[600]'>
                                Years of Experience
                            </h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={27} duration={2} suffix='+' />

                            </h2>
                            <h4 className='text-headingColor text-[18px] font-[600]'>
                                Projects completed
                            </h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={15} duration={2} suffix='+' />

                            </h2>
                            <h4 className='text-headingColor text-[18px] font-[600]'>
                                satisfied clients
                            </h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={99} duration={2} suffix='%' />

                            </h2>
                            <h4 className='text-headingColor text-[18px] font-[600]'>
                                success rate
                            </h4>
                        </div>
                    </div>


                    {/* right side content home end */}

                </div>

            </div>
        </section>
    )
}

export default Hero