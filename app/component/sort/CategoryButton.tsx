type CategoryButtonType = {
  text: string;
};

function CategoryButton({ text }: CategoryButtonType) {
  return (
    <button className="border border-black hover:bg-black hover:text-white rounded-full px-3">
      {text}
    </button>
  );
}

export default CategoryButton;
