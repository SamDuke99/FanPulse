import { setData } from "../slices/matchesSlice";

export const fetchMatches = () => async (dispatch: any) => {
  try {
    const response = await fetch("https://api.football-data.org/v4/matches", {
      method: "GET",
      headers: {
        "X-Auth-Token": "",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    dispatch(setData(data));
  } catch (error) {
    console.error("Error fetching matches:", error);
  }
};
