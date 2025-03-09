"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Container,
  Divider,
  alpha,
} from "@mui/material";
import { Menu, Github, Facebook, Linkedin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Academic", href: "/academic" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={scrolled ? 4 : 0}
        sx={{ 
          backgroundColor: "#9B7EBD",
          transition: "all 0.3s ease-in-out"
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ 
            display: "flex", 
            justifyContent: "space-between",
            py: 0.5
          }}>
            {/* Logo */}
            <Typography 
              variant="h6" 
              component="a" 
              href="/"
              sx={{ 
                fontWeight: 700,
                letterSpacing: ".5px",
                color: "white",
                textDecoration: "none",
                display: "flex",
                alignItems: "center"
              }}
            >
              MD Khairul Islam
            </Typography>

            {/* Desktop Navigation - Centered */}
            {!isMobile && (
              <Box sx={{ 
                display: "flex", 
                gap: 1,
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)"
              }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.label}
                    href={link.href}
                    sx={{
                      color: "white",
                      fontWeight: 600,
                      textTransform: "none",
                      fontSize: "0.95rem",
                      px: 2,
                      "&:hover": {
                        backgroundColor: alpha("#ffffff", 0.1)
                      }
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Social Icons and Mobile Menu Button */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                href="https://github.com/mkiuzzal01"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: "white",
                  "&:hover": {
                    backgroundColor: alpha("#ffffff", 0.1)
                  }
                }}
              >
                <Github size={20} />
              </IconButton>
              <IconButton
                href="https://facebook.com/mkiuzzal01"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: "white",
                  "&:hover": {
                    backgroundColor: alpha("#ffffff", 0.1)
                  }
                }}
              >
                <Facebook size={20} />
              </IconButton>
              <IconButton
                href="https://linkedin.com/md-khairul-islam01"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: "white",
                  "&:hover": {
                    backgroundColor: alpha("#ffffff", 0.1)
                  }
                }}
              >
                <Linkedin size={20} />
              </IconButton>

              {isMobile && (
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={() => setDrawerOpen(true)}
                  sx={{ 
                    ml: 1,
                    "&:hover": {
                      backgroundColor: alpha("#ffffff", 0.1)
                    }
                  }}
                >
                  <Menu size={24} />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': { 
            width: 280,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ 
          p: 2, 
          display: 'flex', 
          flexDirection: 'column',
          height: '100%'
        }}>
          <Box 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 2
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#9B7EBD" }}>
              Menu
            </Typography>
            <IconButton 
              onClick={() => setDrawerOpen(false)}
              sx={{ color: "#9B7EBD" }}
            >
              <Menu size={24} />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 2 }} />
          
          <List sx={{ flexGrow: 1 }}>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton
                  component="a"
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    py: 1.5,
                    "&:hover": {
                      backgroundColor: alpha("#9B7EBD", 0.1)
                    }
                  }}
                >
                  <ListItemText 
                    primary={link.label} 
                    primaryTypographyProps={{
                      fontWeight: 500
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          
          <Divider sx={{ mt: 'auto', mb: 2 }} />
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 2, 
            p: 2 
          }}>
            <IconButton
              href="https://github.com/mkiuzzal01"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#9B7EBD" }}
            >
              <Github size={20} />
            </IconButton>
            <IconButton
              href="https://facebook.com/mkiuzzal01"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#9B7EBD" }}
            >
              <Facebook size={20} />
            </IconButton>
            <IconButton
              href="https://linkedin.com/md-khairul-islam01"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#9B7EBD" }}
            >
              <Linkedin size={20} />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
      
      <Toolbar />
    </>
  );
};

export default Navbar;