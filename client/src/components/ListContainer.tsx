import React from "react"
import AddItem from  "./AddItem"
import Item from "./Item"

function ListContainer () {
    return (
        <div className="box">
            <AddItem />
            <Item />
            <Item />
            <Item />
        </div>
    )
}

export default ListContainer