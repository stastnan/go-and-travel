import { Box, Typography } from "@mui/material";

import { WIZARD_STEPS } from "../data";
import DesktopStepper from "./Navigation/DesktopStepper";

export default function AddTripWizard() {
  const currentStep = 0;
  const stepData = WIZARD_STEPS[currentStep];
  const StepComponent = stepData.Component;
  return (
    <Box>
      <DesktopStepper steps={WIZARD_STEPS} currentStep={currentStep} />
      <Box
        sx={{
          bgcolor: "white",
          p: { xs: 2, md: 3 },
          pb: { xs: 10, md: 13 },
          borderRadius: 4,
          maxWidth: 926,
          mx: "auto",
          position: "relative",
        }}
      >
        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
          Step {currentStep + 1}
        </Typography>
        <Typography variant="h4" sx={{ mb: { xs: 3, md: 1 } }}>
          {stepData.title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ mb: 3, display: { xs: "none", md: "block" } }}
        >
          {stepData.description}
        </Typography>
        <Box
          sx={{
            minHeight: { xs: "58vh", md: "auto" },
            maxHeight: { xs: "58vh", md: "40vh" },
            overflowY: "scroll",
          }}
        >
          <StepComponent />
        </Box>
      </Box>
    </Box>
  );
}
