import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography} from "@mui/material";

const Post = () => {
  return (
    <>
   
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            K
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Võ Tấn Khuê"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://i.upanh.org/2022/12/29/nhatrang.jpg"
        alt="Nha Trang"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Nha Trang là một thành phố ven biển và là trung tâm chính trị, kinh tế, văn hóa, khoa học kỹ thuật và du lịch của tỉnh Khánh Hòa,
         Việt Nam. Trước đây, vùng đất Nha Trang vốn thuộc về Chiêm Thành, do đó các di tích của người Chăm vẫn 
         còn tồn tại nhiều nơi ở Nha Trang.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>

    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
            L
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Nguyễn Thành Long"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://i.upanh.org/2022/12/29/phuyen.jpg"
        alt="Phú Yên"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Phú Yên là một tỉnh ven biển nằm ở phía bắc khu vực duyên hải Nam Trung Bộ, 
        miền Trung của Việt Nam. Năm 2018, Phú Yên là đơn vị hành chính Việt Nam đông thứ 45 về số dân,
         xếp thứ 43 về Tổng sản phẩm trên địa bàn, xếp thứ 30 về GRDP bình quân đầu người, 
         đứng thứ 25 về tốc độ tăng trưởng GRDP.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>

    </>
  );
};

export default Post;