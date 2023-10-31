import { useState, useEffect } from 'react'
import { ImImage } from 'react-icons/im';
import { DragDropContext } from 'react-beautiful-dnd';

const App = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch('gallery.json')
      .then(res => res.json())
      .then(data => setGallery(data))
      .catch(Error => {
        console.log("Error");
      })
  }, [])


  return (
    <div className='max-w-7xl mx-auto'>
      <div className='py-5'>
        <div className=''>
          <h1 className='text-3xl font-bold'>Gallery</h1>
        </div>
        <div></div>
      </div>
      <div className='container'>
        {
          gallery.map((item, index) =>
            <div className="card"
              key={index}
            >
              <img src={item.img} alt="" />
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
  )
}

export default App