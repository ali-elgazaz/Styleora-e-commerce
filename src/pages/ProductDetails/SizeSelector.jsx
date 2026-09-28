function SizeSelector({ sizes, selectedSize, onSizeChange }) {
  return (
    <div>
      <h3>Size</h3>

      <div>
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => onSizeChange(size)}
            style={{
              backgroundColor: selectedSize === size ? "#E5B96D" : "white",
              border:
                selectedSize === size ? "2px solid black" : "1px solid #ccc",
            }}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;
