import "server-only";

const apiClient = async (url, options) => {
    options.cache = "no-cache";

    try {
        options.headers = {
            "Content-Type": "application/json"
        };
        let res = await fetch(url, options);

        let resObj = await res.json();
        resObj.code = res.status;

        return resObj;
    } catch (error) {
        // console.log("error message", error)
        return {
            code: 500,
            status: false,
            message: "error in API",
            data: [],
        };
    }
};

const getAllModules = async (url, mode, params) => {
    let endpoint = `${url}`;

    let data = await apiClient(endpoint, {});

    if (!data.status) {
        data.data = [];
    }

    if (data.data == undefined || data.data == null) {
        data.data = [];
    }

    return {
        status: data.status,
        message: data.message,
        data: data.data,
        totalCount: data.totalCount,
    };
};

const getModuleByID = async (modules, id) => {
    let endpoint = `${url()}/${modules}/${id}`;
  
    let data = await apiClient(endpoint, {});
    // let data = filterData(id)
  
    console.log("data modules", JSON.stringify(data));
  
    if (!data.status || data.status == 500) {
      data.status = false;
      data.data = [];
    }
  
    if (data.data == undefined || data.data == null) {
      data.data = [];
    }
  
    return {
      status: data.status,
      message: data.message,
      data: data.data,
    };
  };

export {
    apiClient
};