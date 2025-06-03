import baseApi from "../api";

export const employeeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEmployeeList: builder.query({
            query: () => '/employee',
            providesTags: ['EMPLOYEES']
        }),
        getSingleEmployee: builder.query({
            query: ({id}) => `/employee/${id}`,
            providesTags: ['EMPLOYEE_DETAILS']
        }),
        deleteEmployee: builder.mutation({
            query: ({ id }) => ({
                url: `/employee/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['EMPLOYEES', 'EMPLOYEE_DETAILS']
        }),
        createEmployee: builder.mutation({
            query: (payload) => ({
                url: "/employee",
                method: "POST",
                body: payload
            }),
            invalidatesTags: ['EMPLOYEES', 'EMPLOYEE_DETAILS']
        }),
        updateEmployee: builder.mutation({
            query: (payload) => ({
                url: `/employee/${payload.id}`,
                method: "PUT",
                body: payload
            }),
            invalidatesTags: ['EMPLOYEES', 'EMPLOYEE_DETAILS']
        }),
    })
});

export const { useGetEmployeeListQuery, useGetSingleEmployeeQuery, useDeleteEmployeeMutation, useCreateEmployeeMutation, useUpdateEmployeeMutation  } = employeeApi;