import React from 'react';

const PetCard = ({ pet }) => {
    const shelterEmail = 'adoption@petshelter.com';
    const emailSubject = `Inquiry about adopting ${pet.name}`;
    const emailBody = `Hello, I am interested in learning more about ${pet.name} (ID: ${pet.id})...`;

    return (
        <div className="pet-card">
            <img
                src={pet.imageUrl || 'https://placehold.co/600x400'}
                alt="Pet"
            />
            {/* Add this wrapper div */}
            <div className="pet-card-content">
                <h3>{pet.name}</h3>
                <p>
                    <strong>Type:</strong> {pet.type}
                </p>
                <p>
                    <strong>Breed:</strong> {pet.breed}
                </p>
                <p>{pet.description}</p>
                <a
                    href={`mailto:${shelterEmail}?subject=${encodeURIComponent(
                        emailSubject
                    )}&body=${encodeURIComponent(emailBody)}`}
                    className="adopt-button"
                >
                    Interested in Adoption?
                </a>
            </div>
        </div>
    );
};

export default PetCard;
