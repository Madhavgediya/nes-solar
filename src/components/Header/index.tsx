"use client";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useRouter } from "next/router";
import { Url } from "next/dist/shared/lib/router/router";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Image from "next/image";

function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLinkClick = (href: Url) => {
    router.push(href);
    setOpen(false);
  };

  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: "white !important" }} className="">
        <div
          className={`w-full font-custom flex items-center justify-between p-2 mx-auto bg-white `}
        >
          <div className="flex items-center rtl:space-x-reverse m-auto ">
            <Link href="/">
              <Image
                // src="/assets/NES SVG.webp"
                src="/assets/NES_final_logo.svg"
                alt="solar logo"
                width={100}
                height={100}
                className="w-32"
              />
            </Link>
          </div>

          <div className="md:w-auto md:flex md:items-center md:space-x-8 rtl:space-x-reverse">
            <IconButton
              edge="start"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </div>

          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <Box sx={{ p: 2, height: 1 }}>
              <IconButton sx={{ mb: 2 }}>
                <CloseIcon onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2, color: "#203F69" }} className="font-custom">
                <ListItemButton onClick={() => handleLinkClick("/About")}>
                  <ListItemText
                    sx={{ fontWeight: "500" }}
                    primary={
                      <Typography className="font-custom">About Us</Typography>
                    }
                  />
                </ListItemButton>
                <ListItemButton onClick={() => handleLinkClick("/Expertise")}>
                  <ListItemText
                    sx={{ fontWeight: "500" }}
                    primary={
                      <Typography className="font-custom">
                        Our Expertise
                      </Typography>
                    }
                  />
                </ListItemButton>
                <ListItemButton onClick={() => handleLinkClick("/Gallery")}>
                  <ListItemText
                    sx={{ fontWeight: "500" }}
                    primary={
                      <Typography className="font-custom">Gallery</Typography>
                    }
                  />
                </ListItemButton>
                <ListItemButton onClick={() => handleLinkClick("/Patents")}>
                  <ListItemText
                    sx={{ fontWeight: "500" }}
                    primary={
                      <Typography className="font-custom">Patents</Typography>
                    }
                  />
                </ListItemButton>
                <ListItemButton onClick={() => handleLinkClick("/Awards")}>
                  <ListItemText
                    sx={{ fontWeight: "500" }}
                    primary={
                      <Typography className="font-custom">Awards</Typography>
                    }
                  />
                </ListItemButton>
                <ListItemButton onClick={() => handleLinkClick("/Contact")}>
                  <ListItemText
                    sx={{ fontWeight: "500" }}
                    primary={
                      <Typography className="font-custom">
                        Contact us
                      </Typography>
                    }
                  />
                </ListItemButton>
              </Box>
            </Box>
          </Drawer>
        </div>
      </AppBar>
    </>
  );
}

export default Header;
