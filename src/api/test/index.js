import axios from 'axios'

const getVideo = id => axios.get(`/api/v1/video/${id}`).then(res => res.data);

export{
    getVideo
} 