import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
const Pagination = (props) => {
    // console.log(props.showPerPage)

    const [counter, setCounter] = useState(1)
    function plus() {
        if (Math.ceil(props.total / props.showPerPage) === counter) {
            setCounter(counter)
        } else {
            setCounter(counter + 1)
        }

    }
    function minus() {
        // setCounter(counter - 1)
        if (counter === 1) {
            setCounter(1)
        } else {
            setCounter(counter - 1)
        }
    }
    useEffect(() => {
        const value = props.showPerPage * counter
        //     console.log("start",value-props.showPerPage)
        //    console.log("end",value)
        // console.log("mani")
        props.onPaginationChange(value - props.showPerPage, value)
    }, [counter])



    // function onButtonClick(type) {
    //     if (type === "prev") {

    //     } else if (type === "next"){

    //     }
    // }
    return (
        <>
            <div>
                <Button className="btn btn-primary" onClick={minus}>Previous</Button>
                <Button className="btn btn-primary" onClick={plus}>Next</Button>
            </div>
        </>
    )
}

export default Pagination
