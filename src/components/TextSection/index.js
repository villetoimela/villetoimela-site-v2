import React from 'react';

export default function Index(props) {
    const { title, content, swap } = props;

    const leftSection = swap ? (
        <div class="left-section">
            <p>{content}</p>
        </div>
    ) : (
        <div class="left-section">
            <h4>{title}</h4>
        </div>
    );

    const rightSection = swap ? (
        <div class="right-section">
            <h4>{title}</h4>
        </div>
    ) : (
        <div class="right-section">
            <p>{content}</p>
        </div>
    );

    return (
        <div className="text-section">
            <div className="text-section-body">
                {leftSection}
                {rightSection}
            </div>
        </div>
    );
}
