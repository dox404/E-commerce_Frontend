import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
const PaginationFunc = (props) => {
    // console.log(props.showPerPage)

    const [counter, setCounter] = useState(1)

    //here we calculater the number of butttons total/showper page
    const numberOfButtons = Math.ceil(props.total / props.showPerPage)
    // const [numberOfButtons, setnumberOfButtons] = useState()
    function plus() {
        if (numberOfButtons === counter) {
            setCounter(counter)
        } else {
            setCounter(counter + 1)
        }

    }
    function minus() {
        if (counter === 1) {
            setCounter(1)
        } else {
            setCounter(counter - 1)
        }
    }
    useEffect(() => {
        const value = props.showPerPage * counter
        props.onPaginationChange(value - props.showPerPage, value)
    }, [counter])
    console.log(Math.ceil(props.total / props.showPerPage))
    console.log(numberOfButtons)

    return (
        <>
            <div clasName="justyfy-content-center">

                <Pagination>
                    <Pagination.Item><Button className="btn btn-primary" onClick={minus}>Previous</Button></Pagination.Item>

                    {
                        new Array(numberOfButtons).fill("").map((element, index) => (<Pagination.Item className={`${index + 1 === counter ? "active" : null}`} onClick={()=>setCounter(index+1)}>{index + 1}</Pagination.Item>))
                    }



                    <Pagination.Item> <Button className="btn btn-primary" onClick={plus}>Next</Button></Pagination.Item>

                </Pagination>

            </div>
        </>
    )
}

export default PaginationFunc

// new Array(numberOfButtons).fill("").map((element, index) => (