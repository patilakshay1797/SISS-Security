import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Box, Typography, Grid } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import SecurityIcon from "@mui/icons-material/Security";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AnimateElement from "./AnimateElement";

const stats = [
  { icon: <GroupsIcon fontSize="large" />, label: "Clients", end: 200 },
  {
    icon: <SecurityIcon fontSize="large" />,
    label: "Security Guards",
    end: 400,
  },
  {
    icon: <AccessTimeIcon fontSize="large" />,
    label: "Years of Trust & Experience",
    end: 15,
  },
  { icon: <HomeWorkIcon fontSize="large" />, label: "Sites", end: 300 },
];

const CounterComp = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Box
      ref={ref}
      sx={{
        py: 6,
        px: 2,
        backgroundColor: "#000",
        color: "white",
        textAlign: "center",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {stats.map((stat, index) => (
          <AnimateElement
            animationClass={"transitionBtmToTop"}
            propThreshold={0.8}
            propDelay={index * 200}
            key={index}
          >
            <Grid item xs={6} sm={3} key={index}>
              <Box>
                {stat.icon}
                <Typography variant="h3" fontWeight="bold" mt={1}>
                  {inView && <CountUp end={stat.end} duration={4} />}
                </Typography>
                <Typography variant="body1" color="#E0E0E0">
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          </AnimateElement>
        ))}
      </Grid>
    </Box>
  );
};

export default CounterComp;
