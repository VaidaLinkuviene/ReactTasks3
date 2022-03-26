import React from 'react'

function Cards(props) {

    let { id, image, title, text, status, statusChange } = props;

    return (
        <div className='col-4 my-3 px-3'>
            <img src={image} alt={title} className="d-flex align-self-stretch" width={"100%"} height={"200px"} />
            <p>{text}</p>
            <p> {status ? "Išmokau" : "Mokausi"}</p>
            <button onClick={() => statusChange(id)}>OK</button>
        </div>


    )
}

export default Cards