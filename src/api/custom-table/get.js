import axios from "axios";

export default params =>
    axios
        .get(
            `https://5e4b062d6eafb7001488c99e.mockapi.io/something123/users`,
            {
                params,
            },
        )
        .then(({data}) => data);