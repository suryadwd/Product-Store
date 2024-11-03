
import { create } from 'zustand';

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),

    createProduct: async (newProduct) => {
        // Ensure all fields are provided before making the API call
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Fill all fields" };
        }

        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });

        // Assuming successful creation
        const data = await res.json();

        set((state) => ({
            products: [...state.products, data.data],
        }));

        return { success: true, message: "Created successfully" };
    },

    fetchProducts: async () => {
        const res = await fetch('/api/products');
        const data = await res.json();
        set({ products: data.data });
    },

    deleteProduct: async (pid) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "DELETE",
        });
        const data = await res.json();

        // This should check if the delete was successful
        if (!data.success) return { success: false, message: data.message };

        set((state) => ({
            products: state.products.filter((product) => product._id !== pid),
        }));

        return { success: true, message: data.message };
    },

    updateProduct: async (pid, updateProduct) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "PUT",
            headers: { // Change this to wrap headers correctly
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateProduct),
        });

        const data = await res.json();

        // This should check if the update was successful
        if (!data.success) return { success: false, message: data.message };

        set((state) => ({
            products: state.products.map((product) => 
                product._id === pid ? data.data : product
            ),
        }));

        // Returning success message here
        return { success: true, message: "Updated successfully" };
    }

}));



//product.js
