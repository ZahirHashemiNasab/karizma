import Box from "@mui/material/Box";
import { removeFromList, resetList } from "../store/shop/shop";
import { listItem } from "../types";
import Chip from "@mui/material/Chip";
import { useDispatch } from "react-redux";

const BoxList = ({ state }: any) => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        width: 400,
        height: 700,
        backgroundColor: "white",
        margin: "25px",
        padding: "20px",
      }}
    >
      {state.length > 0 && (
        <div
          style={{
            float: "left",
            margin: "8px",
            width: "100%",
            cursor: "pointer",
          }}
          onClick={() => dispatch(resetList())}
        >
          tap to delete
        </div>
      )}
      {state.map((element: listItem, index: number) => (
        <span onClick={() => dispatch(removeFromList(element?.id))}>
          <Chip
            label={element?.value}
            color="primary"
            style={{
              marginLeft: "4px",
              marginRight: "4px",
              marginTop: "4px",
            }}
          />
        </span>
      ))}
    </Box>
  );
};

export default BoxList;
