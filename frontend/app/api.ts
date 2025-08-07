import { axiosInstance } from "./axios";

export const getAllUser = async () => {
    try {
        const response = await axiosInstance.get(`/users/`);
        return response.data;
    }catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const getUserById = async (userId: string) => {
    try {
        const response = await axiosInstance.get(`/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching user with ID ${userId}:`, error);
        throw error;
    }
};


export const createUser = async (userData: any) => {
    try {
        if(userData.name === null || userData.name === undefined || userData.email === null || userData.email === undefined) {
            throw new Error("Invalid user data");
        }
        const response = await axiosInstance.post(`/users/`, userData);
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};


export const updateUser = async (userId: string, userData: any) => {
    try {
        const response = await axiosInstance.put(`/users/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error(`Error updating user with ID ${userId}:`, error);
        throw error;
    }
};


export const deleteUser = async (userId: string) => {
    try {
        const response = await axiosInstance.delete(`/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting user with ID ${userId}:`, error);
        throw error;
    }
};