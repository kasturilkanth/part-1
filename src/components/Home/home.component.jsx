import { useEffect, useState } from "react";
import axios from "axios";
import Blog from "../Blog";
import Box from "@mui/material/Box";
import { getNoofPage, getPagesFromPage } from "./home.utils";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import NO_OF_BLOGS_PER_PAGE from "./home.constant";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [pageDetails, setPageDetails] = useState({ currentPage: 1 });
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(function (response) {
        console.log(response.data);
        setPosts(response.data);
      });
  }, []);
  useEffect(() => {
    if (posts.length !== 0) {
      const pages = getNoofPage(posts.length, NO_OF_BLOGS_PER_PAGE);
      console.log(pages);
      setPageDetails((oldState) => ({ ...oldState, noOfPage: pages }));
    }
  }, [posts]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
  };
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px"
        }}
      >
        {getPagesFromPage(
          posts,
          pageDetails.currentPage,
          NO_OF_BLOGS_PER_PAGE
        ).map((post, index) => (
          <div key={index}>
            <Blog
              title={post.title}
              body={post.body}
              onEdit={() => {
                setShowEdit(true);
              }}
            />
          </div>
        ))}
        <Typography>Page: {pageDetails.currentPage}</Typography>
        <Pagination
          count={pageDetails.noOfPage}
          page={pageDetails.currentPage}
          onChange={(event, value) => {
            setPageDetails((oldState) => ({ ...oldState, currentPage: value }));
          }}
        />
      </Box>
      <div>
        <Modal
          open={showEdit}
          onClose={() => {
            setShowEdit(false);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}
