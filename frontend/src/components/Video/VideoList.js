import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function VideoList({ setLoggedIn }) {
    const [videos, setVideos] = React.useState([])
    const navigate = useNavigate();
    React.useEffect(() => {
        async function fetchData() {
            try {
                const token = localStorage.getItem('token');
                const {data} = await axios.get('http://104.43.18.129:8000/api/v1/video', {
                    headers: ({
                        Authorization: 'Bearer ' + token
                    })
                });
                setVideos(data)

            } catch {
                setLoggedIn(false);
                navigate('/')
            }
        }
        fetchData();
    }, [navigate, setLoggedIn]);
    return (
        <Container>
            <Grid container spacing={2} marginTop={2}>

                    {videos.map((video) => {
                        return <Grid item xs={12} md={4} key={video._id}>
                            <CardActionArea>
                            <Link to={`/video/${video._id}`}>
                                <Card sx={{ display: 'flex' }}>
                                    <CardContent sx={{ flex: 1 }}>
                                        <Typography component="h2" variant="h5">
                                            <Typography style={{ textDecoration: "none", color: "black" }}>{video.title}</Typography>
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary">
                                            {video.uploadDate}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                                        image={`http://104.43.18.129:8000/${video.coverImage}`}
                                        alt="alt"
                                    />
                                </Card>
                                </Link>
                            </CardActionArea>
                        </Grid>
                    })}
            </Grid>
        </Container >
    );
}
