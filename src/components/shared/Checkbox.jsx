const Checkbox = ({ checked, onChange, className }) => {
  return (
    <label className="label cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={`checkbox checkbox-primary checkbox-xs sm:checkbox-sm ${className}`}
      />
    </label>
  );
};

export default Checkbox;
