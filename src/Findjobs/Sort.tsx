import { useState } from "react";
import { IconAdjustments } from "@tabler/icons-react";
import { Button, Combobox, useCombobox, Text, Box } from "@mantine/core";

const opt = [
  "Relevence",
  "most recent",
  " salary(high - low)",
  " salary(low - high)",
];

const Sort = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>("Relevence");
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Combobox
        store={combobox}
        width={250}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <div
            onClick={() => combobox.toggleDropdown()}
            className=" border border-bright-sun-400 flex px-4 text-sm items-center justify-center py-1 rounded-xl"
          >
            {selectedItem}
            <IconAdjustments stroke={2} />
          </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
};
export default Sort;
