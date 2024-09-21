import { useEffect, useState } from "react";
import { ListItem, SelectList, StyleSelect, Title } from "./Select.styled";
import { useDispatch } from "react-redux";
import { ArrowDown } from "../Icons/ArrowDown";

export const Select = ({
  options,
  value,
  reduxFn,
  activeSelect,
  setActiveSelect,
  id,
}) => {
  const [showList, setShowList] = useState(false);
  const dispatch = useDispatch();

  const isActive = activeSelect === id;

  useEffect(() => {
    const isActive = activeSelect === id;

    if (isActive) {
      setShowList(true);
    } else {
      setShowList(false);
    }
  }, [activeSelect, id]);
  const handleClick = (e) => {
    setActiveSelect(isActive ? null : id);

    setShowList((prevState) => !prevState);
    const el = e.target;
    if (el.tagName !== "LI") {
      return;
    }
    const val = el.getAttribute("value");
    dispatch(reduxFn(val));
  };

  return (
    <StyleSelect onClick={handleClick}>
      <Title>{value}</Title>
      {options.length > 0 && isActive && (
        <SelectList $showList={showList}>
          {options.map((item) => (
            <ListItem key={item.value} value={item.label}>
              {item.label}
            </ListItem>
          ))}
        </SelectList>
      )}
      <ArrowDown width={14} height={14} />
    </StyleSelect>
  );
};
