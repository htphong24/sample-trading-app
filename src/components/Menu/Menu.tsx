import React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { RouteType } from "../../routes";
import { useNavigate } from "react-router-dom";
//import { useHistory } from "react-router-dom"; // useHistory is now replaced with useNavigate

interface Props {
  links: RouteType[];
  menuClickHandler: (link: string) => void;
}

export const Menu: React.FC<Props> = ({ links, menuClickHandler }) => {
  const navigate = useNavigate();
  return (
    <div>
      <MenuList>
        {links.map((link) => (
          <MenuItem key={link.path} onClick={() => menuClickHandler(link.path)}>
            <ListItemIcon>{<link.icon fontSize="small" />}</ListItemIcon>
            <ListItemIcon>{link.label}</ListItemIcon>
          </MenuItem>
        ))}
      </MenuList>
    </div>
  );
};
