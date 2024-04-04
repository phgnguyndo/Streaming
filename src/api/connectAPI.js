// import StorageKeys from "../constance/storage-key";
import axiosClient from "./axiosClient";

// const token = localStorage.getItem(StorageKeys.TOKEN);
const ConnectAPI = {
  // getVideo(a,b) {
  //   const url = `/BoMon?pageNumber=${a}&pageSize=${b}`;
  //   return axiosClient.get(url);
  // },
  disconnect() {
    const url = '/stop_video';
    return axiosClient.get(url);
  }
};

export default ConnectAPI;
