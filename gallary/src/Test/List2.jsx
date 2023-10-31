import React, { useState } from 'react'

import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';


const List2 = () => {

    const itemList = [
        {
            id: 0,
            img: "https://i.ibb.co/M1T3fhN/image-1.webp"
        },
        {
            id: 1,
            img: "https://i.ibb.co/mcDSYDt/image-2.webp"
        },
        {
            id: 2,
            img: "https://i.ibb.co/XYSTvzH/image-3.webp"
        },
        {
            id: 3,
            img: "https://i.ibb.co/tQd7g3x/image-4.webp"
        },
        {
            id: 4,
            img: "https://i.ibb.co/JRhWFbK/image-5.webp"
        },
        {
            id: 5,
            img: "https://i.ibb.co/XSmBXXR/image-6.webp"
        },
        {
            id: 6,
            img: "https://i.ibb.co/RSWkYFW/image-7.webp"
        },
        {
            id: 7,
            img: "https://i.ibb.co/pWT7wvw/image-8.webp"
        },
        {
            id: 8,
            img: "https://i.ibb.co/xsyDwcm/image-9.webp"
        },
        {
            id: 9,
            img: "https://i.ibb.co/ZShS7mW/image-10.jpg"
        },
        {
            id: 10,
            img: "https://i.ibb.co/GdCKNYR/image-11.jpg"
        }   
    ]

    const [data, setData] = useState(itemList);

    const handleDragEnd = (result) => {
        if(!result.destination) return;
        const items = Array.from(data);
        const [reorderData] = items.splice(result.souce.index,1);
        items.splice(result.destination.index,0,reorderData);
        setData(items);
    }

  return (
    <div className='max-w-7xl mx-auto'>
        <div className=''>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId='list'>
                    {(provided) => (
                        <div className='' {...provided.droppableProps} ref={provided.innerRef}>
                            {data && data.map((item, index)=>{
                                return (
                                    <Draggable key={item.id} droppableId={index.toString()} index={index}>
                                        {(provided) => (
                                            <div className="" ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}>
                                                <img className='max-w-xs' src={item.img} alt="" />
                                                <h1>{item.id}</h1>
                                            </div>
                                        )}
                                    </Draggable>
                                    
                                );
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                    
                </Droppable>
            </DragDropContext>
        </div>
    </div>
  )
}

export default List2