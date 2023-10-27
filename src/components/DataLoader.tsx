import React, { useEffect, useState } from "react";
import { Client } from "osu-web.js";

const DataLoader: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const client = new Client("XbQ2BGDh7XSzMFB7j2rS8D2sX4TbwdS1hXYAgFSr");

      try {
        // Fetch user data using osu! API
        const user = await client.users.getUser(14544646, {
          urlParams: {
            mode: "osu",
          },
        });

        // Store the user data in local storage
        localStorage.setItem("osuUserData", JSON.stringify(user));

        // Set the user data in state
        setUserData(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h2>osu! User Data</h2>
      {userData && (
        <div>
          <p>Username: {userData.username}</p>
          <p>Country: {userData.country.name}</p>
          {/* Add more user data fields as needed */}
        </div>
      )}
    </div>
  );
};

export default DataLoader;
