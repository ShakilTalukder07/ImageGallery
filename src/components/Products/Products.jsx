import { BsCardImage } from 'react-icons/bs'
import { useCallback, useRef, useState } from 'react'
import { useDrag, useDrop } from "react-dnd";


const Products = () => {

    // State to handle image upload 
    const [images, setImages] = useState([]);
    const [nextImageId, setNextImageId] = useState(1);

    // Function to handle image upload
    const handleImageUpload = (e) => {
        // const selectedImage = URL.createObjectURL(e.target.files[0])
        // const imageId = selectedImage.indexOf
        // console.log(selectedImage);
        // setImages([...images, selectedImage])

        const selectedImage = e.target.files[0];
        if (selectedImage) {
            // Create a new image object with ID and data URL
            const newImage = {
                id: nextImageId, // Assign a unique ID
                url: URL.createObjectURL(selectedImage), // Convert the selected image to a data URL
            };

            // Increment the ID for the next image
            setNextImageId(nextImageId + 1);

            // Add the new image to the images array
            setImages([...images, newImage]);
        }
    };

console.log(images);

    return (
        <div className='p-5'>
            <div className='max-w-[1240px] grid grid-cols-5 gap-3 '>
                {
                    images.map((image, index) => (

                        <div className={`${index === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'} border border-black rounded-lg`} key={index}>
                            <img src={image.url} alt="" />

                        </div>
                    )
                    )
                }
                {/* Form to upload image  */}
                <form className='border border-dashed border-black flex flex-col justify-center items-center rounded-lg'>
                    <input onChange={handleImageUpload} className='bg-transparent' type="file" accept="image/*" name="" id="" />
                    <BsCardImage className=''></BsCardImage>
                    <p className='text-sm'>Add Images</p>
                </form>

            </div>
        </div>
    );
};

export default Products;