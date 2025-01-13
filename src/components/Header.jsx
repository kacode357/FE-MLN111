import  { useState } from "react";
import ChooseZen from "./ChooseZen";

const Header = () => {
    const [showChooseZen, setShowChooseZen] = useState(false);

    const handleBackToHome = () => {
        setShowChooseZen(true);
    };

    return (
        <div>
            {showChooseZen ? (
                <ChooseZen />
            ) : (
                <>
                    <button 
                        onClick={handleBackToHome} 
                        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Back to Home
                    </button>
                  
                </>
            )}
        </div>
    );
};

export default Header;
