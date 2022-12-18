import React from 'react'

const Side = () => {
    return (
        <>
            <div className="card mt-2" style={{width:230}}>
                <div className="list-group">
                    <h5>Color</h5>
                    <input type="checkbox" className="list-group-item"/>Red
                    <input type="checkbox" className="list-group-item"/>Blue
                    <input type="checkbox" className="list-group-item"/>Green
                </div>


                <div className="list-group">
                    <h5>Gender</h5>
                    <input type="checkbox" className="list-group-item"/>Male
                    <input type="checkbox" className="list-group-item"/>Female
                    
                </div>

                <div className="list-group">
                    <h5>Price</h5>
                    <input type="checkbox" className="list-group-item"/>0-250/-Rs
                    <input type="checkbox" className="list-group-item"/>251-450/-Rs
                    <input type="checkbox" className="list-group-item"/>450 
                </div>

                <div class="list-group">
                    <h5>Type</h5>
                    Polo<input type="checkbox" className="list-group-item"/>
                    Hoodie<input type="checkbox" className="list-group-item"/>
                    Basics<input type="checkbox" className="list-group-item"/>
                </div>
              
            </div>
        </>
    )
}

export default Side
