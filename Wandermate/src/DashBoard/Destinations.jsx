// import React, { useState, useEffect } from "react";

// const Destinations = () => {
//   const [destination, setDestination] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [editMode, setEditMode] = useState(false);
//   const [currentDestinationIndex, setCurrentDestinationIndex] = useState(null);
//   const [newDestination, setNewDestination] = useState({
//     title: "",
//     weather: "",
//     img: "",
//     desc: "",
//   });

//   const LoadDestinationsFromStrg = () => {
//     const storeDestinations = localStorage.getItem("destinations");
//     if (storeDestinations) {
//       setDestination(JSON.parse(storeDestinations));
//     }
//   };

//   const SaveDestinationsToStrg = (destination) => {
//     localStorage.setItem("destinations", JSON.stringify(destination));
//   };

//   useEffect(() => {
//     LoadDestinationsFromStrg();
//   }, []);

//   const addDestination = () => {
//     setShowForm(true);
//   };

//   const handleCancel = () => {
//     setShowForm(false);
//     setEditMode(false);
//     setNewDestination({
//       title: "",
//       weather: "",
//       img: "",
//       desc: "",
//     });
//   };

//   const handleEdit = (index) => {
//     setCurrentDestinationIndex(index);
//     setNewDestination(destination[index]);
//     setShowForm(true);
//     setEditMode(true);
//   };

//   const handleSaveDestinations = () => {
//     let updatedDestinations;
//     if (editMode) {
//       updatedDestinations = destination.map((destination, index) =>
//         index === currentDestinationIndex ? newDestination : destination
//       );
//     } else {
//       updatedDestinations = [...destination, newDestination];
//     }
//     setDestination(updatedDestinations);
//     SaveDestinationsToStrg(updatedDestinations);
//     setShowForm(false);
//     setEditMode(false);
//     setNewDestination({
//       title: "",
//       weather: "",
//       img: "",
//       desc: "",
//     });
//   };

//   const handleDelete = (index) => {
//     const updatedDestinations = [...destination];
//     updatedDestinations.splice(index, 1);
//     setDestination(updatedDestinations);
//     SaveDestinationsToStrg(updatedDestinations);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewDestination((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   return (
//     <>
//       <div className="flex flex-col space-y-6 ml-10">
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border rounded-lg shadow-sm">
//             <thead>
//               <tr className="bg-gray-500 text-white">
//                 <th className="px-6 py-3 border">Title</th>
//                 <th className="px-6 py-3 border">Weather</th>
//                 <th className="px-6 py-3 border">Image</th>
//                 <th className="px-6 py-3 border">Description</th>
//                 <th className="px-6 py-3 border">Update</th>
//               </tr>
//             </thead>
//             <tbody>
//               {destination.map((destination, index) => (
//                 <tr key={index} className="hover:bg-gray-100 text-sm">
//                   <td className="px-6 py-3 border">{destination.title}</td>
//                   <td className="px-6 py-3 border">{destination.weather}</td>
//                   <td className="px-6 py-3 border">{destination.img}</td>
//                   <td className="px-6 py-3 border">{destination.desc}</td>
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
//             onClick={addDestination}
//           >
//             Add Destination
//           </button>
//         </div>

//         {showForm && (
//           <div>
//             <form className="space-y-4 mb-10">
//               <div>
//                 <label className="block text-md font-semibold text-gray-700">
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={newDestination.title}
//                   onChange={handleChange}
//                   className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-md font-semibold text-gray-700">
//                   Weather
//                 </label>
//                 <input
//                   type="text"
//                   name="weather"
//                   value={newDestination.weather}
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
//                   value={newDestination.img}
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
//                   value={newDestination.desc}
//                   onChange={handleChange}
//                   className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>
//               <div className="flex space-x-4">
//                 <button
//                   type="button"
//                   onClick={handleSaveDestinations}
//                   className="bg-green-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700"
//                 >
//                   {editMode ? "Update Destination" : "Save Destination"}
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

// export default Destinations;
