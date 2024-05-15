import React, { useState } from 'react';
import './position.scss';
import PositionList from '../../../../components/Position';
import search from '../../../../assets/trainee/search.svg';
import AddPositionsModal from '../../../../components/Positions/AddPositionsModal';
import { useJobsContext } from '../../../../JobContext';

function Positions() {
    const { positions, addPosition } = useJobsContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Function to filter positions based on input
    const filterPositions = (search) => {
        return positions.filter(position =>
            position.title.toLowerCase().includes(search.toLowerCase())
        );
    };

    // Function to handle search input changes
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return(
        <div className='positionsContainer'>
            <div className='filterContainer'>
                <div className="searchContainer">
                  <input 
                    type="text"
                    id="myInput"
                    onChange={handleSearchChange}
                    placeholder="Search Job..."
                    title="Type in a name"
                  />
                  <span className="searchIcon">
                      <img src={search} alt="" />
                  </span>
                </div>
                <div onClick={() => setIsModalOpen(true)} style={{display: "flex", justifyContent: "Center", alignItems: "center", gap: "10px"}}> 
                    <span className='traineeAdd'>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.84091 16.7386V0.647726H10.9091V16.7386H6.84091ZM0.829545 10.7273V6.65909H16.9205V10.7273H0.829545Z" fill="white"/>
                        </svg>
                    </span>
                </div>
            </div>
            <AddPositionsModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} addPosition={addPosition} />
            <div className='positionContainerItems'>
                {filterPositions(searchTerm).map((position, index) => (
                        <PositionList key={index} position={position} />
                    ))}
            </div>
        </div>
    )
}

export default Positions;
