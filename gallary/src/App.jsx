import React, {useState, useRef} from 'react'
import { ImImage } from 'react-icons/im';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const App = (props) => {

  const dragItem = useRef();
  const dragOverItem = useRef();

  const [list, setList] = useState([
    { id: 1, img: 'https://i.ibb.co/M1T3fhN/image-1.webp' },
    { id: 2, img: 'https://i.ibb.co/mcDSYDt/image-2.webp' },
    { id: 3, img: 'https://i.ibb.co/XYSTvzH/image-3.webp' },
    { id: 4, img: 'https://i.ibb.co/tQd7g3x/image-4.webp' },
    { id: 5, img: 'https://i.ibb.co/JRhWFbK/image-5.webp' },
    { id: 6, img: 'https://i.ibb.co/XSmBXXR/image-6.webp' },
    { id: 7, img: 'https://i.ibb.co/RSWkYFW/image-7.webp' },
    { id: 8, img: 'https://i.ibb.co/pWT7wvw/image-8.webp' },
    { id: 9, img: 'https://i.ibb.co/xsyDwcm/image-9.webp' },
    { id: 10, img: 'https://i.ibb.co/ZShS7mW/image-10.jpg' },
    { id: 11, img: 'https://i.ibb.co/GdCKNYR/image-11.jpg' }
  ]);

  const dragStart = (e, position) =>{
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
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

  const [selectedItems, setSelectedItems] = useState([]);
  console.log(selectedItems);
  const handleItemSelection = (itemId) => {
    const isSelected = selectedItems.includes(itemId);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleDeleteSelected = () => {
    const updatedItems = list.filter((item) => !selectedItems.includes(item.id));
    setList(updatedItems);
    setSelectedItems([]);
  };

  return (
    <>
    <div className='max-w-7xl mx-auto my-6 px-3'>
      <div className='px-9 pt-9 pb-5 bg-white rounded-t-md border-b'>
        {selectedItems.length > 0 ?
          <div className='flex justify-between'>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" checked="checked" readOnly className="checkbox checkbox-primary mb-2 mr-2" />
                <span className="label-text text-xl font-medium"><span className='mx-2'>{selectedItems.length}</span>File Selected</span>
              </label>
            </div>
            <button className='text-xl font-medium text-red-600' onClick={handleDeleteSelected}>Delete File</button>
          </div>
          : 
          <h1 className='text-xl font-medium'>Gallery</h1>
        }
      </div>
      <div className='container p-9 bg-white rounded-b-md'>
      {
        list.map((item, index)=> 
          <div 
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd = {drop}
            key={index}
            draggable
            className="card cursor-move border relative"
          >
            <div className='overly'></div>
            <img className='rounded-md h-full' src={item.img} alt="" />
            <div className='check'>
              <Checkbox 
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleItemSelection(item.id)} 
                  className='bg-white border-white text-white relative' {...label} 
              />
            </div>
          </div>
        )
      }
      <div className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="drop-file flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <ImImage></ImImage>
              <h1 className='mt-2'>Add images</h1>
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