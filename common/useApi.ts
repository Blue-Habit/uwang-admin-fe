export type Param = {
    name: string;
    value: string;
};

interface Api {
    get<T>(url: string, ...query: Param[]): Promise<Response<T>>

    post<T>(
        url: string,
        body: { [key: string]: number | boolean | string | object } | FormData,
        ...query: Param[]
    ): Promise<Response<T>>

    put<T>(
        url: string,
        body: { [key: string]: number | boolean | string } | FormData,
        ...query: Param[]
    ): Promise<Response<T>>

    remove<T>(url: string, ...query: Param[]): Promise<Response<T>>
}

export function useApi(): Api {
    /**
     * fetch url with method GET
     * @param url given url for fetching
     * @param query
     * **/
    function get<T>(url: string, ...query: Param[]): Promise<Response<T>> {
        return execute<T>(
            url,
            "GET",
            null,
            query.map((v) => {
                return {
                    name: v.name,
                    value: v.value,
                };
            }),
        );
    }

    /**
     * fetch url with method POST
     * @param url given url for fetching
     * @param body given to to API automatically detect wether form data or json
     * @param query
     * **/
    function post<T>(
        url: string,
        body: { [key: string]: number | boolean | string | object } | FormData,
        ...query: Param[]
    ): Promise<Response<T>> {
        return execute<T>(
            url,
            "POST",
            body,
            query.map((v) => {
                return {
                    name: v.name,
                    value: v.value,
                };
            }),
        );
    }

    /**
     * fetch url with method PUT
     * @param url given url for fetching
     * @param body given to API automatically detect wether form data or json
     * @param query
     * **/
    function put<T>(
        url: string,
        body: { [key: string]: number | boolean | string } | FormData,
        ...query: Param[]
    ): Promise<Response<T>> {
        return execute<T>(
            url,
            "PUT",
            body,
            query.map((v) => {
                return {
                    name: v.name,
                    value: v.value,
                };
            }),
        );
    }

    /**
     * fetch url with method DELETE
     * @param url given url for fetching
     * @param query
     * **/
    function remove<T>(url: string, ...query: Param[]): Promise<Response<T>> {
        return execute<T>(
            url,
            "DELETE",
            null,
            query.map((v) => {
                return {
                    name: v.name,
                    value: v.value,
                };
            }),
        );
    }

    //execute the fetch
    function execute<T>(
        url: string,
        method: "POST" | "PUT" | "GET" | "DELETE",
        body:
            | { [key: string]: number | boolean | string | object }
            | FormData
            | null,
        params: Array<{
            name: string;
            value: number | boolean | string;
        }> = [],
    ): Promise<Response<T>> {
        return fetch(
            urlBuilder(url, params),
            requestOptionBuilder(body, method, url.startsWith("/login")) as RequestInit,
        )
            .then((res) => res.json())
            .then(res => {
                const code = res.status_code
                if (code >= 200 && code <= 209) {
                    return {
                        isSuccessful: true,
                        data: res.data,
                        message: res.message
                    }
                }

                return {
                    isSuccessful: false,
                    data: res.data,
                    message: res.message
                }
            })
            .catch((e) => {
                return {
                    isSuccessful: false,
                    data: null,
                    message: e.message,
                };
            }) as Promise<Response<T>>;
    }

    return {
        get,
        post,
        put,
        remove,
    };
}

export type Response<T> = {
    isSuccessful: boolean;
    data: T | null;
    message: string | null;
};

//build url
function urlBuilder(
    url: string,
    query: Array<{ name: string; value: number | string | boolean }> = [],
): URL {
    const urlBuilder = new URL(url, "https://api.bluhabit.id/");
    query.forEach((query) =>
        urlBuilder.searchParams.append(query.name, `${query.value}`),
    );
    return urlBuilder;
}

//get body data and change to json if needed
function requestOptionBuilder(
    body: { [key: string]: number | boolean | string | object } | FormData | null,
    method: "POST" | "PUT" | "GET" | "DELETE",
    skipAuth: boolean,
): { [key: string]: number | boolean | string | object | FormData | null } {
    const currentToken = "";
    const opt: { [key: string]: number | boolean | string | object | FormData | null } = {}

    const bodyBuilder = (): FormData | string | null => {
        if (method == "GET" || method == "DELETE") {
            return null;
        }

        if (body == null) {
            return JSON.stringify({});
        }

        if (body instanceof FormData) {
            return body;
        }

        return JSON.stringify(body);
    };
    const contentType = (): string => {
        if (method == "GET" || method == "DELETE") {
            return "application/json";
        }

        if (body == null) {
            return "application/json";
        }

        if (body instanceof FormData) {
            return "multipart/form-data";
        }
        return "application/json";
    };

    const header: { [key: string]: string } = {}
    if (!skipAuth) {
        header["Authorization"] = `Bearer ${currentToken} `;
    }
    header["Content-Type"] = contentType();
    opt["method"] = method
    const requestBody = bodyBuilder()
    if (body !== null) {
        opt["body"] = requestBody
    }
    opt["headers"] = header;

    return opt;
}

/* how to use
async function Tes() {
    interface User {
        name: string
    }

    const {get, post, put, remove} = useApi();

    const a = useApi()

    const formData = new FormData();
    formData.append("username", "trian")

    /get_list?query1=tes
    const result_get = await get<User>("/get list", {name: "query1", value: "tes"})

    const result_post1 = await post<User>("/login", {name: "tes"})
    const result_post2 = await post<User>("/login", formData)

    const result_put1 = await put<User>("/login", {name: "tes"})
    const result_put2 = await put<User>("/login", formData)

    const result_post1 = await remove<User>("/login")
    const result_post2 = await remove<User>("/login")


}

*/
