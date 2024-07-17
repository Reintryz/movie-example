import API from"../../../services/axiosWithConfig";

const getTvShows = async (page : string) => {
    try {
        const response = await API.get(`/tv/on_the_air?language=en-US&page=${page}`)

        return response.data as ResponseTv;
    } catch (error) {
        console.log(Error);
    }
};

export { getTvShows };