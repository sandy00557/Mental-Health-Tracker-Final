import React, { useEffect, useState } from "react";
import API from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { addPoints } from "../redux/userSlice";
const CheckListSection = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user._id);
  const globalPoints = useSelector((state) => state.user.points);

  const [ticked, setTicked] = useState(0);
  const [userText, setUserText] = useState("");
  const [userAge, setUserAge] = useState(0);
  const [aiResponse, setAiResponse] = useState([]);
  const [completed, setCompleted] = useState("");
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const userResponse = await API.post(
          "/list/status",
          {
            _id: userId,
          },
          {
            withCredentials: true,
          }
        );
        if (userResponse.status === 409) {
          setLocked(userResponse.data.locked);
          console.log("Checklist status fetched:", userResponse.data.locked);
        }
        if (userResponse.status === 200) {
          setLocked(userResponse.data.locked);
          console.log("CheckList Not Completed", userResponse.data.locked);
        }
      } catch (err) {
        console.log("Error fetching status:", err.message);
      }
    };
    fetchStatus();
  }, []);

  const DoneChanges = async () => {
    if (ticked === 7) {
      setCompleted(
        "Congratulations you have completed all the tasks.You have got +50 Points"
      );
      console.log(globalPoints);
      const newPoints = globalPoints + 50;
      dispatch(addPoints(50));
      console.log("Global points before update:", globalPoints, userId);
      try {
        const newres = await API.post(
          "/list/newPoints",
          {
            points: newPoints,
            _id: userId,
          },
          {
            withCredentials: true,
          }
        );
        console.log(newres);
        console.log(newres.lastdate);
        // if (newres.status === 200) {
        //   setLocked(true);
        //   console.log("Points updated successfully");
        // }
      } catch (err) {
        console.log("Error updating points:", err.message);
      }
    } else if (ticked === 6) {
      setCompleted("Wow! More one task left");
    } else if (ticked <= 5) {
      setCompleted("You are almost there. Complete Soon.");
    }
  };
  const handleClick = (e) => {
    if (e.target.checked) {
      setTicked((prev) => prev + 1);
    } else if (!e.target.checked) {
      setTicked((prev) => prev - 1);
    }
  };
  const userDetails = async () => {
    const response = await API.post(
      "/list/checklist",
      {
        mood: userText,
        age: userAge,
      },
      {
        withCredentials: true,
      }
    );
    if (response.status === 200) {
      console.log(response.data);
      console.log("Checklist data:", response.data.checkListData);
      setAiResponse(response.data.checkListData);
    }
    if (response.status === 500) {
      console.log("Fallback checklist data:", response.data.checkListData);
    }
  };
  const checkList = [
    { id: 1, label: "CheckList 1" },
    { id: 2, label: "CheckList 2" },
    { id: 3, label: "CheckList 3" },
    { id: 4, label: "CheckList 4" },
    { id: 5, label: "CheckList 5" },
    { id: 6, label: "CheckList 6" },
    { id: 7, label: "CheckList 7" },
  ];

  return (
    <>
      <input
        type="text"
        placeholder="Enter what you feel today"
        required
        onChange={(e) => setUserText(e.target.value)}
      />
      <input
        type="Number"
        placeholder="Enter your age"
        required
        onChange={(e) => setUserAge(e.target.value)}
      />
      <button onClick={userDetails}>Submit</button>
      {checkList.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            id={item.id}
            onChange={(e) => handleClick(e)}
            disabled={!locked}
          />
          <label htmlFor={item.id}>
            {aiResponse[item.id - 1] || `CheckList ${item.id}`}
          </label>
        </div>
      ))}
      <h1>{ticked}</h1>
      <input type="range" min="0" max="7" value={ticked} readOnly />
      <button onClick={DoneChanges} disabled={!locked}>
        Done
      </button>
      <div>{completed}</div>
      {!locked && <div>Today's CheckList already completed</div>}
    </>
  );
};
export default CheckListSection;
