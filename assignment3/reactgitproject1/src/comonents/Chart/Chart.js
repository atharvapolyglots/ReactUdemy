import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

export default function Chart(prop) {


    const datapointValues=prop.datapoints.map(datapoint=>datapoint.value)
    const totalMaximum= Math.max(...datapointValues)

    return (
        <div className='chart'>
            {prop.datapoints.map
                (datapoint => <ChartBar
                    key={datapoint.lbel}
                    value={datapoint.value}
                    maxvalue={totalMaximum}
                    label={datapoint.label} />
                )}
        </div>
    )
}
