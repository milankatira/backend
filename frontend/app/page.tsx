"use client";
import { useEffect, useState } from "react";
import { deleteUser, getAllUser } from "./api";
import toast from "react-hot-toast";
import { Iuser } from "./types";
import Link from "next/link";

export default function Home() {
  const [users, setUsers] = useState<Iuser[]>([]);

  const [deleteUserLoading, setdeleteUserLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllUser().then((data) => {
      setUsers(data);
    }).catch((error) => {
      console.error("Error fetching users:", error);
    }).finally(() => {
      setLoading(false);
    });
  }, []);


  const handleDelete = async (userId: string) => {
    try {
      setdeleteUserLoading(true);
      await deleteUser(userId);
      setUsers(users.filter(user => user.id !== userId));
      toast.success("User deleted successfully");
    }
    catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
    }
    finally {
      setdeleteUserLoading(false);
    }
  }

  if (loading) {
    return <p>Loading users...</p>;
  }


  if (!loading && users.length === 0) {
    return <p>No users found. <Link href="/user/add" prefetch={false}>Add a user</Link></p>;
  }

  return (
    <div className="user__dashboard__container">
      <p>
        Welcome to the User Management System! Here you can view, edit, and delete users.

        <br />
        <Link href="/user/add" prefetch={false}>
          <button>Add User</button>
        </Link>
      </p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td  className="action__button__container">
                <Link href={`/user/edit/${user.id}`} prefetch={false}>
                  <button>Edit</button>
                </Link>

                <button disabled={deleteUserLoading} onClick={() => handleDelete(user.id)}>
                  {deleteUserLoading ? "Deleting..." : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
