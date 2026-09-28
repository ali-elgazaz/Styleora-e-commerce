import useCategories from "../hooks/useCategories";

function Categories() {
  const { categories, loading, error } = useCategories();

  if (loading) {
    return <p>Loading categories...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Categories</h1>

      {categories.map((category) => (
        <div key={category.documentId}>
          <h2>{category.name}</h2>
          <p>{category.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Categories;
