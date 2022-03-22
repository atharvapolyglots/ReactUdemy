import React from 'react'
import './ChartBar.css'

export default function ChartBar(prop) {


    let barFillHeight='0%';
    if (prop.max>0){
        barFillHeight=Math.round((prop.value/prop.maxValue)*100) + '%'
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar-inner'>
                <div className='chart-bar-fill' style={{height: barFillHeight}}></div>
            </div>
            <div className='chart-bar-label'>{prop.label}</div>
        </div>

    )
}
