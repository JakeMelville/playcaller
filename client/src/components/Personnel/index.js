import React from 'react'
import './style.css'


function Personnel() {
    return (
        <div className='row'>
            <form id="inputForm" className="pb-3 text-center">Personnel:
                <select name='personnel'className='pr-3'>
                    <option value='23'>23</option>
                    <option value='22'>22</option>
                    <option value='21'>21</option>
                    <option value='20'>20</option>
                    <option value='13'>13</option>
                    <option value='12'>12</option>
                    <option value='11'>11</option>
                    <option value='10'>10</option>
                    <option value='02'>02</option>
                    <option value='01'>01</option>
                </select>Down & Distance:
                <select name='down'>
                    <option value='1st'>1st</option>
                    <option value='2nd'>2nd</option>
                    <option value='3rd'>3rd</option>
                    <option value='4th'>4th</option>
                </select>
                <input id="input" type="text" placeholder="Distance"></input>
                <button id="submitBtn" className='2ndbtn-primary' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Personnel;
