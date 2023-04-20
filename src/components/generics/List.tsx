type ListsProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const List = <T extends {}>({ items, onClick }: ListsProps<T>) => {
  return (
    <div>
      <h2>List Of Items</h2>
      {items.map((item, index) => (
        <div className="cursor-pointer" key={index} onClick={() => onClick(item)}>
          {item as React.ReactNode}
        </div>
      ))}
    </div>
  );
};
export default List;
