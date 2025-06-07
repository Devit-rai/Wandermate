// import React, { useEffect, useState } from "react";

// const Travel = () => {
//   const [travels, setTravel] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [editMode, setEditMode] = useState(false);
//   const [currentTravelIndex, setCurrentTravelIndex] = useState(null);
//   const [newTravel, setNewTravel] = useState({
//     name: "",
//     price: "",
//     img: "",
//     desc: "",
//   });

//   const LoadTravelsFromStrg = () => {
//     const storeTravels = localStorage.getItem("travels");
//     if (storeTravels) {
//       setTravel(JSON.parse(storeTravels));
//     }
//   };

//   const SaveTravelsToStrg = (travel) => {
//     localStorage.setItem("travels", JSON.stringify(travel));
//   };

//   useEffect(() => {
//     LoadTravelsFromStrg();
//   }, []);

//   const handleAdd = () => {
//     setShowForm(true);
//   };

//   const handleCancel = () => {
//     setShowForm(false);
//     setEditMode(false);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setNewTravel((prevState) => ({
//       ...prevState,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleEdit = (index) => {
//     setCurrentTravelIndex(index);
//     setNewTravel(travels[index]);
//     setShowForm(true);
//     setEditMode(true);
//   };

//   const handleDelete = (index) => {
//     const updatedTravel = [...travels];
//     updatedTravel.splice(index, 1);
//     setTravel(updatedTravel);
//     SaveTravelsToStrg(updatedTravel);
//   };

//   const handleSaveTravels = () => {
//     let updatedTravel;
//     if (editMode) {
//       updatedTravel = travels.map((travel, index) =>
//         index === currentTravelIndex ? newTravel : travel
//       );
//     } else {
//       updatedTravel = [...travels, newTravel];
//     }
//     setTravel(updatedTravel);
//     SaveTravelsToStrg(updatedTravel);
//     setShowForm(false);
//     setEditMode(false);
//     setNewTravel({
//       name: "",
//       price: "",
//       img: "",
//       desc: "",
//     });
//   };

//   return (
//     <>
//       <div className="flex flex-col space-y-6 ml-10">
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border rounded-lg shadow-sm">
//             <thead>
//               <tr className="bg-gray-500 text-white">
//                 <th className="px-6 py-3 border">Name</th>
//                 <th className="px-6 py-3 border">Price</th>
//                 <th className="px-6 py-3 border">Image</th>
//                 <th className="px-6 py-3 border">Description</th>
//                 <th className="px-6 py-3 border">Update</th>
//               </tr>
//             </thead>
//             <tbody>
//               {travels.map((travel, index) => (
//                 <tr key={index} className="hover:bg-gray-100 text-sm">
//                   <td className="px-6 py-3 border">{travel.name}</td>
//                   <td className="px-6 py-3 border">{travel.price}</td>
//                   <td className="px-6 py-3 border">{travel.img}</td>
//                   <td className="px-6 py-3 border">{travel.desc}</td>
//                   <td className="px-6 py-3 border flex space-x-2">
//                     <button
//                       className="bg-green-500 text-white px-3 py-2.5 rounded"
//                       onClick={() => handleEdit(index)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="bg-red-500 text-white px-3 py-2.5 rounded"
//                       onClick={() => handleDelete(index)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="w-full flex justify-center">
//           <button
//             className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700"
//             onClick={handleAdd}
//           >
//             Add Travel
//           </button>
//         </div>
//         {showForm && (
//           <div>
//             <form className="space-y-4 mb-10">
//               <div>
//                 <label className="block text-md font-semibold text-gray-700">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={newTravel.name}
//                   onChange={handleChange}
//                   className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-md font-semibold text-gray-700">
//                   Image
//                 </label>
//                 <input
//                   type="text"
//                   name="img"
//                   value={newTravel.img}
//                   onChange={handleChange}
//                   className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-md font-semibold text-gray-700">
//                   Price
//                 </label>
//                 <input
//                   type="text"
//                   name="price"
//                   value={newTravel.price}
//                   onChange={handleChange}
//                   className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-md font-semibold text-gray-700">
//                   Description
//                 </label>
//                 <textarea
//                   name="desc"
//                   value={newTravel.desc}
//                   onChange={handleChange}
//                   className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>
//               <div className="flex space-x-4">
//                 <button
//                   type="button"
//                   onClick={handleSaveTravels}
//                   className="bg-green-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700"
//                 >
//                   {editMode ? "Update Travel" : "Save Travel"}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleCancel}
//                   className="bg-gray-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-700"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Travel;
