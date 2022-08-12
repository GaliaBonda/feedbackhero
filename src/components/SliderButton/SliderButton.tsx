import React from 'react';
import './slider-button.scss';

interface Props {
    previous: boolean;
    changeComment: (next: boolean) => void;
}

export default function SliderButton({ previous, changeComment }: Props) {
    return (
    <button className={`${previous ? 'slider-btn-prev' : 'slider-btn-next'} slider-btn`} 
    onClick={() => changeComment(!previous)}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="24.5" transform="matrix(-1 0 0 1 25 25)" fill="#F8F8F8" stroke="#03A8B7" />
            <path d="M21.9168 19.5971C22.0106 19.5033 22.0633 19.3761 22.0633 19.2435C22.0633 19.1109 22.0106 18.9837 21.9168 18.8899C21.8231 18.7961 21.6959 18.7434 21.5633 18.7434C21.4306 18.7434 21.3034 18.7961 21.2097 18.8899L15.5522 24.5473C15.4584 24.6411 15.4057 24.7683 15.4057 24.9009C15.4057 25.0335 15.4584 25.1607 15.5522 25.2545L21.2097 30.9119C21.3034 31.0056 21.4306 31.0583 21.5633 31.0583C21.6959 31.0583 21.8231 31.0056 21.9168 30.9119C22.0106 30.8181 22.0633 30.6909 22.0633 30.5583C22.0633 30.4256 22.0106 30.2985 21.9168 30.2047L17.113 25.4009L34.2925 25.4016C34.4253 25.4016 34.5527 25.3488 34.6466 25.2549C34.7405 25.161 34.7932 25.0337 34.7932 24.9009C34.7932 24.7681 34.7405 24.6407 34.6466 24.5468C34.5527 24.4529 34.4253 24.4002 34.2925 24.4002L17.113 24.4009L21.9168 19.5971Z" fill="#03A8B7" />
        </svg>
    </button>
    );
}