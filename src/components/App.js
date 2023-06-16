import { useState } from "react";
import "../styles/App.css";
import Sidebar from "./Sidebar";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import EditWindow from "./EditWindow";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Preview from "./Preview";

//settings for side bar.
// This part has to be out side of function. (it re-renders too much)
const drawerWidth = 440;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

function App() {
  const [formDataGeneralInfo, setFormData] = useState({
    lastUpdate: {
      modifiedvalue: {
        lastUpdateYear: "2023",
        lastUpdateMonth: "6",
        lastUpdateDay: "24",
      },
    },
    nameFurigana: "",
    name: "",
    birthday: {
      birthdayYear: "1984",
      birthdayMonth: "1",
      birthdayDay: "9",
      Age: "",
    },
    homeaddress: "",
    phone: "",
    email: "",
    photo: null,
  });

  const [formDataHistory, setFormDataHistory] = useState({
    items: [
      {
        category: "Educational",
        data: [
          {
            year: "2020",
            month: "3",
            contents: "XXXX卒業",
          },
          {
            year: "2023",
            month: "3",
            contents: "XXXX卒業",
          },
        ],
      },
      {
        category: "Jobs",
        data: [
          {
            year: "2020",
            month: "6",
            contents: "XXXX入社",
          },
          {
            year: "2023",
            month: "6",
            contents: "XXXX退社",
          },
        ],
      },
      {
        category: "Certificate",
        data: [
          {
            year: "2020",
            month: "6",
            contents: "XXXX合格",
          },
          {
            year: "2023",
            month: "6",
            contents: "XXXX合格",
          },
        ],
      },
    ],
  });

  const [appealText, setAppealText] = useState("nantonaku");
  const [kibouText, setKibouText] = useState("nandemoii");
  const [selectedButton, setSelectedButton] = useState(null);
  const [isEditWindowOpen, setIsEditWindowOpen] = useState(false);

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleDrawerOpen = () => {
    setOpenSidebar(true);
  };

  const handleDrawerClose = () => {
    setOpenSidebar(false);
  };

  const handleisEditWindowOpen = function (buttonClicked) {
    if (selectedButton === buttonClicked) {
      setIsEditWindowOpen(!isEditWindowOpen);
    } else {
      setSelectedButton(buttonClicked);
      setIsEditWindowOpen(true);
    }
  };

  const calculateAge = () => {
    const currentYear = parseInt(
      formDataGeneralInfo.lastUpdate.modifiedvalue.lastUpdateYear
    );
    const currentMonth = parseInt(
      formDataGeneralInfo.lastUpdate.modifiedvalue.lastUpdateMonth
    );
    const currentDay = parseInt(
      formDataGeneralInfo.lastUpdate.modifiedvalue.lastUpdateDay
    );
    const birthYear = parseInt(formDataGeneralInfo.birthday.birthdayYear);
    const birthMonth = parseInt(formDataGeneralInfo.birthday.birthdayMonth);
    const birthDay = parseInt(formDataGeneralInfo.birthday.birthdayDay);

    let age = currentYear - birthYear;

    if (
      currentMonth < birthMonth ||
      (currentMonth === birthMonth && currentDay < birthDay)
    ) {
      age -= 1;
    }
    return age;
  };

  const handleChangeHistory = (e, index, type) => {
    const { name, value } = e.target;
    setFormDataHistory((prevData) => {
      const updatedItems = [...prevData.items];
      const itemIndex = updatedItems.findIndex((item) => item.type === type);
      updatedItems[itemIndex].data[index][name] = value;
      return {
        ...prevData,
        items: updatedItems,
      };
    });
  };

  const handleAddItemHistory = (type) => {
    setFormDataHistory((prevData) => {
      const newItem = {
        year: "",
        month: "",
        contents: "",
      };
      const updatedItems = [...prevData.items];
      const itemIndex = updatedItems.findIndex((item) => item.type === type);
      updatedItems[itemIndex].data.push(newItem);
      return {
        ...prevData,
        items: updatedItems,
      };
    });
  };

  const handleDeleteItemHistory = (index, type) => {
    setFormDataHistory((prevData) => {
      const updatedItems = [...prevData.items];
      const itemIndex = updatedItems.findIndex((item) => item.type === type);
      updatedItems[itemIndex].data.splice(index, 1);
      return {
        ...prevData,
        items: updatedItems,
      };
    });
  };

  const handleChangeTextArea = (e) => {
    const text = e.target.value;
    const name = e.target.name;

    if (name === "appeal") {
      setAppealText(text);
    }
    if (name === "kibou") {
      setKibouText(text);
    }
  };

  const handleChangeGeneralInfo = (e) => {
    const { name, value } = e.target;

    if (
      name === "lastUpdateYear" ||
      name === "lastUpdateMonth" ||
      name === "lastUpdateDay"
    ) {
      setFormData((prevData) => ({
        ...prevData,
        lastUpdate: {
          ...prevData.lastUpdate,
          modifiedvalue: {
            ...prevData.lastUpdate.modifiedvalue,
            [name]: value,
          },
        },
      }));
    } else if (
      name === "birthdayYear" ||
      name === "birthdayMonth" ||
      name === "birthdayDay"
    ) {
      setFormData((prevData) => ({
        ...prevData,
        birthday: {
          ...prevData.birthday,
          [name]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    console.log(formDataGeneralInfo);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={openSidebar}>
          <Toolbar>
            <Typography
              id="title"
              variant="h6"
              noWrap
              sx={{ flexGrow: 1 }}
              component="div"
            >
              履歴書テンプレ作成ネーター
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(openSidebar && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Main open={openSidebar}>
          <DrawerHeader />

          <div>A4サイズプレビュー</div>
          <div id="a4">
            <Preview
              formDataGeneralInfo={formDataGeneralInfo}
              appealText={appealText}
              kibouText={kibouText}
              formDataHistory={formDataHistory}
              calculateAge={calculateAge}
            />

            {isEditWindowOpen === true ? (
              <EditWindow
                handleisEditWindowOpen={handleisEditWindowOpen}
                selectedButton={selectedButton}
                appealText={appealText}
                kibouText={kibouText}
                handleChangeTextArea={handleChangeTextArea}
                formDataHistory={formDataHistory}
                handleChangeHistory={handleChangeHistory}
                handleAddItemHistory={handleAddItemHistory}
                handleDeleteItemHistory={handleDeleteItemHistory}
                calculateAge={calculateAge}
                handleChangeGeneralInfo={handleChangeGeneralInfo}
                formDataGeneralInfo={formDataGeneralInfo}
                handlePhotoUpload={handlePhotoUpload}
              />
            ) : null}
          </div>
        </Main>

        <Sidebar
          DrawerHeader={DrawerHeader}
          drawerWidth={drawerWidth}
          Main={Main}
          AppBar={AppBar}
          handleisEditWindowOpen={handleisEditWindowOpen}
          openSidebar={openSidebar}
          handleDrawerClose={handleDrawerClose}
        />
      </Box>
    </>
  );
}

export default App;
