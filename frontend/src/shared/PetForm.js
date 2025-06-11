import React, { useState, useEffect } from 'react';

export const PetType = {
    Dog: 'Dog',
    Cat: 'Cat',
    Bird: 'Bird',
    Reptile: 'Reptile',
    Other: 'Other',
};

const initialFormState = {
    name: '',
    type: 'Dog',
    breed: '',
    age: '',
    imageUrl: '',
    description: '',
};

const PetForm = ({ existingPet, onFormSubmit }) => {
    const [pet, setPet] = useState(initialFormState);
    const isEditing = !!existingPet;

    useEffect(() => {
        if (existingPet) {
            setPet(existingPet);
        } else {
            setPet(initialFormState);
        }
    }, [existingPet]);

    const handleChange = (e) => {
        setPet({ ...pet, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isEditing ? `/pets/${existingPet.id}` : '/pets';
        const method = isEditing ? 'PUT' : 'POST';

        await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pet),
        });
        onFormSubmit();
    };

    return (
        <form onSubmit={handleSubmit} className="pet-form">
            <h3>{isEditing ? 'Edit Pet' : 'Add a New Pet'}</h3>
            <input
                name="name"
                value={pet.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <label for="type">Type:</label>
            <select name="type" id="type">
                {Object.values(PetType).map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>
            <input
                name="breed"
                value={pet.breed}
                onChange={handleChange}
                placeholder="Breed"
            />
            <input
                name="age"
                type="number"
                value={pet.age}
                onChange={handleChange}
                placeholder="Age"
            />
            <input
                name="imageUrl"
                value={pet.imageUrl}
                onChange={handleChange}
                placeholder="Image URL"
            />
            <textarea
                name="description"
                value={pet.description}
                onChange={handleChange}
                placeholder="Description"
            ></textarea>
            <button type="submit">
                {isEditing ? 'Update Pet' : 'Add Pet'}
            </button>
        </form>
    );
};
export default PetForm;
