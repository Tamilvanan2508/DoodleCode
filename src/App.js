import React, { useEffect, useState } from "react";
import "./index.css";

const App = () => {
  const [cardData, setCardData] = useState([]);
  const [visible, setVisible] = useState(5);

  const data = [
    {
      id: 1,
      name: "Aju",
      age: 35,
      location: {
        city: "yyy",
        address: "zzz",
      },
    },
    {
      id: 2,
      name: "Khaleesi",
      age: 33,
      location: {
        city: "sfds",
        address: "zzz",
      },
    },
    {
      id: 3,
      name: "ash",
      age: 35,
      location: {
        city: "yyy",
        address: "zzz",
      },
    },
    {
      id: 4,
      name: "Virat",
      age: 35,
      location: {
        city: "yyy",
        address: "zzz",
      },
    },
    {
      id: 5,
      name: "Bruce",
      age: 35,
      location: {
        city: "yyy",
        address: "zzz",
      },
    },
    {
      id: 6,
      name: "Kenty",
      age: 25,
      location: {
        city: "yyy",
        address: "zzz",
      },
    },
    {
      id: 7,
      name: "Viola",
      age: 15,
      location: {
        city: "yyy",
        address: "zzz",
      },
    },
    {
      id: 8,
      name: "Raja",
      age: 52,
      location: {
        city: "yyy",
        address: "zzz",
      },
    },
    {
      id: 9,
      name: "Harris",
      age: 15,
      location: {
        city: "yyy",
        address: "zzz",
      },
    },
    {
      id: 10,
      name: "White",
      age: 25,
      location: {
        city: "yyy",
        address: "zzz",
      },
    },
    {
      id: 11,
      name: "Pascal",
      age: 30,
      location: {
        city: "yyy",
        address: "zzz",
      },
    },
    {
      id: 12,
      name: "Iris",
      age: 20,
      location: {
        city: "yyy",
        address: "zzz",
      },
    },
    {
      id: 13,
      name: "Shae",
      age: 22,
      location: {
        city: "iooso",
        address: "opo",
      },
    },
    {
      id: 14,
      name: "Jeez",
      age: 5,
      location: {
        city: "mexico",
        address: "sss",
      },
    },
    {
      id: 15,
      name: "Skyler",
      age: 38,
      location: {
        city: "xyxy",
        address: "euie",
      },
    },
    {
      id: 16,
      name: "Pink",
      age: 50,
      location: {
        city: "yyy",
        address: "zzz",
      },
    },
    {
      id: 17,
      name: "Mady",
      age: 15,
      location: {
        city: "iou",
        address: "njk",
      },
    },
    {
      id: 18,
      name: "Varys",
      age: 20,
      location: {
        city: "yyy",
        address: "opi",
      },
    },
    {
      id: 19,
      name: "Madman",
      age: 80,
      location: {
        city: "yyy",
        address: "ere",
      },
    },
    {
      id: 20,
      name: "Jelly",
      age: 12,
      location: {
        city: "eee",
        address: "hyuy",
      },
    },
  ];

  const allCardData = async () => {
    setCardData(data);
  };

  const loadMore = () => {
    setVisible(visible + 5);
  };

  useEffect(() => {
    allCardData();
  }, []);

  const renderCard = (person) => {
    return (
      <section className="main-class">
        <table>
          <thead>
            <td>Name</td>
            <td>Age</td>
            <td>City</td>
            <td>Address</td>
          </thead>
          <tbody>
            <tr>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.location.address}</td>
              <td>{person.location.city}</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  };

  return (
    <div>
      <div>
        <div>{cardData.slice(0, visible).map(renderCard)}</div>
      </div>
      {visible < cardData.length && (
        <button onClick={loadMore}>Load 5 More</button>
      )}
    </div>
  );
};

export default App;
