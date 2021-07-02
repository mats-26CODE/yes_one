import React from 'react';

const CircleArt = ({image, icon, circleRight}) => {
    return (
        <div className={'circle_art'}>
            {
                circleRight ? 
                <div
                    style={{
                        backgroundImage: `${image}`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        background: '#828282',
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        float: 'right'
                    }}
                >
                    {
                        icon ? {icon} : null
                    }
                </div>
                :
                <div
                    style={{
                        backgroundImage: `${image}`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        background: '#828282',
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        float: 'right',
                        marginRight: '40%'
                    }}
                >
                    {
                        icon ? {icon} : null
                    }
                </div>
            }
        </div>
    )
}

export default CircleArt;
