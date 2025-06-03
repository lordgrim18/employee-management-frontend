import baseApi from "../api";


export const departmentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDepartmentList: builder.query({
            query: () => '/department',
            providesTags: ['DEPARTMENT']
        }),
    })
})
export const { useGetDepartmentListQuery } = departmentApi;