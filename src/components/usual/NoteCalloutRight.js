import React from 'react';
import './NoteCallout.css';

const NoteCalloutRight = ({icon, slash, top }) => {
    return (
        <div>
            {
                top ? 
                <div className={'note_callout_box'}>
                    <div></div>
                    {slash ? <h4>{slash}</h4> : null}
                    {icon ? <h4>{icon}</h4> : null}
                </div>
                :
                <div className={'bottom_note_callout_box'}>
                    <div></div>
                    {slash ? <h4>{slash}</h4> : null}
                    {icon ? <h4>{icon}</h4> : null}
                </div>
            }
        </div>
    )
}

export default NoteCalloutRight;
