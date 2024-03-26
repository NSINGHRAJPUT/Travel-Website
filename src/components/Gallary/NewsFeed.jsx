import { Fade } from 'react-awesome-reveal';
import face from '../../assets/Images/Gallary/News Feed/face.jpg';
import insta from '../../assets/Images/Gallary/News Feed/insta.jpg'
import '../../Style/Gallary/NewsFeed.css';
import { InstagramEmbed } from 'react-social-media-embed';

const NewsFeed = () => {
    return <section className='gallary_news_section'>
        <div className='gallary_news_left'>
            <Fade direction='left' cascade damping={0.2}>
                <h1 className='heading_bold c_dark home_testimonial_top_heading'>New Feed <span className='c_green'> Widgets</span></h1>
                <p className='c_dark'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam ea odit cumque corporis
                    voluptatum repudiandae, eius laborum cupiditate quis laudantium atque consequuntur sapiente
                    voluptates beatae saepe nesciunt officiis error dicta.
                </p>
            </Fade>
        </div>
        <div className='social_media_gallery'>
           
        </div>
    </section>
}

export default NewsFeed;
