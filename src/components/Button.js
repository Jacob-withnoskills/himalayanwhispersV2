import React from 'react';
import './css/Button.css';

export default function Button({ text, onClick }) {
    return <button className="primary-button" onClick={onClick}>{text}</button>;
}