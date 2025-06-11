import React, { useState, useEffect } from 'react';
import PetForm from '../shared/PetForm';

const AdminPage = () => {
    const [pets, setPets] = useState([]);
    const [editingPet, setEditingPet] = useState(null);

    const fetchPets = async () => {
        const response = await fetch('/pets');
        const data = await response.json();
        setPets(data);
    };

    useEffect(() => {
        fetchPets();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure?')) {
            await fetch(`/pets/${id}`, { method: 'DELETE' });
            fetchPets();
        }
    };

    const handleEdit = (pet) => {
        setEditingPet(pet);
        window.scrollTo(0, 0);
    };

    return (
        <div className="admin-page">
            <h2>Admin Dashboard</h2>
            <PetForm
                existingPet={editingPet}
                onFormSubmit={() => {
                    setEditingPet(null);
                    fetchPets();
                }}
            />
            <hr />
            <h3>Manage Existing Pets</h3>
            {pets.map((pet) => (
                <div key={pet.id} className="admin-pet-item">
                    <span>
                        {pet.name} - ({pet.type})
                    </span>
                    <div>
                        <button onClick={() => handleEdit(pet)}>Edit</button>
                        <button
                            onClick={() => handleDelete(pet.id)}
                            className="delete"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default AdminPage;
