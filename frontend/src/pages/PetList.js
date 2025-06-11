import { useState, useEffect } from 'react';
import PetCard from '../shared/PetCards';
import Filter from '../shared/filter';

const PetListPage = () => {
    const [pets, setPets] = useState([]);
    const [filteredPets, setFilteredPets] = useState([]);
    const [loading, setLoading] = useState(true);

    const [filters, setFilters] = useState(() => ({
        type: localStorage.getItem('petFilterType') || 'All',
        breed: localStorage.getItem('petFilterBreed') || '',
    }));

    useEffect(() => {
        const fetchPets = async () => {
            try {
                setLoading(true);
                const response = await fetch('/pets');
                const data = await response.json();
                setPets(data);
            } catch (error) {
                console.error('Failed to fetch pets:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPets();
    }, []);

    useEffect(() => {
        let result = pets.filter((pet) => {
            const typeMatch =
                filters.type === 'All' || pet.type === filters.type;
            const breedMatch =
                !filters.breed ||
                pet.breed.toLowerCase().startsWith(filters.breed.toLowerCase());
            return typeMatch && breedMatch;
        });
        setFilteredPets(result);

        localStorage.setItem('petFilterType', filters.type);
        localStorage.setItem('petFilterBreed', filters.breed);
    }, [pets, filters]);

    if (loading) return <p>Loading pets...</p>;

    return (
        <div className="pet-list-page">
            <h2>Our Lovely Pets</h2>
            <Filter filters={filters} setFilters={setFilters} />
            <div className="pet-grid">
                {filteredPets.length > 0 ? (
                    filteredPets.map((pet) => (
                        <PetCard key={pet.id} pet={pet} />
                    ))
                ) : (
                    <p>No pets match your criteria.</p>
                )}
            </div>
        </div>
    );
};

export default PetListPage;
