import React from 'react'

export default function TextForm2(props) {
    return (
        <>
            <div class="form-group">
                <label for="exampleFormControlTextarea1" className='text-light'><h2> {props.Headings} </h2></label>
                <textarea class="form-control" id="exampleFormControlTextarea1"  rows="12"></textarea>
            </div>

            <button className="btn btn-block btn-primary my-4 mx-3">UpperCase</button>
        </>
    )
}
