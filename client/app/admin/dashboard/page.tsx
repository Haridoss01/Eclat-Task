"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiUserCheck,
  FiX,
  FiAlertCircle,
} from "react-icons/fi";

export default function UserDashboard() {
  const router = useRouter();

  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);

  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "user",
  });

  // Get all users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/admin/login");
        return;
      }

      const response = await fetch(
        "http://localhost:5000/api/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem("token");
        router.push("/admin/login");
        return;
      }

      if (response.ok) {
        setUsers(data);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Open add/edit modal
  const openModal = (user: any = null) => {
    setError("");

    if (user) {
      setEditingUser(user);

      setFormData({
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: "",
        role: user.role,
      });
    } else {
      setEditingUser(null);

      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "user",
      });
    }

    setModalOpen(true);
  };

  // Input change
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Add or update user
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setSaving(true);

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/admin/login");
        return;
      }

      let url = "http://localhost:5000/api/users";
      let method = "POST";

      if (editingUser) {
        url = `http://localhost:5000/api/users/${editingUser._id}`;
        method = "PUT";
      }

      const body = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: formData.role,
      };

      // Don't send empty password while editing
      if (editingUser && !formData.password) {
        delete (body as any).password;
      }

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem("token");
        router.push("/admin/login");
        return;
      }

      if (!response.ok) {
        setError(data.message);
        return;
      }

      setModalOpen(false);

      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "user",
      });

      setEditingUser(null);

      fetchUsers();
    } catch (error) {
      setError("Unable to connect to server");
    } finally {
      setSaving(false);
    }
  };

  // Delete user
  const deleteUser = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/admin/login");
        return;
      }

      const response = await fetch(
        `http://localhost:5000/api/users/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem("token");
        router.push("/admin/login");
        return;
      }

      if (!response.ok) {
        setError(data.message);
        return;
      }

      fetchUsers();
    } catch (error) {
      setError("Unable to connect to server");
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    router.push("/admin/login");
  };

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="p-6 md:p-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              User Management
            </h1>

            <p className="text-sm text-slate-500 mt-1">
              Manage accounts and permissions
            </p>
          </div>

          <div className="flex items-center gap-3">

            <button
              onClick={logout}
              className="text-sm font-medium text-slate-500 hover:text-red-600"
            >
              Logout
            </button>

            <button
              onClick={() => openModal()}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-medium text-sm"
            >
              <FiPlus size={18} />
              Add New User
            </button>

          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl mb-6 text-sm">
            <FiAlertCircle size={18} />
            {error}
          </div>
        )}

        {/* Loading */}
        {loading ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500">
            Loading users...
          </div>
        ) : users.length === 0 ? (

          /* Empty State */
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto my-12">

            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
              <FiUserCheck size={32} />
            </div>

            <h3 className="text-lg font-bold text-slate-900">
              No Users Found
            </h3>

            <p className="text-slate-500 text-sm mt-2 mb-6">
              There are no users registered in your database yet.
              Would you like to create one now?
            </p>

            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm"
            >
              <FiPlus size={18} />
              Add First User
            </button>

          </div>

        ) : (

          /* Users Table */
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

            <div className="overflow-x-auto">

              <table className="w-full text-left">

                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase">

                    <th className="py-4 px-6">
                      Name
                    </th>

                    <th className="py-4 px-6">
                      Email
                    </th>

                    <th className="py-4 px-6">
                      Phone
                    </th>

                    <th className="py-4 px-6">
                      Role
                    </th>

                    <th className="py-4 px-6">
                      Created
                    </th>

                    <th className="py-4 px-6 text-right">
                      Actions
                    </th>

                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 text-sm">

                  {users.map((user) => (
                    <tr
                      key={user._id}
                      className="hover:bg-slate-50"
                    >

                      <td className="py-4 px-6 font-medium text-slate-900">
                        {user.name}
                      </td>

                      <td className="py-4 px-6 text-slate-600">
                        {user.email}
                      </td>

                      <td className="py-4 px-6 text-slate-600">
                        {user.phone}
                      </td>

                      <td className="py-4 px-6">

                        <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700 capitalize">
                          {user.role}
                        </span>

                      </td>

                      <td className="py-4 px-6 text-slate-600">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>

                      <td className="py-4 px-6 text-right">

                        <button
                          onClick={() => openModal(user)}
                          className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                          title="Edit user"
                        >
                          <FiEdit2 size={16} />
                        </button>

                        <button
                          onClick={() => deleteUser(user._id)}
                          className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg ml-2"
                          title="Delete user"
                        >
                          <FiTrash2 size={16} />
                        </button>

                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>
          </div>
        )}

        {/* Add / Edit Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">

            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">

              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {editingUser
                      ? "Edit User"
                      : "Create New User"}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {editingUser
                      ? "Update user information"
                      : "Add a new user to the system"}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setModalOpen(false);
                    setError("");
                  }}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <FiX size={20} />
                </button>

              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Phone
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder={
                      editingUser
                        ? "Leave empty to keep current password"
                        : "Enter password"
                    }
                    required={!editingUser}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Role
                  </label>

                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600"
                  >
                    <option value="user">
                      User
                    </option>

                    <option value="admin">
                      Admin
                    </option>
                  </select>
                </div>

                {/* Form Error */}
                {error && (
                  <div className="flex items-center gap-2 bg-red-50 text-red-600 border border-red-100 p-3 rounded-xl text-xs">
                    <FiAlertCircle size={16} />
                    {error}
                  </div>
                )}

                {/* Buttons */}
                <div className="flex gap-3 pt-4">

                  <button
                    type="button"
                    onClick={() => {
                      setModalOpen(false);
                      setError("");
                    }}
                    className="flex-1 px-4 py-2.5 border border-slate-200 rounded-xl text-slate-600 font-medium text-sm hover:bg-slate-50"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={saving}
                    className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-sm disabled:opacity-50"
                  >
                    {saving
                      ? "Saving..."
                      : editingUser
                      ? "Save Changes"
                      : "Create User"}
                  </button>

                </div>

              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}