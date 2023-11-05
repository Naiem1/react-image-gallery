const Grid = ({ children }) => {
  return (
    <div
      className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-3 p-4"
    >
      {children}
    </div>
  );
};

export default Grid;
