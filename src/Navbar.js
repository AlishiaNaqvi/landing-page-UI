// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';

// import Container from '@mui/material/Container';

// import Button from '@mui/material/Button';

// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

// import AppsIcon from '@mui/icons-material/Apps';
// import UpgradeIcon from '@mui/icons-material/Upgrade';
// import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

// const socialMediaLinks = [
//   { label: 'Twitter', icon: <TwitterIcon />, url: 'https://twitter.com/' },
//   { label: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/' },
//   { label: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://www.linkedin.com/' },
// ];



// function ResponsiveAppBar() {


//   return (
//     <AppBar position="static" style={{ background: 'none', boxShadow: 'none' }}>
//       <Container maxWidth="xl" >
//         <Toolbar disableGutters>
         
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'Roboto, sans-serif',
//               fontWeight: 100,
//               marginLeft: 6,
//               color: 'inherit',
//               textDecoration: 'none',
//               flexGrow: 1,
//             }}
//           >
//             Material Kit React
//           </Typography>

//           <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//             <Button className='navi'
             
//               sx={{
//                 my: 2,
//                 color: 'white',
//                 display: 'flex',
//                 alignItems: 'center',
//                 marginLeft: 2,
//               }}
//             >
//               <span style={{ marginRight: '5px' }}>
//                 <AppsIcon />
//               </span>
//               Components
//             </Button>
//             <Button className='navi'
             
//               sx={{
//                 my: 2,
//                 color: 'white',
//                 display: 'flex',
//                 alignItems: 'center',
//                 marginLeft: 2,
//               }}
//             >
//               <span style={{ marginRight: '5px' }}>
//                 <UpgradeIcon />
//               </span>
//              Upgrade To Pro
//             </Button>
//             <Button className='navi'
             
//               sx={{
//                 my: 2,
//                 color: 'white',
//                 display: 'flex',
//                 alignItems: 'center',
//                 marginLeft: 2,
//               }}
//             >
//               <span style={{ marginRight: '5px' }}>
//                 <CloudDownloadIcon />
//               </span>
//               Download
//             </Button>
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             {socialMediaLinks.map((link) => (
//               <IconButton
//                 key={link.label}
//                 href={link.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 color="inherit"
//                 sx={{ p: 0, marginLeft: 2 }}
//               >
//                 {link.icon}
//               </IconButton>
//             ))}
   
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default ResponsiveAppBar;




import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AppsIcon from '@mui/icons-material/Apps';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const socialMediaLinks = [
  { label: 'Twitter', icon: <TwitterIcon />, url: 'https://twitter.com/' },
  { label: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/' },
  { label: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://www.linkedin.com/' },
];

function ResponsiveAppBar() {
  return (
    <AppBar position="static" style={{ background: 'none', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 100,
              marginLeft: 6,
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1,
            }}
          >
            Material Kit React
          </Typography>

          {/* Menu button for smaller screens */}
          <IconButton
            color="inherit"
            sx={{ p: 0, marginLeft: 2, display: { xs: 'flex', md: 'none' } }}
          >
            <AppsIcon />
          </IconButton>

          {/* Navigation buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button className='navi components-button' sx={{ my: 2, color: 'white', marginLeft: 2 }}>
              <AppsIcon />
              Components
            </Button>
            <Button className='navi upgrade-button' sx={{ my: 2, color: 'white', marginLeft: 2 }}>
              <UpgradeIcon />
              Upgrade To Pro
            </Button>
            <Button className='navi download-button' sx={{ my: 2, color: 'white', marginLeft: 2 }}>
              <CloudDownloadIcon />
              Download
            </Button>
          </Box>

          {/* Social media icons */}
          <Box sx={{ flexGrow: 0 }}>
            {socialMediaLinks.map((link) => (
              <IconButton
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={{ p: 0, marginLeft: 2 }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
