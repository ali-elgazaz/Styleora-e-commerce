function ColorSelector({ colors, selectedColor, onColorChange }) {
  return (
    <div>
      <h3>Color</h3>

      <div>
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => onColorChange(color)}
            style={{
              backgroundColor: selectedColor === color ? "#E5B96D" : "white",
              border:
                selectedColor === color ? "2px solid black" : "1px solid #ccc",
            }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ColorSelector;
