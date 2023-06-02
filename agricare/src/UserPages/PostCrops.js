import React, { useContext, useEffect, useReducer, useState } from "react";
import "./PostCrops.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Store } from "../utilites/Store";
import "./products.css"

const reducer=(state,action)=>{
  switch(action.type){
     case "FETCH_REQUEST":
     return{...state,loading:true}
     case "FETCH_SUCCES":
     return{...state,loading:false,product:action.payload}
     case "FETCH_FAILED":
     return{...state,loading:false,error:action.payload} 
     default:
     return " "  
   }
}
const initialState={
  product:[],
  loading:true,
  error:''
}


export const PostCrops = () => {
  const {state,ctxdispatch}=useContext(Store)
    const {UserInfo}=state
  const [cropName, setCropName] = useState("");
  const [cropType, setCropType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data={
      name:cropName,
      type:cropType,
      quantity:quantity,
      price:price,
      description:description,
      image:image,
      location:location
    }
    try {
      const result=await axios.post("http://localhost:4000/addProduct",data)
      toast.success("Added SuccessFully")
    } catch (error) {
      console.log(error)
    }
    // TODO: Send crop details to server using API call
  };
  const handleImage=(e)=>{
    e.preventDefault()
    const reader=new FileReader()
    const file=e.target.files[0]
    if (file.size <700000) { 
       toast.success("Image is Accepted")
       reader.onloadend = () => {
         setImage(reader.result);
       };
       reader.readAsDataURL(file);
     } else {
       toast.error("Image is Too Largee")
     }
}
const [{loading,error,product},dispatch]=useReducer(reducer,initialState)  


useEffect(()=>{
  const fetchData=async()=>{
    dispatch({type:"FETCH_REQUEST"})
    try {
      const result=await axios.get(`http://localhost:4000/fetchData`)
      dispatch({type:"FETCH_SUCCES",payload:result.data})
    } catch (error) {
      dispatch({type:"FETCH_FAILED",payload:error})
    }
  }
  fetchData()
},[])

return (
  <>
   { UserInfo && UserInfo.type==="Buyer"?
    <div className="search-page">
      <ul className="product-list">
        {product.map((product) => (
          <li key={product.id} className="product-item">
          <div className="product-img-container">
          <img src={product.image} alt={product.name} className="product-img" />
          </div>
          <div className="product-info">
              <h2 className="product-name">{product.cropName}</h2>
              <p className="product-desc">{product.description}</p>
              <p className="product-price">{product.pricePerUnit}</p>
              <p className="product-quantity">{product.quantity} in stock</p>
              <p className=""><strong>{product.location}</strong></p>
            </div>
            </li>
        ))}
      </ul>
    </div>
       :null}
       {UserInfo && UserInfo.type==="Farmer"?
        <section>
      <div className="post-crops-container">
        <div className="form-container">
          <h2>Post Crops</h2>
          <form className="post-crops-form" onSubmit={handleSubmit}>
            <label htmlFor="crop-name">Crop Name</label>
            <input
              value={cropName}
              name="crop-name"
              onChange={(e) => setCropName(e.target.value)}
              id="crop-name"
              placeholder="Crop Name"
              />

            <label htmlFor="crop-type">Crop Type</label>
            <input
              value={cropType}
              name="crop-type"
              onChange={(e) => setCropType(e.target.value)}
              id="crop-type"
              placeholder="Crop Type"
              />

            <label htmlFor="quantity">Quantity</label>
            <input
              value={quantity}
              name="quantity"
              onChange={(e) => setQuantity(e.target.value)}
              id="quantity"
              placeholder="Quantity"
            />

            <label htmlFor="price">Price per unit</label>
            <input
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              id="price"
              placeholder="Price per unit"
              />

            <label htmlFor="description">Description</label>
            <textarea
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              placeholder="Description"
              ></textarea>

            <label htmlFor="image">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              id="image"
              />
            <label htmlFor="Location">Price per unit</label>
            <input
              value={location}
              name="location"
              onChange={(e) => setLocation(e.target.value)}
              id="location"
              placeholder="Enter City"
              />

            <button type="submit">Post Crop</button>
          </form>
        </div>
      </div>
    </section>
    :null
            }
              </>
              );
            };
            


////////////////////////////////////////
