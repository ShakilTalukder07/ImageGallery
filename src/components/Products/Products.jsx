// import image1 from '../../assets/images/image-1.webp'
// import image2 from '../../assets/images/image-2.webp'
// import image3 from '../../assets/images/image-3.webp'
// import image4 from '../../assets/images/image-4.webp'
// import image5 from '../../assets/images/image-5.webp'
// import image6 from '../../assets/images/image-6.webp'
// import image7 from '../../assets/images/image-7.webp'
// import image8 from '../../assets/images/image-8.webp'
// import image9 from '../../assets/images/image-9.webp'
// import image10 from '../../assets/images/image-10.jpeg'
// import image11 from '../../assets/images/image-11.jpeg'
import { BsCardImage } from 'react-icons/bs'
import { useState } from 'react'


const Products = () => {

    const [images, setImages] = useState([]);

    // Function to handle image upload
    const handleImageUpload = (e) => {
        // const selectedImage = e.target.files[0].name;
        const selectedImage = URL.createObjectURL(e.target.files[0])
        console.log(selectedImage);
        setImages([...images, selectedImage])

    };
    // console.log(images[0]);


    return (
        <div className='p-5'>
            <div className='max-w-[1240px] grid grid-cols-5 gap-3 '>
                {
                    images.map((image, index) => (

                        <div className={`${index === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'} border border-black rounded-lg`} key={index}>
                            <img src={image} alt="" />
                        </div>
                    )
                    )
                }

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