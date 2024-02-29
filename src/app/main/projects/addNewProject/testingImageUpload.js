import React, { useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Product } from '../models';
 
const CreateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageBase64, setImageBase64] = useState();
 
    const handleImageNameChange = (e) => {
        setName(e.target.value);
    };
 
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };
 
    const handleImageFileChange = async (e) => {
        const file = e.target.files[0];
 
        // Convert the image file to base64
        const base64 = await convertImageToBase64(file);
        setImageBase64(base64);
    };
 
    const convertImageToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
 
            reader.onloadend = () => {
                resolve(reader.result.split(',')[1]);
            };
 
            reader.onerror = (error) => {
                reject(error);
            };
 
            reader.readAsDataURL(file);
        });
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        try {
            // Create a new Product instance with the base64-encoded image
            const newProduct = new Product({
                name: name,
                price: parseFloat(price), // Assuming price is a float
                imageUrl: imageBase64,
            });
 
            console.log(newProduct)
 
            // Save the new Product to the DataStore
            await DataStore.save(newProduct);
 
            console.log('Product created successfully!');
 
 
            try {
                await Amplify.DataStore.sync();
                console.log('Sync successful');
            } catch (error) {
                console.error('Error syncing:', error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
 
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Image Name:
                <input type="text" value={name} onChange={handleImageNameChange} />
            </label>
            <br />
            <label>
                Price:
                <input type="text" value={price} onChange={handlePriceChange} />
            </label>
            <br />
            <label>
                Image:
                <input type="file" accept="image/*" onChange={handleImageFileChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};
 
export default CreateProduct;