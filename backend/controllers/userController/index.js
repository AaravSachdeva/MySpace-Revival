// Mock data store
let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];


export const getUsers = (req, res) => {
    console.log(req.user);
    res.json(users);
}


export const getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    user ? res.json(user) : res.status(404).json({ message: "User not found" });
};

export const createUser = (req, res) => {
    const newUser = { id: Date.now(), ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
};


export const updateUser = (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index !== -1) {
        users[index] = { ...users[index], ...req.body };
        res.json(users[index]);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};


export const deleteUser = (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.json({ message: "User deleted" });
};