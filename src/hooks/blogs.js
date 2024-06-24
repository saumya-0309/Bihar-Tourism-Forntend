import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchJson } from "../libs/api";
import { endpoints } from "../config/endpoints";
import { API_HOST_URL, CLOUD_NAME } from "../config";
import { getTokens } from "../utils/core";

export function AddPhoto() {
    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const mutation = useMutation({
        mutationFn: ({data}) => {
            return fetchJson(url, {
                method: 'POST',
                body: data
            }, true);
        }
    })
    return {
        handleUpload: async (data) => {
            try {
                const res = await mutation.mutateAsync({data});
                const response = await res.json();
                return response;
            } catch (err) {
                console.log(err);
                return {
                    success: false,
                    error: 'something wents wrong.'
                }
            }
        },
        isUploadPending: mutation.isPending,
    }
}

export function usePostBlog() {
    const { accessToken } = getTokens();
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: async ({title, body , author, tags, image , city , religion }) => fetchJson(`${API_HOST_URL}/${endpoints.blog.postBlog}`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${accessToken}` , 'Content-Type': 'application/json'},
            body: JSON.stringify({
                title,
                body,
                author,
                tags,
                image,
                city,
                religion
            })
        }, true)
    })
    return {
        handlePostBLog: async (title, body , author , tags , image , city , religion) => {
            try {
                const res = await mutation.mutateAsync({title, body , author, tags, image , city , religion});
                const newblog = await res.json();
                if(newblog.success){
                    queryClient.invalidateQueries([endpoints.blog.getBlog]);
                    return newblog;
                }
                return newblog;
            } catch (err) {
                return {
                    success: false,
                    error: 'something wents wrong.'
                }
            }
        },
        isPostLoading: mutation.isPending,
    }
}

export function useGetBlog() {
    const {accessToken} = getTokens();
    const query = useQuery({
        queryKey: [endpoints.blog.getBlog],
        queryFn: async () => fetchJson(`${API_HOST_URL}/${endpoints.blog.getBlog}` ,{
            headers: { 'Authorization': `Bearer ${accessToken}`},
        })
    })
    return {
        blogs: query.data,
        isLoading: query.isLoading
    }
}

export function useGetBlogBySlug({ slug }) {
    const query = useQuery({
        queryKey: [slug],
        queryFn: async () => fetchJson(`${API_HOST_URL}/${endpoints.blog.getBlogBySlug}/${slug}`)
    })
    return {
        blog: query.data,
        isLoading: query.isLoading
    }
}
