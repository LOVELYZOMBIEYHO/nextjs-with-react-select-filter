import Select from "react-select";
import { useState } from "react";
import { useRouter } from "next/router";

const options = [
  { value: "1", label: "UserId:1" },
  { value: "2", label: "UserId:2" },
  { value: "3", label: "UserId:3" },
  { value: "4", label: "UserId:4" },
  { value: "5", label: "UserId:5" },
  { value: "6", label: "UserId:6" },
  { value: "7", label: "UserId:7" },
  { value: "8", label: "UserId:8" },
  { value: "9", label: "UserId:9" },
  { value: "10", label: "UserId:10" },
];

// var array1 = ["10", "9", "8"];
// var technologyList = [];
// array1.forEach(function (element) {
//   technologyList.push({ label: element, value: element, key: element });

// });

export default function Filter(props) {
  const router = useRouter();
  const [value, setValue] = useState(null);
  const onDropdownChange = (value) => {
    setValue(value);
  };

  const submitSelectCategory = (e) => {
    e.preventDefault();

    const multiCategories = value.map((item) => {
      return item.value;
    });

    const joinURL = multiCategories.join("&term=");
    // const categoriesURL = `/card/${joinURL}`;
    const categoriesURL = `/card/search?term=${joinURL}`;
    router.push(categoriesURL);
  };

  return (
    <div style={{ width: "300px", margin: "30px auto" }}>
      <form onSubmit={submitSelectCategory}>
        <Select
          value={value}
          options={options}
          onChange={onDropdownChange}
          isMulti
          id="long-value-select"
          instanceId="long-value-select"
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
