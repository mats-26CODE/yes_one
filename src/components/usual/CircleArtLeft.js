import React from 'react';

const CircleArtLeft = ({image, icon, circleRight}) => {
    return (
        <div>
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
                        float: 'left'
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
                        float: 'left',
                        marginLeft: '40%'
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

export default CircleArtLeft;
