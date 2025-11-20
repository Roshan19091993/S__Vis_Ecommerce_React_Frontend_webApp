


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthRedirect from "../hooks/useAuthRedirect";

const UserProfile = () => {
   useAuthRedirect("/"); 
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (!loggedUser) {
      navigate("/login");
      return;
    }

    const fetchUserFromServer = async () => {
      try {
        const res = await fetch(`http://localhost:3000/users?email=${loggedUser.email}`);
        const users = await res.json();
        if (users.length) {
          setUser(users[0]);
          setFormData({
            name: users[0].name || "",
            email: users[0].email || "",
            phone: users[0].phone || "",
            address: users[0].address || { street: "", city: "", state: "", zip: "" },
          });
        }
      } catch (err) {
        console.error("Failed to fetch user data:", err);
        setUser(loggedUser);
        setFormData({
          name: loggedUser.name || "",
          email: loggedUser.email || "",
          phone: loggedUser.phone || "",
          address: loggedUser.address || { street: "", city: "", state: "", zip: "" },
        });
      }
    };

    fetchUserFromServer();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = async () => {
    try {
      // Update on server
      const res = await fetch(`http://localhost:3000/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...user, ...formData }),
      });

      if (!res.ok) throw new Error("Failed to update user on server");

      const updatedUser = await res.json();
      setUser(updatedUser);
      localStorage.setItem("loggedUser", JSON.stringify(updatedUser));
      setEditMode(false);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to save changes. Please try again.");
    }
  };

  if (!user) return <p className="text-center mt-5">Loading user profile...</p>;

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4 p-4">
            {/* Avatar */}
            <div className="text-center mb-4">
              <div
                className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center"
                style={{ width: "80px", height: "80px", fontSize: "36px" }}
              >
                {formData.name ? formData.name.charAt(0).toUpperCase() : "U"}
              </div>
              {editMode ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control mt-2 text-center"
                />
              ) : (
                <h4 className="mt-3">{user.name || "User"}</h4>
              )}
            </div>

            {/* User Info */}
            <div className="mb-3">
              <h5 className="fw-semibold mb-2">Contact Information</h5>
              <p>
                <strong>Email:</strong>{" "}
                {editMode ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  user.email || "Not provided"
                )}
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                {editMode ? (
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  user.phone || "Not provided"
                )}
              </p>
            </div>

            {/* Address */}
            <div className="mb-3">
              <h5 className="fw-semibold mb-2">Address</h5>
              {editMode ? (
                <>
                  <input
                    type="text"
                    name="address.street"
                    value={formData.address.street}
                    placeholder="Street"
                    onChange={handleChange}
                    className="form-control mb-2"
                  />
                  <input
                    type="text"
                    name="address.city"
                    value={formData.address.city}
                    placeholder="City"
                    onChange={handleChange}
                    className="form-control mb-2"
                  />
                  <input
                    type="text"
                    name="address.state"
                    value={formData.address.state}
                    placeholder="State"
                    onChange={handleChange}
                    className="form-control mb-2"
                  />
                  <input
                    type="text"
                    name="address.zip"
                    value={formData.address.zip}
                    placeholder="ZIP"
                    onChange={handleChange}
                    className="form-control mb-2"
                  />
                </>
              ) : user.address ? (
                <>
                  <p><strong>Street:</strong> {user.address.street}</p>
                  <p><strong>City:</strong> {user.address.city}</p>
                  <p><strong>State:</strong> {user.address.state}</p>
                  <p><strong>ZIP:</strong> {user.address.zip}</p>
                </>
              ) : (
                <p>No address provided.</p>
              )}
            </div>

            <div className="text-center mt-4">
              {editMode ? (
                <>
                  <button className="btn btn-success me-2" onClick={handleSave}>
                    Save
                  </button>
                  <button className="btn btn-secondary" onClick={() => setEditMode(false)}>
                    Cancel
                  </button>
                </>
              ) : (
                <button className="btn btn-outline-primary" onClick={() => setEditMode(true)}>
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
