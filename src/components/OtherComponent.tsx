import React, { useEffect, useState } from "react";

const OtherComponent: React.FC = () => {
  const [data, setData] = useState<any | null>(null);
  const savedData = localStorage.getItem("osuUserData");

  useEffect(() => {
    const savedData = localStorage.getItem("osuUserData");

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setData(parsedData[parsedData.length]);
    }
  }, []);

  console.log("This is Data : ", savedData);
  return (
    <div>
      {data ? (
        <div>
          <h2>User ID: {data.user}</h2>
          <p>Total Play Count: {data.playcount}</p>
          {/* Add more fields as needed */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default OtherComponent;
