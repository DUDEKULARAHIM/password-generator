// import React, { useEffect, useState } from "react";
// import "./CredentialTable.css";

// const SECRET_CODE = "1234";

// const CredentialTable = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState("All");
//   const [editId, setEditId] = useState(null);
//   const [editForm, setEditForm] = useState({});
//   const [visiblePasswords, setVisiblePasswords] = useState({});

//   useEffect(() => {
//     const saved =
//       JSON.parse(localStorage.getItem("credentials")) || [];
//     setData(saved);
//   }, []);

//   const filteredData =
//     filter === "All"
//       ? data
//       : data.filter((item) => item.category === filter);

//   const handleEdit = (item) => {
//     setEditId(item.id);
//     setEditForm(item);
//   };

//   const handleUpdate = () => {
//     const updated = data.map((item) =>
//       item.id === editId ? editForm : item
//     );

//     setData(updated);
//     localStorage.setItem("credentials", JSON.stringify(updated));
//     setEditId(null);
//   };

//   // 🔐 Show password only after code verification
//   const handleShowPassword = (id) => {
//     if (visiblePasswords[id]) {
//       // Hide without asking code
//       setVisiblePasswords((prev) => ({
//         ...prev,
//         [id]: false,
//       }));
//       return;
//     }

//     const enteredCode = prompt("Enter security code to view password");

//     if (enteredCode === SECRET_CODE) {
//       setVisiblePasswords((prev) => ({
//         ...prev,
//         [id]: true,
//       }));
//     } else {
//       alert("Invalid code ❌");
//     }
//   };

//   return (
//     <div className="credential-table">
//       <h2>Stored Credentials</h2>

//       {/* FILTER */}
//       <select
//         className="filter-select"
//         value={filter}
//         onChange={(e) => setFilter(e.target.value)}
//       >
//         <option value="All">All</option>
//         <option value="Personal">Personal</option>
//         <option value="Social Media">Social Media</option>
//         <option value="Others">Others</option>
//       </select>

//       <table>
//         <thead>
//           <tr>
//             <th>Category</th>
//             <th>Platform</th>
//             <th>Username</th>
//             <th>Password</th>
//             <th>Show</th>
//             <th>Edit</th>
//             <th>Update</th>
//           </tr>
//         </thead>

//         <tbody>
//           {filteredData.length === 0 ? (
//             <tr>
//               <td colSpan="7">No records found</td>
//             </tr>
//           ) : (
//             filteredData.map((item) => (
//               <tr key={item.id}>
//                 {editId === item.id ? (
//                   <>
//                     <td>
//                       <select
//                         value={editForm.category}
//                         onChange={(e) =>
//                           setEditForm({
//                             ...editForm,
//                             category: e.target.value,
//                           })
//                         }
//                       >
//                         <option>Personal</option>
//                         <option>Social Media</option>
//                         <option>Others</option>
//                       </select>
//                     </td>

//                     <td>
//                       <input
//                         value={editForm.platform}
//                         onChange={(e) =>
//                           setEditForm({
//                             ...editForm,
//                             platform: e.target.value,
//                           })
//                         }
//                       />
//                     </td>

//                     <td>
//                       <input
//                         value={editForm.username}
//                         onChange={(e) =>
//                           setEditForm({
//                             ...editForm,
//                             username: e.target.value,
//                           })
//                         }
//                       />
//                     </td>

//                     <td>
//                       <input
//                         type={
//                           visiblePasswords[item.id]
//                             ? "text"
//                             : "password"
//                         }
//                         value={editForm.password}
//                         onChange={(e) =>
//                           setEditForm({
//                             ...editForm,
//                             password: e.target.value,
//                           })
//                         }
//                       />
//                     </td>

//                     <td>
//                       <button
//                         className="table-btn"
//                         onClick={() =>
//                           handleShowPassword(item.id)
//                         }
//                       >
//                         {visiblePasswords[item.id]
//                           ? "Hide"
//                           : "Show"}
//                       </button>
//                     </td>

//                     <td>—</td>
//                     <td>
//                       <button
//                         className="table-btn update-btn"
//                         onClick={handleUpdate}
//                       >
//                         Update
//                       </button>
//                     </td>
//                   </>
//                 ) : (
//                   <>
//                     <td>{item.category}</td>
//                     <td>{item.platform}</td>
//                     <td>{item.username}</td>

//                     <td>
//                       {visiblePasswords[item.id]
//                         ? item.password
//                         : "••••••"}
//                     </td>

//                     <td>
//                       <button
//                         className="table-btn"
//                         onClick={() =>
//                           handleShowPassword(item.id)
//                         }
//                       >
//                         {visiblePasswords[item.id]
//                           ? "Hide"
//                           : "Show"}
//                       </button>
//                     </td>

//                     <td>
//                       <button
//                         className="table-btn"
//                         onClick={() => handleEdit(item)}
//                       >
//                         Edit
//                       </button>
//                     </td>
//                     <td>—</td>
//                   </>
//                 )}
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CredentialTable;

















// import React, { useEffect, useState } from "react";
// import "./CredentialTable.css";

// const SECRET_CODE = "1234";

// const CredentialTable = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState("All");
//   const [visiblePasswords, setVisiblePasswords] = useState({});
//   const [codeInputs, setCodeInputs] = useState({});
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     const saved =
//       JSON.parse(localStorage.getItem("credentials")) || [];
//     setData(saved);
//   }, []);

//   const filteredData =
//     filter === "All"
//       ? data
//       : data.filter((item) => item.category === filter);

//   const handleVerify = (id) => {
//     if (codeInputs[id] === SECRET_CODE) {
//       setVisiblePasswords({ ...visiblePasswords, [id]: true });
//       setErrors({ ...errors, [id]: "" });
//     } else {
//       setErrors({ ...errors, [id]: "Invalid code" });
//     }
//   };

//   const handleHide = (id) => {
//     setVisiblePasswords({ ...visiblePasswords, [id]: false });
//     setCodeInputs({ ...codeInputs, [id]: "" });
//     setErrors({ ...errors, [id]: "" });
//   };

//   return (
//     <div className="credential-table">
//       <h2>Stored Credentials</h2>

//       {/* FILTER */}
//       <select
//         className="filter-select"
//         value={filter}
//         onChange={(e) => setFilter(e.target.value)}
//       >
//         <option value="All">All</option>
//         <option value="Personal">Personal</option>
//         <option value="Social Media">Social Media</option>
//         <option value="Others">Others</option>
//       </select>

//       <table>
//         <thead>
//           <tr>
//             <th>Category</th>
//             <th>Platform</th>
//             <th>Username</th>
//             <th>Password</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {filteredData.map((item) => (
//             <tr key={item.id}>
//               <td>{item.category}</td>
//               <td>{item.platform}</td>
//               <td>{item.username}</td>

//               <td className="password-cell">
//                 {visiblePasswords[item.id] ? (
//                   <span className="password-text">
//                     {item.password}
//                   </span>
//                 ) : (
//                   <span className="masked">••••••••</span>
//                 )}
//               </td>

//               <td>
//                 {visiblePasswords[item.id] ? (
//                   <button
//                     className="hide-btn"
//                     onClick={() => handleHide(item.id)}
//                   >
//                     Hide
//                   </button>
//                 ) : (
//                   <div className="verify-box">
//                     <input
//                       type="password"
//                       placeholder="Enter code"
//                       value={codeInputs[item.id] || ""}
//                       onChange={(e) =>
//                         setCodeInputs({
//                           ...codeInputs,
//                           [item.id]: e.target.value,
//                         })
//                       }
//                     />
//                     <button
//                       className="verify-btn"
//                       onClick={() => handleVerify(item.id)}
//                     >
//                       Verify
//                     </button>
//                     {errors[item.id] && (
//                       <small className="error">
//                         {errors[item.id]}
//                       </small>
//                     )}
//                   </div>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CredentialTable;
















// import React, { useEffect, useState } from "react";
// import "./CredentialTable.css";

// const SECRET_CODE = "1234";

// const CredentialTable = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState("All");

//   const [visiblePasswords, setVisiblePasswords] = useState({});
//   const [codeInputs, setCodeInputs] = useState({});
//   const [errors, setErrors] = useState({});

//   const [editId, setEditId] = useState(null);
//   const [editForm, setEditForm] = useState({});

//   useEffect(() => {
//     const saved =
//       JSON.parse(localStorage.getItem("credentials")) || [];
//     setData(saved);
//   }, []);

//   const filteredData =
//     filter === "All"
//       ? data
//       : data.filter((item) => item.category === filter);

//   /* VERIFY PASSWORD */
//   const handleVerify = (id) => {
//     if (codeInputs[id] === SECRET_CODE) {
//       setVisiblePasswords({ ...visiblePasswords, [id]: true });
//       setErrors({ ...errors, [id]: "" });
//     } else {
//       setErrors({ ...errors, [id]: "Invalid code" });
//     }
//   };

//   const handleHide = (id) => {
//     setVisiblePasswords({ ...visiblePasswords, [id]: false });
//     setCodeInputs({ ...codeInputs, [id]: "" });
//     setErrors({ ...errors, [id]: "" });
//     setEditId(null);
//   };

//   /* EDIT */
//   const handleEdit = (item) => {
//     setEditId(item.id);
//     setEditForm(item);
//   };

//   /* UPDATE */
//   const handleUpdate = () => {
//     const updated = data.map((item) =>
//       item.id === editId ? editForm : item
//     );

//     setData(updated);
//     localStorage.setItem("credentials", JSON.stringify(updated));
//     setEditId(null);
//   };

//   return (
//     <div className="credential-table">
//       <h2>Stored Credentials</h2>

//       <select
//         className="filter-select"
//         value={filter}
//         onChange={(e) => setFilter(e.target.value)}
//       >
//         <option value="All">All</option>
//         <option value="Personal">Personal</option>
//         <option value="Social Media">Social Media</option>
//         <option value="Others">Others</option>
//       </select>

//       <table>
//         <thead>
//           <tr>
//             <th>Category</th>
//             <th>Platform</th>
//             <th>Username</th>
//             <th>Password</th>
//             <th>Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {filteredData.map((item) => (
//             <tr key={item.id}>
//               {/* CATEGORY */}
//               <td>
//                 {editId === item.id ? (
//                   <select
//                     value={editForm.category}
//                     onChange={(e) =>
//                       setEditForm({
//                         ...editForm,
//                         category: e.target.value,
//                       })
//                     }
//                   >
//                     <option>Personal</option>
//                     <option>Social Media</option>
//                     <option>Others</option>
//                   </select>
//                 ) : (
//                   item.category
//                 )}
//               </td>

//               {/* PLATFORM */}
//               <td>
//                 {editId === item.id ? (
//                   <input
//                     value={editForm.platform}
//                     onChange={(e) =>
//                       setEditForm({
//                         ...editForm,
//                         platform: e.target.value,
//                       })
//                     }
//                   />
//                 ) : (
//                   item.platform
//                 )}
//               </td>

//               {/* USERNAME */}
//               <td>
//                 {editId === item.id ? (
//                   <input
//                     value={editForm.username}
//                     onChange={(e) =>
//                       setEditForm({
//                         ...editForm,
//                         username: e.target.value,
//                       })
//                     }
//                   />
//                 ) : (
//                   item.username
//                 )}
//               </td>

//               {/* PASSWORD */}
//               <td className="password-cell">
//                 {visiblePasswords[item.id] ? (
//                   editId === item.id ? (
//                     <input
//                       value={editForm.password}
//                       onChange={(e) =>
//                         setEditForm({
//                           ...editForm,
//                           password: e.target.value,
//                         })
//                       }
//                     />
//                   ) : (
//                     <span className="password-text">
//                       {item.password}
//                     </span>
//                   )
//                 ) : (
//                   <span className="masked">••••••••</span>
//                 )}
//               </td>

//               {/* ACTIONS */}
//               <td>
//                 {visiblePasswords[item.id] ? (
//                   editId === item.id ? (
//                     <button
//                       className="update-btn"
//                       onClick={handleUpdate}
//                     >
//                       Update
//                     </button>
//                   ) : (
//                     <>
//                       <button
//                         className="edit-btn"
//                         onClick={() => handleEdit(item)}
//                       >
//                         Edit
//                       </button>
//                       <button
//                         className="hide-btn"
//                         onClick={() => handleHide(item.id)}
//                       >
//                         Hide
//                       </button>
//                     </>
//                   )
//                 ) : (
//                   <div className="verify1-box">
//                     <input
//                       type="password"
//                       placeholder="Enter code"
//                       value={codeInputs[item.id] || ""}
//                       onChange={(e) =>
//                         setCodeInputs({
//                           ...codeInputs,
//                           [item.id]: e.target.value,
//                         })
//                       }
//                     />
//                     <button
//                       className="verify1-btn"
//                       onClick={() => handleVerify(item.id)}
//                     >
//                       Verify
//                     </button>
//                     {errors[item.id] && (
//                       <small className="error">
//                         {errors[item.id]}
//                       </small>
//                     )}
//                   </div>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CredentialTable;








import React, { useEffect, useState } from "react";
import "./CredentialTable.css";

const SECRET_CODE = "1234";

const CredentialTable = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");

  const [visiblePasswords, setVisiblePasswords] = useState({});
  const [codeInputs, setCodeInputs] = useState({});
  const [errors, setErrors] = useState({});

  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("credentials")) || [];
    setData(saved);
  }, []);

  const filteredData =
    filter === "All"
      ? data
      : data.filter((item) => item.category === filter);

  /* VERIFY PASSWORD */
  const handleVerify = (id) => {
    if (codeInputs[id] === SECRET_CODE) {
      setVisiblePasswords({ ...visiblePasswords, [id]: true });
      setErrors({ ...errors, [id]: "" });
    } else {
      setErrors({ ...errors, [id]: "Invalid code" });
    }
  };

  const handleHide = (id) => {
    setVisiblePasswords({ ...visiblePasswords, [id]: false });
    setCodeInputs({ ...codeInputs, [id]: "" });
    setErrors({ ...errors, [id]: "" });
    setEditId(null);
  };

  /* EDIT */
  const handleEdit = (item) => {
    setEditId(item.id);
    setEditForm(item);
  };

  /* UPDATE */
  const handleUpdate = () => {
    const updated = data.map((item) =>
      item.id === editId ? editForm : item
    );

    setData(updated);
    localStorage.setItem("credentials", JSON.stringify(updated));
    setEditId(null);
  };

  /* DELETE */
  const handleDelete = (id) => {
    const updated = data.filter((item) => item.id !== id);
    setData(updated);
    localStorage.setItem("credentials", JSON.stringify(updated));
  };

  return (
    <div className="credential-table">
      <h2>Stored Credentials</h2>

      <div className="filter-wrapper">
        <select
          className="filter-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Personal">Personal</option>
          <option value="Social Media">Social Media</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Platform</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              {/* CATEGORY */}
              <td>
                {editId === item.id ? (
                  <select
                    value={editForm.category}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        category: e.target.value,
                      })
                    }
                  >
                    <option>Personal</option>
                    <option>Social Media</option>
                    <option>Others</option>
                  </select>
                ) : (
                  item.category
                )}
              </td>

              {/* PLATFORM */}
              <td>
                {editId === item.id ? (
                  <input
                    value={editForm.platform}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        platform: e.target.value,
                      })
                    }
                  />
                ) : (
                  item.platform
                )}
              </td>

              {/* USERNAME */}
              <td>
                {editId === item.id ? (
                  <input
                    value={editForm.username}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        username: e.target.value,
                      })
                    }
                  />
                ) : (
                  item.username
                )}
              </td>

              {/* PASSWORD */}
              <td className="password-cell">
                {visiblePasswords[item.id] ? (
                  editId === item.id ? (
                    <input
                      value={editForm.password}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          password: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <span className="password-text">
                      {item.password}
                    </span>
                  )
                ) : (
                  <span className="masked">••••••••</span>
                )}
              </td>

              {/* ACTIONS */}
              <td>
                {visiblePasswords[item.id] ? (
                  editId === item.id ? (
                    <button
                      className="update-btn"
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                  ) : (
                    <>
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="hide-btn"
                        onClick={() => handleHide(item.id)}
                      >
                        Hide
                      </button>
                    </>
                  )
                ) : (
                  <div className="verify1-box">
                    <input
                      type="password"
                      placeholder="Enter code"
                      value={codeInputs[item.id] || ""}
                      onChange={(e) =>
                        setCodeInputs({
                          ...codeInputs,
                          [item.id]: e.target.value,
                        })
                      }
                    />
                    <button
                      className="verify1-btn"
                      onClick={() => handleVerify(item.id)}
                    >
                      Verify
                    </button>
                    {errors[item.id] && (
                      <small className="error">
                        {errors[item.id]}
                      </small>
                    )}
                  </div>
                )}
              </td>

              {/* DELETE */}
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CredentialTable;
