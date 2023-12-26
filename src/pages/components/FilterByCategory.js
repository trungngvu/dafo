import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

function FilterByCategory({ data = [], ...other }) {
  return (
    <List
      sx={{ width: "18%", marginRight: "20px", height: "100%", gap: "12px" }}
    >
      {data.map((item) => (
        <ListItem>
          <ListItemButton
            sx={{ borderRadius: "100px" }}
            key={item.id}
            onClick={() => console.log(item.title)}
          >
            <ListItemText
              sx={{ fontSize: "18px", fontWeight: "500" }}
              disableTypography
              primary={item.title}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default FilterByCategory;
