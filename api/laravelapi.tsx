import axios from 'axios'

type AxiosData = {
    method: string,
    data: any,
    endpoint: string,

}




async function AxiosFetch(method, endpoint, data=null, token=null ){
    const API_URL = 'https://api.stinkcoal.com/api';


        try {
            const response = await axios({

                method,
                url: `${API_URL}/${endpoint}`,
                data,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token,
                    'Access-Control-Allow-Origin': 'https://api.stinkcoal.com',
                    
                },  

            }).then((response) => {
                const {token} = response.data;

                localStorage.setItem('token', token )
                return response

            }).catch((error) => error.response);


            
        }
        
        catch(error) {
            console.log("CUSTOM AXIOS ERROR:", error)
        }

}


export default AxiosFetch;