export const useAuth = () => {
    const token = localStorage.getItem("accessToken");
    return token && token.length > 0
}



const Constants = {
  BASE_URL: "https://jsonplaceholder.typicode.com",
};

export default Constants;




