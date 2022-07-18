type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// use this to allow objects <T extends {id: number}>
function List<T extends string | number>({ items, onClick }: ListProps<T>) {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default List;
