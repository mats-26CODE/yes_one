import React from 'react';
import './NoteCallout.css';

const NoteCalloutLeft = ({icon, slash, top }) => {
    return (
        <div>
            {
                top ? 
                <div className={'left_note_callout_box'}>
                    <div></div>
                    {
                        icon ? <h4>{icon}</h4> : <h4>{slash}</h4>
                    }
                </div>
            
            :
                <div className={'bottom_left_note_callout_box'}>
                    <div></div>
                    {
                        icon ? <h4>{icon}</h4> : <h4>{slash}</h4>
                    }
                </div>
            }
        </div>
    )
}

export default NoteCalloutLeft;
