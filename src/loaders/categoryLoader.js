const categoryLoader = async () => {
  const res = await fetch("http://localhost:9000/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch category");
  }
  return res.json();
};

export default categoryLoader