interface User {
    id: number;
    name: string;
    email: string;
    isAdmin?: boolean; //optional
}

const user1: User = {
    id: 1,
    name: "John Doe",
    email: "j.doe@example.com"
    // isAdmin is optional
}

console.log(user1);