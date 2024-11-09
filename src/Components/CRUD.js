import { useState } from "react";

function Crud() {
    const [itemData, setItemData] = useState({ name: '', description: '' });
    const [items, setItems] = useState([]);
    const [isEditing, setEditing] = useState(false);
    const [editItemId, setEditItemId] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItemData({ ...itemData, [name]: value });
    };

    const handleSubmission = (e) => {
        e.preventDefault();

        if (isEditing) {
            setItems(items.map(item => (item.id === editItemId ? { ...item, ...itemData } : item)));
            setEditing(false);
            setEditItemId(null);
        } else {
            setItems([...items, { ...itemData, id: Date.now() }]);
        }

        setItemData({ name: '', description: '' });
    };

    const editItem = (item) => {
        setItemData({ name: item.name, description: item.description });
        setEditing(true);
        setEditItemId(item.id);
    };

    const deleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div>
            <h1>CRUD Operations</h1>
            <form onSubmit={handleSubmission}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={itemData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={itemData.description}
                    onChange={handleChange}
                    required
                />
                <button type="submit">
                    {isEditing ? 'Update' : 'Add'}
                </button>
            </form>

            <div>
                <h2>Items</h2>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <span>{item.name} : {item.description}</span>
                            <button onClick={() => editItem(item)}>Edit</button>
                            <button onClick={() => deleteItem(item.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Crud;