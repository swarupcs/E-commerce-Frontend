const backendDomain = "http://localhost:8080"

const SummaryApi = {
    signUp : {
        url: `${backendDomain}/api/signup`,
        method: "post",
    },
    signIn : {
        url: `${backendDomain}/api/signin`,
        method: "post",
    },
    current_user : {
        url: `${backendDomain}/api/user-details`,
        method: "get"
    },
    logout_user : {
        url: `${backendDomain}/api/userlogout`,
        method: "get"
    },
    allUser : {
        url: `${backendDomain}/api/all-user`,
        method: "get"
    },
    updateUser : {
        url: `${backendDomain}/api/update-user`,
        method: "post"
    },
    uploadProduct : {
        url: `${backendDomain}/api/upload-product`,
        method: "post"
    },
    allProduct : {
        url: `${backendDomain}/api/get-product`,
        method: "post"
    },
    updateProduct : {
        url: `${backendDomain}/api/update-product`,
        method: "post"
    },
    categoryProduct : {
        url: `${backendDomain}/api/get-categoryProduct`,
        method: "get"
    },
    categoryWiseProduct : {
        url: `${backendDomain}/api/category-product`,
        method: "post"
    },
}

export default SummaryApi;