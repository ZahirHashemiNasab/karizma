import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { addToList, resetList } from "../store/shop/shop";
import { useDispatch } from "react-redux";

const BoxView = ({ setDataState, dataState, data, id, setId, type }: any) => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        width: 400,
        height: "75vh",
        backgroundColor: "white",
        margin: "25px",
        padding: "20px",
      }}
    >
      <TextField
        id="outlined-basic"
        label="search"
        variant="outlined"
        style={{ width: "97%" }}
        onChange={(event: any) => {
          setDataState(
            type === "users"
              ? dataState.filter((element: any) =>
                  element.username.includes(event.target.value)
                )
              : dataState.filter((element: any) =>
                  element.title.includes(event.target.value)
                )
          );
          if (event.target.value === "") {
            setDataState(data);
          }
        }}
      />
      <div style={{ height: "83%", overflow: "scroll", padding: "16px" }}>
        {dataState?.map((element: any, key: any) =>
          type === "users" ? (
            <div
              key={key}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "20px",
                cursor: "pointer",
              }}
              onClick={() => {
                dispatch(addToList({ value: element?.username, id: id }));
                setId(id + 1);
              }}
            >
              <Avatar src={element?.image} />
              <div style={{ marginLeft: "8px" }}>
                <Typography variant="h6" gutterBottom>
                  {element?.username}
                </Typography>
                <Typography variant="caption" gutterBottom>
                  {element?.email}
                </Typography>
              </div>
            </div>
          ) : (
            <div
              key={key}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "30px",
                cursor: "pointer",
              }}
              onClick={() => {
                dispatch(addToList({ value: element?.title, id: id }));

                setId(id + 1);
              }}
            >
              <Avatar src={element?.image} />
              <div style={{ marginLeft: "8px" }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  align="left"
                  fontSize="16px"
                >
                  {element?.title}
                </Typography>
                <Typography
                  variant="caption"
                  gutterBottom
                  align="justify"
                  fontSize="12px"
                >
                  {element?.description}
                </Typography>
              </div>
            </div>
          )
        )}
      </div>
      <Button
        variant="contained"
        style={{ width: "97%" }}
        onClick={() => dispatch(resetList())}
      >
        clear list
      </Button>
    </Box>
  );
};

export default BoxView;
