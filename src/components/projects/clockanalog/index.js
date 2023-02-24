import {React, Fragment, useState, useEffect} from 'react'
import dayjs from 'dayjs'
import './clockanalog.css'

export const ClockAnalog = () => {

    const[hourNow, setHour] = useState(dayjs())

    useEffect(() => {
        setInterval(()=> {
            setHour(dayjs())
        }, 10)
    }, [])

    let seconds = 0;

    let degHourRot = {
        'transform':`rotate(${((hourNow.get('hour')-3)*30)+(hourNow.get('minutes')*0.5)}deg)`
    }
    let degMinuteRot = {
        'transform':`rotate(${((hourNow.get('minutes')-15)*6)+((hourNow.get('seconds')*0.1))}deg)`
    }
    let degSecondRot = {
        'transform':`rotate(${(hourNow.get('second')*5)-90}deg)`
    }


    return (
        <Fragment>
            <div className="container-fluid page">
                <div className='base'>
                    <div className='numberbox box03'><div className='number_03'>3</div></div>
                    <div className='numberbox box04'><div className='number_04'>4</div></div>
                    <div className='numberbox box05'><div className='number_05'>5</div></div>
                    <div className='numberbox box06'><div className='number_06'>6</div></div>
                    <div className='numberbox box07'><div className='number_07'>7</div></div>
                    <div className='numberbox box08'><div className='number_08'>8</div></div>
                    <div className='numberbox box09'><div className='number_09'>9</div></div>
                    <div className='numberbox box10'><div className='number_10'>10</div></div>
                    <div className='numberbox box11'><div className='number_11'>11</div></div>
                    <div className='numberbox box12'><div className='number_12'>12</div></div>
                    <div className='numberbox box01'><div className='number_01'>1</div></div>
                    <div className='numberbox box02'><div className='number_02'>2</div></div>
                    <div className='centerBase'></div>

                    <div className='basePointerHour'style={degHourRot}>
                        <div className='hourPointer' ></div>
                    </div>
                    
                    <div className='basePointerMinute'style={degMinuteRot}>
                        <div className='minutePointer' ></div>
                    </div>
                    
                    <div className='basePointerSecond'style={degSecondRot}>
                        <div className='secondPointer' ></div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
    //<p className='numberbox'><div className='number'>12</div></p>
    //<p className='numberbox'><div className='teste'>11</div></p>
}