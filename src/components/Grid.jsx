const Grid = ({ children, columns }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${5}, 1fr)`,
        gridGap: 10,
        padding: 10,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
