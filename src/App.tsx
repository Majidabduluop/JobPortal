import "./App.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { createTheme } from "@mantine/core";
import Findjobs from "./pages/Findjobs";
import Findtalents from "./pages/Findtalents";
import Talentprofilepage from "./pages/Talentprofilepage";
import Postjob from "./pages/Postjob";
import "@mantine/tiptap/styles.css";
import Jobdescription from "./pages/Jobdescription";
import Applyjob from "./pages/Applyjob";
import CompanyPage from "./pages/CompanyPage";
import PostedJobpage from "./pages/PostedJobpage";
import "@mantine/dates/styles.css";
import JobHistorypage from "./pages/JobHistorypage";
import Signuppage from "./pages/Signuppage";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
import Login from "./Signuppage/Login";

function App() {
  const theme = createTheme({
    focusRing: "never",
    fontFamily: "Poppins, sans-serif",
    primaryColor: "brightSun",
    primaryShade: 4,
    colors: {
      brightSun: [
        "#fffbeb",
        "#fff3c6",
        "#ffe588",
        "#ffd149",
        "#ffbd20",
        "#f99b07",
        "#dd7302",
        "#b75006",
        "#943c0c",
        "#7a330d",
        "#461902",
      ],
      mineShaft: [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
        "#2d2d2d",
      ],
    },
  });
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Notifications position="top-center" zIndex={1000} />
      <BrowserRouter>
        <div className="bg-mine-shaft-900">
          <Header />
          <Routes>
            <Route path="find-jobs" element={<Findjobs />} />
            <Route path="job_des" element={<Jobdescription />} />
            <Route path="find-talent" element={<Findtalents />} />
            <Route path="talent_profile" element={<Talentprofilepage />} />
            <Route path="Post-jobs" element={<Postjob />} />
            <Route path="apply-job" element={<Applyjob />} />
            <Route path="company_page" element={<CompanyPage />} />
            <Route path="posted-job" element={<PostedJobpage />} />
            <Route path="Job-history" element={<JobHistorypage />} />
            <Route path="Sign-up" element={<Signuppage />} />
            <Route path="Login" element={<Login />} />

            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
