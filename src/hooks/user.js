import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { endpoints } from "../config/endpoints";
import { fetchJson } from "../libs/api";
import { getTokens } from "../utils/core";
import { API_HOST_URL, TOKEN_STORE_NAME } from "../config";

const USER_QUERY_KEY = 'user'

export function useUser() {
    const {data , status  , isLoading} = useQuery({
        queryKey:[USER_QUERY_KEY],
        queryFn: async () => {
            try {
                const { accessToken } = getTokens();
                const response = await fetchJson(`${API_HOST_URL}/${endpoints.account.auth}` , {
                    headers: { 'Authorization': `Bearer ${accessToken}` },
                });
                const data = await response.json();
                return data;
            } catch (error) {
                return null;
            }
        }
    })
    return {user : data , isLoading , status}
}


export function useLogin() {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: async ({ email, password }) => fetchJson(`${API_HOST_URL}/${endpoints.account.login}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password
            })
        }, true)
    })
    return {
        handleLogin: async (email, password) => {
            try {
                const res = await mutation.mutateAsync({ email, password });
                const user = await res.json();
                if (user.success) {
                    const { token } = user;
                    localStorage.setItem(TOKEN_STORE_NAME, JSON.stringify(token));
                    queryClient.setQueryData([USER_QUERY_KEY], user.data);
                }
                return user

            } catch (err) {
                return {
                    success: false,
                    error: 'something wents wrong.'
                }
            }
        },
        loginLoading: mutation.isPending,
    }
}


export function useSignUp() {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: async ({ email, password }) => fetchJson(`${API_HOST_URL}/${endpoints.account.signup}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password
            })
        }, true)
    })
    return {
        handleSignUp: async (email, password) => {
            try {
                const res = await mutation.mutateAsync({ email, password });
                const user = await res.json();
                if (user.success) {
                    const { token } = user;
                    localStorage.setItem(TOKEN_STORE_NAME, JSON.stringify(token));
                    queryClient.setQueryData([USER_QUERY_KEY], user.data);
                }
                return user

            } catch (err) {
                return {
                    success: false,
                    error: 'something wents wrong.'
                }
            }
        },
        signLoding: mutation.isPending,
    }
}
