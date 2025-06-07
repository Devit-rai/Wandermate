// import React, { useState, useEffect } from "react";
// import axios, { formToJSON } from "axios";

// const Hotels = () => {
//   const [hotels, setHotels] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     image: [""],
//     description: "",
//     rating: "",
//     freeCancellation: false,
//     reserveNow: false,
//   });

//   const fetchHotels = async () => {
//     try {
//       const response = await axios.get("http://localhost:5236/api/hotels");
//       setHotels(response.data);
//     } catch (error) {
//       console.error("Error fetching hotels:", error);
//     }
//   };

//   useEffect(() => {
//     fetchHotels();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleImageChange = (index, value) => {
//     const newImages = [...formData.image];
//     newImages[index] = value;
//     setFormData((prevData) => ({
//       ...prevData,
//       image: newImages,
//     }));
//   };

//   const handleSave = async () => {
//     try {
//       if (formData.id) {
//         // Update existing hotel
//         await axios.put(
//           `http://localhost:5236/api/hotels/${formData.id}`,
//           formData
//         );
//       } else {
//         // Add new hotel
//         await axios.post("http://localhost:5236/api/hotels", formData);
//       }
//       resetForm();
//       fetchHotels();
//     } catch (error) {
//       console.error(
//         "Error saving hotel:",
//         error.response ? error.response.data : error.message
//       );
//     }
//   };

//   const handleEdit = (hotel) => {
//     setFormData(hotel);
//     setShowForm(true);
//   };

//   const handleAddHotel = () => {
//     resetForm();
//     setShowForm(true);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5236/api/hotels/${id}`);
//       fetchHotels();
//     } catch (error) {
//       console.error("Error deleting hotel:", error);
//     }
//   };

//   const truncateDescription = (text, length = 45) => {
//     return text.length > length ? `${text.slice(0, length)}...` : text;
//   };

//   const resetForm = () => {
//     setFormData({
//       name: "",
//       price: "",
//       image: [""],
//       description: "",
//       rating: "",
//       freeCancellation: false,
//       reserveNow: false,
//     });
//     setShowForm(false);
//   };

//   return (
//     <div className="flex flex-col space-y-6 ml-10">
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border rounded-lg shadow-sm">
//           <thead>
//             <tr className="bg-gray-500 text-white">
//               <th className="px-6 py-3 border">Name</th>
//               <th className="px-6 py-3 border">Image</th>
//               <th className="px-6 py-3 border">Price</th>
//               <th className="px-6 py-3 border">Description</th>
//               <th className="px-6 py-3 border">Ratings</th>
//               <th className="px-6 py-3 border">Free Cancellation</th>
//               <th className="px-6 py-3 border">Reservation</th>
//               <th className="px-6 py-3 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {hotels.map((hotel, index) => (
//               <tr key={index} className="hover:bg-gray-100 text-sm">
//                 <td className="px-6 py-3 border">{hotel.name}</td>
//                 <td className="py-2 px-4">
//                   {hotel.image
//                     .filter((img) => img)
//                     .map((img, index) => (
//                       <div key={index} className="mb-1">
//                         {img}
//                       </div>
//                     ))}
//                 </td>
//                 <td className="px-6 py-3 border">{hotel.price}</td>
//                 <td className="px-6 py-3 border">
//                   {truncateDescription(hotel.description)}
//                 </td>

//                 <td className="px-6 py-3 border">{hotel.rating}</td>
//                 <td className="px-6 py-3 border">
//                   {hotel.freeCancellation ? "Yes" : "No"}
//                 </td>
//                 <td className="px-6 py-3 border">
//                   {hotel.reserveNow ? "Available" : "Not Available"}
//                 </td>
//                 <td className="px-6 py-3 border flex space-x-2">
//                   <button
//                     className="bg-green-500 text-white px-3 py-2.5 rounded"
//                     onClick={() => handleEdit(hotel)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="bg-red-500 text-white px-3 py-2.5 rounded"
//                     onClick={() => handleDelete(hotel.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="w-full flex justify-center">
//         <button
//           className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700"
//           onClick={handleAddHotel}
//         >
//           Add Hotel
//         </button>
//       </div>

//       {showForm && (
//         <div className="w-1/2 ">
//           <form className="space-y-4 mb-10">
//             <div>
//               <label className="block text-md font-semibold text-gray-700">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-md font-semibold text-gray-700">
//                 Image
//               </label>
//               <input
//                 type="text"
//                 name="img"
//                 value={formData.img}
//                 onChange={(e) => handleImageChange(index, e.target.value)}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-md font-semibold text-gray-700">
//                 Price
//               </label>
//               <input
//                 type="text"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-md font-semibold text-gray-700">
//                 Price
//               </label>
//               <input
//                 type="text"
//                 name="desc"
//                 value={formData.desc}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-md font-semibold text-gray-700">
//                 Ratings
//               </label>
//               <input
//                 type="text"
//                 name="rating"
//                 value={formData.rating}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-md font-semibold text-gray-700">
//                 Free Cancellation
//               </label>
//               <input
//                 type="checkbox"
//                 name="freeCancellation"
//                 checked={formData.freeCancellation}
//                 onChange={handleInputChange}
//                 className="mt-1 h-5 w-5 text-blue-600 border-gray-300 rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-md font-semibold text-gray-700">
//                 Reservation
//               </label>
//               <input
//                 type="checkbox"
//                 name="reserveNow"
//                 checked={formData.reserveNow}
//                 onChange={handleInputChange}
//                 className="mt-1 h-5 w-5 text-blue-600 border-gray-300 rounded"
//               />
//             </div>
//             <div className="flex space-x-4">
//               <button
//                 type="button"
//                 className="bg-green-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700"
//                 onClick={handleSave}
//               >
//                 Save
//               </button>
//               <button
//                 type="button"
//                 onClick={resetForm}
//                 className="bg-gray-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-700"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Hotels;
