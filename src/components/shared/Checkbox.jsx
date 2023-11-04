const Checkbox = ({ checked, onChange }) => {
  return (
    <label className="label cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox checkbox-primary checkbox-xs sm:checkbox-sm"
      />
    </label>
  );
};

export default Checkbox;
