// src/components/FilterBar.tsx

const filters = ['Quick', '1h or less', 'Few ingredients', 'Breakfast', 'Lunch', 'Dinner'];

export function FilterBar() {
  return (
    <div className="flex overflow-x-scroll mb-4 space-x-4">
      {filters.map((filter) => (
        <button key={filter} className="px-4 py-2 rounded-full bg-gray-700">
          {filter}
        </button>
      ))}
    </div>
  );
}
