import { useNoteContext } from "@/app/hook/UseNoteContext";

type CategoryButtonType = {
  text: string;
};

function CategoryButton({ text }: CategoryButtonType) {
  const { selectedCategory, setSelectedCategory } = useNoteContext();
  return (
    <button
      className={`border border-black hover:bg-black hover:text-white rounded-full px-3 ${selectedCategory === text ? "bg-black text-white" : "bg-none text-black"}`}
      onClick={() => setSelectedCategory(text)}
    >
      {text}
    </button>
  );
}

export default CategoryButton;
