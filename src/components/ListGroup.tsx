function ListGroup() {
  var items = [
    "Ghana",
    "Nigeria",
    "Kenya",
    "South Africa",
    "Uganda",
    "Tanzania",
    "Zimbabwe",
    "Rwanda",
  ];

  items = [];

  if (items.length === 0) {
    return (
      <>
        <h1>List of Items</h1> 
        <p>No items found</p>
      </>
    );
  }

  return (
    <>
      <h1>List of Items</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
