import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { useAppSelector } from "../redux/hooks/hook";

export function TagsView() {
  const tags = useAppSelector((state) => state.visaChecker.tags);
  return (
    <div>
      <List component="nav" aria-label="mailbox folders">
        {tags.map((tag, index) => {
          console.log(tag.color);
          return (
            <>
              <ListItem>
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: tag.color }}>
                    {tag.name.charAt(0)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={tag.name} secondary={tag.description} />
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    </div>
  );
}
