type User = {
  id: number;
  name: string;
  active: boolean;
};

const fetchActiveUsers = async () => {
  try {
    const response = await fetch("https://mockapi.io/users");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const users: User[] = await response.json();
    const activeUsers = users.filter(user => user.active);

    console.log(`Number of active users: ${activeUsers.length}`);

    return activeUsers;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return [];
  }
};

// Example usage
fetchActiveUsers();
