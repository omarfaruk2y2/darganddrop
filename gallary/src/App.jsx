import React, {useState, useRef} from 'react'
import { ImImage } from 'react-icons/im';
import List2 from './Test/List2';
import List3 from './Test/List3';

const items =[
  {
    id: 1,
    text: "1st"
  },
  {
    id: 2,
    text: "2nd"
  },
  {
    id: 3,
    text: "3rd"
  },
  {
    id: 4,
    text: "4th"
  }
]

const App = (props) => {

  const dragItem = useRef();
  const dragOverItem = useRef();

  const [list, setList] = useState(['https://i.ibb.co/M1T3fhN/image-1.webp', 'https://i.ibb.co/mcDSYDt/image-2.webp', 'https://i.ibb.co/XYSTvzH/image-3.webp','https://i.ibb.co/tQd7g3x/image-4.webp','https://i.ibb.co/JRhWFbK/image-5.webp','https://i.ibb.co/XSmBXXR/image-6.webp','https://i.ibb.co/RSWkYFW/image-7.webp','https://i.ibb.co/pWT7wvw/image-8.webp', 'https://i.ibb.co/xsyDwcm/image-9.webp', 'https://i.ibb.co/ZShS7mW/image-10.jpg', 'https://i.ibb.co/GdCKNYR/image-11.jpg']);

  const dragStart = (e, position) =>{
    dragItem.current = position;
    // console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    // console.log(e.target.innerHTML);
  };

  const drop = (e) =>{
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  }

  const onDrop = (e) => {console.log(e.target);}

  return (
    <>
    <List3></List3>
    <List2></List2>
    <div className='max-w-7xl mx-auto mt-11'>
      <div className='container'>
      {
        list.map((item, index)=> 
          <div 
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd = {drop}
            onDrop={(e) => onDrop(e)} 
            key={index}
            draggable
            className="card"
          >
            <img src={item} alt="" />

          </div>
        )
      }
      <div className="flex items-center justify-center w-full">
          <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <ImImage></ImImage>
              <h1>Add images</h1>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>
    </div>

    </>
  )
}

export default App