import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";
import { Typography } from "./ui/design/typography/Typography";
import { Container } from "./ui/components/container/Container";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route
            path="*"
            element={
              <Container>
                <Typography
                  variant="heading4"
                  className="text-state-info text-center py-36"
                >
                  Site in building
                </Typography>
              </Container>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
