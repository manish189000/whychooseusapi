// // // require('dotenv').config(); // Load environment variables
// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const bodyParser = require('body-parser');
// // // const cors = require('cors');

// // // const app = express();
// // // app.use(cors());
// // // app.use(bodyParser.json());

// // // // MongoDB Connection
// // // mongoose.connect(process.env.MONGO_URI, {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true,
// // // }).then(() => {
// // //   console.log('Connected to MongoDB');
// // // }).catch((err) => {
// // //   console.error('Error connecting to MongoDB:', err);
// // // });

// // // // Schema and Model
// // // const valueSchema = new mongoose.Schema({
// // //   title: String,
// // //   description: String,
// // // });

// // // const Value = mongoose.model('Value', valueSchema);

// // // // Routes
// // // app.get('/values', async (req, res) => {
// // //   const values = await Value.find();
// // //   res.json(values);
// // // });

// // // app.post('/values', async (req, res) => {
// // //   const { values } = req.body;
// // //   await Value.deleteMany(); // Clear existing values
// // //   await Value.insertMany(values); // Insert new values
// // //   res.json({ message: 'Values updated successfully' });
// // // });

// // // // Start Server
// // // const PORT = 5000;
// // // app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));





// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");
// // const bodyParser = require("body-parser");
// // require("dotenv").config(); // Load environment variables from .env

// // const app = express();
// // const port = process.env.PORT || 5000;

// // // Middleware
// // app.use(cors());
// // app.use(bodyParser.json()); // to parse the incoming JSON requests

// // // MongoDB connection using MONGO_URI from .env
// // mongoose
// //   .connect(process.env.MONGO_URI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(() => console.log("MongoDB connected"))
// //   .catch((err) => console.log("MongoDB connection error:", err));

// // // Define the schema for content (titles and descriptions for each section)
// // const contentSchema = new mongoose.Schema({
// //   quality: { title: String, description: String },
// //   customer: { title: String, description: String },
// //   expertise: { title: String, description: String },
// //   partnership: { title: String, description: String },
// // });

// // // Create the model for content
// // const Content = mongoose.model("Content", contentSchema);

// // // API route to fetch content from MongoDB
// // app.get("/api/content", async (req, res) => {
// //   try {
// //     const content = await Content.findOne();
// //     if (!content) {
// //       return res.status(404).send("Content not found");
// //     }
// //     res.json(content);
// //   } catch (error) {
// //     console.error("Error fetching content:", error);
// //     res.status(500).send("Error fetching content");
// //   }
// // });

// // // API route to update content (titles and descriptions)
// // app.put("/api/content", async (req, res) => {
// //   try {
// //     const { quality, customer, expertise, partnership } = req.body;

// //     // Update or create content document
// //     const updatedContent = await Content.findOneAndUpdate(
// //       {},
// //       { quality, customer, expertise, partnership },
// //       { new: true, upsert: true } // upsert: true creates the document if it doesn't exist
// //     );
// //     res.json(updatedContent);
// //   } catch (error) {
// //     console.error("Error updating content:", error);
// //     res.status(500).send("Error updating content");
// //   }
// // });

// // // Start the server
// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });




// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaCheckCircle, FaUsers, FaHandsHelping, FaStar } from "react-icons/fa";
// import axios from "axios"; // Import axios for HTTP requests

// const WhyChooseUsSection = () => {
//   const [isEditing, setIsEditing] = useState(false);

//   // State for the editable content
//   const [content, setContent] = useState({
//     title: "Why Choose Us",
//     description: "We provide top-tier solutions with a customer-centric approach, ensuring quality and trust every step of the way.",
//     quality: { title: "Quality Assurance", description: "We maintain the highest standards of quality in all our products and services, ensuring reliability and excellence." },
//     customer: { title: "Customer Focused", description: "Our clients are at the heart of everything we do. We prioritize their needs to ensure satisfaction and success." },
//     expertise: { title: "Expertise", description: "With years of experience, we provide expert advice and solutions that drive sustainable results." },
//     partnership: { title: "Trusted Partnership", description: "We build long-term relationships based on trust, integrity, and shared success, ensuring mutual growth." },
//   });

//   // Fetch content from the backend (if needed)
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/content") // Replace with your backend URL
//       .then((response) => {
//         // Update content if response is valid
//         if (response.data) {
//           setContent(response.data);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching content:", error);
//       });
//   }, []);

//   // Handle edit button click
//   const handleEditClick = () => {
//     setIsEditing(!isEditing);
//   };

//   // Handle input change for the title and description
//   const handleInputChange = (field, value) => {
//     setContent({
//       ...content,
//       [field]: value,
//     });
//   };

//   // Handle input change for section titles and descriptions
//   const handleSectionInputChange = (section, field, value) => {
//     setContent({
//       ...content,
//       [section]: { ...content[section], [field]: value },
//     });
//   };

//   // Handle save button click to update the content
//   const handleSave = () => {
//     axios
//       .put("http://localhost:5000/api/content", content) // Replace with your backend URL
//       .then((response) => {
//         console.log("Content updated successfully:", response.data);
//         setIsEditing(false); // Disable editing mode after saving
//       })
//       .catch((error) => {
//         console.error("Error updating content:", error);
//       });
//   };

//   return (
//     <div className="py-20 bg-gradient-to-r from-[rgb(62,64,149)] to-[rgb(234,179,8)]">
//       <div className="container mx-auto px-6 md:px-12">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Editable Title */}
//           {isEditing ? (
//             <input
//               type="text"
//               value={content.title}
//               onChange={(e) => handleInputChange("title", e.target.value)}
//               className="text-white text-4xl md:text-5xl font-bold mb-4 bg-transparent border-none"
//             />
//           ) : (
//             <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
//               {content.title}
//             </h2>
//           )}

//           {/* Editable Description */}
//           {isEditing ? (
//             <textarea
//               value={content.description}
//               onChange={(e) => handleInputChange("description", e.target.value)}
//               className="w-full p-2 mb-4 bg-transparent border border-gray-300 rounded-md"
//             />
//           ) : (
//             <p className="text-gray-200 text-lg md:text-xl">{content.description}</p>
//           )}
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Feature Sections */}
//           {["quality", "customer", "expertise", "partnership"].map((section, index) => (
//             <motion.div
//               key={section}
//               className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: (index + 1) * 0.2, duration: 0.8 }}
//             >
//               {/* Icons */}
//               {section === "quality" && <FaCheckCircle className="text-[rgb(234,179,8)] text-4xl mb-4" />}
//               {section === "customer" && <FaUsers className="text-[rgb(234,179,8)] text-4xl mb-4" />}
//               {section === "expertise" && <FaHandsHelping className="text-[rgb(234,179,8)] text-4xl mb-4" />}
//               {section === "partnership" && <FaStar className="text-[rgb(234,179,8)] text-4xl mb-4" />}

//               {/* Editable Section Title */}
//               {isEditing ? (
//                 <input
//                   type="text"
//                   value={content[section]?.title || ""}
//                   onChange={(e) => handleSectionInputChange(section, "title", e.target.value)}
//                   className="text-[rgb(62,64,149)] text-xl font-semibold mb-2 bg-transparent border-none"
//                 />
//               ) : (
//                 <h3 className="text-[rgb(62,64,149)] text-xl font-semibold mb-2">
//                   {content[section]?.title || ""}
//                 </h3>
//               )}

//               {/* Editable Section Description */}
//               {isEditing ? (
//                 <textarea
//                   value={content[section]?.description || ""}
//                   onChange={(e) => handleSectionInputChange(section, "description", e.target.value)}
//                   className="text-gray-700 text-center w-full p-2 mb-2 border rounded-md"
//                 />
//               ) : (
//                 <p className="text-gray-700 text-center">{content[section]?.description || ""}</p>
//               )}
//             </motion.div>
//           ))}
//         </div>

//         <div className="text-center mt-8">
//           {/* Toggle Edit Mode */}
//           <button
//             onClick={handleEditClick}
//             className="bg-[rgb(234,179,8)] text-white py-2 px-4 rounded-md"
//           >
//             {isEditing ? "Cancel Editing" : "Edit Text"}
//           </button>

//           {/* Save Changes */}
//           {isEditing && (
//             <button
//               onClick={handleSave}
//               className="ml-4 bg-green-500 text-white py-2 px-4 rounded-md"
//             >
//               Save Changes
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUsSection;


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// require('dotenv').config(); // Load environment variables from .env file

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection URI from your .env file
// const MONGO_URI = process.env.MONGO_URI;

// // Connect to MongoDB
// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.log("MongoDB connection error:", err));

// // Schema for storing content
// const contentSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   quality: {
//     title: String,
//     description: String,
//   },
//   customer: {
//     title: String,
//     description: String,
//   },
//   expertise: {
//     title: String,
//     description: String,
//   },
//   partnership: {
//     title: String,
//     description: String,
//   },
// });

// // Model for Content
// const Content = mongoose.model("Content", contentSchema);

// // API to get the content
// app.get("/api/content", async (req, res) => {
//   try {
//     const content = await Content.findOne();
//     if (!content) {
//       return res.status(404).send("Content not found.");
//     }
//     res.json(content);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Server error.");
//   }
// });

// // API to update the content
// app.put("/api/content", async (req, res) => {
//   try {
//     const updatedContent = req.body; // Content from the frontend
    
//     // If content doesn't exist, create it
//     let content = await Content.findOne();
//     if (!content) {
//       content = new Content(updatedContent);
//     } else {
//       // Update the content
//       content.title = updatedContent.title;
//       content.description = updatedContent.description;
//       content.quality = updatedContent.quality;
//       content.customer = updatedContent.customer;
//       content.expertise = updatedContent.expertise;
//       content.partnership = updatedContent.partnership;
//     }

//     // Save the updated content
//     await content.save();
//     res.json(content); // Send back the updated content
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Server error.");
//   }
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection URI from your .env file
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Schema for storing content
const contentSchema = new mongoose.Schema({
  title: String,
  description: String,
  quality: {
    title: String,
    description: String,
  },
  customer: {
    title: String,
    description: String,
  },
  expertise: {
    title: String,
    description: String,
  },
  partnership: {
    title: String,
    description: String,
  },
});

// Model for Content
const Content = mongoose.model("Content", contentSchema);

// API to get the content
app.get("/api/content", async (req, res) => {
  try {
    const content = await Content.findOne();
    if (!content) {
      return res.status(404).send("Content not found.");
    }
    res.json(content);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error.");
  }
});

// API to update the content
app.put("/api/content", async (req, res) => {
  try {
    const updatedContent = req.body; // Content from the frontend
    
    // If content doesn't exist, create it
    let content = await Content.findOne();
    if (!content) {
      content = new Content(updatedContent);
    } else {
      // Update the content
      content.title = updatedContent.title;
      content.description = updatedContent.description;
      content.quality = updatedContent.quality;
      content.customer = updatedContent.customer;
      content.expertise = updatedContent.expertise;
      content.partnership = updatedContent.partnership;
    }

    // Save the updated content
    await content.save();
    res.json(content); // Send back the updated content
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error.");
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
