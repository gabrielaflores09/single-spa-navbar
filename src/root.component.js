/* External deps */
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Avatar,
} from "@mui/material";
import { Link, BrowserRouter } from "react-router-dom";

/* Internal deps */
import logo from "./assets/single-spa.png";

const links = [
  {
    name: "Angular",
    href: "/angular",
  },
  {
    name: "Vue",
    href: "/vue",
  },
  {
    name: "React",
    href: "/react",
  },
];

export default function Root(props) {
  return (
    <BrowserRouter>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    key={link.name}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </Box>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="logo-single-spa" src={logo} />
            </IconButton>
          </Toolbar>
        </Container>
        {/* {props.name} */}
      </AppBar>
    </BrowserRouter>
  );
}
