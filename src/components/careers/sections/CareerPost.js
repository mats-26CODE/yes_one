import React from 'react';

//->react icons imports
import { HiOutlineExternalLink} from 'react-icons/hi';


const CareerPost = ({
    careerPostTitle,
    careerPostSkill,
    careerPostClick
}) => {
    return (
        <div className={'career_post_container'}>
            {
                <div className={'career_post_box'}>
                    <div className={'career_post_info'}>
                        <h4>{careerPostTitle}</h4>
                        <h5>{careerPostSkill}</h5>
                        <p>{careerPostClick}</p>
                    </div>
                    <div className={'career_post_arrow'}>
                        <HiOutlineExternalLink size={'2em'} color={'#F5A623'} className={'career_link'} />
                    </div>
                </div>
            }
        </div>
    )
}

export default CareerPost;
