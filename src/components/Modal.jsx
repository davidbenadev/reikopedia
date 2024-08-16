import { useState } from 'react';

export default function Modal({ data,  folder = 'reikopedia' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 id="products-heading" className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {data.map((item) => (
              <a href="#" className="group" onClick={(e) => { e.preventDefault(); openModal(`${folder}/${item.image}`); }} key={item.title}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                  <img src={`${folder}/${item.image}`} alt={item.title} className="h-64 w-full object-contain object-center group-hover:scale-110 duration-0 hover:duration-300" />
                </div>
                <div className="mt-4 flex items-center justify-center text-base font-medium text-gray-900 text-center">
                  <h3>{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {isOpen && (
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }} className="fixed inset-0 z-50 flex items-center justify-center" >
                <div className="relative bg-white rounded-lg p-4 max-w-md mx-auto">
                    <button type="button" onClick={closeModal} style={{ backgroundColor: '#fff' }} className="absolute top-2 right-2 rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" >
                     X
                    </button>
                    {selectedImage && (
                        <img src={selectedImage} alt="Selected" className="w-full h-auto" />
                    )}
                </div>
            </div>
        )}
      </div>
    </>
  );
}
