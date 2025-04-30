import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchMatches } from "../../store/actions/api";

interface Team {
  name: string;
  score: number;
}

interface ScoreCardProps {
  homeTeam: Team;
  awayTeam: Team;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ homeTeam, awayTeam }) => {
  const dispatch = useDispatch();
  const matches = useSelector((state) => state.matches);

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  console.log(matches);

  return (
    <View style={styles.scoreCard}>
      <View style={[styles.team, styles.homeTeam]}>
        <Text style={styles.teamName}>{homeTeam.name}</Text>
      </View>
      <View style={styles.score}>
        <Text style={styles.scoreText}>{homeTeam.score}</Text>
        <Text style={styles.scoreText}> - </Text>
        <Text style={styles.scoreText}>{awayTeam.score}</Text>
      </View>
      <View style={[styles.team, styles.awayTeam]}>
        <Text style={styles.teamName}>{awayTeam.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  team: {
    alignItems: "center",
  },
  homeTeam: {
    marginRight: 16,
  },
  awayTeam: {
    marginLeft: 16,
  },
  teamBadge: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  teamName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  score: {
    flexDirection: "row",
    alignItems: "center",
  },
  scoreText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ScoreCard;
