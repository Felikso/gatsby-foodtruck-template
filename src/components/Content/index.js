import React from 'react'

import './Content.css'

export default function Content({ children, title  }) {
    return (
        <div className={`content-box content-box__${title}`}>
            {children}
        </div>
    )
}
