import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { IUser, signOutEndPoint } from "../backend/backend";

interface IUserMenu {
  onSignOut: () => void;
  user: IUser;
}

const UserMenu = (props: IUserMenu) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function signOut() {
    signOutEndPoint();
    props.onSignOut();
  }

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar>
          <Icon>person</Icon>
        </Avatar>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={
          anchorEl
        } /* element father being as a guide to the menu, to know where to open */
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box
          padding="16px"
          textAlign="center"
          borderBottom="1px solid rgb(224, 224, 244)"
          display="flex"
          flexDirection="column"
          gap="10px"
        >
          <Box display="flex" alignItems="center" justifyContent="center">
            <Avatar>
              <Icon>person</Icon>
            </Avatar>
          </Box>
          <div>{props.user.name}</div>
          <small>{props.user.email}</small>
        </Box>
        <MenuItem onClick={signOut}>Sair</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
